//Define attributes
const favouriteBtn = document.getElementsByClassName("favouriteButton");
const removeProduce = document.getElementsByClassName("removeButton");
const addBtn = document.getElementsByClassName("addBtn");
const removeElement = document.getElementsByClassName("removeBtn");
const purchaseButton = document.getElementById("purchase");

let first = 0,
  second = 0,
  third = 0,
  fourth = 0,
  fifth = 0,
  sixth = 0;
let firstPrice = 50,
  secondPrice = 70,
  thirdPrice = 90,
  fourthPrice = 110,
  fifthPrice = 150,
  sixthPrice = 170;
let firstTotalPrice = 0,
  secondTotalPrice = 0,
  thirdTotalPrice = 0,
  fourthTotalPrice = 0,
  fifthTotalPrice = 0,
  sixthTotalPrice = 0;
//---------------------------------------------------------------------------
//Favourite Button
for (let i = 0; i <= 5; i++) {
  favouriteBtn[i].addEventListener("click", () => {
    const heart = document.getElementsByClassName("heart")[i];
    heart.classList.toggle("active");
  });
}

//---------------------------------------------------------------------------
//Remove Produce Button
for (let i = 0; i <= 5; i++) {
  removeProduce[i].addEventListener("click", () => {
    const details = document.getElementsByClassName("details")[i];
    details.classList.toggle("showDetails");
  });
}

//---------------------------------------------------------------------------
//Add product Button
addBtn[0].addEventListener("click", (e) => {
  e.preventDefault();
  first = document.firstForm.first.value;
  const firstTotal = document.getElementById("firstTotal");
  if (first < 0) {
    alert("Enter positive number");
  }
  if (first >= 0) {
    firstTotalPrice = first * firstPrice;
    firstTotal.innerText = `Selected ${first} ${
      first == 1 || first == 0 ? `burger` : `burgers`
    } \nPrice: ${firstTotalPrice} $`;
  }
});

addBtn[1].addEventListener("click", (e) => {
  e.preventDefault();
  second = document.secondForm.second.value;
  const secondTotal = document.getElementById("secondTotal");
  if (second < 0) {
    alert("Enter positive number");
  }
  if (second >= 0) {
    secondTotalPrice = second * secondPrice;
    secondTotal.innerText = `Selected ${second} ${
      second == 1 || second == 0 ? `burger` : `burgers`
    } \nPrice: ${secondTotalPrice} $`;
  }
});

addBtn[2].addEventListener("click", (e) => {
  e.preventDefault();
  third = document.thirdForm.third.value;
  const thirdTotal = document.getElementById("thirdTotal");
  if (third < 0) {
    alert("Enter positive number");
  }
  if (third >= 0) {
    thirdTotalPrice = third * thirdPrice;
    thirdTotal.innerText = `Selected ${third} ${
      third == 1 || third == 0 ? `burger` : `burgers`
    } \nPrice: ${thirdTotalPrice} $`;
  }
});

addBtn[3].addEventListener("click", (e) => {
  e.preventDefault();
  fourth = document.fourthForm.fourth.value;
  const fourthTotal = document.getElementById("fourthTotal");
  if (fourth < 0) {
    alert("Enter positive number");
  }
  if (fourth >= 0) {
    fourthTotalPrice = fourth * fourthPrice;
    fourthTotal.innerText = `Selected ${fourth} ${
      fourth == 1 || fourth == 0 ? `burger` : `burgers`
    } \nPrice: ${fourthTotalPrice} $`;
  }
});

addBtn[4].addEventListener("click", (e) => {
  e.preventDefault();
  fifth = document.fifthForm.fifth.value;
  const fifthTotal = document.getElementById("fifthTotal");
  if (fifth < 0) {
    alert("Enter positive number");
  }
  if (fifth >= 0) {
    fifthTotalPrice = fifth * fifthPrice;
    fifthTotal.innerText = `Selected ${fifth} ${
      fifth == 1 || fifth == 0 ? `burger` : `burgers`
    } \nPrice: ${fifthTotalPrice} $`;
  }
});

