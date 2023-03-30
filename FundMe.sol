// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./PriceConverter.sol";

error NotOwner();

contract SafeMathTester {
    using PriceConverter for uint256;

    uint256 public constant minimumUsd = 50 * 1e18;

    address[] public funders;
    mapping(address => uint256) public addressToAmountFunded;

    address public immutable owner;

    constructor() {
        owner = msg.sender;
    }


    function fund() public payable {
        require(msg.value.getConversionRate() >= minimumUsd, "Didn't send enough");
        funders.push(msg.sender);
        addressToAmountFunded[msg.sender] = msg.value;
    }
    
    function withdraw() public onlyOwner {
        
        for(uint256 funderIndex = 0; funderIndex < funders.length; funderIndex++) {
            address funder = funders[funderIndex];
            addressToAmountFunded[funder] = 0;
        }
        funders = new address[](0);
        (bool callSuccess,) = payable(msg.sender).call{value: address(this).balance}("");
        require(callSuccess, "Call failed");
        revert();
    }

    modifier onlyOwner {
        // do require then _ & do _ then require
        // require(msg.sender == owner, "Sender is not owner");
        if(msg.sender != owner) { revert NotOwner(); }
        _;
    }

    // what happens if someone sends the contract ETH without calling the fund function?

    // receive()
    // callback()
}