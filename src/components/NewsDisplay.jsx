import React from "react";

export default function NewsDisplay({ news }) {
  const loaded = () => {
    return (
      <>
        <h1>{news.title}</h1>
        <p><strong>Source:</strong> {news.source.name}</p>
        <p>{news.description}</p>
        
      </>
    );
  };

  const loading = () => {
    return <h1>No News Found</h1>;
  };

  return news ? loaded() : loading();
}

  
