		
var popup = document.getElementById('popup'); 
		
function openPopup(){
    popup.getElementsByClassName('connect')[0];
    popup.className += 'open';
}

var closeButton = popup.getElementsByClassName('croix')[0];

closeButton.addEventListener("click", function(){
    closePopup();
});

function closePopup(){
    popup.classList.remove("open");
}

// function acces() {
//     var pseudo = document.forms["acces"]["Pseudo"];
//     var passe = document.forms["acces"]["Passe"];
    
//     if (pseudo.value == "") {
//       alert("Mettez votre pseudo.");
//       pseudo.focus();
//       return false;
//     }
//     if (passe.value == "") {
//       alert("Mettez votre mot de passe.");
//       passe.focus();
//       return false;
//     }
    
//     return true;
// }

