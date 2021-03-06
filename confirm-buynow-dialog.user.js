// ==UserScript==
// @name        FUT Confirm Buy Now Dialog
// @version     0.1
// @description Automatically confirm the Buy Now dialog
// @license     MIT
// @author      Tim Klingeleers
// @match       https://www.easports.com/fifa/ultimate-team/web-app/*
// @namespace   https://github.com/Mardaneus86
// @updateURL   https://raw.githubusercontent.com/Mardaneus86/futwebapp-tampermonkey/master/confirm-buynow-dialog.user.js
// @downloadURL https://raw.githubusercontent.com/Mardaneus86/futwebapp-tampermonkey/master/confirm-buynow-dialog.user.js
// @supportURL  https://github.com/Mardaneus86/futwebapp-tampermonkey/issues
// ==/UserScript==
// ==OpenUserJS==
// @author Mardaneus86
// ==/OpenUserJS==
(function () {
  'use strict';

  $(document).bind('DOMNodeInserted', function (event) {
    if ($(event.target).hasClass('Dialog')) {
      if (gPopupClickShield._activePopup._title === "popup.buyNowConfirmationTitle") {
        gPopupClickShield._activePopup._eOptionSelected(2);
      }
    }
  });
})();
