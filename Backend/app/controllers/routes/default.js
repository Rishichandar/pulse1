const express=require('express')

const route=express.Router()
route.get('/',(req,res)=>{
    res.json("it's default browser")
})

module.exports=route