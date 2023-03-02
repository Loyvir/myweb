const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent form from submitting
  
  const formData = new FormData(form);
  
  fetch('/send-email.php', {
    method: 'POST',
    body: formData
  })
  .then(response => {
    if (!response.ok) {
      throw new Error('Failed to send email');
    }
    
    alert('Email sent successfully!');
  })
  .catch(error => {
    console.error(error);
    alert('Failed to send email');
  });
});
