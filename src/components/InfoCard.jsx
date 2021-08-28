import React from 'react';

const isIncome = Math.round(Math.random());

const InfoCard = () => {
  return (
    <div elevation={3} style={{ textAlign: 'center', padding: '0 10%' }}>
      Try saying something like: <br /> 
      Add {isIncome ? 'Income ' : 'Expense '} 
      for {isIncome ? '₹100 ' : '₹50 '}  
      in Category {isIncome ? 'Salary ' : 'Travel '}
      for {isIncome ? 'Monday ' : 'Wednesday '}
    </div>
  );
};

export default InfoCard;
