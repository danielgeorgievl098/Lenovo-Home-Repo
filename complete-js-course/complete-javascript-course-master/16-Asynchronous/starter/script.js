// ('use strict');

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

// /////////////////////////////////////
// /////////////////////////////////////////////////////////////// FIRST AJAX CALL /////////////////////////////////////////////////////
// console.log(
//   `---------------------------------- FIRST AJAX CALL -----------------------------------------------`
// );

// // const getCountryData = function (country) {
// //   const request = new XMLHttpRequest();
// //   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// //   request.send();

// //   request.addEventListener('load', function () {
// //     const [data] = JSON.parse(this.responseText);
// //     console.log(data);

// //     const html = `
// //   <article class="country">
// //   <img class="country__img" src="${data.flags.png}" />
// //   <div class="country__data">
// //   <h3 class="country__name">${data.name.common}</h3>
// //   <h4 class="country__region">${data.region}</h4>
// //   <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
// //     1
// //   )}</p>
// //       <p class="country__row"><span>🗣️</span>${data.languages[0]}</p>
// //             <p class="country__row"><span>💰</span>${data.currencies[0]}</p>
// //             </div>
// //             </article>
// //             `;
// //     countriesContainer.insertAdjacentHTML('beforeend', html);
// //   });
// // };

// // // getCountryData(`portugal`);
// // // getCountryData(`spain`);
// // // getCountryData(`hungary`);
// // // getCountryData(`france`);
// // // getCountryData(`japan`);

// //////////////////////////////////////////////////////////// CALLBACK HELL
// console.log(
//   `----------------------------------------------------- CALLBACK HELL ----------------------------`
// );

// // const renderCountry = function (data, className = '') {
// //   const html = `
// //   <article class="country ${className}">
// //   <img class="country__img" src="${data.flags.png}" />
// //   <div class="country__data">
// //   <h3 class="country__name">${data.name.common}</h3>
// //   <h4 class="country__region">${data.region}</h4>
// //   <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
// //     1
// //   )}</p>
// //       <p class="country__row"><span>🗣️</span>${data.languages[0]}</p>
// //             <p class="country__row"><span>💰</span>${data.currencies[0]}</p>
// //             </div>
// //             </article>
// //             `;
// //   countriesContainer.insertAdjacentHTML('beforeend', html);
// // };
// // const getCountryNeighbour = function (country) {
// //   //AJAX CALL COUNTRY 1
// //   const request = new XMLHttpRequest();
// //   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
// //   request.send();

// //   request.addEventListener('load', function () {
// //     const [data] = JSON.parse(this.responseText);
// //     console.log(data);

// //     //render country
// //     renderCountry(data);

// //     //get country neighbour
// //     const [neighbour] = data.borders;

// //     if (!neighbour) return;
// //     //AJAX CALL COUNTRY 2
// //     const request2 = new XMLHttpRequest();
// //     request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
// //     request2.send();

// //     request2.addEventListener('load', function () {
// //       const [data2] = JSON.parse(this.responseText);
// //       console.log(data2);

// //       renderCountry(data2, `neighbour`);
// //     });
// //   });
// // };

// // // getCountryNeighbour('bulgaria');
// // getCountryNeighbour('hungary');

// // /////////////// what we are doing (callbacks inside callbacks) is called callback hell
// // ///////////it is more easily represented by this:
// // setTimeout(() => {
// //   console.log(`1 second passed`);
// //   setTimeout(() => {
// //     console.log(`2 seconds passed`);
// //     setTimeout(() => {
// //       console.log(`3 seconds passed`);
// //       setTimeout(() => {
// //         console.log(`4 seconds passed`);
// //       }, 1000);
// //     }, 1000);
// //   }, 1000);
// // }, 1000);

// /////////////////////////////////////////////////////////////// PROMISES AND FETCH API
// console.log(
//   `-----------------------------------------------------PROMISES AND FETCH API ------------------------------------------`
// );

// // const request = fetch(`https://restcountries.com/v3.1/name/bulgaria`);
// // console.log(request);

// /////////////////////////////////////////////////////////////// CONSUMING PROMISES
// console.log(
//   `-----------------------------------------------------CONSUMING PROMISES ------------------------------------------`
// );
const renderCountryPromise = function (data, className = '') {
  const html = `
  <article class="country ${className}">
  <img class="country__img" src="${data.flags.png}" />
  <div class="country__data">
  <h3 class="country__name">${data.name.common}</h3>
  <h4 class="country__region">${data.region}</h4>
  <p class="country__row"><span>👫</span>${(+data.population / 1000000).toFixed(
    1
  )}</p>
  <p class="country__row"><span>📛</span>${data.name.official}</p>
            <p class="country__row"><span>🏙️</span>${data.capital}</p>
            </div>
            </article>
            `;
  countriesContainer.insertAdjacentHTML('beforeend', html);
  countriesContainer.style.opacity = 1;
};

