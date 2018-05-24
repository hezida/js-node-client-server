function CakeClass(_parent,_img,_name,_cal,_price){
    this.parent = _parent;
    this.img = _img;
    this.name = _name;
    this.cal = _cal;
    this.price = _price;


}

CakeClass.prototype.addToHtml = function(){
    var newBox = document.createElement("div");
    newBox.className = "box";
    this.parent.appendChild(newBox);

    var newImg = document.createElement("img");
    newImg.src = "_images/"+this.img;
    newBox.appendChild(newImg);

    newBox.innerHTML += "<h2>"+this.name+"</h2>";
    newBox.innerHTML += "<div>cal:"+this.cal+"</div>";
    newBox.innerHTML += "<div>price:"+this.price+"</div>";
    //newBox.innerHTML = "test"
}