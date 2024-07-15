

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../styles.css';

// const CatalogPage = () => {
//   const [voyages, setVoyages] = useState([
//     { id: 1, title: 'Voyage to Mars', description: 'Explore the Red Planet', duration: '6 months', className: 'mars', favorite: false },
//     { id: 2, title: 'Orbiting Jupiter', description: 'Witness the giant gas planet', duration: '1 year', className: 'jupiter', favorite: false },
//     { id: 3, title: 'Journey to Venus', description: 'Discover the fiery beauty of Venus', duration: '8 months', className: 'venus', favorite: false },
//     { id: 4, title: 'Saturn Ring Tour', description: 'Experience the majestic rings of Saturn', duration: '2 years', className: 'saturn', favorite: false },
//     { id: 5, title: 'Solar Adventure', description: 'Explore the Sun up close', duration: 'Indefinite', className: 'sun', favorite: false },
//     { id: 6, title: 'Pluto Expedition', description: 'Visit the distant dwarf planet', duration: '4 years', className: 'pluto', favorite: false },
//     { id: 7, title: 'Cosmic Odyssey to Andromeda', description: 'Embark on an intergalactic journey to the Andromeda galaxy.', duration: '10 years', className: 'pluto', favorite: false },
//     { id: 8, title: 'Black Hole Expedition to Cygnus X-1', description: 'Venture into the cosmic abyss of the Cygnus X-1 black hole.', duration: '3 years', className: 'pluto', favorite: false },
//     { id: 9, title: 'Exploring the Orion Nebula', description: 'Discover the beauty and mysteries of the Orion Nebula.', duration: '3 years', className: 'pluto', favorite: false },
//     { id: 10, title: 'Explore the neighboring Andromeda Galaxy', description: 'Explore the neighboring Andromeda Galaxy.', duration: '15 years', className: 'pluto', favorite: false },
//   ]);

//   const toggleFavorite = (id) => {
//     const updatedVoyages = voyages.map(voyage =>
//       voyage.id === id ? { ...voyage, favorite: !voyage.favorite } : voyage
//     );
//     setVoyages(updatedVoyages);
//     localStorage.setItem('favorites', JSON.stringify(updatedVoyages.filter(voyage => voyage.favorite)));
//   };

//   return (
//     <div className="catalog-container">
//       <h2>Our Voyages</h2>
//       {voyages.map(voyage => (
//         <div key={voyage.id} className={`catalog-item ${voyage.className}`}>
//           <Link to={`/voyage/${voyage.id}`}>
//             <h3>{voyage.title}</h3>
//           </Link>
//           <p>{voyage.description}</p>
//           <p>Duration: {voyage.duration}</p>
//           <button onClick={() => toggleFavorite(voyage.id)}>
//             {voyage.favorite ? 'Remove from Favorites' : 'Add to Favorites'}
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default CatalogPage;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../styles.css';

// const CatalogPage = () => {
//   const [favorites, setFavorites] = useState([]);

//   const toggleFavorite = (voyageId) => {
//     if (favorites.includes(voyageId)) {
//       setFavorites(favorites.filter(id => id !== voyageId));
//     } else {
//       setFavorites([...favorites, voyageId]);
//     }
//   };

