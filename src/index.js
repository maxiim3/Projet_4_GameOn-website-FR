import * as nav from './js/nav';
import { form, formValidation } from './js/formValidation';
import * as Modal from './js/modal';
import { modal } from './js/modal';

nav.menuBurger.addEventListener('click', e => {
   e.preventDefault();
   nav.editNav();
});

form.addEventListener('submit', e => {
   e.preventDefault();
   formValidation();
});
