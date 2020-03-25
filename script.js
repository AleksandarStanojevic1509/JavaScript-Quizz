let btn = document.querySelector("button");
let correct = document.querySelectorAll(".correct");
let userAnswers = document.querySelectorAll(".user-answer");
let printScore = document.querySelector("h2");
let result = document.querySelector("#result");
let timeCounter = document.querySelector ('#time-counter')
let modal = document.querySelector(".modal");
let ok = document.querySelector("#ok");

let correctAnswers = [
  "C",
  "B",
  "B",
  "B",
  "C",
  "B",
  "A",
  "B",
  "A",
  "B",
  "C",
  "A",
  "C",
  "B",
  "A",
  "A",
  "B",
  "B",
  "C",
  "C"
];

// Tajmer
let countDown = 1201;

let tmr = setInterval(() => {
  if(countDown === 0){
    modal.style.display = "block";
     ok.addEventListener('click', ()=>{
      location.reload();
     })

  } else {
      countDown--;
      let createTime = new Date (countDown * 1000)
      let min = String(createTime.getMinutes()).padStart(2,"0"); 
      let sec = String(createTime.getSeconds()).padStart(2,"0"); 
      timeCounter.innerHTML = `<p>Time remaining: ${min}:${sec}</p>` /// moguc problem
  }
}, 1000);


// Submit answers
btn.addEventListener("click", () => {

  window.scrollTo(0, 0);

  let userAnsw = [];  
  let score = 0;

  // Zaustavlja i brise brojac
  clearInterval(tmr)
  timeCounter.style.display = 'none'

  // Dodaje klasu koja oznacava tacne odgovore
  correct.forEach(e => {
    e.className = "correct-border";
  });

  // Skuplja odgovore koje je dao korisnik i pravi niz od njih
  userAnswers.forEach(e => {
    if (e.checked) {
      userAnsw.push(e.value);
    }
  });

  //Proverava da li su korisnicki odgovori tecni, i ako jesu dodaje 5 poena u score
    for (let i = 0; i < userAnsw.length; i++) {
      if (userAnsw[i] === correctAnswers[i]) {
        score += 5;
      }
    }

  // Stampa rezultat u podnaslovu

  result.setAttribute("style", "display:block");

  printScore.innerHTML = `
  Congratulations !!! You score
  <span style="text-decoration: underline; font-size: larger;">${score}%</span>
  !!! You realy know JS !!!`
  console.log(score)

  let count = 0;

  if (score < 50) {
    let counter = setInterval(() => {
      printScore.innerHTML = `Upsss !!! You score only <span style="text-decoration: underline; 
                font-size: larger;">${count}%</span> !!! Need to learn more !!!`;
      if (count < score) {
        count++;
      } else {
        clearInterval(counter);
      }
    }, 20);
  } 
  else if (score < 75) {
    let counter = setInterval(() => {
      printScore.innerHTML = `Not great, not terrible !!! You score <span style="text-decoration: underline; 
              font-size: larger;">${count}%</span> !!! You should try again !!!`;
      if (count < score) {
        count++;
      } else {
        clearInterval(counter);
      }
    }, 20);
  } 
  else if (score < 95) {
    let counter = setInterval(() => {
      printScore.innerHTML = `Well done !!! You score <span style="text-decoration: underline; 
                font-size: larger;">${count}%</span> !!! Almost perfect !!!`;
      if (count < score) {
        count++;
      } else {
        clearInterval(counter);
      }
    }, 20);
  }
  else if (score <= 100) {
    let counter = setInterval(() => {
      printScore.innerHTML = `Congratulations !!! You score
      <span style="text-decoration: underline; font-size: larger;">${count}%</span>
      !!! You realy know JS !!!`;
      if (count < score) {
        count++;
      } else {
        clearInterval(counter);
      }
    }, 20);
  }
});
