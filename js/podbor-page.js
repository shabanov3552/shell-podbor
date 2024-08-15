//#region Функционал дропдаунов открыть\закрыть

document.addEventListener("click", function (e) {
   const target = e.target;
   const ddWrapper = target.closest('[data-dropdown]');
   const ddActive = document.querySelector('._dd-active');

   if (ddWrapper) {
      dropdownAction(e, ddWrapper, ddActive);
   } else if (ddActive) {
      ddActive.classList.remove('_dd-active');
   }
});

function dropdownAction(e, ddWrapper, ddActive) {
   const target = e.target;
   const ddButton = ddWrapper.querySelector('[data-dropdown-button]');

   if (target == ddButton) {
      if (ddActive && ddActive !== ddWrapper) {
         ddActive.classList.remove('_dd-active');
      }

      ddWrapper.classList.toggle('_dd-active');
      e.preventDefault();
   }
}

//#endregion