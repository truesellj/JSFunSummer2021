(function () {
  /**
   * As a user, I should be able to click on the a button to see random dog images.
   * Please use axios in this example.
   *
   * You will be making an HTTP request to this API:
   * https://dog.ceo/api/breeds/image/random
   *
   * You should expect this as a response:
   * {
   *    "status": "success",
   *    "message": "https://images.dog.ceo/breeds/poodle-toy/n02113624_9550.jpg"
   * }
   */
   const button = document.querySelector("#theOnlyButton");
   const doggie = document.querySelector("#image");
   const showNewDog = async () => {
      try{
         const {data} = await axios ({
            method: "GET", url:"https://dog.ceo/api/breeds/image/random"
         });
         //data.data.forEach((doggo) => {
          //  console.log(data.data.status);
         //}
         doggie.src = data.message;
      }
      catch (err){
         console.log("There was an error : " + err);
      }
   };
   button.addEventListener("click", showNewDog);
   console.log(button);
})();
