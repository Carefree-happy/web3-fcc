//importing thers and JsonRpcProvider
const { ethers, JsonRpcProvider } = require("ethers");
const fs = require("fs-extra");
require('dotenv').config();

async function main() {
    // Json Rpc Provider - Connecting to local blockchain
    const provider = new JsonRpcProvider(process.env.RPC_URL); // add your rpc server url from Ganache

    // Connect to wallet to sign transactions -> key
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

    //Read ABI which you get post compilation using solc
    const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");

    //Read Binary which you get post compilation using solc
    const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin", "utf8");

    //Create Contract factory object to deploy
    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);

    // Deploy and you are good to go
    const contract = await contractFactory.deploy();

    const currentFavoriteNumber = await contract.retrieve();
    console.log(currentFavoriteNumber.toString());

    const transactionResponse = await contract.store(234);
    const transactionReceipt = await transactionResponse.wait(1);
    const updateFavoriteNumber = await contract.retrieve();
    console.log(`Updated favorite number is: ${updateFavoriteNumber}`);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
// 第四课 1:43:21