async function sendDataToBackend(formData) {
    try {
      const response = await fetch('http://localhost:5000/createClient', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (!response.ok) {
        throw new Error('Error sending form data to the backend');
      }
  
      const data = await response.json(); // Parse the response body as JSON
      // Handle the response data as needed
      return { success: true, message: data};
    } catch (error) {
      return { success: false, message: error};
    }
  }
  
  export default sendDataToBackend;