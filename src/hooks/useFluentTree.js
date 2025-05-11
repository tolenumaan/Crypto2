import { useReducer, useEffect } from 'react';
import { forestReducer } from '../reducers/forestReducer';

const initialForestState = {
  trees: {
    alice: {
      id: 'alice',
      pixels: 1024.5,
      lands: 3,
      assets: ['Luxury Penthouse', 'Solar Credits']
    },
    bob: {
      id: 'bob',
      pixels: 1024.5,
      lands: 3,
      assets: ['Electric SUV', 'Tech Stocks']
    }
  },
  ledger: [],
  privacyMode: false,
  currentTransfer: null
};

export const useFluentTree = () => {
  const [state, dispatch] = useReducer(forestReducer, initialForestState);

  const transferEnergy = async (transfer) => {
    dispatch({ type: 'TRANSFER_INITIATE', payload: transfer });
    
    // Simulate ZK-proof generation
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    dispatch({ 
      type: 'TRANSFER_COMPLETE', 
      payload: {
        ...transfer,
        proof: crypto.randomUUID()
      }
    });
  };

  return {
    ...state,
    transferEnergy,
    togglePrivacy: () => dispatch({ type: 'TOGGLE_PRIVACY' })
  };
};