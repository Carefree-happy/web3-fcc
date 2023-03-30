// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;
library SafeMath {
    function tryAdd(uint8 a, uint8 b) public pure returns (bool, uint8) {
        unchecked {
            uint8 c = a + b;
            if (c < a) return (false, 0);
            return (true, c);
        }
    }

    function trySub(uint8 a, uint8 b) public pure returns (bool, uint8) {
        unchecked {
            if (a < b) return (false, 0);
            return (true, a - b);
        }
    }

    function tryMul(uint8 a, uint8 b) public pure returns (bool, uint8) {
        unchecked {
            if (a == 0) return (true, 0);
            uint8 c = a * b;
            if (c / a != b) return (false, 0);
            return (true, c);
        }
    }

    function tryDiv(uint8 a, uint8 b) public pure returns (bool, uint8) {
        unchecked {
            if (b == 0) return (false, 0);
            return (true, a / b);
        }
    }

    function add(uint8 a, uint8 b) public pure returns (uint8) {
        return a + b;
    }

    function sub(uint8 a, uint8 b) public pure returns (uint8) {
        return a - b;
    }

    function mul(uint8 a, uint8 b) public pure returns (uint8) {
        return a * b;
    }

    function div(uint8 a, uint8 b) public pure returns (uint8) {
        return a / b;
    }
}