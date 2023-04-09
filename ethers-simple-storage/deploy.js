//importing thers and JsonRpcProvider
const { ethers, JsonRpcProvider } = require("ethers");
const fs = require("fs-extra");
async function main() {
    // Json Rpc Provider - Connecting to local blockchain
    const provider = new JsonRpcProvider("http://127.0.0.1:7545"); // add your rpc server url from Ganache

    // Connect to wallet to sign transactions
    const wallet = new ethers.Wallet("3f05065cd05fc21aac3553016e41ecbe0fa248df22f154a831ce3fd7654a7172", provider);

    //Read ABI which you get post compilation using solc
    const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");

    //Read Binary which you get post compilation using solc
    const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin", "utf8");

    //Create Contract factory object to deploy
    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
    console.log("Deploying, Please wait...");

    // Deploy and you are good to go
    const contract = await contractFactory.deploy();

    // transaction receipt is what you get when you wait for a block confirmation
    const transactionReceipt = await contract.deploymentTransaction;

    console.log(contract.deploymentTransaction());

    console.log(transactionReceipt);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
