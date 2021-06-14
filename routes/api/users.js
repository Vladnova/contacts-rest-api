const express =require("express");
const {ctrl}=require('../controllers/users')
const router=express.Router();
const validate =require("../validates");


 router.post("/signup", express.json(), ctrl.signup);

 router.post("/login", express.json(), validate.login, ctrl.login);
