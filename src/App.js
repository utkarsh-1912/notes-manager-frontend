import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NoteEditPage from './pages/NoteEditPage';
import NotFoundPage from './pages/NotFound';
import CreateNotePage from './pages/CreateNotePage';
import NotePage from './pages/NotePage';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateNotePage />} />
        <Route path="/edit/:id" element={<NoteEditPage />} />
        <Route path="/note/:id" element={<NotePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <ToastContainer theme="light"/>
    </Router>
  );
};

export default App;
