import React from 'react';
import QRCode from 'qrcode.react';
import axios from 'axios';

const App = () => {
  const itemName = 'Item1'; // Change this to the desired item name
  const apiUrl = `http://localhost:3001/decrease-quantity-by-name/${itemName}`;

  const handleScan = async () => {
    console.log(`API URL: ${apiUrl}`);
    try {
      const response = await axios.post(apiUrl);
      console.log('Response data:', response.data);
      alert(`Quantity decreased. New Quantity: ${response.data.newQuantity}`);
    } catch (error) {
      console.error('Error decreasing quantity:', error);
      alert('Error decreasing quantity. Check console for details.');
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Scan QR Code to Decrease Quantity</h1>
      <QRCode value={apiUrl} size={256} />
      <p>Scan this QR code with your mobile device or click the button to simulate a scan.</p>
      <button onClick={handleScan}>Simulate Scan</button>
    </div>
  );
};

export default App;
