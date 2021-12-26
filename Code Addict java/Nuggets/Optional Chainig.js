const randomPeople2 = [
  {
    name: `Billy`,
    location: { street: `LaFayet street`, timezone: { offset: `+7:00` } },
  },
  { name: `Harry`, location: { street: `Main Street` } },
  {
    name: `Hemione`,
    location: { street: `Shane street`, timezone: { offset: `+9:00` } },
  },
];

randomPeople2.forEach((person) => {
  // console.log(person.location && person.location.timezone && person.location.timezone.offset); this is one way you can do it, where it constantly checks if true before going to next

  console.log(person?.location?.timezone?.offset); // this is optional chaining
  //with ? you are checking whether certain properties are there before continuing
});
