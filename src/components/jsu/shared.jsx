import { ArrowRight } from "lucide-react";


export function Brand({ white = false }) {
  return (
    <img
      className="jsu-logo"
      src={white ? "/brand/jsu-logo-white.png" : "/brand/jsu-logo.png"}
      alt="JSU — Jakarta Soerja Utama, Impacting Possibilities"
      width="220" height="66"
    />
  );
}

export function Btn({ children, onClick, href, variant = "outline", icon = true, ...rest }) {
  const className = `jsu-btn jsu-btn-${variant}`;
  const content = <>{children}{icon && <ArrowRight size={16} aria-hidden="true" />}</>;
  return href
    ? <a className={className} href={href} {...rest}>{content}</a>
    : <button type="button" className={className} onClick={onClick} {...rest}>{content}</button>;
}
