import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MaterialList from './pages/MaterialList';
import PageDesigner from './pages/PageDesigner';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MaterialList />} />
        <Route path="/designer" element={<PageDesigner />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; 