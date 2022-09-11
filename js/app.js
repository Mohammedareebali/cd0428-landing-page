/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
let ul = document.getElementById('navbar__list');
let heading2 = document.querySelectorAll('h2');
let sections = document.querySelectorAll('section');

/**
* End Global Variables
* Start Helper Functions
*
*/

/**
* End Helper Functions
* Begin Main Functions
*
*/

// build the nav
for (let i = 0; i < heading2.length; i++) {
  let li = document.createElement('li');
  let a = document.createElement('a');
  a.appendChild(document.createTextNode(` ${heading2[i].innerText} `));
  li.appendChild(a);
  a.setAttribute('class', 'menu__link');
  li.setAttribute('nav-data', `${sections[i].id}`);
  li.setAttribute('class', 'dove');
  ul.appendChild(li);
}
// Add class 'active' to section when near top of viewport
function makeActive() {
  for (const section of sections) {
    const box = section.getBoundingClientRect();
    //Find a value that works best, but 150 seems to be a good start.
    let VALUE = 150;
    if (box.top <= VALUE && box.bottom >= VALUE) {
      //apply active state on current section and corresponding Nav link
      section.setAttribute('class', 'active');

      let b = document.querySelector(`[nav-data=${section.id}]`);
      b.setAttribute('class', 'nactive');
      console.log(b);
    } else {
      //Remove active state from other section and corresponding Nav link
      section.classList.remove('active');
      // li.classList.remove( 'nactive');
      let b = document.querySelector(`[nav-data=${section.id}]`);
      b.classList.remove('nactive');
    }
  }
}

document.addEventListener('scroll', function () {
  makeActive();
});
// Scroll to anchor ID using scrollTO event
//Build menu

// Scroll to section on link click

// Set sections as active

const link = document.querySelectorAll('.dove');
link.forEach((val) => {
  val.addEventListener('click', () => {
    let el = document.getElementById(val.getAttribute('nav-data'));
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});
/**
* End Main Functions
* Begin Events
*
*/
