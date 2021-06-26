
//aggancio il bottone "calculate_botton" dell'html alla variabile "calculateBtn" in js
var calculateBtn = document.getElementById("calculate_button");

var coupons = ["coupon1", "coupon2", "coupon3", "coupon4"];
var finalPrice;
var ingredients = document.getElementsByClassName("column");
calculateBtn.addEventListener("click", function(){

  //estraggo il valore dell'input "burger_name" dall'html".
  var burgerName = document.getElementById("burger_name").value;

  if (burgerName.length < 1){

    alert("Inserire il nome del panino")
  } else {

    finalPrice = 10;
    var checkboxes = document.getElementsByClassName("ingredients");

    for (var i = 0; i < checkboxes.length; i++){

      var singolCheckBox = checkboxes[i];
      var isChecked = singolCheckBox.checked;

      if (isChecked){

        var price = parseInt(singolCheckBox.dataset.price);
        finalPrice += price;

      }
    }

    var clietCoupon = document.getElementById("coupon_code").value;

    if (coupons.includes(clietCoupon)){

      finalPrice = finalPrice - (finalPrice * 20 / 100);
    }


  }

  var spanPrice = document.getElementById("prezzo");
  spanPrice.innerHTML = finalPrice;

})

for (var i = 0; i < ingredients.length;i++){

    var ingredient = ingredients[i];

    ingredient.addEventListener('click', function(){

      var item = (this);
      var input = item.children[1];

      input.checked = !input.checked;

      // ----- still don't know how to show the fake check------------
      var fakeCheck = document.getElementsByClassName('fake_check');
      if(input.checked){

        fakeCheck.addClass('fake_check_active');
      } else {

        fake_check.removeClass('fake_check_active')
      }
      // --------------------------------------------------------------
    })
}