//   const voyages = [
//   { id: 1, title: 'Voyage to Mars', description: 'Explore the Red Planet', duration: '6 months', className: 'mars', favorite: false },
//   { id: 2, title: 'Orbiting Jupiter', description: 'Witness the giant gas planet', duration: '1 year', className: 'jupiter', favorite: false },
//   { id: 3, title: 'Journey to Venus', description: 'Discover the fiery beauty of Venus', duration: '8 months', className: 'venus', favorite: false },
//   { id: 4, title: 'Saturn Ring Tour', description: 'Experience the majestic rings of Saturn', duration: '2 years', className: 'saturn', favorite: false },
//   { id: 5, title: 'Solar Adventure', description: 'Explore the Sun up close', duration: 'Indefinite', className: 'sun', favorite: false },
//   { id: 6, title: 'Pluto Expedition', description: 'Visit the distant dwarf planet', duration: '4 years', className: 'pluto', favorite: false },
//   { id: 7, title: 'Cosmic Odyssey to Andromeda', description: 'Embark on an intergalactic journey to the Andromeda galaxy.', duration: '10 years', className: 'pluto', favorite: false },
//   { id: 8, title: 'Black Hole Expedition to Cygnus X-1', description: 'Venture into the cosmic abyss of the Cygnus X-1 black hole.', duration: '3 years', className: 'pluto', favorite: false },
//   { id: 9, title: 'Exploring the Orion Nebula', description: 'Discover the beauty and mysteries of the Orion Nebula.', duration: '3 years', className: 'pluto', favorite: false },
//   { id: 10, title: 'Explore the neighboring Andromeda Galaxy', description: 'Explore the neighboring Andromeda Galaxy.', duration: '15 years', className: 'pluto', favorite: false },

//   ];

//   return (
//     <div className="catalog-container">
//       <h2>Our Voyages</h2>
//       {voyages.map(voyage => (
//         <div key={voyage.id} className={`catalog-item ${voyage.className} ${favorites.includes(voyage.id) ? 'favorite' : ''}`}>
//           <Link to={`/voyage/${voyage.id}`}>
//             <h3>{voyage.title}</h3>
//           </Link>
//           <p>{voyage.description}</p>
//           <p>Duration: {voyage.duration}</p>
//           <div className="favorite-button" onClick={() => toggleFavorite(voyage.id)}>
//             {favorites.includes(voyage.id) ? '★' : '☆'} {/* Star icon for favorite */}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default CatalogPage;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../styles.css';

// const CatalogPage = () => {
//   const [favorites, setFavorites] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [showNoResults, setShowNoResults] = useState(false); // State to manage displaying no results message

//   // Function to handle search input change
//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//     setShowNoResults(false); // Hide no results message on input change
//   };

//   // Function to handle search submission
//   const handleSearchSubmit = () => {
//     const results = voyages.filter(voyage => voyage.title.toLowerCase().includes(searchTerm.toLowerCase()));
//     setSearchResults(results);
//     if (results.length === 0) {
//       setShowNoResults(true); // Show no results message if no matching voyages found
//     } else {
//       setShowNoResults(false);
//     }
//   };

//   // Function to reset search results
//   const resetSearch = () => {
//     setSearchTerm('');
//     setSearchResults([]);
//     setShowNoResults(false); // Hide no results message on reset
//   };

//   const toggleFavorite = (voyageId) => {
//     if (favorites.includes(voyageId)) {
//       setFavorites(favorites.filter(id => id !== voyageId));
//     } else {
//       setFavorites([...favorites, voyageId]);
//     }
//   };

//   const voyages = [
//     { id: 1, title: 'Voyage to Mars', description: 'Explore the Red Planet', duration: '6 months', className: 'mars', favorite: false },
//     { id: 2, title: 'Orbiting Jupiter', description: 'Witness the giant gas planet', duration: '1 year', className: 'jupiter', favorite: false },
//     { id: 3, title: 'Journey to Venus', description: 'Discover the fiery beauty of Venus', duration: '8 months', className: 'venus', favorite: false },
//     { id: 4, title: 'Saturn Ring Tour', description: 'Experience the majestic rings of Saturn', duration: '2 years', className: 'saturn', favorite: false },
//     { id: 5, title: 'Solar Adventure', description: 'Explore the Sun up close', duration: 'Indefinite', className: 'sun', favorite: false },
//     { id: 6, title: 'Pluto Expedition', description: 'Visit the distant dwarf planet', duration: '4 years', className: 'pluto', favorite: false },
//     { id: 7, title: 'Cosmic Odyssey to Andromeda', description: 'Embark on an intergalactic journey to the Andromeda galaxy.', duration: '10 years', className: 'pluto', favorite: false },
//     { id: 8, title: 'Black Hole Expedition to Cygnus X-1', description: 'Venture into the cosmic abyss of the Cygnus X-1 black hole.', duration: '3 years', className: 'pluto', favorite: false },
//     { id: 9, title: 'Exploring the Orion Nebula', description: 'Discover the beauty and mysteries of the Orion Nebula.', duration: '3 years', className: 'pluto', favorite: false },
//     { id: 10, title: 'Explore the neighboring Andromeda Galaxy', description: 'Explore the neighboring Andromeda Galaxy.', duration: '15 years', className: 'pluto', favorite: false },
//   ];

