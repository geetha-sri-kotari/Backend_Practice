const express = require('express')
const app = express();
app.use(express.json());
// methods - from frontend perspective
app.get('/get-user', (req, res) => {
    res.send("api success");
})
app.post('/add-user', (req, res) => {
    let data = req.body;
    console.log(data); // undefined
    // login to add data into your data base
    res.send("data added");
});
app.put('/edit-user', (req, res) => {
    let myData = req.body;
    console.log(myData);
    res.send("data edited");
});
app.delete('/delete-user', (req, res) => {
    res.send("deleted user");
});
app.listen(7007, ()=>{
    console.log("Server started");
});