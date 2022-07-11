//region 1.NAV SECTION
/**
 * # function editNav()
 * Ajoute la classe 'responsive' en breakpoint mobile
 * Permet d'ouvrir le menu Nav
 */
export function editNav() {
   const x = document.getElementById('myTopnav');
   if (x.className === 'topnav') {
      x.className += ' responsive';
   } else {
      x.className = 'topnav';
   }
   console.log('Click on TOPNAV');
}

//endregion
