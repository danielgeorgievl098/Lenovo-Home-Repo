// Browser API for HTTP(AJAX) Requests
//Default - GET requests, but supports other methods as well
//Returns a Promise

const link = `https://www.course-api.com/react-tours-project`;

// console.log(fetch(link));

// with .then
fetch(link)
  .then((resp) => resp.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//with async/await
const getRandomData = async () => {
  try {
    const response = await fetch(link);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

getRandomData();
