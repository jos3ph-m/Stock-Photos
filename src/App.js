import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import Photo from './Photo';
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState(false);
  const fetchImages = async () => {
    let url;
    url = `${mainUrl}?clientID=kArhkzpnqkz5W0hrtlMqRMujR5BKkK67sZ90OOgvXsc`;
    try {
      const response = await fetch(url);
      const data = await response.json();
    } catch (error) {
      console.log(error);
    }
  };

  return <h2>stock photos starter</h2>;
}

export default App;
