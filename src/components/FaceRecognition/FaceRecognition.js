import React from "react";

const FaceRecognition = ({ imageUrl }) => {
  return (
    <div className="center">
      <img src={imageUrl} alt="Image detection" />
    </div>
  );
};

export default FaceRecognition;
