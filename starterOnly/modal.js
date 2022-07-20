/**
 * # DOM ELEMETS
 * @type {HTMLElement}
 */
// DOM NavBar
const iconNavBar = document.getElementById("iconNavBar");
// DOM Modal
const modalBg = document.querySelector(".bground");
const modalBtn = [...document.querySelectorAll(".modal-btn")];
const closeBtn = [...document.querySelectorAll(".close-modal")];
const btnSubmit = document.querySelector(".btn-submit");
// DOM Hero
const hero = document.querySelector(".hero-section");
// DOM Footer
const footer = document.querySelector("footer");

/**
 * # Event Listener
 * @type {EventListener}
 */

(
   function () {
      // NavBar Burger Icon
      iconNavBar.addEventListener("click", editNav);
      // Open Modal
      modalBtn.forEach(btn => btn.addEventListener("click", launchModal));
      // Close Modal
      closeBtn.forEach(btn => btn.addEventListener("click", closeModal));
      // Check and Submit Form
      btnSubmit.addEventListener("click", validate);
   }
)();

/**
 * # Function
 * ## editNav()
 * Ajoute ou supprime la classe **'responsive'** qui permet de dérouler le menu en vue mobile
 */
function editNav() {
   const topNav = document.getElementById("myTopnav");
   if (topNav.className === "topnav") {
      topNav.className += " responsive";
   } else {
      topNav.className = "topnav";
   }
}

/**
 * # Function
 * ## launchModal()
 * Affiche la modal en modifiant la valeur de *display*
 */
function launchModal() {
   modalBg.style.display = "block";
   hero.style.visibility = "hidden";
   footer.style.visibility = "hidden";
}

/**
 * # Function
 * ## closeModal()
 * Ferme la modal en modifiant la valeur de *display*
 */
function closeModal() {
   modalBg.style.display = "none";
   hero.style.visibility = "visible";
   footer.style.visibility = "visible";
}

/**
 * # Function
 * ## validate(e)
 * **Envoie le formulaire** si les saisies utilisateurs sont **valides**
 *
 * **Lève une Erreur** sur le formulaire est **invalide**
 * @param e [click]
 */
function validate(e) {
   e.preventDefault();
   // Form Elements

   try {
      (function () {
         if (checkUserInput()) {
            modalBg.dataset.formValid = "true";
            printMsg("Formulaire envoyé avec succès!", "green", 21, "font-weight: bold");
         } else {
            modalBg.dataset.formValid = "false";
            throw new Error("Le formulaire ne peut être envoyé car il n'est pas valide");
         }
      })();
   } catch (e) {
      console.warn(`... ${e.name} : ${e.message}`);
   }
}

/**
 * # Function
 * ## checkUserInput
 * Vérifie que les saisies utilisateurs soient valides
 * @returns {boolean}
 */
function checkUserInput() {
   /**
    * Sera **incrémenter** après chaque **validation valide**
    * @type {number} || Retourne le **nombre de saisies valides**
    */
   let validInputs = 0;

   /**
    * Sera **incrémenter** après chaque **validation**
    * @type {number} || Retourne le nombre de **saisies totales devant être validés**
    */
   let requiredValid = 0;

   // Retour console
   printMsg(
      "Checking Values...",
      "limegreen",
      13,
      "font-weight: bold",
      "text-decoration: underline"
   );

   /**
    * Lance les vérifications pour chaques saisies obligatoires
    */
   (function () {
      // DOM Form Elements
      const firstname = document.getElementById("first");
      const lastname = document.getElementById("last");
      const email = document.getElementById("email");
      const birthdate = document.getElementById("birthdate");
      const quantity = document.getElementById("quantity");
      const radios = [...document.querySelectorAll("#radios .checkbox-input")];
      const checkboxCGU = document.querySelector("#checkboxes #checkbox1");
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
   })();

   // Retour Console
   printMsg(`validInputs: ${validInputs}`, undefined, 11);
   printMsg(`requiredValid: ${requiredValid}`, undefined, 11);

   // output
   return validInputs === requiredValid;
}

/**
 * # Fonction
 * ## printMsg()
 * Fonction raccourcie pour affecter des styles aux messages de retour console
 * @param msg
 * @param color | Par défaut 'black'
 * @param fontSize | Par défaut '15'
 * @param styles | Styles Optionnels...
 */
function printMsg(msg, color = "black", fontSize = 15, ...styles) {
   const optionStyle = [];
   styles.forEach(style => optionStyle.push(style));
   const allStyles = `color: ${color}; font-size: ${fontSize}px; ${optionStyle.join(" ; ")}`;
   console.log(`%c${msg}`, allStyles);
}

/**
 * # Function
 * ## isEMpty()
 * Vérifie que la valeur de l'input ne soit pas vide
 * @param input | DOM Element
 * @returns {boolean}
 */
function isEmpty(input) {
   if (input.value.trim() === "") {
      setErrorTo(input, `${input.ariaLabel || input.title} doit être renseigné`);
      return true;
   }
   return false;
}

/**
 * # Function
 * ## minLength()
 * Vérifie si la longueur des noms ou prénom sont valides
 * @param input | DOM Element
 * @param i | Valeure minimale
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
 * # Function
 * ## isEmail()
 * Vérifie si le format de mail est valide
 * @param email | [type String]
 * @returns {boolean}
 */
function isEmail(email) {
   const regex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   if (regex.test(email.value.trim())) {
      return true;
   } else {
      setErrorTo(email, "Veuillez renseigner un email valid svp");
      return false;
   }
}

/**
 * # Function
 * ## isSelected()
 * Vérifie si une ville a été sélectionnée
 * @param radios | Liste des éléments du DOM de type radio
 * @returns {boolean}
 */
function isSelected(radios) {
   if (radios.every(radio => !radio.checked)) {
      setErrorTo(radios[0], "Vous devez choisir un tournois");
      return true;
   }
   return false;
}

/**
 * # Function
 * ## isChecked()
 * Vérifie que les CGU ont bien été acceptées
 * @param checkbox | Checkbox Dom Element
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
 * # Function
 * ## setErrorTo()
 * Active les styles [data-error-visible] pour l'élément parent
 * Affiche le message d'erreur
 * @param input, DOM Element
 * @param message, Message d'erreur
 */
function setErrorTo(input, message) {
   const formData = input.parentElement;
   formData.dataset.error = message;
   formData.dataset.errorVisible = true;
   // throw new Error(message);
}

/**
 * # Function
 * ## setValidTo()
 * Désactive les styles [data-error-visible] pour l'élément parent
 * @param input, DOM Element
 */
function setValidTo(input) {
   const formData = input.parentElement;
   formData.dataset.error = "";
   formData.dataset.errorVisible = false;
}
