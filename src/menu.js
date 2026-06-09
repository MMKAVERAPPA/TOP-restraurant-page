function createMenuPage() {
  const container = document.createElement("div");
  container.classList.add("container");

  function createItems(items) {
    for (const [key, value] of Object.entries(items)) {
      const tempItem = document.createElement("div");
      const itemHead = document.createElement("h3");
      const itemText = document.createElement("p");
      const itemPrice = document.createElement("p");
      itemHead.textContent = key;
      itemText.textContent = value[0];
      itemPrice.textContent = value[1];
      tempItem.appendChild(itemHead);
      tempItem.appendChild(itemText);
      tempItem.appendChild(itemPrice);
      tempItem.classList.add("card");
      container.appendChild(tempItem);
    }
  }

  function createSubheading(name) {
    const subHeading = document.createElement("h2");
    subHeading.textContent = name;
    container.appendChild(subHeading);
    subHeading.classList.add("sub-heading");
  }

  const heading = document.createElement("h1");
  heading.textContent = "Menu";
  container.appendChild(heading);
  heading.classList.add("main-heading");

  createSubheading("Beverages");
  const beverages = {
    "Honey Tea": [
      "A warm tea made with the highest quality honey and a bit of lemon to start your day right off!",
      "$2",
    ],
    "Beary Tea": [
      "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request",
      "$3",
    ],
  };

  createItems(beverages);
  createSubheading("Sides");
  const sides = {
    "Toast and Jam": [
      "A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam",
      "$1",
    ],
    "Fresh Fruit": [
      "A small bowl of fresh fruit, whatever we find at the market of the day",
      "$3",
    ],
  };

  createItems(sides);

  createSubheading("Main Dishes");
  const mainDish = {
    "Pancakes ": [
      "A stack of homemade buttermilk pancakes served with our locally sourced maple syrup",
      "$4",
    ],
    "French Toast": [
      "Two slices of the best French toast you will ever eat, served with out locally sourced maple syrup",
      "$5",
    ],
    "Beary Veggie Sandwich": [
      "Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up",
      "$8",
    ],
    "BLT ": [
      "Interested in the Beary Veggie Sandwich but also love bacon? Say no more.",
      "$6",
    ],
    "Bagel and Lox": [
      "Our house speciality, you can't go wrong with a hearty bagel topped with sustainbly harvested salmon",
      "$8",
    ],
    " Honeycomb": [
      "Are you a bear like us? Then you will love our honeycomb. And yes humans, it is just a piece of honeycomb, not the popular breakfast cereal",
      "$6",
    ],
    "Beary Bowl": [
      "Get a big bowl of our berries! Side of honey is $1 extra.",
      "$7",
    ],
    "The Beary Best Porridge": [
      "Made by Baby Bear himself, this porridge is guarenteed to be just right, or your money back",
      "$5",
    ],
  };

  createItems(mainDish);

  return container;
}

export { createMenuPage };
