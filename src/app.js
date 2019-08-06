import React from 'react';
import {render} from 'react-dom';
import Container from './components/Container';
const axios = require('axios');

axios.get('/test_output')
  .then(function (response) {
    render(<Container failedTests={response.data}/>, document.getElementById('app-root'));
  })

