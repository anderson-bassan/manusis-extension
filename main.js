/* ---------------------- */
/* ==      TO-DO       == */
/* ---------------------- */




/* (_) Add Print Shortcut */




/* ---------------------- */
/* ==  DEBUG SETTINGS  == */
/* ---------------------- */




/* sets the debug mode */
let debug = true;

/* informs the developer about the extension state */
console.log(debug? 'Extension loaded sucessfuly' : '');





/* ---------------------- */
/*  == EVENTLISTENERS  == */
/* ---------------------- */




/* == KEYDOWN EVENTLISTENERS == */


document.addEventListener('keydown', (event) => {

  /* gets the key script elements */
  let searchbox = document.querySelector('input[placeholder=\'Buscar na ordem\']');
  let checkbox = document.querySelector('.x-grid-row-checker');
  let print_menu; /* ATM I have no idea what element is precisely the menu and how to open the print menu, instead of just straight up printing */
  let search_button = document.querySelector('div.x-panel.x-border-item.x-panel-app-main div div #Suite-view-CrudMaintOrders-body div[style=\'right: auto; left: 329px; top: 5px; margin: 0px; height: 632px; width: 781px;\'] div div div .x-btn-inner.x-btn-inner-center');

  /* handles the different key pressed scenarious */
  if (event.ctrlKey && event.key == 'S') {

    if (debug) {
      console.log('Debug:\n', '\tSearch Button: ', search_button);
    };

    /* injects the clipboard (copied text) into the searchbox and then searches for the Maintaince Order */
    window.navigator.clipboard.readText().then(clipboard_text => {

	if (search_button == null) {
	  search_button = document.querySelector('div.x-panel.x-border-item.x-panel-app-main div div #Suite-view-CrudMaintOrders-body div[style=\'right: auto; left: 329px; top: 5px; margin: 0px; height: 632px; width: 781px;\'] div div div .x-btn-inner.x-btn-inner-center');
	}

        searchbox.value = clipboard_text;
        searchbox.select();
	if (search_button) {
	  search_button.click();
	}
    });
  
  }

  if (event.ctrlKey && event.key == 'E') {

    /* selects the first Maintaince Order to show detailed information */
    checkbox.click();

  }

  if (event.ctrlKey && event.key == 'Q') {

    /* TO-DO: when CTRL + SHIFT + Q is pressed it opens the print without subtitles tab */
    console.log((debug) ? '\tPrint shortcut: It\'ve been a challenge to implement, because the way the print menu works is not clear. Thus I\'ve not been implemented yet.': '');

  }

  if (event.ctrlKey && event.key == 'Z') {

    /* copies the selected Maintance Order number to the clipboard (let's you paste the Maintaince Order number whenever you want) */
    window.navigator.clipboard.writeText(document.querySelector('#panel-1377_header_hd-textEl').innerText.replace('Apontamento - OM ', ''));

  }
}, false);
