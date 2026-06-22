/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Admin from './pages/Admin';
import { ShopProvider } from './context/ShopContext';

export default function App() {
  return (
    <ShopProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </ShopProvider>
  );
}

