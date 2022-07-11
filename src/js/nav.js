//region 1.NAV SECTION
/**
 * # function editNav()
 * Ajoute la classe 'responsive' en breakpoint mobile
 * Permet d'ouvrir le menu Nav
 */

export function editNav() {
   const topNav = document.getElementById('myTopnav');
   if (topNav.className === 'topnav') {
      topNav.className += ' responsive';
   } else {
      topNav.className = 'topnav';
   }
}

export const menuBurger = document.getElementById('burgerMenu');
//endregion
