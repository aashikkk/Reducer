import React, { useReducer } from "react";

function Book() {
    const transactionReducer = (state, action) => {
        switch (action.type) {
            case "WITHDRAW":
                return state - action.payload;
            case "DEPOSIT":
                return state + action.payload;
            default:
                return state;
        }
    };

    const [state, dispatch] = useReducer(transactionReducer, 1000);

    return (
        <div>
            <h1>{`Remaining Balance ${state}`}</h1>
            <button
                onClick={() => dispatch({ type: "WITHDRAW", payload: 500 })}
            >
                Withdraw
            </button>
            <button onClick={() => dispatch({ type: "DEPOSIT", payload: 500 })}>
                Deposit
            </button>
        </div>
    );
}

export default Book;