// const renderCountryNeighbour = function (data, className = '') {
//   const html = `
//   <article class="country ${className}">
//   <img class="country__img" src="${data[0].flags.png}" />
//   <div class="country__data">
//   <h3 class="country__name">${data[0].name.common}</h3>
//   <h4 class="country__region">${data[0].region}</h4>
//   <p class="country__row"><span>👫</span>${(
//     +data[0].population / 1000000
//   ).toFixed(1)}</p>
//       <p class="country__row"><span>📛</span>${data[0].name.official}</p>
//       <p class="country__row"><span>🏙️</span>${data[0].capital[0]}</p>
//             </div>
//             </article>
//             `;
//   countriesContainer.insertAdjacentHTML('beforeend', html);
//   countriesContainer.style.opacity = 1;
// };

// const renderError = function (msg) {
//   countriesContainer.insertAdjacentText('beforeend', msg);

//   countriesContainer.style.opacity = 1;
// };

// // this is a HELPER FUNC
const getJSON = function (url, errorMsg = 'Something Went Wrong') {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(`${errorMsg} (${response.status})`);

    return response.json(); //all resolved responses have the .json(), which lets us read them
  });
};

// // -------------------------- without HELPER FUNC --------------------------
// // const getCountryData = function (country) {
// //   fetch(`https://restcountries.com/v3.1/name/${country}`)
// //     .then(response => {
// //       if (!response.ok)
// //         throw new Error(`Country Not Found (${response.status})`);
// //       return response.json(); //all resolved responses have the .json(), which lets us read them
// //     })
// //     .then(function (data) {
// //       renderCountryPromise(data[0]);
// //       // const neighbour = data[0].borders[0];
// //       const neighbour = 'dasdsadsad';

// //       // Country2
// //       if (!neighbour) return;
// //       //we need to return the fetch promise in order to use a .then() method on the current callback
// //       return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
// //     })
// //     .then(response => {
// //       return response.json();
// //     })
// //     .then(data => renderCountryNeighbour(data, 'neighbour'))
// //     .catch(err => {
// //       console.error(`${err} 💥💥💥💥`);
// //       renderError(`Something went wrong 💥💥 ${err.message} Try again`);
// //     });
// // };

// // btn.addEventListener('click', function () {
// //   getCountryData('australia');
// // });

// // ----------------------------------------- with Helper FUNC -----------------------
// const getCountryData = function (country) {
//   getJSON(`https://restcountries.com/v3.1/name/${country}`, `Country Not Found`)
//     .then(function (data) {
//       renderCountryPromise(data[0]);
//       const neighbour = data[0].borders[0];

//       // Country2
//       if (!neighbour) throw new Error('No neighbour found');
//       //we need to return the fetch promise in order to use a .then() method on the current callback
//       return getJSON(
//         `https://restcountries.com/v3.1/alpha/${neighbour}`,
//         `Country Not Found`
//       );
//     })
//     .then(data => renderCountryNeighbour(data, 'neighbour'))
//     .catch(err => {
//       console.error(`${err} 💥💥💥💥`);
//       renderError(`Something went wrong 💥💥 ${err.message} Try again`);
//     });
// };

// /////////////////////////////////////////////////////////////// HANDLING REJECTED PROMISES
// console.log(
//   `----------------------------------------------------- HANDLING REJECTED PROMISES ------------------------------------------`
// );
// /////////////////////////////////////////////////////////////// THROWING ERRORS MANUALLY
// console.log(
//   `----------------------------------------------------- THROWING ERRORS MANUALLY ------------------------------------------`
// );
// //////////////////////////////////////////////////
// //////////////////////////////////////////////////
// //////////////////////////////////////////////////
// //////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////// FIRST CHALLENGE
// // console.log(
// //   `----------------------------------------------------- FIRST CHALLENGE ------------------------------------------`
// // );

// // const whereAmI = function (lat, lng) {
// //   fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
// //     .then(response => {
// //       // if (!response.ok) throw new Error(`Page not Loading`);
// //       return response.json();
// //     })
// //     .then(data => {
// //       console.log(`${data.city}, ${data.country}`);
// //       renderCountryPromise(data.country);
// //     })
// //     .catch(err => {
// //       console.log(err.message);
// //     });
// // };

// // whereAmI(52.508, 13.381);

// /////////////////////////////////////////////////////////////// BUILDING A SIMPLE PROMISE
// console.log(
//   `----------------------------------------------------- BUILDING A SIMPLE PROMISE------------------------------------------`
// );

// const lotteryPromise = new Promise(function (resolve, reject) {
//   //the callback in new Promise is called the executer, it always gets 2 params, resolve/reject
//   console.log(`The balls are being shuffled`);

//   setTimeout(function () {
//     if (Math.random() >= 0.5) {
//       resolve(' You WIN!! 🤑🤑🤑');
//     } else {
//       reject(new Error(`You LOST your MONEY!! 😭😭😭`));
//     }
//   }, 2000);
// });

