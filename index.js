/*
console.log("Hello world");//dang lam viec tren server*/

const express = require("express"); // goi module express de su dung
const app = express(); //xay nha-tao dich vu host
const port = process.env.PORT || 5000;//su dung port cua file env, neu khong co file nay thi su dung port 5000

//tao web, start hosting nodejs port 5000
app.listen(port,function (){
    console.log("Server is running...");
});
app.use(express.static("public"));//cho phep cac file tinh (css, js, imgs)

// ket noi db de lam viec voi du lieu
const mssql = require("mssql");
const config = {
    server: "118.70.125.210",
    user: "sa",
    password: "z@GH7ytQ",
    database: "QuangHoa"
};
mssql.connect(config,function(err){
    if(err) console.log(err);
    else console.log("ket not DB thanh cong!");
});

// tao bien lam viec voi db
const sql = new mssql.Request();

// khai bao web se dung view engine la ejs
app.set("view engine","ejs");

//tao routing cho trang chu
app.get("/",function (req,res){
    res.send("Xinchao");
});

app.get("/product-detail",function (req,res){
    res.render("productdetail");
});
app.get("/show-card",function (req,res){
    res.render("showcard");
});
app.get("/check-out",function (req,res){
    res.render("checkout");
});
app.get("/order-complete",function (req,res){
    res.render("ordercomplete");
});
app.get("/contact-us",function (req,res){
    res.render("contact-us");
});
app.get("/louisville",function (req,res){
    res.render("louisville");
});
app.get("/demarini",function (req,res){
    res.render("Demarini");
});
