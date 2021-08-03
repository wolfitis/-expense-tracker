/**
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @desc Get all transactions
 * @route GET /api/v1/transactions
 * @returns list of all transaction
 * @access Public
 */
exports.getTransactions = (req, res, next) => {
  res.send('GET transactions');
}

/**
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @desc Add a transaction
 * @route POST /api/v1/transactions
 * @returns add response
 * @access Public
 */
exports.addTransaction = (req, res, next) => {
  res.send('POST transaction');
}

/**
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @desc Delete a transaction by id
 * @route DELETE /api/v1/transactions/:id
 * @returns delete response
 * @access Public
 */
exports.deleteTransaction = (req, res, next) => {
  res.send('DELETE transaction');
}