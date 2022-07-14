export const style = {
   fontSize: i => `font-size: ${i}px`,
   valid: 'color: green;',
   error: 'color: red;',
   errorAccent: 'color: red; text-decoration: underline;',
};

export const modal = document.querySelector('.modal');
export const openModal = [...document.getElementsByClassName('open-modal')];
export const closeModal = [...document.getElementsByClassName('close-modal')];

openModal.forEach(e =>
   e.addEventListener('click', () => {
      modal.showModal();
   })
);
closeModal.forEach(e =>
   e.addEventListener('click', () => {
      modal.close();
   })
);
