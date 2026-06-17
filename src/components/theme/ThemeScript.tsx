export function ThemeScript() {
  const script = `(function(){try{var t=localStorage.getItem("ic-sys-theme");document.documentElement.setAttribute("data-theme",t==="light"?"light":"dark");}catch(e){document.documentElement.setAttribute("data-theme","dark");}})();`;

  return <script dangerouslySetInnerHTML={{ __html: script }} />;
}
