/* sets the debug mode */
let debug = false;

/* informs the developer about the extension state */
console.log(debug? 'Extension loaded sucessfuly' : '');


/* selects the search box when the shortcut key is pressed*/

document.addEventListener('keydown', (event) => {
  let input = document.querySelector('input[placeholder=\'Buscar na ordem\']');
  let checkbox = document.querySelector('.x-grid-row-checker');
  let search_button = document.querySelector('div.x-panel.x-border-item.x-panel-app-main div div #Suite-view-CrudMaintOrders-body div[style=\'right: auto; left: 329px; top: 5px; margin: 0px; height: 632px; width: 781px;\'] div div div .x-btn-inner.x-btn-inner-center');
  let print_btn;

  if (event.ctrlKey && event.key == 'S') {
    window.navigator.clipboard.readText().then(e => {console.log('Value: ', input.value); input.value = e});
    input.select();
    search_button.click();
  }

  if (event.ctrlKey && event.key == 'E') {	
    checkbox.click();
  }

  if (event.ctrlKey && event.key == 'Q') {
    print_btn = document.querySelector('#splitbutton-3351-btnWrap');
    create_om_pdf_btn = document.querySelector('#menuitem-3356');

    print_btn.click();
    /* setTimeout(() => {create_om_pdf_btn.click()}, 3000); */
  }
}, false);
