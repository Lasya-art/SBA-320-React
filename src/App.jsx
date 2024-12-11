// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import NewsDisplay from "./components/NewsDisplay";
// import Form from "./components/Form";

// export default function App() {
//   // Constant with your API Key
//   const apiKey = "87d15344adb2479c93f3cc4fe13e10f9";

//   // State to hold movie data
//   const [news, setNews] = useState(null);

//   // Function to get movies
//   const getNews = async(searchTerm) => {
//     // Make fetch request and store the response
//     const response = await fetch(
//       `https://newsapi.org/v2/everything?q=${searchTerm}
// &from=2024-11-11&sortBy=publishedAt&apiKey=${apiKey}
// `
//     );
//     // Parse JSON response into a JavaScript object
//     const data = await response.json();
//     // Set the Movie state to the received data
//     setNews(data);
//   };

//   // We pass the getMovie function as a prop called moviesearch
//   return (
//     <div className="App">
//       <Form newsearch={getNews} />
//       <NewsDisplay />
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import "./App.css";

import NewsDisplay from "./components/NewsDisplay";
import Form from "./components/Form";

const apiKey = "87d15344adb2479c93f3cc4fe13e10f9";

export default function App() {
  const [news, setNews] = useState(null);

  const getNews = async (searchTerm) => {
    try {
      const response = await fetch(
        `https://newsapi.org/v2/everything?q=${searchTerm}&apiKey=${apiKey}`
      );
      const data = await response.json();
      setNews(data.articles && data.articles[0]);
    } catch (error) {
      console.error("Failed to fetch news:", error);
      setNews(null);
    }
  };

  
  useEffect(() => {
    getNews("Tesla");
  }, []);

  return (
    <div className="App"> {/* Wrap your main content here */}
      <h1>News Search App</h1>
      <Form searchNews={getNews} />
      <NewsDisplay news={news} />
    </div>
  );
}

