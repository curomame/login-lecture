"use strict";



const output = {

  home : (req, res) => {
    res.render("home/index")
  },
  
  login: (req,res) => { 
    res.render("home/login")
  }

}

const users = {
  id : ["lee", "kim", "park"],
  pwd : ["1234", "123", "1235"]
};

const process = {
  login : (req,res) =>{
    const id = req.body.id,
      pwd = req.body.pwd;

    if (users.id.includes(id)){
      const idx = users.id.indexOf(id);
      if(users.pwd[idx] === pwd){
        return res.json({
          success : true,
        })
      }
    }
    return res.json({
      success : false,
      msg : "로그인에 실패하였습니다.",
    });
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