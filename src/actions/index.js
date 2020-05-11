export const removeItem = (itemType, id) => {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      id,
      itemType,
    },
  };
};
