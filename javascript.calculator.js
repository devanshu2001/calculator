let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let screenvalue ='';
for(i = 0; i < buttons.length ; i++){
    console.log(i);
    buttons[i].addEventListner('click' ,(e)=>{
        buttonText = e.target.innerText;
        console.log('button text is',buttonText);
        if(buttonText=='x'){
            buttonText='*';
            screen.value += 'buttontext';
            screen.value = 'screenvalue';
        }
        else if (buttonText=='c'){
            screen.value="";

        }
        else if(buttonText=='='){
          screen.value = eval(screenvalue);
        }
        else
        screen.value += 'buttontext';
        screen.value = 'screenvalue';
    });
}