// Creates Redux functions that edit the Redux variables to be used by any React connected component

export const username = (x) => {
  return {
    type: "username",
    username2: x,
  };
};
export const email = (x) => {
  return {
    type: "email",
    email2: x,
  };
};
export const day = (x) => {
  return {
    type: "day",
    day2: x,
  };
};
export const month = (x) => {
  return {
    type: "month",
    month2: x,
  };
};
export const year = (x) => {
  return {
    type: "year",
    year2: x,
  };
  
 
};
export const details = (x) => {
  return {
    type: "details",
    details2: x,
  };
};
export const tweets = (x) => {
  return {
    type: "tweets",
    tweets2: x,
  };
};