//   return (
//     <div>
//       {/* Search bar */}
//       <div className="search-container">
//         <input
//           type="text"
//           className="search-input"
//           placeholder="Search voyages..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
//         <div className="search-button-container">
//           <button className="search-button" onClick={handleSearchSubmit}>Search</button>

//         </div>
//       </div>

//       {/* Catalog container */}
//       <div className="catalog-container">
//         <h2>Our Voyages</h2>
//         {(searchResults.length > 0 ? searchResults : voyages).map(voyage => (
//           <div key={voyage.id} className={`catalog-item ${voyage.className} ${favorites.includes(voyage.id) ? 'favorite' : ''}`}>
//             <Link to={`/voyage/${voyage.id}`}>
//               <h3>{voyage.title}</h3>
//             </Link>
//             <p>{voyage.description}</p>
//             <p>Duration: {voyage.duration}</p>
//             <div className="favorite-button" onClick={() => toggleFavorite(voyage.id)}>
//               {favorites.includes(voyage.id) ? '★' : '☆'} {/* Star icon for favorite */}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default CatalogPage;


// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../styles.css';

// const CatalogPage = () => {
//   const [favorites, setFavorites] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [showNoResults, setShowNoResults] = useState(false);
//   const [voyages, setVoyages] = useState([
//     { id: 1, title: 'Voyage to Mars', description: 'Explore the Red Planet', duration: '6 months', className: 'mars', favorite: false },
//     { id: 2, title: 'Orbiting Jupiter', description: 'Witness the giant gas planet', duration: '1 year', className: 'jupiter', favorite: false },
//     { id: 3, title: 'Journey to Venus', description: 'Discover the fiery beauty of Venus', duration: '8 months', className: 'venus', favorite: false },
//     { id: 4, title: 'Saturn Ring Tour', description: 'Experience the majestic rings of Saturn', duration: '2 years', className: 'saturn', favorite: false },
//     { id: 5, title: 'Solar Adventure', description: 'Explore the Sun up close', duration: 'Indefinite', className: 'sun', favorite: false },
//     { id: 6, title: 'Pluto Expedition', description: 'Visit the distant dwarf planet', duration: '4 years', className: 'pluto', favorite: false },
//     { id: 7, title: 'Cosmic Odyssey to Andromeda', description: 'Embark on an intergalactic journey to the Andromeda galaxy.', duration: '10 years', className: 'pluto', favorite: false },
//     { id: 8, title: 'Black Hole Expedition to Cygnus X-1', description: 'Venture into the cosmic abyss of the Cygnus X-1 black hole.', duration: '3 years', className: 'pluto', favorite: false },
//     { id: 9, title: 'Exploring the Orion Nebula', description: 'Discover the beauty and mysteries of the Orion Nebula.', duration: '3 years', className: 'pluto', favorite: false },
//     { id: 10, title: 'Explore the neighboring Andromeda Galaxy', description: 'Explore the neighboring Andromeda Galaxy.', duration: '15 years', className: 'pluto', favorite: false },
//   ]);

//   const [newVoyage, setNewVoyage] = useState({ title: '', description: '', duration: '' });
//   const [editVoyage, setEditVoyage] = useState(null);

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//     setShowNoResults(false);
//   };

