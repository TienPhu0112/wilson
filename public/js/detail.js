var clicked;
var firsttime1 = true;
var firsttime2 = true;
var firsttime3 = true;
var trigger1 = true;
var trigger2 = true;

/*function changeprice(size){
    var sizeS = document.getElementById("sizeS");
    var sizeM = document.getElementById("sizeM");
    var sizeL = document.getElementById("sizeL");
    clicked = size;
    if(size=='sizeS') {
        sizeM.style.border = "2px solid lightgrey";
        sizeM.style.color = "lightgrey";
        sizeL.style.border = "2px solid lightgrey";
        sizeL.style.color = "lightgrey";
        sizeS.style.border = "2px solid #CF102D";
        sizeS.style.color = "#CF102D";
    }
    if(size=='sizeM') {
        sizeS.style.border = "2px solid lightgrey";
        sizeS.style.color = "lightgrey";
        sizeL.style.border = "2px solid lightgrey";
        sizeL.style.color = "lightgrey";
        sizeM.style.border = "2px solid #CF102D";
        sizeM.style.color = "#CF102D";
    }
    if(size=='sizeL') {
        sizeM.style.border = "2px solid lightgrey";
        sizeM.style.color = "lightgrey";
        sizeS.style.border = "2px solid lightgrey";
        sizeS.style.color = "lightgrey";
        sizeL.style.border = "2px solid #CF102D";
        sizeL.style.color = "#CF102D";
    }
}*/
/*function onmouseoverSize(size){
    var s = document.getElementById(size);
    s.style.border = "2px solid #CF102D";
    s.style.color = "#CF102D";
}
function onmouseoutSize(size){
    if(clicked!=size) {
        var s = document.getElementById(size);
        s.style.border = "2px solid lightgrey";
        s.style.color = "lightgrey";
    }
}*/
function changeMark(id1,id2){
    if(document.getElementById(id1).style.display!='none') {
        if(id2=="mark1" && firsttime1==true) {
            document.getElementById(id1).style.display = 'block';
            document.getElementById(id2).innerHTML = '<h5>ー</h5>';
            firsttime1 = false;
        }else if(id2=="mark2" && firsttime2==true) {
            document.getElementById(id1).style.display = 'block';
            document.getElementById(id2).innerHTML = '<h5>ー</h5>';
            firsttime2 = false;
        }else if(id2=="mark3" && firsttime3==true) {
            document.getElementById(id1).style.display = 'block';
            document.getElementById(id2).innerHTML = '<h5>ー</h5>';
            firsttime3 = false;
        }else {
            document.getElementById(id1).style.display = 'none';
            document.getElementById(id2).innerHTML = '<h5>＋</h5>';
        }
    }else{
        document.getElementById(id1).style.display='block';
        document.getElementById(id2).innerHTML='<h5>ー</h5>';
    }
}

function showphoto(){
    var modal = document.getElementById("myModal");

    // Get the image and insert it inside the modal - use its "alt" text as a caption
    var img = document.getElementById("myImg");
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = img.src;
    document.body.style.position = 'fixed';
}
function closemodal(){
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
    document.body.style.position = '';
}
function changesrc(src){
    var img = document.getElementById('myImg');
    img.src = src;
}
function changeimg(classname){
    var prebutton = document.getElementsByClassName(classname);
    prebutton[0].click();
}
function triggercontent(id1, id2){
    if(document.getElementById(id1).style.display!='none') {
        if(id2=="deliveryicon" && trigger1==true) {
            document.getElementById(id1).style.display = 'block';
            document.getElementById(id2).className = 'fas fa-chevron-up updownicon';
            trigger1 = false;
        }else if(id2=="returnicon" && trigger2==true) {
            document.getElementById(id1).style.display = 'block';
            document.getElementById(id2).className = 'fas fa-chevron-up updownicon';
            trigger2 = false;
        }else {
            document.getElementById(id1).style.display = 'none';
            document.getElementById(id2).className = 'fas fa-chevron-down updownicon';
        }
    }else{
        document.getElementById(id1).style.display = 'block';
        document.getElementById(id2).className = 'fas fa-chevron-up updownicon';
    }
}
function cartback(){
    var form = document.getElementById('contact_form');
    form.action = "show-card";
    form.submit();
}

