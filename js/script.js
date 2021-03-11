var calculateBtn = document.getElementById("calculate");


var burgerName = document.getElementById("burger_name").value;
calculateBtn.addEventListener("click", function(){

  if(burgerName.length < 1){

    alert("Inserisci il nome del panino");
  } else {

    var prezzoFinale = 10;

    var ingredientsList = document.getElementsByClassName("Ingredients");
    // console.log(ingredientsList);
    for (var i = 0; i < ingredientsList.length; i++){

      var listItem = ingredientsList[i];
      var ischecked = listItem.checked;
      var price = parseInt(listItem.dataset.price);
      console.log(listItem, ischecked);

      if (ischecked){

        prezzoFinale += price;
      }



    }

    var clietCoupon = document.getElementById("burger-coupon").value;
    console.log(clietCoupon);

    var coupons = [
      "asdtre",
      "cgftrn",
      "mnblkj"
    ];

    for (i = 0; i < coupons.length; i++){

      var couponAccepted = coupons[i];
    }

    if(couponAccepted == clietCoupon){

      prezzoFinale = prezzoFinale - prezzoFinale * 0.2;
    }
  }

  document.getElementById("prezzo").innerHTML = prezzoFinale;
  console.log(listItem, ischecked, prezzoFinale);

})
