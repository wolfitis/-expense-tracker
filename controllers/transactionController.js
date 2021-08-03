const Transaction = require('../models/Transaction');

/**
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @desc Get all transactions
 * @route GET /api/v1/transactions
 * @returns list of all transaction
 * @access Public
 */
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error'
    });
  }
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
exports.addTransaction = async (req, res, next) => {
  try {
    // deconstruct our req.body parameters
    const { text, amount } = req.body;

    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
      success: true,
      data: transaction
    });
  } catch (err) {
    // console.log(err);
    if (err.name === 'ValidationError') {
      // to store just error messages in an array
      const messages = Object.values(err.errors).map(val => val.message);

      // because it's client error so code: 400
      return res.status(400).json({
        success: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Server error'
      });
    }
  }
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
exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    // if there is not record with current id
    if (!transaction) {
      // it's client Not Found error so code: 404
      return res.status(404).json({
        success: false,
        error: 'No transaction found!'
      });
    }

    await transaction.remove();
    return res.status(200).json({
      success: true,
      data: []
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server error'
    });
  }
}