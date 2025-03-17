const button1 = document.querySelector('.button1');

const button2 = document.querySelector('.button2');

const button3 = document.querySelector('.button3');

 

function resetButtons(){

    button1.classList.remove('toggle-on');

    button2.classList.remove('toggle-on');

    button3.classList.remove('toggle-on');

}

/*

function setOn(button){

    resetButtons();

    if (button.classList.contains('button1')) {

        document.querySelector('.button1').classList.add('toggle-on');

    } else if (button.classList.contains('button2')) {

        document.querySelector('.button2').classList.add('toggle-on');

    } else {

        document.querySelector('.button3').classList.add('toggle-on');

    }

}

*/

function setOn(button){

    resetButtons();

    button.classList.add('toggle-on');

}