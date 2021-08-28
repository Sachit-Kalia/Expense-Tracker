// Custom hook      --- In order to get the chart data.

import { useContext } from 'react';
import {ExpenseTrackerContext} from './context/context';
import { incomeCategories, expenseCategories, resetCategories } from './constants/categories';


const useTransactions = (title) =>{
    resetCategories();
    const {transactions} = useContext(ExpenseTrackerContext);
    const transactionsPerType = transactions.filter((t)=> t.type === title); 
    // reduce function take 2 arguments accumlator and current value to sum up.
    const total = transactionsPerType.reduce((acc, currVal)=> acc += currVal.amount, 0);        // sums the values, here 0 is intital value of acc
    const categories = title === 'Income'? incomeCategories : expenseCategories;

    transactionsPerType.forEach((t)=>{
         const category = categories.find((c)=> c.type === t.category);

         if(category) category.amount += t.amount;             // amount of that categoty in storage incremented by amount of current transaction
    });

    const filteredCategories = categories.filter((c)=> c.amount > 0);

    const chartData = {
        datasets: [{
            data: filteredCategories.map((c) => c.amount),  // mapped all categories to their amounts
            backgroundColor: filteredCategories.map((c) => c.color)
        }],
        labels: filteredCategories.map((c) => c.type)
    };

    return {total, chartData}
}


export default useTransactions;