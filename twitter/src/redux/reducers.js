// frontend/screens/redux/reducers.js

// Creates the Redux variables
const initState = {
  signup: [],
};

// Edits the Redux variables
var rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "signup":
      return { ...state, signup: action.signup };
    default:
      return state;
  }
};

export default rootReducer;
