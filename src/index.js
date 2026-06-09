import { createHomePage } from "./home.js";
import { createMenuPage } from "./menu.js";
import { createAboutPage } from "./about.js";
import "./styles.css";
const content = document.querySelector("#content");
const buttons = document.querySelectorAll("button");
content.appendChild(createHomePage());

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.id === "home") {
      content.textContent = "";
      content.appendChild(createHomePage());
    } else if (button.id === "menu") {
      content.textContent = "";
      content.appendChild(createMenuPage());
    } else {
      content.textContent = "";
      content.appendChild(createAboutPage());
    }
  });
});
