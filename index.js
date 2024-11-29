const express = require('express');
const app = express();
const port = 7000;



function checkdate(req,res,next){
    const date = new Date();
    const day = date.getDay()	
    const hour = date.getHours()
//
    if (day >=1 && day <=5 && hour >=9 && hour <=17){
        next()

    }else{
        res.send('<h1>the page is available only in workdays</h1>')
    }
}


app.use(express.static('public'))

app.use(checkdate)

app.get('/style.css',(req,res)=>{
    res.sendFile(__dirname+"/public/style.css")
})

app.get('/', (req,res,next)=>{
    res.sendFile(__dirname+'/home.html')
})

app.get('/contact', (req,res,next)=>{
    res.sendFile(__dirname+'/contact.html')
})

app.get('/services', (req,res,next)=>{
    res.sendFile(__dirname+'/services.html')
})

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
})