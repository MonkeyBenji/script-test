css = (css) => {
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
};
css(`
* {
  text-transform: uppercase !important;
}`);