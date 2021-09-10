(function () {
  /**
   *
   * As a user, I should be able to a pick Rick and Morty character from a drop-down, and it should display an image of that character.
   *
   * For this exercise, use the API to populate the dropdown.
   * After the dropdown has been populated, if the user selects a character an image should appear displaying the correct character.
   *
   *
   * Create a list of characters using the API
   * This is the URL for the API you will be using. The method should be GET.
   * To get all characters use this
   * https://rickandmortyapi.com/documentation/#get-all-characters
   * To get an individual character,, you must use this:
   * https://rickandmortyapi.com/documentation/#get-a-single-character
   *
   * Use the AXIOS library to make AJAX requests.
   */
  const dDown = document.querySelector("#dropdown");
  const placeHolder = document.querySelector("#putImageHere");
  let count = 0;
  let whoIs = null;
  let whoId = null;
  const populateDD = async () =>{
    try {
      const {data} = await axios({
        method: "GET",
        url: "https://rickandmortyapi.com/api/character"
      });
      data.results.forEach(() => {
        const eachChar = document.createElement("option");
        whoIs = data.results[count].name;
        whoId = data.results[count].id;
        eachChar.textContent = whoIs;
        document.querySelector("#dropdown").appendChild(eachChar);
        //eachChar.setAttribute("id",count);
        count++;
        if (count > 19){
          count = 0;
        }
      });
    }
    catch(err){
      console.log("You received this error: " + err);
    }
    //console.log(dDown);
  };
  const showChar = async () => {
    let selections = dDown.options[dDown.selectedIndex];
    try {
      const {data} = await axios({
        method: "GET",
        url:"https://rickandmortyapi.com/api/character/" + selections.index
      });
      placeHolder.setAttribute("src",data.image);
    }
    catch(err){
      console.log("You received this error: " + err);
    }
    console.log("this is working~~" + whoIs);
    console.log(selections);
  };
  dDown.addEventListener("click", populateDD);
  dDown.addEventListener("change", showChar);
  
})();
