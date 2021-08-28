import React, {useReducer, createContext} from 'react';

import contextReducer from './contextReducer';

// get current state from local storage
const initialState = JSON.parse(localStorage.getItem('transactions')) || [{"amount":250,"category":"Savings","type":"Income","date":"2021-08-26","id":"1afebabc-1e80-4206-85a5-b27f3c30ec4c"},{"amount":160,"category":"Food","type":"Expense","date":"2021-08-28","id":"580d93cd-181c-49cc-89f8-a6b84056ce7e"},{"amount":800,"category":"Investments","type":"Income","date":"2021-08-28","id":"aa3512e0-c398-4260-8896-d656a0f38b82"},{"amount":500,"category":"Travel","type":"Expense","date":"2021-08-31","id":"c6df14a9-c2e4-462c-9334-d8130047198d"},{"amount":100,"category":"Salary","type":"Income","date":"2021-08-30","id":"488b9b77-450b-438c-98b9-8cecc7e03d6f"}];      // if nothing in local storage then default array

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({children}) => {
     const [transactions, dispatch] = useReducer(contextReducer, initialState);     // useState alternative

     // Action creators

     const deleteTransaction = (id) =>{
          dispatch({ type: 'DELETE_TRANSACTION', payload: id });       // type is type of action and payload is additional data to pass
     }
     
     const addTransaction = (transaction) => {
         dispatch({ type: 'ADD_TRANSACTION', payload: transaction });
     }

     const balance = transactions.reduce((acc, currVal) => (currVal.type === 'Expense' ? acc - currVal.amount : acc + currVal.amount), 0);

     return(
         <ExpenseTrackerContext.Provider value = {{            // sending over these functions to entire state
             deleteTransaction,
             addTransaction,
             transactions,
             balance,
         }}>
             {children}
         </ExpenseTrackerContext.Provider>
     );
};