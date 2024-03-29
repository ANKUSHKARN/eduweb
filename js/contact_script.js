// Replace with your Airtable API key and base ID
// const token = 'pat6o2egKcMWacd12.4f0c0d68d40eed719003444f614674b6f7f6a318a860bbf91ff309bcab049de9'
const apiKey = 'keyrKtxdEwiOsQckT';
const baseId = 'appBaY4AlC6Xy26g6';
// patrsRsGwsUkCSM4Y.f2749999b8f206e367f81ce59ecf47fafd2ecfaa650019ae3674c1772461f826
//patrsRsGwsUkCSM4Y
document.getElementById('Contact_message').addEventListener('submit', function(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;
  

  const formData = {
    fields: {
      Name: name,
      Email: email,
      Subject: subject,
      Message: message
    }
  };

  fetch(`https://api.airtable.com/v0/${baseId}/Contact`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${apiKey}`
    },
    body: JSON.stringify(formData)
  })
  .then(response => {
    if (response.ok) {
      alert('Your Query is sent to the higher team!');
    } else {
      alert('Something went wrong. Please try again later.');
    }
  })
  .catch(error => {
    console.error('Error:', error);
    alert('Something went wrong. Please try again later.');
  });
});