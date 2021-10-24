"use strict";

const id  = document.querySelector('#id'),
  name  = document.querySelector('#name'),
  pwd  = document.querySelector('#pwd'),
  confirmPwd  = document.querySelector('#confirm-pwd'),
  registerbtn = document.querySelector('#button');
 

registerbtn.addEventListener("click", register)

function register(){

if (!id.balue) return alert("아이디를 입력해주세요!")

if(pwd.value !== confirmPwd.value) return alert("입력한 비밀번호가 일치하지 않습니다.")

  const req = {
    id : id.value,
    name : name.value,
    pwd : pwd.value,
  };



  fetch("/register",{
    method : "POST",
    headers:{
      "Content-Type" : "application/json",
    },
    body : JSON.stringify(req)
  }).then((res) => res.json())
    .then((res)=>{
      if (res.success){
        location.href ="/login";
      } else {
        alert(res.msg);
      }
    }).catch((err) => {
      console.error("회원가입 중 에러 발생");
    })
}