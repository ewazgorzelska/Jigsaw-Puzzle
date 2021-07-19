    const dropBoxes = document.querySelectorAll('.dropBox');
    const pieces = document.querySelectorAll('.pieces');

    const drag = event => {
        event.dataTransfer.setData("text", event.target.id);
    };

    const allowDrop = event => event.preventDefault();

    const drop = event => {
        event.preventDefault();
        const data = event.dataTransfer.getData("text");
        console.log(data);
        event.target.appendChild(document.getElementById(data));
    }

    for(let i=0; i < dropBoxes.length; i++) {
        dropBoxes[i].addEventListener('ondrop', drop);
        dropBoxes[i].addEventListener('ondragover', allowDrop);
    }

    for(let i=0; i < pieces.length; i++) {
        pieces[i].addEventListener('ondragstart', drag);
    }

