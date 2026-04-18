import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Centers from './pages/Centers';
import Contact from './pages/Contact';
import Simulator from './pages/Simulator'; // ← أضف هذا السطر هنا
import Chat from './pages/Chat';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white" dir="rtl">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/centers" element={<Centers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/simulator" element={<Simulator />} /> {/* ← أضف هذا السطر هنا */}
           <Route path="/chat" element={<Chat />} />  {/* ← أضف هذا السطر */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
export default App;
