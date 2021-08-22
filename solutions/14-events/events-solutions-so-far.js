(function () {
  /**
   * You have three challenges to solve below with Vanilla JavaScript.
   * You are allowed to make changes to the HTML and CSS.
   */

  /**
   * Challenge 1: Alert Me
   * When the clicks on the button that says "Alert Me!", it should display an alert.
   * @see https://developer.mozilla.org/en-US/docs/Web/API/Window/alert
   */

  document.querySelector("#alertMe").addEventListener("click", () => {
    alert("Alert Me!");
  });

  /**
   * Challenge 2: Disable a button that will charge a credit card.
   *
   * To prevent users from charging the credit card more than once:
   * 1. Disable the button when it is clicked.
   * 2. Change the text to say e.g. "Loading ..." once it is clicked.
   */

  // Solution 1
  const chargeCreditCardButton = document.querySelector("#chargeCreditCard");
  chargeCreditCardButton.addEventListener("click", () => {
    chargeCreditCardButton.disabled = "disabled";
    chargeCreditCardButton.textContent = "Loading ...";
  });

  // Solution 2
  document
    .querySelector("#chargeCreditCard")
    .addEventListener("click", (event) => {
      const button = event.target;
      button.disabled = "disabled";
      button.textContent = "Loading ...";
    });

  /**
   * Challenge 3: Show comments for the news story.
   *
   * When the user clicks on the "View Comments" button, the comment section should appear.
   * Right now, the comments are hidden because they have the class ".hidden",
   * but you can switch up the HTML so that it uses inline styles if you like.
   *
   * BONUS: Clicking on the button should toggle instead of just show the comments.
   * If the comments are open, change the button text from "View Comments" to "Hide Comments".
   */

  document
    .querySelector("#toggleComments")
    .addEventListener("click", (event) => {
      const button = event.target;
      const comments = document.querySelector("#comments");
      if (comments.classList.contains("hidden")) {
        comments.classList.remove("hidden");
        button.textContent = "Hide Comments";
      } else {
        comments.classList.add("hidden");
        button.textContent = "Show Comments";
      }
    });
})();
