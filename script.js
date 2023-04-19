window.addEventListener("load", shadowbox());
function shadowbox() {
  const preview = document.getElementById("element");
  const resultCss = document.getElementById("result-css");
  const btnCopy = document.getElementById("btn-copy");
  const inputs = document.querySelectorAll(".shadow-property");

  inputs.forEach(inp => inp.addEventListener("input", generateShadow));
  btnCopy.addEventListener("click", copyCSS);
  function generateShadow()
  {
    const hShadow = document.getElementById("h-shadow").value;
    const vShadow = document.getElementById("v-shadow").value;
    const blurRadius = document.getElementById("blur-radius").value;
    const spreadRadius = document.getElementById("spread-radius").value;
    const shadowColor = document.getElementById("shadow-color").value;
    const shadowColorOpasity = document.getElementById("shadow-color-opasity").value;
    const shadowInset = document.getElementById("shadow-inset").checked;
    let shadow = '';

    if (shadowInset) shadow += 'inset ';

    shadow += `${hShadow}px ${vShadow}px ${blurRadius}px ${spreadRadius}px ${hexRGBA(shadowColor, shadowColorOpasity)}`
    preview.style.boxShadow = shadow;
    resultCss.textContent = `box-shadow: ${shadow}`
  }


  function hexRGBA(color, opacity) {
    const red = parseInt(color.substr(1, 2), 16);
    const green = parseInt(color.substr(3, 2), 16);
    const blue = parseInt(color.substr(5, 2), 16);

    return `rgba(${red}, ${green}, ${blue}, ${opacity})`
  }
  function copyCSS() {
    resultCss.select();
    document.execCommand("copy")
    alert("CSS copied")
  }
}
