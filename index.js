/*
console.log("Hello world");//dang lam viec tren server*/


const express = require("express");
const morgan = require("morgan");
const app = express();

// start hosting nodejs port 5000
const PORT = process.env.PORT || 5000;
app.use(morgan("combined"));
app.set("view engine", "ejs");

app.listen(5000, function (){
    console.log ("server is running......");
});

// ket noi db de lam viec voi du lieu


const mssql = require("mssql");

app.use(express.static("public"));//cho phep cac file tinh (css, js, imgs)

// ket noi db de lam viec voi du lieu

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

//tao routing cho trang chu
app.get("/",function (req,res){
    res.send("Xinchao");
});

app.get("/product-detail",function (req,res){
    var prodcd = req.query.prodcode;
    var txt_sql = "Select * from Nhom3_Product where ProductCode like '"+prodcd+"'";
    console.log(txt_sql);
    sql.query(txt_sql,function (err,rows){
        if(err) res.send("Khong co don hang nao ca");
        else {
            if(rows.recordset.length>0) {
                var prod = rows.recordset[0];
                res.render("productdetail", {
                    prod: prod
                })
            }
        }
    })

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
app.get("/Home",function (req,res){
    res.render("home");
});
app.get("/Sign_in",function (req,res){
    res.render("sign_in");
});
app.get("/Register",function (req,res){
    res.render("register");
});
app.get("/header",function (req,res){
    res.render("header.ejs");
});
app.get("/footer_min",function (req,res){
    res.render("footer_min.ejs");
});
app.get("/header_min",function (req,res){
    res.render("header_min.ejs");
});
app.get("/footer",function (req,res){
    res.render("footer.ejs");
});
app.get("/pop-up_sign-in",function (req,res){
    res.render("pop-up_sign-in.ejs");
});






const express = require("express"); // goi module express de su dung
const app = express(); //xay nha-tao dich vu host
const port = process.env.PORT || 3000;//su dung port cua file env, neu khong co file nay thi su dung port 5000

//tao web, start hosting nodejs port 5000
app.listen(port,function (){
    console.log("Server is running...");
});
app.use(express.static("public"));//cho phep cac file tinh (css, js, imgs)

app.get("/",function (req,res){
    res.send("Xinchao");
});
