    const dropBoxes = document.querySelectorAll('.dropBox');
    const pieces = document.querySelectorAll('.pieces');
    const piecesContainer = document.querySelector('.container-pieces');
    const puzzle = document.querySelector('.puzzle');
    const startButton = document.querySelector('.start-btn');
    const newGameButton = document.querySelector('.newgame-btn');
    const startView = document.querySelector('.start');


    //start view

    puzzle.classList.add('hide');
    newGameButton.classList.add('hide');

    const startGame = () => {
        startView.classList.add('hide');
        puzzle.classList.remove('hide');
        newGameButton.classList.remove('hide');
    };

    startButton.addEventListener('click', startGame);

    //The Fisher-Yates algorith to shuffle the puzzle pieces
    // for (let i = piecesContainer.length; i >= 0; i--) {
    //     piecesContainer.appendChild(piecesContainer.children[Math.random() * i | 0]);
    // };
    
    
    //drag and drop
    const drag = event => {
        event.dataTransfer.setData("text", event.target.id);
    };

    const allowDrop = event => event.preventDefault();

    const drop = event => {
        event.preventDefault();
        const data = event.dataTransfer.getData("text");
        console.log(data);
        event.target.appendChild(document.getElementById(data));
    };

  

      

