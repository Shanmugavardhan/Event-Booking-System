function showSignInModal() {
  const modal = document.querySelector('.sign-in-modal');
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}
function hideSignInModal() {
  const modal = document.querySelector('.sign-in-modal');
  modal.classList.add('hidden');
  document.body.style.overflow = ''; // Restore background scrolling
}
function showSignUpModal() {
  const modal = document.querySelector('.sign-up-modal');
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden'; // Prevent background scrolling
}
function hideSignUpModal() {
  const modal = document.querySelector('.sign-up-modal');
  modal.classList.add('hidden');
  document.body.style.overflow = ''; // Restore background scrolling
}
function viewEventDetails(eventId) {
  const modal = document.querySelector('.event-details-modal');
  modal.classList.remove('hidden');
  // document.body.style.overflow = 'hidden';
}
function hideEventDetailsModal(){
  const modal = document.querySelector('.event-details-modal');
  modal.classList.add('hidden');
  // document.body.style.overflow = '';
}
showUserMenu = () => {
  console.log('jhj')
  const menu = document.querySelector('.user-Menu');
  menu.classList.toggle('visible');  
}