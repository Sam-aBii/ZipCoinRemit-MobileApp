import {
  HANDLE_ADD_CARD_CHANGE,
  HANDLE_EDIT_CARD_CHANGE,
  SET_EDITING_CARD_NUMBER,
  UPDATE_EDITED_CARD,
} from "../actionTypes";

import {
  handleAddCardChange,
  handleEditCardChange,
  setEditingCardNumber,
  updateEditedCard,
} from "../actions/paymentActions";

export const initialState = {
  cardType: "",
  cardHolderName: "",
  creditCardNumber: "",
  creditCardExpiry: "",
  creditCardCVC: "",
  cards: [
    ["master", "Arif Sanaullah", "5555555555554444", "12/21", "100"],
    ["visa", "Rana Abid", "4111111111111111", "12/20", "231"],
    ["amex", "Kim Kebab", "3714 496353 98431	", "09/23", "742"],
  ],
  editCreditCardExpiry: "",
  editingCardNumber: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HANDLE_ADD_CARD_CHANGE:
      return handleAddCardChange(state, action);
    case HANDLE_EDIT_CARD_CHANGE:
      return handleEditCardChange(state, action);
    case SET_EDITING_CARD_NUMBER:
      return setEditingCardNumber(state, action);
    case UPDATE_EDITED_CARD:
      return updateEditedCard(state);
    default:
      return state;
  }
};
