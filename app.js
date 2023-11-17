const section = document.getElementById('section-content');
const topRule = document.querySelector('.top-rule');
const showRule = document.getElementById('showRule');
const advanceGame = document.getElementById('bns');
const computerChoices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const computerImages = {
  rock: './images/icon-rock.svg',
  spock: './images/icon-spock.svg',
  paper: './images/icon-paper.svg',
  lizard: './images/icon-lizard.svg',
  scissors: './images/icon-scissors.svg',
};
const scorePoint = document.querySelector('.score-board');
let score = 0;

/**
 * section content is for the generation of the section
 */

function sectionMain() {
  const sectionContent = `
    <div class="outta rock">
      <img src="./images/icon-rock.svg" alt="rock">
    </div>

    <div class="outta paper">
      <img src="./images/icon-paper.svg" alt="paper">
    </div>

    <div class="outta scissors">
      <img src="./images/icon-scissors.svg" alt="scissors">
    </div>
  `;
  section.innerHTML = sectionContent;
}
sectionMain();

/**
 * This part of the code is for the normal rules of the game.
 */

function toggleRulePopup(backgroundImageURL) {
  const ruleContent = `
    <div class="rule" style="background-image: url(${backgroundImageURL});">
      <h1>RULE</h1>
  <button id="close"><img src="/images/Combined Shape.svg" alt="cancel"></button>
  </div>
  `;
  topRule.innerHTML = ruleContent;
  topRule.classList.toggle('anything');

  const closeBtn = document.getElementById('close');
  closeBtn.addEventListener('click', toggleRulePopup);
}

showRule.addEventListener('click', toggleRulePopup);


function determineResult(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return "TIE";
  } else if (
    (userChoice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
    (userChoice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
    (userChoice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
    (userChoice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper')) ||
    (userChoice === 'spock' && (computerChoice === 'scissors' || computerChoice === 'rock'))
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

function incrementScore(point) {
  score += point;
  scorePoint.innerText = score;
}

/**
 * This part of the code is for playing the game.
 */

function initializeGame() {
  const imgClicks = document.querySelectorAll('.outta');

  function handleImageClick(imgClick) {
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

      advanceGame.addEventListener('click', () => {
        score = 0;
        section.id = 'section-two';
        section.classList.remove('section-content');
        section.classList.add('section-two');
        resultContainer.style.display = 'none';
        section.style.display = 'flex';
        scorePoint.innerText = score;
      });


      document.body.append(resultContainer);
      const playAgainLink = resultContainer.querySelector('#play-again');
      playAgainLink.addEventListener('click', () => {
        resultContainer.style.display = 'none';
        section.style.display = 'flex';
      });
    });
  }

  imgClicks.forEach(handleImageClick);
}
initializeGame();


function Game() {
  const imgClicks = document.querySelectorAll('.outt');

  function handleImageClick(imgClick) {
    imgClick.addEventListener('click', () => {
      section.style.display = 'none';
      const computerChoice = computerChoices[Math.floor(Math.random() * 5)];
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

      document.body.append(resultContainer);

      advanceGame.addEventListener('click', () => {
        const two2 = document.getElementById('section-two');
        resultContainer.style.display = 'none';
        two2.style.display = 'none';
        location.reload();
      });


      const playAgainLink = resultContainer.querySelector('#play-again');
      playAgainLink.addEventListener('click', () => {
        resultContainer.style.display = 'none';
        section.style.display = 'flex';
      });
    });
  }
  imgClicks.forEach(handleImageClick);
}
function advance() {
  advanceGame.addEventListener('click', function () {

    const header = document.querySelector('header');
    const logoImg = header.querySelector('img');
    logoImg.src = './images/logo-bonus.svg';

    section.classList.toggle('section-two');
    if (section.classList.toggle('section-two')) {
      // The class 'section-two' was added, so set the score to zero
      score = 0;
    }

    section.innerHTML += `
  <div class="lizard outt bonus">
    <img src="./images/icon-lizard.svg" alt="lizard">
  </div>
  
  <div class="spock outt bonus">
    <img src="./images/icon-spock.svg" alt="spock">
  </div>
`;

    const outtaElements = document.querySelectorAll('.outta');
    outtaElements.forEach((outtaElement) => {
      outtaElement.classList.remove('outta');
      outtaElement.classList.add('outt', 'bonus');
    });

    section.removeAttribute('id');
    section.id = 'section-two';
    section.classList.remove('section-content');
    section.classList.add('section-two');

    advanceGame.innerText = 'PRIMARY';


    advanceGame.addEventListener('click', () => {
      location.reload();
    });


    showRule.addEventListener('click', () => {
      toggleRulePopup('./images/image-rules-bonus.svg');
      console.log(toggleRulePopup('./images/image-rules-bonus.svg'))
    });
    Game();
  });
}
advance();
