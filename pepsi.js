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

console.log('master()')


// blue.addEventListener('click', function(){
//     const image = document.getElementById('big-img')
//     image.src='./'

//     // document.body.style.backgroundColor = ''
// })

// white.addEventListener('click', function master(){

//     const image = document.getElementById('big-img')
//      image.s

//     //  document.body.style.backgroundColor = ''
// })

// black.addEventListener('click', function(){
//     const image = document.getElementById('big-img')
//     image.style.display='none'

//     // document.body.style.backgroundColor = ''
// })

// function myFunction(){
//     const image = document.getElementById('big-img').style.display = 'none';
// }



const master = document.querySelector('#master')

master.addEventListener('input', function(){
    var pNoise = this.value
    var noise = this.value.length
    var current = document.getElementById('current')
    var maximum = document.getElementById('maximum')

    current.innerText = 140 - (noise)

    if(noise >= 1){
        document.getElementById('brn').classList.remove('btn-dis')
        document.getElementById('brn').style.backgroundColor = '#fb2'
    }if(noise > 140 || noise < 1){
         document.getElementById('brn').style.backgroundColor = '#f09'
        document.getElementById('brn').classList.add('btn-dis')
    }

    if(noise >= 120 && noise ){
        current.style.color = '#f09'
        maximum.style.color = '#f09'
    }
     else{
      current.style.color = '#000'
      maximum.style.color = '#000'
     }
})

const clear = document.getElementById('clear')

clear.addEventListener('click', function(){
    document.getElementById('master').value = ''
    current.innerText = 140
     
     current.style.color = '#000'
     maximum.style.color = '#000'
})