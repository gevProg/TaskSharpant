import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import AddUser from './pages/AddUser';
import UpdateEmail from './pages/UpdateEmail';
import UpdatePhone from './pages/UpdatePhone';
import Allusers from './pages/AllUsers';

import UpdateAllergies from './pages/UpdateAllergies';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          

          <Route index element={<AddUser />} />

          <Route path="add" element={<AddUser />} />
          <Route path="/allusers" element={<Allusers />} />

          <Route path="email" element={<UpdateEmail />} />
          <Route path="phone" element={<UpdatePhone />} />
          <Route path="allergies" element={<UpdateAllergies />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;