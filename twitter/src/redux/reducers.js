// frontend/screens/redux/reducers.js

// Creates the Redux variables
const initState = {
  signup: ["",""],
  date:[]
};

// Edits the Redux variables
var rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "signup":
      return { ...state, signup: action.signup };
    case "date":
      return { ...state, date: action.date };
    default:
      return state;
  }
};

export default rootReducer;
