// App.jsx
import { useState, useEffect } from 'react';
import { useFluentTree } from './hooks/useFluentTree';
import { UserTree } from './components/UserTree';
import { QuantumTransfer } from './components/QuantumTransfer';
import { FractalLedger } from './components/FractalLedger';
import { SecurityOverview } from './components/SecurityOverview';
import { PrivacyToggle } from './components/PrivacyToggle';

export default function App() {
  const {
    trees,
    ledger,
    privacyMode,
    transferEnergy,
    togglePrivacy,
    generateFractalProof,
    currentTransfer
  } = useFluentTree();

  return (
    <div className={`forest-os ${privacyMode ? 'stealth-theme' : ''}`}>
      <header className="os-header">
        <h1 className="gradient-title">
          {privacyMode ? '🌑 Digital Forest OS' : '🌳 Tree Finance OS'}
        </h1>
        <PrivacyToggle enabled={privacyMode} onToggle={togglePrivacy} />
      </header>

      <div className="forest-grid">
        <UserTree {...trees.alice} privacyMode={privacyMode} />
        <QuantumTransfer 
          trees={trees} 
          onTransfer={transferEnergy}
          currentTransfer={currentTransfer}
          generateProof={generateFractalProof}
        />
        <UserTree {...trees.bob} privacyMode={privacyMode} />
      </div>

      <FractalLedger entries={ledger} privacyMode={privacyMode} />
      <SecurityOverview privacyMode={privacyMode} />
    </div>
  );
}