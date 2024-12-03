const express = require('express');
const app = express();
app.get('/', (req, res) => {
  someAsyncOperation()
    .then(() => {
      res.send('Hello!');
    })
    .catch(err => {
      console.error('Error:', err);
      res.status(500).send('Something went wrong!'); // Send an error response to the client
    });
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

//Dummy asynchronous operation that might throw an error
function someAsyncOperation(){
  return new Promise((resolve, reject) => {
    // Simulate an error condition 
    const randomNumber = Math.random();
    if(randomNumber < 0.5) {
      reject(new Error('Simulated asynchronous error'));
    }
    resolve();
  })
}