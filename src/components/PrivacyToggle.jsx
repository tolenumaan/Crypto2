import { motion } from 'framer-motion';

export const PrivacyToggle = ({ enabled, onToggle }) => {
  return (
    <motion.button
      className={`privacy-toggle ${enabled ? 'stealth' : 'public'}`}
      onClick={onToggle}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div
        className="toggle-indicator"
        animate={enabled ? 'hidden' : 'visible'}
        variants={{
          hidden: { x: 24, opacity: 0.5 },
          visible: { x: 0, opacity: 1 }
        }}
      >
        {enabled ? '🌑 Hidden' : '🌳 Visible'}
      </motion.div>
      
      <div className="toggle-background">
        <div className="toggle-state-indicator" />
      </div>
    </motion.button>
  );
};