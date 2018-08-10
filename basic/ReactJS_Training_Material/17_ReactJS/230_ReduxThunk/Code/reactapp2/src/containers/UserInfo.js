import React from "react";
import { connect } from "react-redux";
import { fetchUserInfo } from "../actions";

function UserInfo(props) {
  let urlTextBox;

  function submitHandler(e, dispatch) {
    e.preventDefault();

    if (!urlTextBox.value.trim()) {
      return;
    }

    dispatch(fetchUserInfo(urlTextBox.value));
  }

  return (
    <div>
      <form onSubmit={e => submitHandler(e, props.dispatch)}>
        <input
          defaultValue="https://api.github.com/users/gaearon"
          ref={node => {
            urlTextBox = node;
          }}
        />{" "}
        <button type="submit">Get User Info</button>
        <br />
        <br />
        <textarea
          value={props.data ? JSON.stringify(props.data, null, 2) : ""}
          rows="20"
          cols="100"
        />
        <br />
        <br />
        <textarea
          value={
            props.error ? `${props.error.message}\n${props.error.stack}` : ""
          }
          rows="10"
          cols="100"
        />
      </form>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  return { data: state.data, error: state.error };
}

UserInfo = connect(mapStateToProps)(UserInfo);
export default UserInfo;
