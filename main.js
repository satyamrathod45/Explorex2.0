const main = document.querySelectorAll(".main");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const book = document.querySelector(".book-btn");
const formContainer = document.querySelector('.form-container');
const quit = document.querySelector('.remove-btn');
const close = document.querySelector('.close');
const ticketContainer = document.querySelector('.ticket-container')
const ticketOpen = document.querySelector('.ticket-nav');
//input from the form;
const planetName = document.querySelector('#planet-select');
const getCardBtn= document.querySelector('.get-card');
const inputFname = document.querySelector('#fname');
const inputLname = document.querySelector('#lname');
const inputEmail = document.querySelector('#email');
const phone = document.querySelector('#phone');
const member = document.querySelector('.members .numbers');
// cards details ;
let cardNameHolder = document.querySelector('.name-ticket');
let cardNumber = document.querySelector('.flip-card-back .number');
let cardPlanet = document.querySelector('.planet-card-name');

function generate12DigitNumber(name = '', phoneNumber, singleDigitCode) {
  if (singleDigitCode < 0 || singleDigitCode > 9) {
      return "Error: The code must be a single digit between 0 and 9.";
  }

  const sanitizedPhone = (phoneNumber).replace(/\D/g, "").slice(-10); 
  if (sanitizedPhone.length < 10) {
      return "Error: Phone number must have at least 10 digits.";
  }

  const twelveDigitNumber = sanitizedPhone + singleDigitCode;


  const formattedNumber = twelveDigitNumber.replace(/(\d{4})(?=\d)/g, "$1 ");

  return formattedNumber;
}
function planetCodeByName(planetName) {
  switch(planetName) {
    case "earth":
      return 1;
    case "moon":
      return 2;
    case "mars":
      return 3;
    case "jupiter":
      return 4;
    case "saturn":
      return 5;
    case "neptune":
      return 6;
  }
}

console.log(cardNameHolder,cardNumber,cardPlanet)

getCardBtn.addEventListener('click', () => {
  if (inputEmail.value===''|| inputFname.value === '' || phone === '') {
    alert('please enter someting....!');
  }else 
  cardNameHolder.innerHTML = inputFname.value + " " + inputLname.value;
  cardPlanet.innerHTML = planetName.value;
  console.log( planetCodeByName(planetName.value));
  
 
  cardNumber.innerHTML = phone.value + planetCodeByName(planetName.value)
  console.log('working');
  alert('card generated successfully')
}
)
let i = 0;

function updateSlides() {
  main.forEach((slide, index) => {
    if (index === i) {
      slide.classList.remove("prevSlide");
      slide.classList.add("currentSlide");
    } else {
      slide.classList.add("prevSlide");
      slide.classList.remove("currentSlide"); 
    }
  });
}

updateSlides();

next.addEventListener("click", () => {
  i++;
  if (i >= main.length) {
    i = 0;
  }
  updateSlides();
});
window.addEventListener("keyup", (e) => {
  if (e.key === "ArrowRight") {
    i++;
    if (i >= main.length) {
      i = 0;
    }
    updateSlides();
  }
  if (e.key === "ArrowLeft") {
    i--;
    if (i < 0) {
      i = main.length - 1;
    }
    updateSlides();
  }
});
prev.addEventListener("click", () => {
  i--;
  if (i < 0) {
    i = main.length - 1;
  }
  updateSlides();
});

book.addEventListener('click' , () => {
  formContainer.classList.remove('remove');
  console.log('working');
})
close.addEventListener('click' , () => {
  ticketContainer.classList.add('remove');
  console.log('working');
})

ticketOpen.addEventListener('click' , () => {
  ticketContainer.classList.remove('remove');
  console.log('working');
})

quit.addEventListener('click' , () => {
  formContainer.classList.add('remove');
  console.log('working');
})
