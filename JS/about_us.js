const pop = document.getElementById('pop_btn');
const pop_up = document.getElementById('popup');
var count = 0;

function handlePopup(){
    count++;
    if(count % 2 === 0){
        pop_up.style.display = 'block';
    }
    else{
        pop_up.style.display = 'none';
    }
}

pop.addEventListener('click', handlePopup);