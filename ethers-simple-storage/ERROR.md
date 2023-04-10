1. [TypeError: Cannot read properties of undefined (reading 'JsonRpcProvider')](https://ethereum.stackexchange.com/questions/144451/typeerror-cannot-read-properties-of-undefined-reading-jsonrpcprovider)

2. TypeError: invalid private key (argument="privateKey", value="[REDACTED]", code=INVALID_ARGUMENT, version=6.3.0)
    at makeError (/Users/sun/developer/web3/web3-f/ethers-simple-storage/node_modules/.pnpm/ethers@6.3.0/node_modules/ethers/lib.commonjs/utils/errors.js:114:21)
    at assert (/Users/sun/developer/web3/web3-f/ethers-simple-storage/node_modules/.pnpm/ethers@6.3.0/node_modules/ethers/lib.commonjs/utils/errors.js:138:15)
    at assertArgument (/Users/sun/developer/web3/web3-f/ethers-simple-storage/node_modules/.pnpm/ethers@6.3.0/node_modules/ethers/lib.commonjs/utils/errors.js:150:5)
    at new SigningKey (/Users/sun/developer/web3/web3-f/ethers-simple-storage/node_modules/.pnpm/ethers@6.3.0/node_modules/ethers/lib.commonjs/crypto/signing-key.js:51:39)
    at new Wallet (/Users/sun/developer/web3/web3-f/ethers-simple-storage/node_modules/.pnpm/ethers@6.3.0/node_modules/ethers/lib.commonjs/wallet/wallet.js:33:56)
    at main (/Users/sun/developer/web3/web3-f/ethers-simple-storage/deploy.js:9:20)
    at Object.<anonymous> (/Users/sun/developer/web3/web3-f/ethers-simple-storage/deploy.js:26:1)
    at Module._compile (node:internal/modules/cjs/loader:1103:14)
    at Object.Module._extensions..js (node:internal/modules/cjs/loader:1157:10)
    at Module.load (node:internal/modules/cjs/loader:981:32) {
  code: 'INVALID_ARGUMENT',
  argument: 'privateKey',
  value: '[REDACTED]'
}

ganache choose [show keys]

3. [TypeError: transaction chainId mismatch (argument="tx.chainId", value=5777, code=INVALID_ARGUMENT, version=6.3.0)](https://stackoverflow.com/questions/72276562/ethers-js-set-noonce-when-using-contract-object)

change chainId to 1337


