# web3-auth
A simple Authentication for web3 Ethereum Wallets

This is an example implementation of an authentication API for Web3 wallets using Node.js, Express, Ethers.js, and ThirdWeb SDK. The API allows users to securely authenticate their wallets by verifying their addresses and signing messages.

## Approach
The approach to implementing this API involves the following steps:

1. Set up a Node.js server using the Express framework.
2. Use Ethers.js to interact with the Ethereum blockchain and validate user wallet addresses.
3. Use ThirdWeb SDK to sign and verify messages from user wallets.
4. Implement middleware to authenticate requests using the user's wallet address and signed messages.

## Dependencies
This project uses the following dependencies:

Node.js
Express
Ethers.js
ThirdWeb SDK


##Installation
To install the dependencies, run the following command in the project directory:

```
npm install
```

## Usage
To start the server, run the following command in the project directory:

```
npm start
```
This will start the server on port 3000.

## Authentication Middleware
Here's an example of how to set up the authentication middleware to securely validate user wallet addresses and sign messages:

```
const { verifyMessage } = require('ethers/utils');
const { verify } = require('jsonwebtoken');

function authenticate(req, res, next) {
  const token = req.headers.authorization.split(' ')[1];
  const decoded = verify(token, process.env.JWT_SECRET);
  const signature = decoded.signature;
  const address = decoded.address;
  const message = req.body.message;

  // Validate the user's wallet address
  if (address !== req.body.address) {
    return res.status(401).send({ error: 'Unauthorized' });
  }

  // Verify the message signature
  try {
    const recoveredAddress = verifyMessage(message, signature);
    if (recoveredAddress !== address) {
      return res.status(401).send({ error: 'Unauthorized' });
    }
  } catch (error) {
    return res.status(401).send({ error: 'Unauthorized' });
  }

  // Authentication successful
  next();
}

```
In this example, the authenticate middleware function receives the request (req), response (res), and next middleware function (next) as arguments.

The function first extracts the JWT token from the Authorization header of the request and decodes it using the JWT_SECRET environment variable.

It then extracts the signature, address, and message from the request body.

The function then validates the user's wallet address by comparing it to the address in the decoded JWT token.

It then verifies the message signature by calling the verifyMessage function from Ethers.js and comparing the recovered address to the user's wallet address.

If the address and signature are valid, the function calls the next middleware function to proceed with the authenticated request. If not, it returns a 401 Unauthorized response.

## Conclusion
This implementation demonstrates how to set up an authentication API for Web3 wallets using Node.js, Express, Ethers.js, and ThirdWeb SDK. The authentication middleware provides a secure way to verify user wallet addresses and sign messages to authenticate requests.





