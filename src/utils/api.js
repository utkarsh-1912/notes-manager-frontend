import axios from 'axios';

// Use local URL in development and production URL when deployed
const api = axios.create({
  baseURL:
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:5000/api'  // Local backend URL for development
      : 'https://notes-manager-backend-a6z3.onrender.com/api',  // Production backend URL
});

export default api;
