// region Navigation
const iconNavBar = document.getElementById('iconNavBar');
// open toNav menu
iconNavBar.addEventListener('click', editNav);

// set topNav classes
function editNav() {
   const topNav = document.getElementById('myTopnav');
   if (topNav.className === 'topnav') {
      topNav.className += ' responsive';
   } else {
      topNav.className = 'topnav';
   }
}
// endregion

// region Modal Control
const modalBg = document.querySelector('.bground');
const modalBtn = [...document.querySelectorAll('.modal-btn')];
const closeBtn = [...document.querySelectorAll('.close-modal')];
// launch modal e[vent]
modalBtn.forEach(btn => btn.addEventListener('click', launchModal));
// close modal event
closeBtn.forEach(btn => btn.addEventListener('click', closeModal));

// launch modal form
function launchModal() {
   modalBg.style.display = 'block';
}
// close modal form
function closeModal() {
   modalBg.style.display = 'none';
}

(function () {
   modalBg.style.display = 'block';
})();

// endregion

//region Form Validation
const btnSubmit = document.querySelector('.btn-submit');
btnSubmit.addEventListener('click', validate);

/**
 * # Validate Form
 * Envoie le formulaire si les saisies utilisateurs sont valides
 * @param e
 */
function validate(e) {
   e.preventDefault();
   // Form Elements
   const form = document.getElementById('form');
   const feedback = document.getElementById('feedback');

   try {
      (function () {
         if (checkUserInput()) {
            form.dataset.formValid = 'true';
            feedback.dataset.formValid = 'true';
            printMsg('Formulaire envoyé avec succès!', 'green');
         } else {
            form.dataset.formValid = 'false';
            feedback.dataset.formValid = 'false';
            throw new Error("Le formulaire ne peut être envoyé car il n'est pas valide");
         }
      })();
   } catch (e) {
      console.warn(`... ${e.name} : ${e.message}`);
   }
}

/**
 * # checkUserInput
 * Vérifie que les saisies utilisateurs sont valides
 * @returns {boolean}
 */
function checkUserInput() {
   //region DOM Form Elements
   const firstname = document.getElementById('first');
   const lastname = document.getElementById('last');
   const email = document.getElementById('email');
   const birthdate = document.getElementById('birthdate');
   const quantity = document.getElementById('quantity');
   const radios = [...document.querySelectorAll('#radios .checkbox-input')];
   const checkboxCGU = document.querySelector('#checkboxes #checkbox1');

   //endregion

   printMsg('Checking Values...', 'limegreen');

   let validInputs = 0;
   let requiredValid = 0;

   //region Block de Conditions
   // validation prenom
   requiredValid++;
   if (!isEmpty(firstname)) {
      if (!minLength(firstname, 2)) {
         setValidTo(firstname);
         validInputs++;
      }
   }
   // validation nom
   requiredValid++;
   if (!isEmpty(lastname)) {
      if (!minLength(lastname, 2)) {
         setValidTo(lastname);
         validInputs++;
      }
   }
   // validation mail
   requiredValid++;
   if (!isEmpty(email)) {
      if (isEmail(email)) {
         setValidTo(email);
         validInputs++;
      }
   }
   // validation date de naissance
   requiredValid++;
   if (!isEmpty(birthdate)) {
      setValidTo(birthdate);
      validInputs++;
   }
   // validation nombre de participation
   requiredValid++;
   if (!isEmpty(quantity)) {
      setValidTo(quantity);
      validInputs++;
   }
   // validation choix de la ville
   requiredValid++;
   if (!isSelected(radios)) {
      setValidTo(radios.at(0));
      validInputs++;
   }
   // validation CGU
   requiredValid++;
   if (!isChecked(checkboxCGU)) {
      setValidTo(checkboxCGU);
      validInputs++;
   }
   //endregion

   console.log(`validInputs: ${validInputs}`);
   console.log(`requiredValid: ${requiredValid}`);
   return validInputs === requiredValid;
}

/**
 * Fonction raccourcie pour afficher un message coloré dans la console
 * @param msg
 * @param color
 */
function printMsg(msg, color = 'black') {
   console.log(`%c${msg}`, `color: ${color}; font-size: 15px`);
}

/**
 * Vérifie que la valeur de l'input ne soit pas vide
 * @param input
 * @returns {boolean}
 */
function isEmpty(input) {
   if (input.value.trim() === '') {
      setErrorTo(input, `${input.ariaLabel || input.title} doit être renseigner`);
      return true;
   }
   return false;
}

/**
 * Vérifie si la longueur des noms ou prénom est valide
 * @param input
 * @param i
 * @returns {boolean}
 */
function minLength(input, i) {
   if (input.value.trim().length < i) {
      setErrorTo(input, `${input.ariaLabel} doit faire au moins 2 lettres`);
      return true;
   }
   return false;
}

/**
 * Vérifie si le format de mail est valide
 * @param email
 * @returns {boolean}
 */
function isEmail(email) {
   const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if (regex.test(email.value.trim())) {
      return true;
   } else {
      setErrorTo(email, 'Veuillez renseigner un email valid svp');
      return false;
   }
}

/**
 * Vérifie si une ville a été sélectionnée
 * @param radios
 * @returns {boolean}
 */
function isSelected(radios) {
   if (radios.every(radio => !radio.checked)) {
      setErrorTo(radios[0], 'Vous devez choisir un tournois');
      return true;
   }
   return false;
}

/**
 * Vérifie que les CGU ont bien été acceptées
 * @param checkbox
 * @returns {boolean}
 */
function isChecked(checkbox) {
   if (!checkbox.checked) {
      setErrorTo(checkbox, "Vous devez accepter les conditions d'utilisation");
      return true;
   }
   return false;
}

/**
 * Active les styles [data-error-visible] pour l'élément parent
 *
 * Affiche le message d'erreur
 * @param input
 * @param message
 */
function setErrorTo(input, message) {
   const formData = input.parentElement;
   formData.dataset.error = message;
   formData.dataset.errorVisible = true;
   // throw new Error(message);
}

/**
 * Désactive les styles [data-error-visible] pour l'élément parent
 * @param input
 */
function setValidTo(input) {
   const formData = input.parentElement;
   formData.dataset.errorVisible = false;
}

//endregion
