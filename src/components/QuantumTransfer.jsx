import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export const QuantumTransfer = ({ trees, onTransfer, currentTransfer }) => {
  const [amount, setAmount] = useState('');
  const [sender, setSender] = useState('alice');
  const receiver = sender === 'alice' ? 'bob' : 'alice';

  const handleSubmit = (e) => {
    e.preventDefault();
    onTransfer({ sender, receiver, amount: parseFloat(amount) });
    setAmount('');
  };

  return (
    <div className="quantum-transfer-container">
      <form onSubmit={handleSubmit}>
        <div className="transfer-controls">
          <select 
            value={sender}
            onChange={(e) => setSender(e.target.value)}
            className="sender-select"
          >
            <option value="alice">Alice's Tree</option>
            <option value="bob">Bob's Tree</option>
          </select>
          
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="0.00Ξ"
            min="0"
            step="0.01"
            className="amount-input"
          />
          
          <button type="submit" className="transfer-button">
            Initiate Quantum Transfer
          </button>
        </div>
      </form>

      <AnimatePresence>
        {currentTransfer && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="transfer-status"
          >
            <div className="zk-proof-visualization">
              <div className="fractal-pattern" />
              <span>Zero-Knowledge Proof Generated</span>
            </div>
            <p>Verifying transaction with decentralized witnesses...</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};