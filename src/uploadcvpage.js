import React, { useState } from 'react';

const UploadCVPage = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
      // Here, you can perform any actions with the selected CV file,
      // such as uploading it to a server or processing it.
    console.log(selectedFile);
  };
  return (
    <div className="upload-cv-page">
      <dev className=''></dev>
      <h1>Upload CV</h1>
      <form onSubmit={handleSubmit} className="cv-form">
        <input type="file" onChange={handleFileChange} className="file-input" />
        <button type="submit" className="upload-button">Upload</button>
      </form>
    </div>
  );
};

export default UploadCVPage;
