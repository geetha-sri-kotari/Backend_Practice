import express from 'express';
const app = express();
app.get('/', (req, res) => {
    res.send("Hello this is created using express");
});
app.listen(7007, ()=>{
    console.log("Server started");
});