import React, { useState } from "react";
import "./SearchBar.css";
import { ReactComponent as SendIcon } from "../logos/send-icon.svg"; // Import your send arrow SVG file
import { ReactComponent as Arrow } from "../logos/arrow.svg";

const SearchBar = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", searchTerm);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <button className="search-button">
        <Arrow className="send-icon" />
      </button>
      <input
        type="text"
        placeholder="Search or Ask to know more"
        value={searchTerm}
        onClick={props.onClick}
        onChange={handleInputChange}
      />
      <button type="submit" className="search-button">
        <SendIcon className="send-icon" />
      </button>
    </form>
  );
};

export default SearchBar;