function remove(itemid) {
    var items = document.getElementsByClassName('cartitem');
    var item;
    for(var i = 0;i<items.length;i++){
        if(items[i].getAttribute("proId")===itemid){
            item = items[i];
        }
    }
    var cart = JSON.parse(localStorage.getItem("cart"));
    /*var count = 0;*/
    if(cart!==null){
        for( var i = 0; i < cart.length; i++){
            var tmpitem = cart[i];
            if(tmpitem.itemid===itemid) {
                cart.splice(i, 1);
                item.style.display='none';

            }
        }
    }
    localStorage.setItem("cart",JSON.stringify(cart));
    window.open('show-card','_self');
}

function  additem(){
    var cart=[];
    if(JSON.parse(localStorage.getItem("cart"))!==null){
        cart = JSON.parse(localStorage.getItem("cart"));
    }
    var itemid = document.getElementById("productsname").getAttribute("proId");
    var itemname = document.getElementById("productsname").innerText;
    var itemprice = parseInt(document.getElementById("productsname").getAttribute("value"));
    var itemqtt = parseInt(document.getElementById("prodductsqtt").value);
    var itemphoto = document.getElementById("myImg").getAttribute("src");
    var item = {
        itemid: itemid,
        itemname: itemname,
        itemqtt: itemqtt,
        itemprice: itemprice,
        itemphoto: itemphoto
    };
    var exist = false;
    if(cart!==null){
        for( var i = 0; i < cart.length; i++){
            var tmpitem = cart[i];
            if(tmpitem.itemid===item.itemid) {
                item.itemqtt = item.itemqtt + tmpitem.itemqtt;
                cart.splice(i, 1);
                cart.push(item);
                exist = true;
                localStorage.setItem("cart",JSON.stringify(cart));
            }
        }
    }
    if(exist===false){
        cart.push(item);
        localStorage.setItem("cart",JSON.stringify(cart));
    }
    window.open('product-detail','_self');
}
function showcart(){
/*    alert("OK");
    const page = window.open('show-card');
    alert("OK2");
    page.addEventListener('DOMContentLoaded', () => {*/
    var cart = JSON.parse(localStorage.getItem("cart"));
    var cartbodys = document.getElementsByClassName("yourcartbody");
    var cartbody = cartbodys[0];
    if(cart.length>0){
        var subtotal = 0;
        var formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        });
        for(var i = 0; i < cart.length; i++) {
            var tmpitem = cart[i];
            subtotal = subtotal + parseInt(tmpitem.itemqtt)*parseInt(tmpitem.itemprice);
            cartbody.innerHTML = cartbody.innerHTML + "<div class='cartitem' proId ='" + tmpitem.itemid + "'>" +
                "                            <img src='" + tmpitem.itemphoto + "'/>" +
                "                            <div class='yourcartcontent'>" +
                "                                <h4 class='itemname'>" + tmpitem.itemname + "</h4>" +
                "                                <p><b>SKU:</b><span>WBW10024012</span></p>" +
                "                                <p><b>Glove Size:</b><span>12\"</span></p>" +
                "                                <p><b>Throwing Hand:</b><span>Right</span></p>" +
                "                                <p><b>Price:</b><span>$" + tmpitem.itemprice + "</span></p>" +
                "                                <p>" +
                "                                    <span><b>Quantity:</b></span>" +
                "                                    <input type='text' class='qtt' value='" + tmpitem.itemqtt + "'/>" +
                "                                    <span class='removebtt' onclick=remove('" + tmpitem.itemid + "')><u>Remove</u></span>" +
                "                                </p>" +
                "                            </div>" +
                "                        </div>";
        }
        document.getElementById('subtotal').innerText = formatter.format(subtotal);
        document.getElementById('taxtotal').innerText = formatter.format(subtotal/10);
        document.getElementById('totalmoney').innerText = formatter.format(subtotal*11/10);
    }else{
        var cartempty = document.getElementsByClassName('cartempty');
        cartempty[0].innerHTML = '<p>Your cart is empty.</p>';
    }
}
