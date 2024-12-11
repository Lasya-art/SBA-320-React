import {useState, useEffect} from "react";

// export default function Form (props) {
//   // State to hold the data of our form
//   const [formData, setFormData] = useState({
//     searchterm: "",
//   });

//   // handleChange - updates formData when we type into form
//   const handleChange = (event) => {
//     // Use the event object to detect key, and value to update
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = (event) => {
//     // Prevent page from refreshing on form submission
//     event.preventDefault();
//     // Pass the search term to moviesearch prop, which is App's getMovie function
//     props.newsearch(formData.searchterm);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="searchterm"
//           onChange={handleChange}
//           value={formData.searchterm}
//         />
//         <input type="submit" value="submit" />
//       </form>
//     </div>
//   );
// }





//sec
// import { useState } from "react";

// export default function Form({ searchNews }) {
//   const [formData, setFormData] = useState({
//     searchterm: "",
//   });

//   const handleChange = (event) => {
//     setFormData({ ...formData, [event.target.name]: event.target.value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     searchNews(formData.searchterm);
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="searchterm"
//           placeholder="Search for news"
//           onChange={handleChange}
//           value={formData.searchterm}
//         />
//         <input type="submit" value="Submit" />
//       </form>
//     </div>
//   );
// }


export default function Form({ searchNews }) {
    const [formData, setFormData] = useState({
      searchTerm: "",
      message: "Type a keyword to find the latest news.",
    });
  
    const handleChange = (event) => {
      setFormData({ ...formData, searchTerm: event.target.value });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (formData.searchTerm.trim() === "") {
        setFormData({
          ...formData,
          message: "Search cannot be empty. Please enter a keyword.",
        });
      } else {
        searchNews(formData.searchTerm);
        setFormData({
          ...formData,
          message: `Searching for news on '${formData.searchTerm}'...`,
        });
      }
    };
  
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="searchTerm"
            placeholder="Search for news by keyword..."
            onChange={handleChange}
            value={formData.searchTerm}
          />
          <input type="submit" value="Search" />
        </form>
        <p>{formData.message}</p>
      </div>
    );
  }
  