addBtn[5].addEventListener("click", (e) => {
  e.preventDefault();
  sixth = document.sixthForm.sixth.value;
  const sixthTotal = document.getElementById("sixthTotal");
  if (sixth < 0) {
    alert("Enter positive number");
  }
  if (sixth >= 0) {
    sixthTotalPrice = sixth * sixthPrice;
    sixthTotal.innerText = `Selected ${sixth} ${
      sixth == 1 || sixth == 0 ? `burger` : `burgers`
    } \nPrice: ${sixthTotalPrice} $`;
  }
});

//-----------------------------------------------------------------------
//Remove elements of the product
removeElement[0].addEventListener("click", () => {
  first > 0 ? --first : alert("There is no products");
  const firstTotal = document.getElementById("firstTotal");
  if (first >= 0) {
    firstTotalPrice = first * firstPrice;
    firstTotal.innerText = `Selected ${first} ${
      first == 1 || first == 0 ? `burger` : `burgers`
    } \nPrice: ${firstTotalPrice}`;
  }
});

removeElement[1].addEventListener("click", () => {
  second > 0 ? --second : alert("There is no products");
  const secondTotal = document.getElementById("secondTotal");
  if (second >= 0) {
    secondTotalPrice = second * secondPrice;
    secondTotal.innerText = `Selected ${second} ${
      second == 1 || second == 0 ? `burger` : `burgers`
    } \nPrice: ${secondTotalPrice}`;
  }
});

removeElement[2].addEventListener("click", () => {
  third > 0 ? --third : alert("There is no products");
  const thirdTotal = document.getElementById("thirdTotal");
  if (third >= 0) {
    thirdTotalPrice = third * thirdPrice;
    thirdTotal.innerText = `Selected ${third} ${
      third == 1 || third == 0 ? `burger` : `burgers`
    } \nPrice: ${thirdTotalPrice}`;
  }
});

removeElement[3].addEventListener("click", () => {
  fourth > 0 ? --fourth : alert("There is no products");
  const fourthTotal = document.getElementById("fourthTotal");
  if (fourth >= 0) {
    fourthTotalPrice = fourth * fourthPrice;
    fourthTotal.innerText = `Selected ${fourth} ${
      fourth == 1 || fourth == 0 ? `burger` : `burgers`
    } \nPrice: ${fourthTotalPrice}`;
  }
});

removeElement[4].addEventListener("click", () => {
  fifth > 0 ? --fifth : alert("There is no products");
  const fifthTotal = document.getElementById("fifthTotal");
  if (fifth >= 0) {
    fifthTotalPrice = fifth * fifthPrice;
    fifthTotal.innerText = `Selected ${fifth} ${
      fifth == 1 || fifth == 0 ? `burger` : `burgers`
    } \nPrice: ${fifthTotalPrice}`;
  }
});

removeElement[5].addEventListener("click", () => {
  sixth > 0 ? --sixth : alert("There is no products");
  const sixthTotal = document.getElementById("sixthTotal");
  if (sixth >= 0) {
    sixthTotalPrice = sixth * sixthPrice;
    sixthTotal.innerText = `Selected ${sixth} ${
      sixth == 1 || sixth == 0 ? `burger` : `burgers`
    } \nPrice: ${sixthTotalPrice}`;
  }
});

//-------------------------------------------------------------------------------
//purchase Button
purchase.addEventListener("click", () => {
  const totalPrice = document.getElementById("total");
  totalPrice.innerText = `Total Price: ${
    firstTotalPrice +
    secondTotalPrice +
    thirdTotalPrice +
    fourthTotalPrice +
    fifthTotalPrice +
    sixthTotalPrice
  } $`;
  firstTotalPrice +
    secondTotalPrice +
    thirdTotalPrice +
    fourthTotalPrice +
    fifthTotalPrice +
    sixthTotalPrice <=
  0
    ? alert("No products")
    : null;
});
