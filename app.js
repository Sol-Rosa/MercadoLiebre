const express= require("express");
const app = express();

const path = require ("path");

app.listen(3000, () => 
    console.log("Servidor corriendo")
);

const publicPath = path.resolve(__dirname, "./public");
app.use( express.static(publicPath ));


app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname,"./views/home.html"));
})

app.get("/login",(req,res)=>{
    res.sendFile(path.resolve("./views/login.html"));
})
app.get("/register",(req,res)=>{
    res.sendFile(path.resolve("views/register.html"));
})

