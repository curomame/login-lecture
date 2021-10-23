"use strict";

const express = require('express');
const router = express.Router();
const ctrl = require('./home.ctrl')

router.get('/', ctrl.output.home);
router.get('/login',ctrl.output.login);
router.post('/login',ctrl.process.login);


module.exports = router;

//컨트롤러 = 라우트에 뭔가 요청이 왔을때 기능을 담당하는 부분