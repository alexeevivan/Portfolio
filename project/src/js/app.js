import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();


window.addEventListener("scroll", () => {
	document.body.style.setProperty("--scroll", window.pageYOffset / window.innerHeight);
},
	false
);