//   const handleSearchSubmit = () => {
//     const results = voyages.filter(voyage => voyage.title.toLowerCase().includes(searchTerm.toLowerCase()));
//     setSearchResults(results);
//     if (results.length === 0) {
//       setShowNoResults(true);
//     } else {
//       setShowNoResults(false);
//     }
//   };

//   const resetSearch = () => {
//     setSearchTerm('');
//     setSearchResults([]);
//     setShowNoResults(false);
//   };

//   const toggleFavorite = (voyageId) => {
//     if (favorites.includes(voyageId)) {
//       setFavorites(favorites.filter(id => id !== voyageId));
//     } else {
//       setFavorites([...favorites, voyageId]);
//     }
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setNewVoyage({ ...newVoyage, [name]: value });
//   };

//   const handleAddVoyage = () => {
//     const newId = voyages.length > 0 ? voyages[voyages.length - 1].id + 1 : 1;
//     setVoyages([...voyages, { ...newVoyage, id: newId, className: 'pluto', favorite: false }]);
//     setNewVoyage({ title: '', description: '', duration: '' });
//   };

//   const handleEditVoyage = (voyage) => {
//     setEditVoyage(voyage);
//   };

//   const handleUpdateVoyage = () => {
//     setVoyages(voyages.map(voyage => (voyage.id === editVoyage.id ? editVoyage : voyage)));
//     setEditVoyage(null);
//   };

//   const handleEditInputChange = (event) => {
//     const { name, value } = event.target;
//     setEditVoyage({ ...editVoyage, [name]: value });
//   };

//   return (
//     <div>
//       <div className="search-container">
//         <input
//           type="text"
//           className="search-input"
//           placeholder="Search voyages..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
//         <div className="search-button-container">
//           <button className="search-button" onClick={handleSearchSubmit}>Search</button>
//           <button className="search-button" onClick={resetSearch}>Reset</button>
//         </div>
//       </div>

//       <div className="catalog-container">
//         <h2>Our Voyages</h2>
//         {(searchResults.length > 0 ? searchResults : voyages).map(voyage => (
//           <div key={voyage.id} className={`catalog-item ${voyage.className} ${favorites.includes(voyage.id) ? 'favorite' : ''}`}>
//             <Link to={`/voyage/${voyage.id}`}>
//               <h3>{voyage.title}</h3>
//             </Link>
//             <p>{voyage.description}</p>
//             <p>Duration: {voyage.duration}</p>
//             <div className="favorite-button" onClick={() => toggleFavorite(voyage.id)}>
//               {favorites.includes(voyage.id) ? '★' : '☆'}
//             </div>
//             <button className="edit-button" onClick={() => handleEditVoyage(voyage)}>Edit</button>
//           </div>
//         ))}
//       </div>

//       <div className="add-voyage-container">
//         <h2>Add New Voyage</h2>
//         <input
//           type="text"
//           name="title"
//           placeholder="Title"
//           value={newVoyage.title}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           name="description"
//           placeholder="Description"
//           value={newVoyage.description}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           name="duration"
//           placeholder="Duration"
//           value={newVoyage.duration}
//           onChange={handleInputChange}
//         />
//         <button className="add-button" onClick={handleAddVoyage}>Add Voyage</button>
//       </div>

//       {editVoyage && (
//         <div className="edit-voyage-container">
//           <h2>Edit Voyage</h2>
//           <input
//             type="text"
//             name="title"
//             placeholder="Title"
//             value={editVoyage.title}
//             onChange={handleEditInputChange}
//           />
//           <input
//             type="text"
//             name="description"
//             placeholder="Description"
//             value={editVoyage.description}
//             onChange={handleEditInputChange}
//           />
//           <input
//             type="text"
//             name="duration"
//             placeholder="Duration"
//             value={editVoyage.duration}
//             onChange={handleEditInputChange}
//           />
//           <button className="update-button" onClick={handleUpdateVoyage}>Update Voyage</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CatalogPage;

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import '../styles.css';

