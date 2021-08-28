// Reducer is a function that takes an old state and an action and returns a new state object

const contextReducer = (state, action) =>{
      
    // now we have type and payload so we can prepare our reducer.
    
    let transactions;

    switch (action.type) {
        case 'DELETE_TRANSACTION':
            transactions = state.filter((t)=> t.id !== action.payload);  
            localStorage.setItem('transactions', JSON.stringify(transactions));
            return transactions;
        case 'ADD_TRANSACTION':
            transactions = [action.payload, ...state];
            localStorage.setItem('transactions', JSON.stringify(transactions));
            return transactions;
        default:
            return state;
    }
}

export default contextReducer;