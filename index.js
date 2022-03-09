let gmail=document.getElementById('inputFuild');
gmail.value='';
let password=document.getElementById('inputPassword');
password.value='';
let span=document.getElementsByTagName('span');

gmail.onkeydown=function(){
    const gmailfuild=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(gmailfuild.test(gmail.value)){
  span[0].innerText='your email is vaild';
  span[0].style.color='lime'
    }
    else{
        span[0].innerText='your email is invaild ';
  span[0].style.color='red'
    }
}

password.onkeydown=function(){
    const passwordVaild=/^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$/;
    if(passwordVaild.test(password.value)){
     span[1].innerText='your password is correct';
     span[1].style.color='lime'
    }
    else{
        span[1].innerText='your password is incorrect';
        span[1].style.color='red' 
    }
}