// const CatalogPage = () => {
//   const [favorites, setFavorites] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [searchResults, setSearchResults] = useState([]);
//   const [showNoResults, setShowNoResults] = useState(false);
//   const [voyages, setVoyages] = useState([
//     { id: 1, title: 'Voyage to Mars', description: 'Explore the Red Planet', duration: '6 months', className: 'mars', favorite: false },
//     { id: 2, title: 'Orbiting Jupiter', description: 'Witness the giant gas planet', duration: '1 year', className: 'jupiter', favorite: false },
//     { id: 3, title: 'Journey to Venus', description: 'Discover the fiery beauty of Venus', duration: '8 months', className: 'venus', favorite: false },
//     { id: 4, title: 'Saturn Ring Tour', description: 'Experience the majestic rings of Saturn', duration: '2 years', className: 'saturn', favorite: false },
//     { id: 5, title: 'Solar Adventure', description: 'Explore the Sun up close', duration: 'Indefinite', className: 'sun', favorite: false },
//     { id: 6, title: 'Pluto Expedition', description: 'Visit the distant dwarf planet', duration: '4 years', className: 'pluto', favorite: false },
//     { id: 7, title: 'Cosmic Odyssey to Andromeda', description: 'Embark on an intergalactic journey to the Andromeda galaxy.', duration: '10 years', className: 'pluto', favorite: false },
//     { id: 8, title: 'Black Hole Expedition to Cygnus X-1', description: 'Venture into the cosmic abyss of the Cygnus X-1 black hole.', duration: '3 years', className: 'pluto', favorite: false },
//     { id: 9, title: 'Exploring the Orion Nebula', description: 'Discover the beauty and mysteries of the Orion Nebula.', duration: '3 years', className: 'pluto', favorite: false },
//     { id: 10, title: 'Explore the neighboring Andromeda Galaxy', description: 'Explore the neighboring Andromeda Galaxy.', duration: '15 years', className: 'pluto', favorite: false },
//   ]);

//   const [newVoyage, setNewVoyage] = useState({ title: '', description: '', duration: '' });
//   const [editVoyage, setEditVoyage] = useState(null);

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//     setShowNoResults(false);
//   };

//   const handleSearchSubmit = () => {
//     const results = voyages.filter(voyage => voyage.title.toLowerCase().includes(searchTerm.toLowerCase()));
//     setSearchResults(results);
//     if (results.length === 0) {
//       setShowNoResults(true);
//     } else {
//       setShowNoResults(false);
//     }
//   };

//   const resetSearch = () => {
//     setSearchTerm('');
//     setSearchResults([]);
//     setShowNoResults(false);
//   };

//   const toggleFavorite = (voyageId) => {
//     if (favorites.includes(voyageId)) {
//       setFavorites(favorites.filter(id => id !== voyageId));
//     } else {
//       setFavorites([...favorites, voyageId]);
//     }
//   };

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setNewVoyage({ ...newVoyage, [name]: value });
//   };

//   const handleAddVoyage = () => {
//     const newId = voyages.length > 0 ? voyages[voyages.length - 1].id + 1 : 1;
//     setVoyages([...voyages, { ...newVoyage, id: newId, className: 'pluto', favorite: false }]);
//     setNewVoyage({ title: '', description: '', duration: '' });
//   };

//   const handleEditVoyage = (voyage) => {
//     setEditVoyage(voyage);
//   };

//   const handleUpdateVoyage = () => {
//     setVoyages(voyages.map(voyage => (voyage.id === editVoyage.id ? editVoyage : voyage)));
//     setEditVoyage(null);
//   };

//   const handleEditInputChange = (event) => {
//     const { name, value } = event.target;
//     setEditVoyage({ ...editVoyage, [name]: value });
//   };

//   return (
//     <div>
//       <div className="search-container">
//         <input
//           type="text"
//           className="search-input"
//           placeholder="Search voyages..."
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
//         <div className="search-button-container">
//           <button className="search-button" onClick={handleSearchSubmit}>Search</button>
//           <button className="search-button" onClick={resetSearch}>Reset</button>
//         </div>
//       </div>

