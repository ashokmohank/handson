import axios from "axios";

function fetchUserDetailsAction(url) {
  // Make API call here
  console.log(url);
  // return {type:"TESTING"};
  return (dispatch, state) => {
    dispatch({ type: "IS_FETCHING" });
    axios
      .get(url)
      .then(response => {
        console.log(response);
        dispatch({ type: "FETCH_SUCCESS", userDetails: response.data });
      })
      .catch(error => {
        dispatch({ type: "FETCH_ERROR", error: error.message });
      });
  };
}

export default fetchUserDetailsAction;

/*
Actions:
  {type: "FETCH_USER_DETAILS",url:"https://api.github.com/users/gaearon"}

  {type:"IS_FETCHING"}

  {type:"FETCH_SUCCESS",userDetails:{}}

  {type:"FETCH_ERROR",error:"some error"}
*/
