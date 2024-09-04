
alert("Prince Mishra's Creation \n Click ok to continue.->")

const leftbar = document.querySelector('.left');
let hamClick = false
document.querySelector('.ham').addEventListener('click', () => {
    // alert('hello')

    if (hamClick) { 
         leftbar.style.left = "-1100px"
         hamClick = false
    }
    else {
        leftbar.style.left = "0px"
        leftbar.style.backgroundColor = "black"
        hamClick = true
    }
})