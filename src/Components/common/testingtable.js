import React from 'react';
import EnhancedTable from './TemporaryTable';

const App = () => {
  // Define the columns
  const headCells = [
    { id: 'name', numeric: false, disablePadding: true, label: 'Dessert (100g serving)' },
    { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
    { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
    { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
    // { id: 'protein', numeric: true, disablePadding: false, label: 'Protein (g)' },
  ];

  // Define the rows
  const rows = [
    { id: 1, name: 'Cupcake', calories: 305, fat: 3.7, carbs: 67, protein: 4.3 },
    { id: 2, name: 'Donut', calories: 452, fat: 25.0, carbs: 51, protein: 4.9 },
    // Add more rows as needed
  ];

  return (
    <div>
      <EnhancedTable headCells={headCells} rowsData={rows} />
    </div>
  );
};

export default App;
