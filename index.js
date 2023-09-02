import express from "express";
import ejs from "ejs";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));

const data = {
    today : [],
    work : []
}

app.listen(port , () => {
    console.log("Server is running on port 3000.");
});

app.get("/", (req , res) => {
    res.render("index.ejs" , data);
});

app.get("/work" , (req , res) => {
    res.render("work.ejs" , data);
})

app.post("/daysubmit", (req , res) => {
    const task = req.body.fname;
    data.today.push(task);
    res.render("index.ejs" , data);
    
});

app.post("/worksubmit", (req , res) => {
    const task = req.body.fname;
    data.work.push(task);
    res.render("work.ejs" , data);
    
});





