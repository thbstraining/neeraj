// src/contexts/VoyagesContext.js
import React, { createContext, useState, useContext } from 'react';

// Initial voyages data
const initialVoyages = [

  {
    id: 1,
    title: 'Voyage to Mars',
    description: 'Explore the Red Planet and its fascinating landscapes.',
    duration: '6 months',
    imageUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TWFyc3xlbnwwfHwwfHx8MA%3D%3D',
    travelDates: ['2024-08-01', '2024-09-01', '2024-10-01'],
  },
  {
    id: 2,
    title: 'Orbiting Jupiter',
    description: 'Witness the giant gas planet and its moons.',
    duration: '1 year',
    imageUrl: 'https://images.unsplash.com/photo-1630839437035-dac17da580d0?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8anVwaXRlcnxlbnwwfHwwfHx8MA%3D%3D',
    travelDates: ['2024-12-01', '2025-01-01', '2025-02-01'],
  },
  {
      id: 3,
      title: 'Journey to Venus',
      description: 'Discover the fiery beauty of Venus.',
      duration: '8 months',
      imageUrl: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmVudXN8ZW58MHx8MHx8fDA%3D',
      travelDates: ['2025-03-01', '2025-04-01', '2025-05-01'],
    },
    {
      id: 4,
      title: 'Saturn Ring Tour',
      description: 'Experience the majestic rings of Saturn.',
      duration: '2 years',
      imageUrl: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2F0dXJufGVufDB8fDB8fHww',
      travelDates: ['2025-06-01', '2025-07-01', '2025-08-01'],
    },
    {
      id: 5,
      title: 'Sun Exploration',
      description: 'Observe the Sun and study solar phenomena.',
      duration: '1 year',
      imageUrl: 'https://images.unsplash.com/photo-1614642264762-d0a3b8bf3700?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3VufGVufDB8fDB8fHww',
      travelDates: ['2025-09-01', '2025-10-01', '2025-11-01'],
      className: 'sun',
    },
    {
      id: 6,
      title: 'Pluto Expedition',
      description: 'Explore the dwarf planet Pluto and its icy terrain.',
      duration: '3 years',
      imageUrl: 'https://images.unsplash.com/photo-1614314107768-6018061b5b72?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGx1dG98ZW58MHx8MHx8fDA%3D',
      travelDates: ['2026-01-01', '2026-02-01', '2026-03-01'],
      className: 'pluto',
    },
    {
      id: 7,
      title: 'Cosmic Odyssey to Andromeda',
      description: 'Embark on an intergalactic journey to the Andromeda galaxy.',
      duration: '10 years',
      imageUrl: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q29zbWljJTIwT2R5c3NleSUyMHRvJTIwQW5kcm9tZWRhfGVufDB8fDB8fHww',
      travelDates: ['2030-01-01', '2031-01-01', '2032-01-01'],
      className: 'andromeda',
    },
    {
      id: 8,
      title: 'Black Hole Expedition to Cygnus X-1',
      description: 'Venture into the cosmic abyss of the Cygnus X-1 black hole.',
      duration: '5 years',
      imageUrl: 'https://images.unsplash.com/photo-1654021649783-645a5e663c09?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q3lnbnVzfGVufDB8fDB8fHww',
      travelDates: ['2028-01-01', '2029-01-01', '2030-01-01'],
      className: 'cygnus-x1',
    },
    {
      id: 9,
      title: 'Exploring the Orion Nebula',
      description: 'Discover the beauty and mysteries of the Orion Nebula.',
      duration: '3 years',
      imageUrl: 'https://images.unsplash.com/photo-1516331138075-f3adc1e149cd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8T3Jpb24lMjBOZWJ1bGEnfGVufDB8fDB8fHww',
      travelDates: ['2027-01-01', '2027-02-01', '2027-03-01'],
      className: 'orion-nebula',
    },
    {
      id: 10,
      title: 'Visiting the Andromeda Galaxy',
      description: 'Explore the neighboring Andromeda Galaxy.',
      duration: '15 years',
      imageUrl: 'https://images.unsplash.com/photo-1614910767616-d11ce66fcb5d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8QW5kcm9tZWRhfGVufDB8fDB8fHww',
      travelDates: ['2035-01-01', '2036-01-01', '2037-01-01'],
      className: 'andromeda-galaxy',
    },

  
  // ...other voyages
];

const VoyagesContext = createContext();

export const useVoyages = () => useContext(VoyagesContext);

export const VoyagesProvider = ({ children }) => {
  const [voyages, setVoyages] = useState(initialVoyages);

  const updateVoyage = (updatedVoyage) => {
    setVoyages((prevVoyages) =>
      prevVoyages.map((voyage) =>
        voyage.id === updatedVoyage.id ? updatedVoyage : voyage
      )
    );
  };

  const addVoyage = (newVoyage) => {
    setVoyages((prevVoyages) => [...prevVoyages, newVoyage]);
  };

  return (
    <VoyagesContext.Provider value={{ voyages, updateVoyage, addVoyage }}>
      {children}
    </VoyagesContext.Provider>
  );
};
