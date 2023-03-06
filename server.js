
const express = require('express');
const path = require('path');
const bodyParser = require("body-parser");

const app = express();

//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({extended: false}));

console.log(__dirname);
console.log( path.join(__dirname, 'public'));

app.use( express.static(path.join(__dirname, 'public')));




app.get('/a(bo)?ut', (req, res)=>{

    console.log(req.query);
    console.log(req.params);
    
    if(req.query.teamid && req.query.teamid === '32'){
            // if team ID - 32
            res.send({
                name : 'User',
                phone : '12234'
            });
            return;
    }

    //else No data found
    res.send("No  data found");
})

app.get('/about/:teamid', (req, res)=>{

    console.log(req.params);

    if(req.params.teamid && req.params.teamid === '32'){
        res.send("Team 32 found");
        return;
    }
    res.send("team not found");

});


app.get('/about/:teamid/:location', (req, res)=>{

    console.log(req.params);
    console.log(req.query.info);
    
        res.send("Team location "+req.params.location + " team id is "+ req.params.teamid);
       

});

app.post('/saveAddress',(req, res)=>{
    let data = req.body;
    console.log(data);
    res.send("address received")
})

app.post('/saveUser', (req, res)=>{

    let data = req.body;
    console.log(data);
    res.send('Data received');

})




let userOne = "User One";
let userTwo = "User Two"
app.get('/user',  (req, res, next)=>{
    res.send( `<h1> Heading </h1>
                <ul> 
                    <li>${userOne} </li>
                    <li>${userTwo} </li>
                 </ul>
            `
    )
})

//app.post()



app.get( '*', (req, res)=>{
    res.send("Please check the URL !")
})

app.listen(3000, ()=>{
    console.log("server up and running on 3000 port!")
})

