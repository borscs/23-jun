import {createStore} from "redux";
import {configureStore, createSlice} from "@reduxjs/toolkit";

const initialState = {counter: 0, showCounter: true};
const initAuthState = {isAuth: false};
// const counterReducer = (state =initialState,  action) => {
//     if (action.type === 'INCREMENT') {
//         return {
//             counter: state.counter + 1,
//             showCounter: state.showCounter
//         }
//     } else if (action.type === 'DECREMENT') {
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//
//         }
//     }else if(action.type === 'INCREASE') {
//         return {
//             counter: state.counter + action.amount,
//             showCounter: state.showCounter
//
//         }
//     }else if(action.type === 'TOGGLE'){
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter,
//         }
//     }
//     return state;
// }
//
// const store = createStore(counterReducer);

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment(state) {
            state.counter++;
        },
        decrement(state) {
            state.counter--;
        },
        increase(state, action) {
            state.counter += action.payload;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        }
    }
});

const authSlice = createSlice({
    name: 'authentication',
    initialState: initAuthState,
    reducers: {
        login(state) {
            state.isAuth = true
        },
        logout(state) {
            state.isAuth = false
        },
    },
});

const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        auth: authSlice.reducer
    }
});

export const {increase, increment, decrement, toggle} = counterSlice.actions;
export const {login, logout} = authSlice.actions;
export default store;