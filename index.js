// Your code here
document.getElementById('submit-form').addEventListener('submit', async function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const message = document.getElementById('message').value;
    const checkbox = document.getElementById('checkbox').checked;
  
    const data = {
      name,
      email,
      password,
      message,
      checkbox
    };
  
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error('Post request failed');
      }
  
      const json = await response.json();
      console.log('Response:', json);
      alert('Form submitted successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Form submission failed!');
    }
  });
  