//       <div className="catalog-container">
//         <h2>Our Voyages</h2>
//         {(searchResults.length > 0 ? searchResults : voyages).map(voyage => (
//           <div key={voyage.id} className={`catalog-item ${voyage.className} ${favorites.includes(voyage.id) ? 'favorite' : ''}`}>
//             <Link to={`/voyage/${voyage.id}`}>
//               <h3>{voyage.title}</h3>
//             </Link>
//             <p>{voyage.description}</p>
//             <p>Duration: {voyage.duration}</p>
//             <div className="edit-favorite-container">
//               <button className="edit-button" onClick={() => handleEditVoyage(voyage)}>Edit</button>
//               <div className="favorite-button" onClick={() => toggleFavorite(voyage.id)}>
//                 {favorites.includes(voyage.id) ? '★' : '☆'}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="add-voyage-container">
//         <h2>Add New Voyage</h2>
//         <input
//           type="text"
//           name="title"
//           placeholder="Title"
//           value={newVoyage.title}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           name="description"
//           placeholder="Description"
//           value={newVoyage.description}
//           onChange={handleInputChange}
//         />
//         <input
//           type="text"
//           name="duration"
//           placeholder="Duration"
//           value={newVoyage.duration}
//           onChange={handleInputChange}
//         />
//         <button className="add-button" onClick={handleAddVoyage}>Add Voyage</button>
//       </div>

//       {editVoyage && (
//         <div className="edit-voyage-container">
//           <h2>Edit Voyage</h2>
//           <input
//             type="text"
//             name="title"
//             placeholder="Title"
//             value={editVoyage.title}
//             onChange={handleEditInputChange}
//           />
//           <input
//             type="text"
//             name="description"
//             placeholder="Description"
//             value={editVoyage.description}
//             onChange={handleEditInputChange}
//           />
//           <input
//             type="text"
//             name="duration"
//             placeholder="Duration"
//             value={editVoyage.duration}
//             onChange={handleEditInputChange}
//           />
//           <button className="update-button" onClick={handleUpdateVoyage}>Update Voyage</button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default CatalogPage;


import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles.css';

