// src/components/FileUploadStep.js
import React, { useState } from 'react';

const FileUploadStep = ({ onNext, onExit, saveFileData }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState('');

  // Allowed file extensions: CSV and Excel (.xls/.xlsx)
  const allowedExtensions = ['csv', 'xls', 'xlsx'];

  const handleFileChange = (e) => {
    setError('');
    if (e.target.files.length > 0) {
      const file = e.target.files[0];
      const extension = file.name.split('.').pop().toLowerCase();
      if (!allowedExtensions.includes(extension)) {
        setError('Please choose only an Excel or CSV type file.');
        setSelectedFile(null);
      } else {
        setSelectedFile(file);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedFile) {
      setError('No file selected.');
      return;
    }
    // Save file data in global wizard state
    saveFileData(selectedFile);
    // Proceed to the next step
    onNext();
  };

  return (
    <div className="wizard-step">
      <h2>Please upload your import file</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          onChange={handleFileChange}
          accept=".csv, .xls, .xlsx"
        />
        {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>}
        <div className="wizard-buttons" style={{ marginTop: '1rem' }}>
          <button type="submit">Submit</button>
          <button type="button" onClick={onExit} style={{ marginLeft: '1rem' }}>
            Exit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FileUploadStep;
