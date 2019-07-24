// Get the modal
var modal = document.getElementById("myModal");
var modal1 = document.getElementById("modal1");

// Get the button that opens the modal
var btn = document.getElementsByClassName("product");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];




 

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




for(let i = 0; i < btn.length; i++){
    // When the user clicks on the button, open the modal 
    var html = btn[i].innerHTML;    
    btn[i].onclick = function() {
      
    modal.style.display = "inline";
    modal1.innerHTML=btn[i].innerHTML
    
    
    
     
    }
    //  modal1.innerHTML=btn[i].innerHTML
    //  console.log(btn[i].innerHTML)
    
}

