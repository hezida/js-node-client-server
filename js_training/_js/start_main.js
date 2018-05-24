var json_ar =[
    {
        image:"pic3.jpg",
        name:"vanila cake",
        cal:500,
        price:40

    },
    {
        image:"pic4.jpg",
        name:"mango cake",
        cal:500,
        price:40

    },
    {
        image:"pic1.jpg",
        name:"apple cake",
        cal:500,
        price:40

    }
]

window.onload = function(){

    createCakes(json_ar);
}

function createCakes(_ar) {
    for(var i in _ar) {
        var item = _ar[i];
        var myCake = new CakeClass(id_parent, item.image, item.name, item.cal, item.price);
        myCake.addToHtml();
    }

}