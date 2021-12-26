// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

//select items

const img = document.getElementById(`person-img`);
const author = document.getElementById(`author`);
const job = document.getElementById(`job`);
const info = document.getElementById(`info`);

const prevBtn = document.querySelector(`.prev-btn`);
const nextBtn = document.querySelector(`.next-btn`);
const randomBtn = document.querySelector(`.random-btn`);

//set starting item

let currentItem = 0;

//load initial item
window.addEventListener(`DOMContentLoaded`, function () {
  showPerson(currentItem);
});

//show person based on item
function showPerson(position) {
  const item = reviews[position]; //sets 'item' to the currentItem
  img.src = item.img; //sets img variable to the image we have in the array
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

//show next person
nextBtn.addEventListener(`click`, function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    //it has 4 items. this is 0-index based so 4-1=3. from 0 to 3 are 4 digits
    currentItem = 0;
  }
  showPerson(currentItem);
});

//show pervious person
prevBtn.addEventListener(`click`, function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1; //this bascally gets 4-1 and then 3-1...
  }
  showPerson(currentItem);
});

// show random person
randomBtn.addEventListener(`click`, function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson(currentItem);
});
