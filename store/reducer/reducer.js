const Reducer = (state, action) => {
  switch (action.type) {
    case "login":
      return { ...state, login: true };
    case "logout":
      return { ...state, login: false };
    case "expired":
      return { ...state, expired: true };
    case "restart":
      return { ...state, expired: false };
    default:
      throw new Error();
  }
};

export default Reducer;
