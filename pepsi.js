const blue = document.getElementById('blue');
const white = document.getElementById('white');
const black = document.getElementById('black');
const btn = document.getElementById('btn');


black.addEventListener('click', function master(){
    document.getElementById('big-img').src = './images/black.png';

    document.body.style.backgroundColor = '#242628';
})
white.addEventListener('click', function master(){
    document.getElementById('big-img').src = './images/white.png';

    document.body.style.backgroundColor = '#d01027';
})
blue.addEventListener('click', function master(){
    document.getElementById('big-img').src = './images/blue.png';

    document.body.style.backgroundColor = '#005c97';
})




