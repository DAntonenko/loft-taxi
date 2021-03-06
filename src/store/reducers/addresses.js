import { SET_ADDRESSES_LIST, START_ADDRESS, END_ADDRESS } from '../actions/addresses';

export const initialState = {
  addresses: [],
  startAddress: '',
  endAddress: '',
};

export default function addresses(state = initialState, action) {
  switch(action.type) {
    case SET_ADDRESSES_LIST: {
      return {
        ...state,
        addresses: action.payload.addresses,
      };
    }

    case START_ADDRESS: {
      return {
        ...state,
        startAddress: action.payload.startAddress,
      };
    }

    case END_ADDRESS: {
      return {
        ...state,
        endAddress: action.payload.endAddress,
      };
    }
    
    default:
      return state;
  }
}
