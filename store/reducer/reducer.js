const Reducer = (state, action) => {
  switch (action.type) {
    case "open":
      return { ...state, open: true };
    case "close":
      return { ...state, open: false };
    default:
      throw new Error();
  }
};

export default Reducer;
