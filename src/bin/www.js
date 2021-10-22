"use strict";

const app = require("../app")

const PORT = 3000;


app.listen(PORT, () => {
  console.log('서버가동')
});

//노드 파일 실행시에는 이 파일을 실행시켜야함