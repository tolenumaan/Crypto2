import { motion } from 'framer-motion';
import { maskData } from '../utils/privacy';

export const FractalLedger = ({ entries, privacyMode }) => {
  return (
    <motion.div 
      className="ledger-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2>🌐 Fractal Ledger</h2>
      
      <div className="ledger-entries">
        {entries.map((entry, index) => (
          <motion.div
            key={index}
            className="ledger-entry"
            initial={{ x: -50 }}
            animate={{ x: 0 }}
          >
            <div className="transaction-hash">
              {privacyMode ? maskData(entry.txHash) : entry.txHash}
            </div>
            <div className="transaction-details">
              <span>{privacyMode ? '•••Ξ' : `${entry.amount.toFixed(2)}Ξ`}</span>
              <span>{entry.sender} → {entry.receiver}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};