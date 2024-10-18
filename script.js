console.log("Hello, World!");

const footer = document.querySelector("footer");
const date = Date.now();
let year = date.getFullYear();
footer.innerHTML = `<p>Copyright &copy; ${year} Tom Evans</p>`