export const SET_CARD = 'SET_CARD';
export const SET_CARD_ERROR = 'SET_CARD_ERROR';
export const PUSH_CARD_DATA = 'PUSH_CARD_DATA';
export const GET_CARD_DATA = 'GET_CARD_DATA';

export const setCard = (cardNumber, expiryDate, cardName, cvc, token) => ({
  type: SET_CARD,
  payload: { cardNumber, expiryDate, cardName, cvc, token },
});

export const pushCardData = (cardNumber, expiryDate, cardName, cvc, token) => ({
  type: PUSH_CARD_DATA,
  payload: {cardNumber, expiryDate, cardName, cvc, token},
});

export const getCardData = (token) => ({
  type: GET_CARD_DATA,
  payload: {token},
});

