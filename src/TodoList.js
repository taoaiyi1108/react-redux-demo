import React from 'react';
import { connect } from 'react-redux';

const TodoList = (props) => {
    const { inputValue, changeInputValue, handleClick, deleteItem, list } = props;
    return (
        <div>
            <div>
                <input value={inputValue} onChange={changeInputValue} />
                <button onClick={handleClick}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return (<li onClick={() => { deleteItem(index) }} key={index}>{item}</li>)
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
/* store.dispatch props 将store的dispatch方法挂载到props上面*/
const mapDispathchToProps = (dispatch) => {
    return {
        changeInputValue(e) {
            const action = {
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action);
        },
        handleClick() {
            const action = { type: 'add_item' }
            dispatch(action);
        },
        deleteItem(index) {
            const action = { type: 'delete_item', index }
            dispatch(action);
        }
    }
}

export default connect(mapStateToProps, mapDispathchToProps)(TodoList);