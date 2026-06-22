/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import Admin from './pages/Admin';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { ShopProvider } from './context/ShopContext';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <ShopProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Shop />} />
          <Route path="/admin" element={<ProtectedRoute reqRole="admin"><Admin /></ProtectedRoute>} />
        </Routes>
        <WhatsAppButton />
      </Router>
    </ShopProvider>
  );
}

