var  complimentTxt, complimentContainer;

document.querySelector(".toast").addEventListener('click', function(){

    var complimentNumber = Math.floor(Math.random() * 10);

    switch(complimentNumber){
        case 1: 
        complimentTxt = "You're an awesome friend."
        break;
        case 2: 
        complimentTxt ="You're a gift to those around you.";
        break;
        case 3: 
        complimentTxt ="You are making a difference.";
        break;
        case 4: 
        complimentTxt ="You are awesome!";
        break;
        case 5: 
        complimentTxt ="You're like a ray of sunshine on a really dreary day."
        break;
        case 6: 
        complimentTxt ="You should be proud of yourself."
        break;
        case 7: 
        complimentTxt ="You're more helpful than you realize."
        break;
        case 8: 
        complimentTxt ="You're someone's reason to smile."
        break;
        case 9: 
        complimentTxt ="You are strong."
        break;
        case 10: 
        complimentTxt ="I'm inspired by you."
        break;
        default: 
        complimentTxt ="On a scale from 1 to 10, you're an 11."
    }

    complimentContainer = document.querySelector('.compliment-container');
    complimentContainer.style.display = "block";
    complimentContainer.textContent = complimentTxt;

    setTimeout(disappearDiv, 4000);
    
})

function disappearDiv (){
    document.querySelector('.compliment-container').style.display = "none";
}
