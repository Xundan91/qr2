// import React, { useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';

// function ScanPage() {
//   const { id } = useParams();
//   const navigate = useNavigate();

//   useEffect(() => {
//     const decreaseQuantity = async () => {
//       try {
//         const response = await axios.post(`http://localhost:5000/api/decrease-quantity/${id}`);
//         alert(response.data.message);
//         navigate('/');
//       } catch (error) {
//         alert('Error: ' + error.response.data.message);
//         navigate('/');
//       }
//     };

//     decreaseQuantity();
//   }, [id, navigate]);

//   return <div>Processing...</div>;
// }

// export default ScanPage;