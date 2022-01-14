const sendBtn=document.querySelector('.sendBtn');
const messageIn=document.querySelector('.messageIn');
const messageOut=document.querySelector('.messageOut');


sendBtn.addEventListener('click',send);
function send(){
    let content=messageIn.value;
    if(messageIn.value==''){
        alert('pleas enter somthing');
    }
    else{
        messageOut.innerHTML=content;
        messageIn.value='';
    }
}