// lotteryPromise.then(res => console.log(res));

// // Promisifying setTimeOut

// const wait = function (seconds) {
//   return new Promise(function (resolve) {
//     setTimeout(resolve, seconds * 1000);
//   });
// };

// wait(3).then(() => console.log(`I waited`));

// Promise.resolve(`absdf`).then(x => console.log(x));
// Promise.reject(`absdf`).catch(x => console.error(x));

// /////////////////////////////////////////////////////////////// PROMISIFYING THE GEOLOCATION APP
// console.log(
//   `----------------------------------------------------- PROMISIFYING THE GEOLOCATION APP ------------------------------------------`
// );

// const getPosition = function () {
//   //this is called the 'executer' function, it always gets 2 par, resolve and reject
//   return new Promise(function (resolve, reject) {
//     // navigator.geolocation.getCurrentPosition(
//     // //if user allows us to get posision, promise is resolved, and we pass in the position, so we can handle that position later
//     // position => resolve(position),
//     // err => reject(err)

//     //we can simplify the above example by doing this
//     navigator.geolocation.getCurrentPosition(resolve, reject);
//     //we don't have to manually pass position to resolve, because it does that implicitly
//   });
// };

// //the 'data' is the 'position' parameter, which gets passed into the 'resolve' para in the Promise
// getPosition().then(data =>
//   console.log(data.coords.latitude, data.coords.longitude)
// );

// const whereAmI = function () {
//   getPosition()
//     .then(pos => {
//       //desctructoring with renaming
//       const { latitute: lat, longitude: lng } = pos.coords;

//       return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
//     })

//     .then(response => {
//       // if (!response.ok) throw new Error(`Page not Loading`);
//       return response.json();
//     })
//     .then(data => {
//       console.log(`${data.city}, ${data.country}`);
//       console.log(data);
//     })
//     .catch(err => {
//       console.log(err.message);
//     });
// };

// btn.addEventListener('click', whereAmI);

// /////////////////////////////////////////////////////////////// SECOND CHALLENGE
// console.log(
//   `----------------------------------------------------- SECOND CHALLENGE ------------------------------------------`
// );

// const images = document.querySelector('.images');
// const img = document.createElement('img');

// const createImage = function (imagePath) {
//   return new Promise(function (resolve, reject) {
//     img.src = imagePath;

//     img.addEventListener('load', function () {
//       images.append(img);
//       resolve(img);
//     });

//     img.addEventListener('error', function () {
//       reject(new Error('Image Could Not Load'));
//     });
//   });
// };

// let currentImage;
// createImage(
//   `https://images.pexels.com/photos/8287624/pexels-photo-8287624.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940`
// )
//   .then(function (response) {
//     currentImage = response;
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.dysplay = 'none';

//     return createImage(
//       'https://images.pexels.com/photos/9190648/pexels-photo-9190648.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
//     );
//   })
//   .then(response => {
//     currentImage = response;
//     return wait(2);
//   })
//   .then(() => {
//     currentImage.style.display = 'none';
//   })
//   .catch(err => console.error(err));

/////////////////////////////////////////////////////////////// CONSUMING PROMISES WITH ASYNC/AWAIT
console.log(
  `----------------------------------------------------- CONSUMING PROMISES WITH ASYNC/AWAIT ------------------------------------------`
);

const whereAmIAsync = async function (country) {
  try {
    // await returns the resolved promise of fetch
    const response = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );

    //again, .json() retursn a promise, we await for that promise's resolved state and store it
    const data = await response.json();

    renderCountryPromise(data[0]);
  } catch (err) {
    console.error(`${err} 💥💥💥`);
    throw new Error(`Something went wrong!! 💥💥💥`);
  }
};

whereAmIAsync('egypt');
console.log(`First`);

/////////////////////////////////////////////////////////////// TRY/CATCH ERROR HANDLING
console.log(
  `----------------------------------------------------- TRY/CATCH ERROR HANDLING ------------------------------------------`
);

try {
  let y = 1;
  const x = 4;
  x = 3;
} catch (err) {
  console.error(err.message);
}

/////////////////////////////////////////////////////////////// RUNNING PROMISES IN PARALLEL
console.log(
  `----------------------------------------------------- RUNNING PROMISES IN PARALLEL ------------------------------------------`
);

const get3Countries = async function (c1, c2, c3) {
  try {
    const data = await Promise.all([
      getJSON(`https://restcountries.com/v3.1/name/${c1}`),
      getJSON(`https://restcountries.com/v3.1/name/${c2}`),
      getJSON(`https://restcountries.com/v3.1/name/${c3}`),
    ]);
    console.log(data.map(data => data[0].capital[0]));
  } catch (err) {
    console.log(err);
  }
};

get3Countries('india', 'peru', 'chile');
