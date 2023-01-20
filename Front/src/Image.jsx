import React, { useState } from 'react';

function ImageUploader() {
  const [image, setImage] = useState(null);

  const handleChange = (event) => {
    setImage(URL.createObjectURL(event.target.files[0]));
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button type="submit">Upload</button>
      {image && <img src={image} alt="uploaded" />}
    </div>
  );
}

export default ImageUploader;