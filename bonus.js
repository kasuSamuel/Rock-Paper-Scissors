
const sectionTwo = document.getElementById('section-two');

function sectionMainTwo() {
  const sectionCont = `
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
  `;
  sectionTwo.innerHTML = sectionCont;
}
sectionMainTwo();
