function createAboutPage() {
  const container = document.createElement("div");
  container.classList.add("container");

  const heading = document.createElement("h1");
  heading.textContent = "About Us";
  heading.classList.add("main-heading");

  const firstPara = document.createElement("p");
  firstPara.textContent =
    "We are group of proud and hardworking inn workers who take extreme card in making out food and providing the best hospitality.";
  firstPara.classList.add("card");
  const secondPara = document.createElement("p");
  secondPara.textContent =
    "All our food are tested throughly by experts to ensure that all safety regulations are properly followed through without any mistakes.";
  secondPara.classList.add("card");
  const thirdPara = document.createElement("p");
  thirdPara.textContent =
    "If you have any complaints regarding our food, please contact us and leave us a feedback at wanderinginn@innworld.com";
  thirdPara.classList.add("card");
  container.appendChild(heading);
  container.appendChild(firstPara);
  container.appendChild(secondPara);
  container.appendChild(thirdPara);

  return container;
}

export { createAboutPage };
