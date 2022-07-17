// const ageMinimum = 18;
//
// export const form = document.getElementById('form');
// export const firstname = document.getElementById('first');
// export const lastname = document.getElementById('last');
// export const email = document.getElementById('email');
// export const birthdate = document.getElementById('birthdate');
// export const quantity = document.getElementById('quantity');
// export const radios = [...document.querySelectorAll('#radio .checkbox-input')];
// export const checkboxCGU = document.querySelector('#CGU #checkbox1');
// export const feedback = document.getElementById('feedback');
//
// export async function formValidation() {
//    const firstnameValue = firstname.value.trim();
//    const lastnameValue = lastname.value.trim();
//    const emailValue = email.value.trim();
//    const birthdateStrictValue = birthdate.value.trim();
//    const birthdateDateValue = new Date(birthdateStrictValue);
//    const birthdayYear = birthdateDateValue.getUTCFullYear();
//    const quantityValue = quantity.value.trim();
//
//    let count = 0;
//    let total = 0;
//
//    const checkUserInput = () => {
//       total++;
//       if (firstnameValue === '') {
//          setErrorTo(firstname, 'Le prénom doit être renseigner');
//       } else if (firstnameValue.length < 2) {
//          setErrorTo(firstname, "Veuillez renseigner un prénom d'au moins deux lettres svp ");
//       } else {
//          setValidTo(firstname);
//          count++;
//       }
//       total++;
//       if (lastnameValue === '') {
//          setErrorTo(lastname, 'Le nom doit être renseigner');
//       } else if (lastnameValue.length < 2) {
//          setErrorTo(lastname, "Veuillez renseigner un nom d'au moins deux lettres svp ");
//       } else {
//          setValidTo(lastname);
//          count++;
//       }
//       total++;
//       if (emailValue === '') {
//          setErrorTo(email, "L'email doit être renseigner");
//       } else if (!isEmail(emailValue)) {
//          setErrorTo(email, 'Veuillez renseigner un email valid svp ');
//       } else {
//          setValidTo(email);
//          count++;
//       }
//       total++;
//       if (birthdateStrictValue === '') {
//          setErrorTo(birthdate, 'La date de naissance doit être renseigner');
//       } else if (!isAdult(birthdayYear)) {
//          setErrorTo(birthdate, 'Vous devez avoir 18ans pour participer');
//       } else {
//          setValidTo(birthdate);
//          count++;
//       }
//       total++;
//       if (quantityValue === '') {
//          setErrorTo(quantity, 'Vous devez renseigner nombre de tournois');
//       } else {
//          setValidTo(quantity);
//          count++;
//       }
//       if (radios.every(radio => !radio.checked)) {
//          setErrorTo(radios[0], 'Vous devez choisir un tournois');
//       } else {
//          setValidTo(radios[0]);
//          count++;
//       }
//       total++;
//       if (!checkboxCGU.checked) {
//          setErrorTo(checkboxCGU, "Vous devez accepter les conditions d'utilisation");
//       } else {
//          setValidTo(checkboxCGU);
//          count++;
//       }
//       total++;
//       return count === total;
//    };
//
//    checkUserInput();
//    if (checkUserInput()) {
//       form.dataset.formValid = true;
//       feedback.dataset.formValid = true;
//       return {
//          firstname: firstnameValue,
//          lastname: lastnameValue,
//          email: emailValue,
//          birthdateStrict: birthdateStrictValue,
//          birthdateDate: birthdateDateValue,
//          birthday: birthdayYear,
//          quantity: quantityValue,
//       };
//    } else {
//       form.dataset.formValid = false;
//       feedback.dataset.formValid = false;
//       console.error('Form is not valid');
//    }
// }
//
// // if error validation, set data-error to true to parent element and display error message
// export function setErrorTo(input, message) {
//    const formData = input.parentElement;
//    formData.dataset.error = message;
//    formData.dataset.errorVisible = true;
// }
//
// // if validation succeed,  set data-error to false to parent element
// export function setValidTo(input) {
//    const formData = input.parentElement;
//    formData.dataset.errorVisible = false;
// }
//
// // Check if email is valid using regex test
// export function isEmail(email) {
//    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
//       email
//    );
// }
//
// // Check if the User is Adult
// export function isAdult(input) {
//    const actualDate = new Date();
//    const actualYear = actualDate.getUTCFullYear();
//
//    const minimumDate = new Date();
//    minimumDate.setFullYear(ageMinimum);
//    const minimumYear = minimumDate.getUTCFullYear();
//
//    return input < actualYear - minimumYear;
// }
