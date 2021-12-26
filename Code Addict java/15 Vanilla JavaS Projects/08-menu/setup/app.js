const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: "steak dinner",
    category: "dinner",
    price: 39.99,
    img: "./images/item-10.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

const sectionCenter = document.querySelector(`.section-center`);
const buttonContainer = document.querySelector(`.btn-container`);

//load  items
window.addEventListener(`DOMContentLoaded`, function () {
  //when the page is loaded it activates the func
  displayMenuItems(menu);
  displayMenuButtons();
});

function displayMenuItems(paramether) {
  let bigMenu = paramether.map(function (item) {
    //loops over every item in the array
    return `<article class="menu-item">
          <img src="${item.img}" class="photo" alt="${item.title}" />
          <div class="item-info">
            <header>
              <h4>${item.title}</h4>
              <h4 class="price">${item.price}</h4>
            </header>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  bigMenu = bigMenu.join(``); //joins the template above as a whole text
  sectionCenter.innerHTML = bigMenu; //appends it to the document
}

function displayMenuButtons() {
  const onlyCategories = menu.reduce(
    function (accumulator, current) {
      if (!accumulator.includes(current.category)) {
        //if the array [`all`] does not include the category
        accumulator.push(current.category); //it adds it to the accumulator array
      }
      return accumulator;
    },
    [`all`]
  );

  const categoryBtns = onlyCategories
    .map(function (eachCategory) {
      return `<button class="filter-btn" type="button" data-id=${eachCategory}>${eachCategory}</button>`;
    })
    .join(``);
  buttonContainer.innerHTML = categoryBtns;
  //filter butttons
  const filterButtons = document.querySelectorAll(`.filter-btn`);
  //filter items
  filterButtons.forEach(function (btnParameter) {
    btnParameter.addEventListener(`click`, function (eventParameter) {
      const btnCategory = eventParameter.currentTarget.dataset.id; //gets the data-id on the thing you clicked from the HTML

      const menuCategory = menu.filter(function (menuItemParameter) {
        //filters the array and creates a new array: menuCategory
        if (menuItemParameter.category === btnCategory) {
          //if the category menuItemParameter's category is the same as the category variable it returns it
          return menuItemParameter;
        }
      });

      if (btnCategory === `all`) {
        displayMenuItems(menu);
      } else {
        displayMenuItems(menuCategory);
      }
    });
  });
}
