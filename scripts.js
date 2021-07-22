const dropBoxes = document.querySelectorAll('.dropBox');
const pieces = document.querySelectorAll('.pieces');
const piecesContainer = document.querySelector('.container-pieces');
const puzzle = document.querySelector('.puzzle');
const dropZone = document.querySelector('.dropzone');
const startButton = document.querySelector('.btn.start-btn');
const newGameButton = document.querySelector('.newgame-btn');
const startView = document.querySelector('.start');

const hide = (el) => el.style.visibility = 'hidden';
const show = (el) => el.style.visibility = 'visible';
const shuffling = () => {
  const pieces = piecesContainer.children;
  const frag = document.createDocumentFragment();

  while (pieces.length) {
    frag.appendChild(pieces[Math.floor(Math.random() * pieces.length)])
  };
  piecesContainer.appendChild(frag);
};

//start view
hide(puzzle);
hide(newGameButton);

const startGame = () => {
  hide(startView);
  show(puzzle)
  show(newGameButton);
  //shuffling();
}

const start = new Date().getTime();

startButton.addEventListener('click', startGame);

//drag and drop

const drag = event => {
  event.dataTransfer.setData('text', event.target.id);
};

const allowDrop = event => {
 if (event.target.tagName !== 'IMG') {
   event.preventDefault();
  } 
};

const prepareTime = () => {
  const end = new Date().getTime();
  const time = end - start;
  console.log(time);

  let seconds = parseInt((time/1000)%60)
  let minutes = parseInt((time/(1000*60))%60)
  let hours = parseInt((time/(1000*60*60))%24);

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;

  return hours + ":" + minutes + ":" + seconds + ".";
}

const arrOfIds = [];

const checkCorectness = () => {
  if (arrOfIds.length === dropBoxes.length) {
    alert(`you won! Your time is: ${prepareTime()}`);
  }
}


const drop = event => {
  event.preventDefault();
  const data = event.dataTransfer.getData('text');
  event.target.appendChild(document.getElementById(data));
  if (event.target.dataset.boxid === event.target.firstChild.dataset.pieceid) {
    event.target.style.border = 'none';
    dropZone.style.border = 'none';
    arrOfIds.push(event.target.dataset.boxid);
  }
  checkCorectness();
}

const startNewGame = () => {
  window.location.reload(true);
  hide(startView);
  shuffling();
};

newGameButton.addEventListener('click', startNewGame);







