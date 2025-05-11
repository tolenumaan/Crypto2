import { useMemo } from 'react';
import { motion } from 'framer-motion';

const securityFeatures = [
  { title: 'Quantum Resistance', icon: '🔒', tech: 'Kyber/Dilithium' },
  { title: 'ZK Proofs', icon: '🕵️', tech: 'ZK-SNARKs' },
  { title: 'Sharded Network', icon: '🌐', tech: '4 Sidechains' },
  { title: 'Stealth Addresses', icon: '👤', tech: 'Oblivious Transfers' },
];

export const SecurityOverview = ({ privacyMode }) => {
  const displayedFeatures = useMemo(() => 
    securityFeatures.map(f => ({
      ...f,
      title: privacyMode ? '••••••••' : f.title
    })), 
    [privacyMode]
  );

  return (
    <motion.div className="security-overview">
      <h2>🛡️ Security Architecture</h2>
      
      <div className="security-grid">
        {displayedFeatures.map((feature, index) => (
          <motion.div
            key={index}
            className="security-card"
            whileHover={{ scale: 1.05 }}
          >
            <div className="security-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{privacyMode ? '••••••••' : feature.tech}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};