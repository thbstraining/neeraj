

import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles.css'; 
import { voyages } from '../Data/voyagesData';

const VoyageDetailsPage = () => {
  const { id } = useParams();
  const voyage = voyages.find(voyage => voyage.id === parseInt(id));

  if (!voyage) {
    return <div className="voyage-details-container"><h2>Voyage not found</h2></div>;
  }

  return (
    <div className="voyage-details-container">
      <h2>{voyage.title}</h2>
      <img src={voyage.imageUrl} alt={voyage.title} />
      <p>{voyage.description}</p>
      <p>Duration: {voyage.duration}</p>
      <h3>Available Travel Dates</h3>
      <ul>
        {voyage.travelDates.map(date => (
          <li key={date}>{date}</li>
        ))}
      </ul>
    </div>
  );
}

export default VoyageDetailsPage;


// src/pages/VoyageDetailsPage.js
// import React from 'react';
// import { useParams } from 'react-router-dom';
// import { useVoyages } from '../context/VoyagesContext';
// import '../styles.css';

// const VoyageDetailsPage = () => {
//   const { id } = useParams();
//   const { voyages } = useVoyages();
//   const voyage = voyages.find((voyage) => voyage.id === parseInt(id));

//   if (!voyage) {
//     return (
//       <div className="voyage-details-container">
//         <h2>Voyage not found</h2>
//       </div>
//     );
//   }

//   return (
//     <div className="voyage-details-container">
//       <h2>{voyage.title}</h2>
//       <img src={voyage.imageUrl} alt={voyage.title} />
//       <p>{voyage.description}</p>
//       <p>Duration: {voyage.duration}</p>
//       <h3>Available Travel Dates</h3>
//       <ul>
//         {voyage.travelDates.map((date) => (
//           <li key={date}>{date}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default VoyageDetailsPage;
