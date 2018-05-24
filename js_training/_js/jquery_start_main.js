$(document).ready(function(){
    //alert("jquery !!!");
    //doAjax();

    doAjaxPromises()
});

function doAjaxPromises(){
    $.ajax({
        url: "http://localhost:3000/",
        crossDomain:true,
        dataType:"json"
    }).done(function( res ) {
            console.log(res);
            createCakes(res);
        });

    alert("Waiting for a response from the server")
}

function doAjax(){
    //make ajax with callback success or error
    $.ajax({
        url:"http://localhost:3000/",
        crossDomain:true,
        dataType:"json",
        success:function(res){
            console.log(res);
            createCakes(res);
        },
        error:function(err){
            console.log("error:"+err)
        }
    })
}

function createCakes(_ar) {
    for(var i in _ar) {
        var item = _ar[i];
        var myCake = new CakeClass(id_parent, item.image, item.name, item.cal, item.price);
        myCake.addToHtml();
    }

}