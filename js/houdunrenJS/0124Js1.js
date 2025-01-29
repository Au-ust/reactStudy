(function(window) {
  function hd() {
    console.log("4.1.js-hd");
  }
  function show() {
    console.log("4.1.js-show");
  }
  window.js1 = { hd, show };
})(window);//不加window在全局调用不了，所以把它封装在window里