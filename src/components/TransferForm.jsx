// components/TransferForm.jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  const proof = await generateZKProof(transferDetails);
  setActiveProof(proof);
  
  // Require user confirmation
  if(!await showConsentDialog(proof)) return;
  
  completeTransfer(proof);
};