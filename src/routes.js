const express = require('express');
const router = express.Router();
const BranchController = require('./controllers/BranchController')

/*
  Autocomplete endpoint
  Ex: /branches/autocomplete?q=RTGS&limit=3&offset=0
  It provides 3 query params thus
  1. q: which is part of a branch IFSC Code for autocomplete
  2. limit: Maximum number of branches to be returned which match the query
  3. offset: The starting point to return rows from result set
 */
router.get('/branches/autocomplete', BranchController.autocomplete);
/*
  Search endpoint
  Ex: /branches?q=Bangalore&limit=3&offset=0
  It provides 3 query params thus
  1. q: which is part of a branch IFSC Code for search
  2. limit: Maximum number of branches to be returned which match the query
  3. offset: The starting point to return rows from result set
 */
router.get('/branches/', BranchController.search);

module.exports = router;
