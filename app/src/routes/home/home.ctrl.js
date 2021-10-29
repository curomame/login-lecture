"use strict";

const User = require("../../models/User");

const output = {

  home : (req, res) => {
    res.render("home/index")
  },
  
  login: (req,res) => { 
    res.render("home/login")
  },

  register : (req,res) => {
    res.render("home/register");
  }

}


const process = {
  login : async (req,res) =>{

    const user = new User(req.body);
    const response = await user.login();
    return res.json(response); 
  },
  register : async (req,res)=>{
    const user = new User(req.body);
    const response = await user.register();
    return res.json(response); 
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