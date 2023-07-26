# Ethereum Wallet Transactions Counter
Reads wallet addresses from the "wallets.txt" file and fetches the number of transactions for each address from the Ethereum network using the Etherscan API. The program then creates an Excel spreadsheet "results.xlsx" with two columns: "Address" (wallet address) and "TrxCount" (transaction count).

## Installation and Usage
Before running the program, make sure you have Node.js (https://nodejs.org/) and npm (Node Package Manager) installed.

1. Clone the repository to your computer:
2. Install the required dependencies: ```npm install```
3. Set ```YOUR_ETHERSCAN_API_KEY```
4. Run programm ```node main.js```




## How to Get YOUR_ETHERSCAN_API_KEY
To use the program, you need an API key from Etherscan. If you already have a key, you can skip this step. If you don't have one, follow these steps to obtain it:

Register on the Etherscan website (https://etherscan.io/).

Go to the "MyAPIKey" page (https://etherscan.io/myapikey) and log in to your account.
```node main.js```
Click on the "Create a new API key" button and provide the necessary details to obtain a new API key.

Use the obtained API key (YOUR_ETHERSCAN_API_KEY) in the program to interact with the Etherscan API.

### Running the Program
To run the program, execute the following command:

```node main.js```


The program will start processing the addresses from the "wallets.txt" file and display a progress bar to track its activity. After processing is complete, the program will create a "results.xlsx" file in the same folder containing the processing results.

#### Notes
Ensure you have the latest version of Node.js and npm.
Please remember to replace YOUR_ETHERSCAN_API_KEY with your actual API key from Etherscan, obtained after registering on the Etherscan website.

