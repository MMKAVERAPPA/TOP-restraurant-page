function createHomePage() {
  const container = document.createElement("div");
  container.classList.add("container");

  const heading = document.createElement("h1");
  heading.textContent = "The Wandering Inn";
  heading.classList.add("main-heading");

  const para = document.createElement("p");
  para.textContent =
    "The Wandering Inn is best inn you can find anywhere in Liscor and possibly it's the best (and only) inn in the world where magic happens everyday. And if you are lucky you might even get to participate in one our of highly exciting (and dealy) events called The Solstice Event";
  para.classList.add("card");
  const timing = document.createElement("div");
  timing.classList.add("card");
  timing.innerHTML = `
    <h3>Hours</h3>
    <ul>
      <li>Sunday: 8am - 8pm</li>
      <li>Monday: 6am - 6pm</li>
      <li>Tuesday: 6am - 6pm</li>
      <li>Wednesday: 6am - 6pm</li>
      <li>Thrusday: 6am - 6pm</li>
      <li>Friday: 6am - 10pm</li>
      <li>Saturday: 8am - 11pm</li>
    </ul>
  `;

  const location = document.createElement("div");
  location.classList.add("card");
  const location_head = document.createElement("h3");
  location_head.textContent = "Location";
  const address = document.createElement("p");
  address.textContent =
    "Somewhere in the foothills of the High Passes, near Liscor";

  location.appendChild(location_head);
  location.appendChild(address);

  container.appendChild(heading);
  container.appendChild(para);
  container.appendChild(timing);
  container.appendChild(location);

  return container;
}

export { createHomePage };
