// Creates the Redux variables
const initState = {
  username2: "",
  email2: "",
  day2: "",
  month2: "",
  year2: "",
  details2: "",
  tweets2: "",
};

// Edits the Redux variables
var rootReducer = (state = initState, action) => {
  switch (action.type) {
    case "username":
      return { ...state, username2: action.username2 };
    case "email":
      return { ...state, email2: action.email2 };
    case "day":
      return { ...state, day2: action.day2 };
    case "month":
      return { ...state, month2: action.month2 };
    case "year":
      return { ...state, year2: action.year2 };
    case "details":
      return { ...state, details2: action.details2 };
    case "tweets":
      return { ...state, tweets2: action.tweets2 };
    default:
      return state;
  }
};

export default rootReducer;
