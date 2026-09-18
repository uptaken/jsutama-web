"use client";
// Inspired by react-hot-toast library
import * as React from "react";

const TOAST_LIMIT = 1;
const TOAST_REMOVE_DELAY = 1000000;

const actionTypes = {
  ADD_TOAST: "ADD_TOAST",
  UPDATE_TOAST: "UPDATE_TOAST",
  DISMISS_TOAST: "DISMISS_TOAST",
  REMOVE_TOAST: "REMOVE_TOAST",
};

let count = 0;

function genId() {
  count = (count + 1) % Number.MAX_SAFE_INTEGER;
  return count.toString();
}

const toastTimeouts = new Map();

const addToRemoveQueue = (toastId) => {
  if (toastTimeouts.has(toastId)) {
    return;
  }

  const timeout = setTimeout(() => {
    toastTimeouts.delete(toastId);
    dispatch({
      type: actionTypes.REMOVE_TOAST,
      toastId,
    });
  }, TOAST_REMOVE_DELAY);

  toastTimeouts.set(toastId, timeout);
};

/* -----------------------------------------------------------------------
 * Per-action reducer handlers — kept small and focused so the top-level
 * reducer stays under 15 lines and is easy to test.
 * --------------------------------------------------------------------- */
function handleAddToast(state, action) {
  return {
    ...state,
    toasts: [action.toast, ...state.toasts].slice(0, TOAST_LIMIT),
  };
}

function handleUpdateToast(state, action) {
  return {
    ...state,
    toasts: state.toasts.map((t) =>
      t.id === action.toast.id ? { ...t, ...action.toast } : t
    ),
  };
}

function handleDismissToast(state, action) {
  const { toastId } = action;

  // Side-effect: schedule removal(s).
  if (toastId) {
    addToRemoveQueue(toastId);
  } else {
    state.toasts.forEach((toast) => addToRemoveQueue(toast.id));
  }

  return {
    ...state,
    toasts: state.toasts.map((t) =>
      t.id === toastId || toastId === undefined ? { ...t, open: false } : t
    ),
  };
}

function handleRemoveToast(state, action) {
  if (action.toastId === undefined) {
    return { ...state, toasts: [] };
  }
  return {
    ...state,
    toasts: state.toasts.filter((t) => t.id !== action.toastId),
  };
}

export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_TOAST:
      return handleAddToast(state, action);
    case actionTypes.UPDATE_TOAST:
      return handleUpdateToast(state, action);
    case actionTypes.DISMISS_TOAST:
      return handleDismissToast(state, action);
    case actionTypes.REMOVE_TOAST:
      return handleRemoveToast(state, action);
    default:
      return state;
  }
};

const listeners = [];

let memoryState = { toasts: [] };

function dispatch(action) {
  memoryState = reducer(memoryState, action);
  listeners.forEach((listener) => listener(memoryState));
}

function toast({ ...props }) {
  const id = genId();

  const update = (next) =>
    dispatch({
      type: actionTypes.UPDATE_TOAST,
      toast: { ...next, id },
    });
  const dismiss = () =>
    dispatch({ type: actionTypes.DISMISS_TOAST, toastId: id });

  dispatch({
    type: actionTypes.ADD_TOAST,
    toast: {
      ...props,
      id,
      open: true,
      onOpenChange: (open) => {
        if (!open) dismiss();
      },
    },
  });

  return { id, dismiss, update };
}

function useToast() {
  const [state, setState] = React.useState(memoryState);

  // Subscribe / unsubscribe once for the lifetime of the component.
  // `setState` from useState is referentially stable, so an empty deps
  // array is correct here and avoids re-subscribing on every state change.
  React.useEffect(() => {
    listeners.push(setState);
    return () => {
      const index = listeners.indexOf(setState);
      if (index > -1) {
        listeners.splice(index, 1);
      }
    };
  }, []);

  return {
    ...state,
    toast,
    dismiss: (toastId) =>
      dispatch({ type: actionTypes.DISMISS_TOAST, toastId }),
  };
}

export { useToast, toast };
