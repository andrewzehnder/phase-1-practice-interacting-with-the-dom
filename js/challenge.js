//Counts up 1 every second

let seconds = 0;
let counter = document.getElementById('counter');
let paused = 'false'

function addSecondstoCounter() {
    if (paused !== 'true') {
    seconds += 1;
    counter.innerText = seconds
    }
}

let displayCounter = setInterval(addSecondstoCounter, 1000);

//Removes 1 second when - is pushed

let minusButton = document.getElementById('minus');
minusButton.addEventListener('click', removeOneSecond);

function removeOneSecond() {
    seconds -= 1;
    counter.innerText = seconds;
}

//Adds 1 second when + is pushed

let plusButton = document.getElementById('plus');
plusButton.addEventListener('click', addOneSecond);

function addOneSecond() {
    seconds += 1;
    counter.innerText = seconds;
}

//Add like to individual counter - working, need to work on numberOfLikes counter

let heartButton = document.getElementById('heart');
heartButton.addEventListener('click', addLikedNumber);

let numberOfLikes = 1

function addLikedNumber() {
    let likeComment = document.createElement('li');
    likeComment.className = 'likedNumber';
    likeComment.textContent = (`${seconds} has been liked ${numberOfLikes} time`);

    let addToLikes = document.getElementsByClassName('likes');
    addToLikes[0].appendChild(likeComment);
}

//Pause counter and submit button and changes the text to resume

let pauseButton = document.querySelector('#pause');
pauseButton.addEventListener('click', updatePause);

function updatePause() {
    if (paused === 'false'){
    paused = 'true'
    minusButton.setAttribute('disabled', 'disabled')
    plusButton.setAttribute('disabled', 'disabled')
    heartButton.setAttribute('disabled', 'disabled')
    commentButton.setAttribute('disabled', 'disabled')
    pauseButton.innerText = 'resume'
    }
    else {
        paused = 'false'
        minusButton.removeAttribute('disabled', 'disabled')
        plusButton.removeAttribute('disabled', 'disabled')
        heartButton.removeAttribute('disabled', 'disabled')
        commentButton.removeAttribute('disabled', 'disabled')
        pauseButton.innerText = 'pause'
    }
}

//Add Comment

let commentButton = document.getElementById('submit');
commentButton.addEventListener('click', submitComment);

function submitComment(e) {
    e.preventDefault();
    let p = document.createElement('p');
    p.className = 'submittedComment';
    let commentText = document.querySelector('#comment-input');
    p.textContent = commentText.value;
    console.log(p.textContent);

    let addToSubmit = document.getElementById('list');
    addToSubmit.appendChild(p);
}

