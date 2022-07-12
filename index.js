
//select all elements of the class "drum"
const drumButtons = document.querySelectorAll('.drum');

// iterate over chosen elements
for (let btnNum = 0; btnNum < drumButtons.length; btnNum++) {

    let drumButton = drumButtons[btnNum]; //element by index

    drumButton.addEventListener('click', playSound); //onclick plays sound

    drumButton.addEventListener('mouseover', pressKeyByBtnNum); //show which key belongs to which button

    // play sound when key is pressed or on mouseclick
    //@param keyPressed is from function playByKeys
    function playSound(keyPressed) {

        let drumSound;

        if (keyPressed === 'w' || btnNum === 0) {
            drumSound = new Audio('sounds/tom-1.mp3');
        } else if (keyPressed === 'a' || btnNum === 1) {
            drumSound = new Audio('sounds/tom-2.mp3');
        } else if (keyPressed === 's' || btnNum === 2) {
            drumSound = new Audio('sounds/tom-3.mp3');
        } else if (keyPressed === 'd' || btnNum === 3) {
            drumSound = new Audio('sounds/tom-4.mp3');
        } else if (keyPressed === 'x' || btnNum === 4) {
            drumSound = new Audio('sounds/snare.mp3');
        } else if (keyPressed === 'c' || btnNum === 5) {
            drumSound = new Audio('sounds/crash.mp3');
        } else if (keyPressed === 'v' || btnNum === 6) {
            drumSound = new Audio('sounds/kick-bass.mp3');
        } else {
            return
        }
        drumSound.play();
    };

    //onMouseOver displays name of the drum in the button text 
    function pressKeyByBtnNum(event) {
        let btnOnMouse = event.target;
        let btnLabel = btnOnMouse.innerText;

        switch (btnNum) {
            case 0:
                btnOnMouse.innerText = 'tom 1';
                break
            case 1:
                btnOnMouse.innerText = 'tom 2';
                break
            case 2:
                btnOnMouse.innerText = 'tom 3';
                break
            case 3:
                btnOnMouse.innerText = 'tom 4';
                break
            case 4:
                btnOnMouse.innerText = 'snare';
                break
            case 5:
                btnOnMouse.innerText = 'crash';
                break
            case 6:
                btnOnMouse.innerText = 'kick';
                break
        }

        drumButton.addEventListener('mouseout', function () {  //onmouseout displays original text of the button
            btnOnMouse.innerText = btnLabel;
        });

    }

}

//check key pressed and if they match allowed keys, calls function playSound
document.addEventListener('keydown', function playByKeys(event) {
    let keyPressed = event.key;
    let allowedKeys = ['w', 'a', 's', 'd', 'x', 'c', 'v'];
    if (allowedKeys.includes(keyPressed)) {
        playSound(keyPressed);
    }
});


