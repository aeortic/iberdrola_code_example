import React from 'react';

// A more developed version of this component would account for locale
// Ex: Canadians would expect to see "USD 6.00"
export default function Currency({children}) {
  const symbols = {
    "USD": "$"
  }
  return (
    <div>{symbols[children.currency]}{children.amount}</div>
  )
}