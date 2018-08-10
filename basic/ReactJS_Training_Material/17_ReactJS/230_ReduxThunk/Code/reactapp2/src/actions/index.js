import axios from "axios";

export function fetchUserInfo(userUrl) {
  return function (dispatch, store) {
    // dispatch({ type: "FETCH_IN_PROGRESS" });

    axios
      .get(userUrl)
      .then(response =>
        dispatch({ type: "FETCH_USER_SUCCESS", data: response.data }),
      )
      .catch(error => dispatch({ type: "FETCH_USER_FAILURE", error }));
  };
}
