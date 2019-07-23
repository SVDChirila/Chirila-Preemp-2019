// -------------------------- Variables ---------------------------------

var add = document.getElementById("add");
var container = document.getElementById("container");
var rem = document.getElementById("rem");
var image = document.getElementById("image");
var query = document.body.contains(image);
var also = document.getElementById("add1");
var e = new Event("myEvent");
// ----------------------------------------------------------------------



// _________________________Functions______________________________
function addimg(event){
    image.classList.add("img");
}

function delimg(event){
    image.parentNode.removeChild(image);
    query = false;
}

function verify(event){
  if(query == false){
      alert("Nu este nici o poza aici!")
  }else{
      addimg();
  }
}

function remimg(event){
    container.dispatchEvent(e);
    image.classList.remove("img");
}

// ________________________________________________________________



// .................................Events.............................
    add.addEventListener("click", verify);
    rem.addEventListener("click", delimg);
    image.addEventListener("click", remimg);
    document.body.addEventListener("click", function(event){
        console.log(event.target+" was clicked");
    })
    also.addEventListener("click", function(event){
        add.click();
    })
    
    container.addEventListener("myEvent", function(event){
        console.log("Image is hidden");
    }, false)
// .....................................................................