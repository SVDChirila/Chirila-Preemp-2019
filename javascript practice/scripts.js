// --------------------------- VARIABLES -----------------------------------
var reg = /^[a-zA-Z]+$/;
var mail = /\S+@\S+\.\S+/;
var phone = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
var frm = document.getElementById("form");

var fname = document.getElementById("firstName");
var lname = document.getElementById("lastName");
var email = document.getElementById("email");


var addbtn = document.getElementsByClassName("add");

var sum = document.getElementById("total");
var rembtn = document.getElementsByClassName("remove");

var flags = {
    lastName: false,
    firstName: false,
    email: false,
}

var fnameflag = false;
var lnameflag = false;
var emailflag = false;



//------------------------------------- Var for validation --------------------------------- 


var lnameid = "lastName";
var lnameerr = "errlname";
var fnameid = "firstName";
var fnameerr = "errfname";
var mailid = "email";
var mailerr = "errmail";
var phoneid = "phone";
var phonerr = "errphone";





// -----------------------------------------------------------------------------------------








// -------------------------------------------------------------------------------


// frm.action = "";



// document.getElementById("firstName").addEventListener("blur", function(event) {
//     var value = document.getElementById("firstName").value;
//     if (value == "" || reg.test(value) == false) {
//         document.getElementById("firstName").setAttribute("style", "border: 1px solid red;");
//         document.getElementById("errfname").setAttribute("style", "display: block; color:red;");
//         fnameflag = false;
//     } else {

//         document.getElementById("firstName").setAttribute("style", "border: 1px solid #777777;");
//         document.getElementById("errfname").setAttribute("style", "display: none; color:red;");
//         fnameflag = true;
//     }
//     enableChk();
// });



// document.getElementById("lastName").addEventListener("blur", function(event) {
//     var value = document.getElementById("lastName").value;
//     if (value == ""  || reg.test(value) == false) {
//         document.getElementById("lastName").setAttribute("style", "border: 1px solid red;");
//         document.getElementById("errlname").setAttribute("style", "display: block; color:red;");
//         lnameflag = false

//     } else {
//         document.getElementById("lastName").setAttribute("style", "border: 1px solid #777777;");
//         document.getElementById("errlname").setAttribute("style", "display: none; color:red;");
//         lnameflag = true;
//     }
//     enableChk()
// });


// document.getElementById("email").addEventListener("blur", function(event) {
//     var value = document.getElementById("email").value;
//     if (value == ""  || mail.test(value) == false) {
//         document.getElementById("email").setAttribute("style", "border: 1px solid red;");
//         document.getElementById("errmail").setAttribute("style", "display: block; color:red;");
//         emailflag = false;
//     } else {
//         document.getElementById("email").setAttribute("style", "border: 1px solid #777777;");
//         document.getElementById("errmail").setAttribute("style", "display: none; color:red;");

//         emailflag = true;
//     }
//     enableChk();
// });



// document.getElementById("phone").addEventListener("blur", function(event) {
//     var value = document.getElementById("phone").value;
//     if (phone.test(value) == false) {
//         document.getElementById("phone").setAttribute("style", "border: 1px solid red;");
//         document.getElementById("errphone").setAttribute("style", "display: block; color:red;");
//     } else {
//         document.getElementById("phone").setAttribute("style", "border: 1px solid #777777;");
//         document.getElementById("errphone").setAttribute("style", "display: none; color:red;");
//     }
// });



// ----------------------------- Validation function=-------------------

function validate(x, y, z) {

    document.getElementById(x).addEventListener("blur", function (event) {
        var value = document.getElementById(x).value;
        if (value == "" || z.test(value) == false) {
            document.getElementById(x).setAttribute("style", "border: 1px solid red;");
            document.getElementById(y).setAttribute("style", "display: block; color:red;");
            flags[x] = false

        } else {
            document.getElementById(x).setAttribute("style", "border: 1px solid #777777;");
            document.getElementById(y).setAttribute("style", "display: none; color:red;");
            flags[x] = true;
        }
        enableChk();
    });




}



validate(lnameid, lnameerr, reg);
validate(fnameid, fnameerr, reg);
validate(mailid, mailerr, mail);
validate(phoneid, phonerr, phone);






// ---------------------------------------------------------------------



function enableChk() {

    console.log(fnameflag, lnameflag, emailflag);

    if (flags.firstName && flags.lastName && flags.email) {


        document.getElementById("checkout").disabled = false;


    } else {

    }



}


for (var i = 0; i < addbtn.length; i++) {

    addbtn[i].onclick = addValue;




}


for (var i = 0; i < rembtn.length; i++) {

    rembtn[i].onclick = remValue;


}




function addValue(e) {



    var price = e.target.parentElement.parentElement.children[2].textContent;
    var quantity = e.target.parentElement.children[1].textContent;
    var sum = document.querySelector("#total").textContent;
    sum = parseInt(sum);
    quantity = parseInt(quantity);
    price = parseInt(price);
    quantity++;
    var total = e.target.parentElement.parentElement.children[4].textContent;

    total = parseInt(total);

    total = price * quantity;
    sum = sum + price;
    total = total.toString();
    sum = sum.toString();
    console.log(total);

    quantity = quantity.toString();
    e.target.parentElement.children[1].innerHTML = quantity;
    e.target.parentElement.parentElement.children[4].innerHTML = total;
    document.querySelector("#total").innerHTML = sum;


}



function remValue(e) {


    var price = e.target.parentElement.parentElement.children[2].textContent;
    var quantity = e.target.parentElement.children[1].textContent;
    var sum = document.querySelector("#total").textContent;
    sum = parseInt(sum);
    quantity = parseInt(quantity);
    price = parseInt(price);

    var total = e.target.parentElement.parentElement.children[4].textContent;

    total = parseInt(total);



    if (quantity > 1) {


        quantity--;

        total = price * quantity;
        sum = sum - price;



    }

    total = total.toString();
    sum = sum.toString();
    console.log(total);

    quantity = quantity.toString();
    e.target.parentElement.children[1].innerHTML = quantity;
    e.target.parentElement.parentElement.children[4].innerHTML = total;
    document.querySelector("#total").innerHTML = sum;







}






var elements = document.getElementsByClassName("remove-item");


for (var i = 0; i < elements.length; i++) {
    /* elements[i].addEventListener("click", deleteFunction, false) */


    elements[i].onclick = deleteFunction;



}


function deleteFunction(e) {
    e.target.parentElement.parentElement.style.display = "none";

    var total = e.target.parentElement.parentElement.children[4].textContent;


    total = parseInt(total);
    ;
    var sum = document.querySelector("#total").textContent;
    sum = parseInt(sum);


    sum = sum - total;

    sum = sum.toString();

    document.querySelector("#total").innerHTML = sum;
};



