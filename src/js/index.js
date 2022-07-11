import { editNav } from './nav.js';

//region 2.MODAL SECTION
/**
 * ## Attributs de Styles
 * Style for console output
 * @type {{valid: string, error: string, errorAccent: string}}
 */
const style = {
   fontSize: i => `font-size: ${i}px`,
   valid: 'color: green;',
   error: 'color: red;',
   errorAccent: 'color: red; text-decoration: underline;',
};
//region DOM ELEMENT
//region DOM Modal
/**
 * ## DOM Element Modal
 * @type {Element}
 */
const modal = document.querySelector('.modal');
/**
 * ## DOM Element Bouton Open Modal
 * @type {*[]}
 */
const openModal = [...document.getElementsByClassName('open-modal')];
/**
 * ## DOM Element Close Modal
 * @type {*[]}
 */
const closeModal = [...document.getElementsByClassName('close-modal')];
//endregion
//region DOM Form
/**
 * ## DOM Element Submit Form
 * @type {*[]}
 */
const submitBtn = [...document.getElementsByClassName('btn-submit')];
/**
 * ## DOM Elements Input Text Control
 * L'élément est 'spreader' dans un tableau
 * @type {*[]}
 */
const usrTextControl = [...document.getElementsByClassName('text-control')];
/**
 * ## DOM Element Checkbox CGU
 * @type {Element}
 */
const checkboxCGU = document.getElementById('checkbox1');
//endregion
//endregion
modal.showModal();
//region EVENT LISTENER
//region Listen Modal Open/Close
openModal.forEach(e =>
   e.addEventListener('click', () => {
      modal.showModal();
      console.log('Open Modal');
   })
);
closeModal.forEach(e =>
   e.addEventListener('click', () => {
      modal.close();
      console.log('close Modal');
   })
);
//endregion
//region Listen Form
submitBtn.forEach(e =>
   e.addEventListener('click', () => {
      formValidation();
   })
);
//endregion
//endregion

//NODE
const errorMessage = document.createElement('p');
errorMessage.innerText = 'Lorem Ipsus 12345, Pas Bien!!';
errorMessage.style = `${style.error} ${style.fontSize(12)}`;
// region Functions
/**
 * # Function formValidation
 * Validation du Formulaire
 */
function formValidation() {
   console.log('Form validation in process...');
   usrTextControl.forEach(e => {
      if (e.value === '') {
         console.info(`${e.name}: %cValidation Error`, style.error);
         e.style.border = '2px solid red';
         //todo Le message doit apparaitre partout !
         // todo Utiliser les Regex pour la validation
         e.parentNode.appendChild(errorMessage);
      } else {
         console.log(`${e.name}: %c${e.value}`, style.valid);
         e.style.border = 'none';
      }
   });
   checkboxCGU.checked === false &&
      console.warn('%cYou must agree the %cGCU', style.error, style.errorAccent);
   // console.log(usrGroupInputs);
}

// endregion
//endregion
