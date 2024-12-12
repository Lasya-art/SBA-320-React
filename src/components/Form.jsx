import {useState, useEffect} from "react";



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
  
