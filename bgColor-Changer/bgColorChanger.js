const body = document.querySelector('body');
const buttons = document.querySelectorAll('.button');

buttons.forEach( (btn)=> {
    btn.addEventListener('click', (e)=>{
        if(e.target.id === 'grey'){
            body.style.background = e.target.id;
        } else if(e.target.id === 'white'){
            body.style.background = e.target.id;
        } else if(e.target.id === 'yellow'){
            body.style.background = e.target.id;
        } else if(e.target.id === 'blue'){
            body.style.background = e.target.id;
        }
    });
});