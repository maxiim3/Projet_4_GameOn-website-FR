import * as nav from './nav';
import { feedback, form, formValidation } from './formValidation';
import * as Modal from './modal';
import { modal } from './modal';

nav.menuBurger.addEventListener('click', e => {
   e.preventDefault();
   nav.editNav();
});

form.addEventListener('submit', async e => {
   e.preventDefault();
   await formValidation().then(async data => {
      console.table(data);
      // JSON.stringify(data)
      // const response = document.querySelector('.response');
      // response.innerText = JSON.stringify(data);
   });
});