const CatalogPage = () => {
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showNoResults, setShowNoResults] = useState(false);
  const [voyages, setVoyages] = useState([
    { id: 1, title: 'Voyage to Mars', description: 'Explore the Red Planet', duration: '6 months', className: 'mars', favorite: false },
    { id: 2, title: 'Orbiting Jupiter', description: 'Witness the giant gas planet', duration: '1 year', className: 'jupiter', favorite: false },
    { id: 3, title: 'Journey to Venus', description: 'Discover the fiery beauty of Venus', duration: '8 months', className: 'venus', favorite: false },
    { id: 4, title: 'Saturn Ring Tour', description: 'Experience the majestic rings of Saturn', duration: '2 years', className: 'saturn', favorite: false },
    { id: 5, title: 'Solar Adventure', description: 'Explore the Sun up close', duration: 'Indefinite', className: 'sun', favorite: false },
    { id: 6, title: 'Pluto Expedition', description: 'Visit the distant dwarf planet', duration: '4 years', className: 'pluto', favorite: false },
    { id: 7, title: 'Cosmic Odyssey to Andromeda', description: 'Embark on an intergalactic journey to the Andromeda galaxy.', duration: '10 years', className: 'pluto', favorite: false },
    { id: 8, title: 'Black Hole Expedition to Cygnus X-1', description: 'Venture into the cosmic abyss of the Cygnus X-1 black hole.', duration: '3 years', className: 'pluto', favorite: false },
    { id: 9, title: 'Exploring the Orion Nebula', description: 'Discover the beauty and mysteries of the Orion Nebula.', duration: '3 years', className: 'pluto', favorite: false },
    { id: 10, title: 'Explore the neighboring Andromeda Galaxy', description: 'Explore the neighboring Andromeda Galaxy.', duration: '15 years', className: 'pluto', favorite: false },
  ]);

  const [newVoyage, setNewVoyage] = useState({ title: '', description: '', duration: '' });
  const [editVoyage, setEditVoyage] = useState(null);

  // Load favorites from localStorage on component mount
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavorites(storedFavorites);
  }, []);

  // Save favorites to localStorage whenever favorites state changes
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    setShowNoResults(false);
  };

  const handleSearchSubmit = () => {
    const results = voyages.filter(voyage => voyage.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setSearchResults(results);
    if (results.length === 0) {
      setShowNoResults(true);
    } else {
      setShowNoResults(false);
    }
  };

  const resetSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
    setShowNoResults(false);
  };

  const toggleFavorite = (voyageId) => {
    if (favorites.includes(voyageId)) {
      setFavorites(favorites.filter(id => id !== voyageId));
    } else {
      setFavorites([...favorites, voyageId]);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewVoyage({ ...newVoyage, [name]: value });
  };

  const handleAddVoyage = () => {
    const newId = voyages.length > 0 ? voyages[voyages.length - 1].id + 1 : 1;
    setVoyages([...voyages, { ...newVoyage, id: newId, className: 'pluto', favorite: false }]);
    setNewVoyage({ title: '', description: '', duration: '' });
  };

  const handleEditVoyage = (voyage) => {
    setEditVoyage(voyage);
  };

  const handleUpdateVoyage = () => {
    setVoyages(voyages.map(voyage => (voyage.id === editVoyage.id ? editVoyage : voyage)));
    setEditVoyage(null);
  };

  const handleEditInputChange = (event) => {
    const { name, value } = event.target;
    setEditVoyage({ ...editVoyage, [name]: value });
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search voyages..."
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <div className="search-button-container" >
          <button className="search-button" onClick={handleSearchSubmit}>Search</button>
          <button className="search-button" onClick={resetSearch}>Reset</button>
        </div>
      </div>



      <div style={{ display: "flex", flexDirection: 'row', columnGap: "30px" }} >
        <div className="catalog-container">
          <h2>Our Voyages</h2>
          {(searchResults.length > 0 ? searchResults : voyages).map(voyage => (
            <div key={voyage.id} className={`catalog-item ${voyage.className} ${favorites.includes(voyage.id) ? 'favorite' : ''}`}>
              <Link to={`/voyage/${voyage.id}`}>
                <h3>{voyage.title}</h3>
              </Link>
              <p>{voyage.description}</p>
              <p>Duration: {voyage.duration}</p>
              <div className="edit-favorite-container">
                <button className="edit-button" onClick={() => handleEditVoyage(voyage)}>Edit</button>
                <div className="favorite-button" onClick={() => toggleFavorite(voyage.id)}>
                  {favorites.includes(voyage.id) ? '★' : '☆'}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ display: "flex", flexDirection: 'row', rowGap: "25px" }}>
          <div className="add-voyage-container">
            <h2>Add New Voyage</h2>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={newVoyage.title}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={newVoyage.description}
              onChange={handleInputChange}
            />
            <input
              type="text"
              name="duration"
              placeholder="Duration"
              value={newVoyage.duration}
              onChange={handleInputChange}
            />
            <button className="add-button" onClick={handleAddVoyage}>Add Voyage</button>
          </div>
        </div>
        {editVoyage && (
          <div className="edit-voyage-container">
            <h2>Edit Voyage</h2>
            <input
              type="text"
              name="title"
              placeholder="Title"
              value={editVoyage.title}
              onChange={handleEditInputChange}
            />
            <input
              type="text"
              name="description"
              placeholder="Description"
              value={editVoyage.description}
              onChange={handleEditInputChange}
            />
            <input
              type="text"
              name="duration"
              placeholder="Duration"
              value={editVoyage.duration}
              onChange={handleEditInputChange}
            />
            <button className="update-button" onClick={handleUpdateVoyage}>Update Voyage</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CatalogPage;

