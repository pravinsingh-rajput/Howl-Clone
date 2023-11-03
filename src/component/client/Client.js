import React from "react";
import "./Client.css";
import ClientCard from "./ClientCard";

const Client = () => {
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const modifiedClientImageUrls = [...Array(14).keys()].map((index) => {
    const randomValue = getRandomNumber();
    return `./Assets/clientimg/client${randomValue}.jpg`;
  });

  return (
    <div className="clientpage">
      <h2 className="client_headline">Clients we work with</h2>
      <div className="client_container">
        {modifiedClientImageUrls.map((url, index) => (
          <ClientCard key={index} url={url} />
        ))}
      </div>
    </div>
  );
};
export default Client;
