// frontend/screens/redux/reducers.js

// Creates the Redux variables
const initState = {
  signup2: ["",""],
  date2:["","",""]
};

// Edits the Redux variables
var rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "signup":
      return { ...state, signup2: action.signup2 };
    case "date":
      return { ...state, date2: action.date2 };
    default:
      return state;
  }
};

export default rootReducer;
