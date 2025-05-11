import { motion } from 'framer-motion';
import { maskData } from '../utils/privacy';

export const UserTree = ({ id, pixels, assets, privacyMode }) => {
  const treeHeight = Math.min(100, Math.max(20, (pixels / 1500) * 100));

  return (
    <motion.div 
      className="tree-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <h2>{id}'s Digital Tree</h2>
      
      <div className="tree-visualization">
        <motion.div
          className="tree-trunk"
          animate={{ height: `${treeHeight}%` }}
          transition={{ type: 'spring', stiffness: 50 }}
        />
      </div>
      
      <div className="tree-stats">
        <div className="stat-item">
          <span>Pixel Energy:</span>
          <strong>{privacyMode ? '•••••' : pixels.toFixed(2)}Ξ</strong>
        </div>
        
        <div className="asset-list">
          {assets.map((asset, index) => (
            <div key={index} className="asset-card">
              {privacyMode ? '••••••' : asset}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};