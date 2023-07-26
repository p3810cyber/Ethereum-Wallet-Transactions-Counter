const fs = require('fs');
const https = require('https');
const ethers = require('ethers');
const ExcelJS = require('exceljs');
const { SingleBar, Presets } = require('cli-progress');

const YOUR_ETHERSCAN_API_KEY = "";

async function getTransactionsCount(walletAddress) {
  return new Promise((resolve, reject) => {
    const url = `https://api.etherscan.io/api?module=account&action=txlist&address=${walletAddress}&apikey=${YOUR_ETHERSCAN_API_KEY}`;

    https.get(url, (response) => {
      let data = '';
      response.on('data', (chunk) => {
        data += chunk;
      });

      response.on('end', () => {
        try {
          const result = JSON.parse(data);
          if (result.status === '1' && result.message === 'OK') {
            resolve(result.result.length);
          } else {
            resolve(0);
          }
        } catch (error) {
          reject(error);
        }
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
}

async function main() {
  const walletAddresses = fs.readFileSync('wallets.txt', 'utf-8').trim().split('\n');

  const workbook = new ExcelJS.Workbook();
  const sheet = workbook.addWorksheet('Results');
  const headerRow = sheet.getRow(1);
  headerRow.font = { bold: true };
  sheet.columns = [
    { header: 'Address', key: 'address', width: 50 },
    { header: 'TrxCount', key: 'trxCount', width: 15 },
  ];

  const progressBar = new SingleBar({}, Presets.shades_classic);
  progressBar.start(walletAddresses.length, 0);

  for (const [index, address] of walletAddresses.entries()) {
    const trxCount = await getTransactionsCount(address);
    sheet.addRow({ address, trxCount });
    progressBar.update(index + 1);
  }

  progressBar.stop();

  await workbook.xlsx.writeFile('results.xlsx');
  console.log('Excel file "results.xlsx" created successfully.');
}

main().catch((error) => console.error(error));
