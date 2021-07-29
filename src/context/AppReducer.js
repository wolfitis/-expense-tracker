export default (state, action) => {
  switch (action.type) {
    case 'DELETE_TRANSACTION':
      // to delete a transation from TransactionList
      return {
        ...state,
        transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
      }
    default:
      return state;
  }
}