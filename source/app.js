const data = fetch("https://indeed-indeed.p.rapidapi.com/apisearch", {
  mode: "no-cors",
  method: "GET",
  headers: {
    "x-rapidapi-host": "indeed-indeed.p.rapidapi.com",
    "x-rapidapi-key": "eba13d5c36mshf3468974d77a55ep141171jsn483f22443c2d",
  },
})
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.error(err);
  });
