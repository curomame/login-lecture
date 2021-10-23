"use strict";


const output = {

  home : (req, res) => {
    res.render("home/index")
  },
  
  login: (req,res) => { 
    res.render("home/login")
  }

}

const process = {
  login : (req,res) =>{
    console.log(req.body);
  }
}


module.exports = {
  output,
  process
}

/*
오브젝트는 원래 key 와 value 로 구성되는데
키값만 넣으면 key = key로 해서 구성되는거다
그냥 바로 넣으면 바로 값이 들어감

*/