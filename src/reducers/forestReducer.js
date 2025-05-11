export const forestReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_PRIVACY':
      return { ...state, privacyMode: !state.privacyMode };
      
    case 'TRANSFER_INITIATE':
      return {
        ...state,
        currentTransfer: action.payload
      };
      
    case 'TRANSFER_COMPLETE':
      const { sender, receiver, amount } = action.payload;
      return {
        ...state,
        trees: {
          ...state.trees,
          [sender]: {
            ...state.trees[sender],
            pixels: state.trees[sender].pixels - amount
          },
          [receiver]: {
            ...state.trees[receiver],
            pixels: state.trees[receiver].pixels + amount
          }
        },
        ledger: [action.payload, ...state.ledger],
        currentTransfer: null
      };
      
    default:
      return state;
  }
};