const userInput = document.querySelector("#fname");
const submitToCheck = document.querySelector(".custom-btn");
 const refreshBtn = document.getElementById('refresh-btn');

submitToCheck.addEventListener("click", (event) => {
  event.preventDefault(); // prevent the default form submission behavior

  const val = userInput.value;
  const remainder = val % 2;
  const even = "Hey, this number is even bro";
  const odd = "Hey, this number is odd bro";
  const insert = "You need to insert a number bro!";
  const emptyField = "";
  const strg = "This is not a number men!";

  if (remainder == 0) {
    document.getElementById("demo").innerHTML = even;
  }else {
    document.getElementById("demo").innerHTML = odd;
  }if(val === emptyField){
     document.getElementById("demo").innerHTML = insert;
  }
});

 refreshBtn.addEventListener('click', () => {
        location.reload();
      });
