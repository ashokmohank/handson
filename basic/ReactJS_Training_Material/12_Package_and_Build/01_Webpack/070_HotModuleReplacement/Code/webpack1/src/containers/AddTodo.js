import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';

function AddTodo(props) {
    let todoTextbox;

    function submitHandler(e, dispatch) {
        e.preventDefault();

        if (!todoTextbox.value.trim()) {
            return;
        }

        dispatch(addTodo(todoTextbox.value));
        todoTextbox.value = '';
    }

    return (
        <div>
            <form onSubmit={e => submitHandler(e, props.dispatch)}>

                <input ref={(node) => {
                    todoTextbox = node;
                }} /> {' '}

                <button type="submit">Add Todo</button>

            </form>
        </div>
    );
}

AddTodo = connect()(AddTodo);

export default AddTodo;
