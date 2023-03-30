const {ethers, JsonRpcProvider} = require("ethers");
const fs = require("fs-extra");

async function main() {
    // compile them in our code
    // compile them separately
    // http://127.0.0.1:7545
    const provider = new JsonRpcProvider("http://127.0.0.1:7545");
    const wallet = new ethers.Wallet("0a78fa3bd09bdb583ca8926887d68300ee674c0ca705e0720d713b180099a17b", provider);
    const abi = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.abi", "utf8");
    const binary = fs.readFileSync("./SimpleStorage_sol_SimpleStorage.bin", "utf8");

    const contractFactory = new ethers.ContractFactory(abi, binary, wallet);
    console.log("Deploying, please wait...")
    const contract = await contractFactory.deploy();
    console.log(contract);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error)
        process.exit(1)
    })