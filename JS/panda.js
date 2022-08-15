// 1st practise 
const h2bhaiya = document.getElementsByTagName('h2');
for(const h2bhai of h2bhaiya){
    h2bhai.style.color = '#3B9AE1';
}
// 1st practice done 

// 2nd practice 
const backpacks = document.getElementById('backpack');
backpacks.style.backgroundColor = 'tomato';
// 2nd practice done

// 3rd practice 
const cards = document.getElementsByClassName('card');
for(cardvai of cards){
    cardvai.style.borderRadius = '30px'
}
// 3rd practice done 

// 4th practce 
function postBtn(){
    console.log('panda khan')
}
// 4th practice undone----------------

// 5th practice
const buyNowButtons = document.getElementsByClassName('panda-btn-buynow');
for(const buyNowButton of buyNowButtons){
    buyNowButton.addEventListener('click', function(buyNow){
        buyNow.target.parentNode.removeChild(buyNow.target)
    })
}
// 5th practice done 

// 6th practice 
document.getElementById('exampleInputEmail1').addEventListener('keyup', function(inputtext){
    const text = inputtext.target.value;
    const submitButton = document.getElementById('submit-btn');
    if(text === 'email'){
        submitButton.removeAttribute('disabled')
    }
    else{
        submitButton.setAttribute('disabled', true)
    }
})
// 6th practice done 

// 7th practise 



