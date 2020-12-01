const { response } = require('express');
const express = require('express');
const bodyparser = require('body-parser');
const { default: Axios } = require('axios');

const app = express();
app.use(bodyparser.urlencoded({extended: true}));

app.get('/',(request,response)=>{
    response.sendFile(__dirname + '/index.html');
    //someting
});

app.post('/',(request, response)=>{
    let userchoice = request.body;
    console.log(userchoice)

    Axios.get('https://api.coindesk.com/v1/bpi/currentprice/eur.json')
.then(res => {

let eur = res.data.bpi.EUR.rate;
let usd = res.data.bpi.EUR.rate;
console.log('EUR', eur)
console.log('USD', usd)

if(userchoice === 'EUR'){
response.send('EUR' + eur);
}else {
    response.send('USD' + usd)
}


//console.log(res.data.bpi.use);
});


})

app.get('/about',(request,response) => {
    response.send("some about msg")
});

app.get('/contact',(request,response) => {
    response.send("911")
});


app.listen(3000,()=>{
    console.log('server is running port 3000');
});