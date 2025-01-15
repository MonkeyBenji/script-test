css = (css) => {
    const style = document.createElement("style");
    style.innerHTML = css;
    document.head.appendChild(style);
};
css(`
*:not(.fa):not(.fas):not(.et-pb-icon):not(.ab-icon) {
  font-family: "Comic Sans MS" !important;
}`);