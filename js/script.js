
function Order(size, toppings, crusts){
this.sizes= size;
this.toppings= toppings;
this.crusts= crusts;
this.totalPrice= price;
}
Order.prototype.fullOrder=function(){
    return (this.size +" "+ this.toppings +" "+ this.crusts);
}

function totalprices(size, toppings, crusts){
    if(size=== && toppings===tomatoSauce && crusts===cripsy){
        totalprice=size+toppings+crusts;
    }
    return(totalprice);
    alert("total prices");
}

$(document).ready(funcion()) 
    $("form#pizza").submit(function(event){
        event.preventDefault();
    });

        var size= $("select#size").val();
        var toppings= $("select#toppings").val();
        var crusts= $("select#crust").val();
        var newOrder= new Order(size, toppings, crusts);
        $("btn").clickfunction()
        $(".lower").show();
        $(".size").text(newOrder.size);
        $(".toppings").text(newOrder.toppings);
        $(".crust").text(newOrder.crusts    );
        $(".price").text(newOrder.price);
    
    console.log(newOrder);
    $(document).ready(function(){
        $("pizza").submit(function(){
          alert("Submitted");
        });
        $("sub").click(function(){
          $("pizza").submit();
        }); 
      });





