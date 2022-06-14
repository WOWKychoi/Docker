const express = require("express");
const app = express();
app.listen(8989);
const redis = require("redis");

const client = redis.createClient({
    host:"redis-server",
    port:6379 
});

client.set("number",0);

app.get('/', (req,res)=>{
    client.get("number", (err,number)=>{
        //현재 숫자를 가져온 후에 1씩 올려줍니다
        client.set("number",parseInt(number)+1)
        res.send("숫자가 1씩 올라갑니다. 숫자:"+ number);
    })
})


console.log('Servier is running');
