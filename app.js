const showRule = document.getElementById('showRule');
const topRule = document.querySelector('.top-rule');
const section = document.getElementById('section-content');
const bonus = document.getElementById('bns');

showRule.addEventListener('click', toggleRulePopup);

function toggleRulePopup() {
  const ruleContent = `
    <div class="rule">
      <h1>RULE</h1>
      <button id="close"><img src="/images/Combined Shape.svg" alt="cancel"></button>
    </div>
  `;
  topRule.innerHTML = ruleContent;
  topRule.classList.toggle('anything');

  const closeBtn = document.getElementById('close');
  closeBtn.addEventListener('click', toggleRulePopup);
}

function sectionMain() {
  const sectionContent = `
      <div class="outta rock">
        <img src="./images/icon-rock.svg" alt="rock" >
      </div>

      <div class="outta paper">
        <img src="./images/icon-paper.svg" alt="paper" >
      </div>

      <div class="outta scissors">
        <img  src="./images/icon-scissors.svg" alt="scissors">
      </div>
  `;
  section.innerHTML = sectionContent;
}
sectionMain();

function determineResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "TIE";
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
  ) {
    incrementScore(1);
    return "YOU WIN";
  } else {
    if (score > 0) {
      incrementScore(-1);
    }
    return "YOU LOSE";
  }
}

const scorePoint = document.querySelector('.score-board');
let score = 0;

function incrementScore(point) {
  score += point;
  scorePoint.innerText = score;
}

const imgClicks = document.querySelectorAll('.outta');
const computerChoices = ['rock', 'paper', 'scissors'];
const computerImages = {
  rock: './images/icon-rock.svg',
  paper: './images/icon-paper.svg',
  scissors: './images/icon-scissors.svg',
};

imgClicks.forEach(imgClick => {
  imgClick.addEventListener('click', () => {
    section.style.display = 'none';
    const computerChoice = computerChoices[Math.floor(Math.random() * 3)];
    const result = determineResult(imgClick.querySelector('img').alt, computerChoice);

    const imageToShow = imgClick.cloneNode(true);
    imageToShow.classList.add('its');

    const resultContainer = document.createElement('div');
    resultContainer.classList.add('image-container');
    resultContainer.innerHTML = `
      <div class="selector">
        <p>YOU PICKED</p>
        ${imageToShow.outerHTML}
        </div>
      <div class="again">
        <p>${result}</p>
        <a id="play-again">PLAY AGAIN</a>
      </div>
      <div class="the-house">
        <p>THE HOUSE PICKED</p>
        <div class=" house outta ${computerChoice}">
        <img src="${computerImages[computerChoice]}" alt="${computerChoice}">
      </div>
      </div>
    `;

    if (result === "YOU WIN") {

      resultContainer.querySelector('.its').classList.add('winner');
    } else if (result === "YOU LOSE") {
      resultContainer.querySelector('.house').classList.add('winner');
    }

    document.body.appendChild(resultContainer);

    const playAgainLink = resultContainer.querySelector('#play-again');
    playAgainLink.addEventListener('click', () => {
      resultContainer.style.display = 'none';
      section.style.display = 'flex';
    });
  });
});



document.addEventListener('DOMContentLoaded', () => {
  bonus.addEventListener('click', () => {
    const main = document.querySelector('main');
    const body = document.querySelector('body');
    main.style.display = 'none';

    function bxtGame() {
      const bonusGame = `
        
          <main>
  <header>
      <img src="./images/logo-bonus.svg" alt="logo">
      <div class="score">
          <h1>SCORE</h1>
          <span class="score-board">0</span>   
      </div>
  </header>

  <section id="section-two"> 
          <div class="outta lizard">
        <img src="./images/icon-lizard.svg" alt="lizard" >
      </div>

      <div class="outta spock">
        <img src="./images/icon-spock.svg" alt="spock" >
      </div>

      <div class="outta rock">
        <img src="./images/icon-rock.svg" alt="rock" >
      </div>

      <div class="outta paper">
        <img src="./images/icon-paper.svg" alt="paper" >
      </div>

      <div class="outta scissors">
        <img  src="./images/icon-scissors.svg" alt="scissors">
      </div>
  </section>

  <div class="top-rule"> <!-- js --> </div>
  <div class="button-for">
<button id="bns">PRIMARY</button>
  <button id="showRule">RULES</button>
</div>
</main>
        `
        body.innerHTML = bonusGame;
    }
    bxtGame();
    
  });

});