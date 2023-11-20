let express = require("express")
let app = express ();
let path = require("path");
app.listen(8000, () => console.log("esto fue exitoso"));


app.get("/", (req, res) => { 
    res.sendFile(path.join(__dirname, "/views/index.html"))
});




app.get("/logo-estudio", (req, res) =>{
    res.sendFile(path.join(__dirname, "/views/index.html"))
});


app.use(express.static("public"));

