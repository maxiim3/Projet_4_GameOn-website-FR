//region 1.NAV SECTION
/**
 * # function editNav()
 * Ajoute la classe 'responsive' en breakpoint mobile
 * Permet d'ouvrir le menu Nav
 */

export function editNav() {
   const topNav = document.getElementById('myTopnav');
   if (topNav.dataset.responsive === 'false' || !topNav.dataset.responsive) {
      topNav.dataset.responsive = 'true';
   } else {
      topNav.dataset.responsive = 'false';
   }
}

export const menuBurger = document.getElementById('burgerMenu');
//endregion
