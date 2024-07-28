 // Get the elements
 const popupImage = document.getElementById('popupImage');
 const imagePopup = document.getElementById('imagePopup');
 const closePopup = document.getElementById('closePopup');

 // Function to show the popup
 function showPopup() {
     imagePopup.style.display = 'flex';
 }

 // Function to close the popup
 function closePopupFn() {
     imagePopup.style.display = 'none';
 }

 // Event listeners
 popupImage.addEventListener('click', showPopup);
 closePopup.addEventListener('click', closePopupFn);

 // Close popup when clicking outside the content
 window.addEventListener('click', function(e) {
     if (e.target === imagePopup) {
         closePopupFn();
     }
 });