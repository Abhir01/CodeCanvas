function run(){
    let htmlCode = document.getElementById("html-code").value;
    let CssCode = document.getElementById("css-code").value;
    let JsCode = document.getElementById("js-code").value;
    let Output = document.getElementById("output");

    Output.contentDocument.body.innerHTML = htmlCode + "<style>" + CssCode + "</style>";
    Output.contentWindow.eval(JsCode);
}

// function resetEditor() {
//     document.getElementById("html-code").value = "";
//     document.getElementById("css-code").value = "";
//     document.getElementById("js-code").value = "";
//     Output.contentDocument.body.innerHTML = "";
// }

function resetEditor() {
    // Clear the textareas
    document.getElementById("html-code").value = "";
    document.getElementById("css-code").value = "";
    document.getElementById("js-code").value = "";

    // Clear the iframe content explicitly
    const output = document.getElementById("output"); // Ensure Output is defined
    output.contentDocument.body.innerHTML = ""; // Clear iframe body
    output.contentWindow.eval(""); // Clear any executed JavaScript

   
}
