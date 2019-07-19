reg = /^[a-zA-Z]+$/;
mail = /\S+@\S+\.\S+/;
phone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;


Array.from(document.getElementsByClassName("add")).forEach( function(element){
    element.addEventListener("click", function(event){
       Array.from(document.getElementsByClassName("quantity")).forEach(function(element) {

      element.value = element.value + 1;



       })
    })
});


document.getElementById("firstName").addEventListener("blur", function(event) {
    var value = document.getElementById("firstName").value;
    if (value == "" || reg.test(value) == false) {
        document.getElementById("firstName").setAttribute("style", "border: 1px solid red;");
        document.getElementById("errfname").setAttribute("style", "display: block; color:red;");
    } else {
        
        document.getElementById("firstName").setAttribute("style", "border: 1px solid #777777;");
        document.getElementById("errfname").setAttribute("style", "display: none; color:red;");
    }
});



document.getElementById("lastName").addEventListener("blur", function(event) {
    var value = document.getElementById("lastName").value;
    if (value == ""  || reg.test(value) == false) {
        document.getElementById("lastName").setAttribute("style", "border: 1px solid red;");
        document.getElementById("errlname").setAttribute("style", "display: block; color:red;");
        
    } else {
        document.getElementById("lastName").setAttribute("style", "border: 1px solid #777777;");
        document.getElementById("errlname").setAttribute("style", "display: none; color:red;");
    }
});


document.getElementById("email").addEventListener("blur", function(event) {
    var value = document.getElementById("email").value;
    if (value == ""  || mail.test(value) == false) {
        document.getElementById("email").setAttribute("style", "border: 1px solid red;");
        document.getElementById("errmail").setAttribute("style", "display: block; color:red;");
    } else {
        document.getElementById("email").setAttribute("style", "border: 1px solid #777777;");
        document.getElementById("errmail").setAttribute("style", "display: none; color:red;");
    }
});



document.getElementById("phone").addEventListener("blur", function(event) {
    var value = document.getElementById("phone").value;
    if (phone.test(value) == false) {
        document.getElementById("phone").setAttribute("style", "border: 1px solid red;");
        document.getElementById("errphone").setAttribute("style", "display: block; color:red;");
    } else {
        document.getElementById("phone").setAttribute("style", "border: 1px solid #777777;");
        document.getElementById("errphone").setAttribute("style", "display: none; color:red;");
    }
});


