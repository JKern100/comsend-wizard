// src/components/WizardContainer.js
import React, { useState } from 'react';
import FileUploadStep from './FileUploadStep';

const WizardContainer = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [wizardData, setWizardData] = useState({
    file: null,
    // You can add other fields for future steps here
  });

  const handleSaveFileData = (file) => {
    setWizardData({ ...wizardData, file });
  };

  const handleNext = () => {
    // For now, simply move to the next step
    setCurrentStep(currentStep + 1);
  };

  const handleExit = () => {
    // Implement exit behavior as needed
    alert('Exiting wizard.');
  };

  return (
    <div className="wizard-container">
      {currentStep === 1 && (
        <FileUploadStep
          onNext={handleNext}
          onExit={handleExit}
          saveFileData={handleSaveFileData}
        />
      )}
      {currentStep > 1 && (
        <div>
          <h2>Step {currentStep} (Under construction)</h2>
        </div>
      )}
      <div style={{ marginTop: '2rem' }}>
        <p>Current Step: {currentStep}</p>
      </div>
    </div>
  );
};

export default WizardContainer;
