export const handleAddCardChange = (state, action) => {
  const { name, value } = action.payload;
  return { ...state, [name]: value };
};

export const handleEditCardChange = (state, action) => {
  const { name, value } = action.payload;
  return { ...state, [name]: value };
};

export const setEditingCardNumber = (state, action) => ({ ...state, editingCardNumber: action.payload });

export const updateEditedCard = (state) => {
  const { cards, editCreditCardExpiry, editingCardNumber } = state;
  const newCards = cards;
  const [foundCard] = newCards.filter((c) => c[2] === editingCardNumber);
  if (foundCard) {
    const foundIndex = newCards.findIndex((c) => c[2] === editingCardNumber);
    foundCard[3] = editCreditCardExpiry;
    newCards[foundIndex] = foundCard;
    return { ...state, cards: newCards };
  }
  return state;
};
