		
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
let buttons = "";

 function showButtonDetails(id) {
      buttons = document.getElementById('perso').getElementsByClassName('boutpers');
      // var frame = document.getElementById('fonchange');
      
      // Cacher tous les boutons sauf celui cliqué
      for (var i = 0; i < buttons.length; i++) {
        if (buttons[i].id !== id) {
          buttons[i].style.display = 'none';
        }
      }

      // Déplacer et agrandir le bouton cliqué + effacer texte
      var boutpers = document.getElementById(id);
      boutpers.style.position = 'absolute';
      boutpers.style.left = '12%';
      boutpers.style.top = '50%';
      boutpers.style.transform = 'translate(-50%, -50%)';
      info.style.display = 'none';
      
     
      // Afficher la fiche correspondante dans le cadre
      let url = "assets/img/"+id+".jpg";
      fonchange.style.backgroundImage = "url("+url+")";
    }

  

