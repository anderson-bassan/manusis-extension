/* sets the debug mode */
let debug = false;

/* informs the developer about the extension state */
console.log(debug? 'Extension loaded sucessfuly' : '');


/* selects the search box when the shortcut key is pressed*/

document.addEventListener('keydown', (event) => {
  let input = document.querySelector('#textfield-1373-inputEl');

  if (event.ctrlKey && event.key == 'S') {
    input.select();
  } 
}, false);