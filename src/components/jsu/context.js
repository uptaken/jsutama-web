import { createContext, useContext } from "react";

export const JsuContext = createContext(null);
export const useJsu = () => useContext(JsuContext);
