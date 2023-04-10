- code [SimpleStorage](https://github.com/PatrickAlphaC/simple-storage-fcc/blob/main/SimpleStorage.sol)

# First part: Configure our Environment

1. format solidity code
Preferences: Open User Settings(JSON)

add below code
```js
"[solidity]": {
    "editor.defaultFormatter": "NomicFoundation.hardhat-solidity"
}
```
or [Command + Shift + f]()

Configure Default Formatter
There are multiple formatters for 'Solidity' files. One of them should be configured as default formatter.

[configure]()

choose NomicFoundation.hardhat-solidity, over

2. format javascript code
```js
"[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

3. corepack not in just now

4. pnpm install solc
pnpm solejs --help

pnpm solcjs --bin --abi --include-path node_modules/ --base-path . -o . SimpleStorage.sol

# Second part: Ganache &  Networks

1. Remix VM(Merge)



2. Injected Provider - MetaMask



3. Shell & .env
echo $CAT
export CAT=dog
echo $CAT


4. ss
5. ss
6. ss