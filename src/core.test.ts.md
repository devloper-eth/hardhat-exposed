# Snapshot report for `src/core.test.ts`

The actual snapshot is saved in `core.test.ts.snap`.

Generated by [AVA](https://avajs.dev).

## snapshot

> Snapshot 1

    `// SPDX-License-Identifier: UNLICENSED␊
    ␊
    pragma solidity >=0.6.0;␊
    ␊
    import "../contracts/Test.sol";␊
    ␊
    contract XFoo is Foo {␊
        constructor() {}␊
    ␊
        function xs() external view returns (Foo.S memory) {␊
            return s;␊
        }␊
    ␊
        function x_testFoo() external pure returns (uint256) {␊
            return super._testFoo();␊
        }␊
    ␊
        function x_testString() external pure returns (string memory) {␊
            return super._testString();␊
        }␊
    ␊
        function x_testStruct() external pure returns (Foo.S memory) {␊
            return super._testStruct();␊
        }␊
    ␊
        function x_testStructStorageOutput() external view returns (Foo.S memory) {␊
            return super._testStructStorageOutput();␊
        }␊
    }␊
    ␊
    contract XBar is Bar {␊
        constructor() {}␊
    ␊
        function xs() external view returns (Foo.S memory) {␊
            return s;␊
        }␊
    ␊
        function x_testBar() external pure returns (uint256) {␊
            return super._testBar();␊
        }␊
    ␊
        function x_testFoo() external pure returns (uint256) {␊
            return super._testFoo();␊
        }␊
    ␊
        function x_testString() external pure returns (string memory) {␊
            return super._testString();␊
        }␊
    ␊
        function x_testStruct() external pure returns (Foo.S memory) {␊
            return super._testStruct();␊
        }␊
    ␊
        function x_testStructStorageOutput() external view returns (Foo.S memory) {␊
            return super._testStructStorageOutput();␊
        }␊
    }␊
    ␊
    contract XLib {␊
        constructor() {}␊
    ␊
        function x_testLib() external pure returns (uint256) {␊
            return Lib._testLib();␊
        }␊
    }␊
    ␊
    abstract contract XIface is Iface {␊
        constructor() {}␊
    }␊
    ␊
    abstract contract XAbs is Abs {␊
        constructor() {}␊
    }␊
    ␊
    contract XConcrete1 is Concrete1 {␊
        constructor() {}␊
    }␊
    ␊
    contract XConcrete2 is Concrete2 {␊
        constructor() {}␊
    }␊
    ␊
    contract XParent1 is Parent1 {␊
        constructor(uint256 x) Parent1(x) {}␊
    ␊
        function x_testParent1() external {␊
            return super._testParent1();␊
        }␊
    }␊
    ␊
    contract XParent2 is Parent2 {␊
        constructor(uint256 y) Parent2(y) {}␊
    }␊
    ␊
    contract XParent3 is Parent3 {␊
        constructor(uint256 z) Parent3(z) {}␊
    }␊
    ␊
    contract XChild1 is Child1 {␊
        constructor(uint256 x) Parent1(x) {}␊
    ␊
        function x_testParent1() external {␊
            return super._testParent1();␊
        }␊
    }␊
    ␊
    contract XChild2 is Child2 {␊
        constructor(uint256 x, uint256 y) Parent1(x) Parent2(y) {}␊
    ␊
        function x_testParent1() external {␊
            return super._testParent1();␊
        }␊
    }␊
    ␊
    contract XChild3 is Child3 {␊
        constructor(uint256 x, uint256 y) Parent1(x) Parent2(y) {}␊
    ␊
        function x_testParent1() external {␊
            return super._testParent1();␊
        }␊
    }␊
    ␊
    contract XChild4 is Child4 {␊
        constructor(uint256 x, uint256 y, uint256 z, uint256 c) Parent1(x) Parent2(y) Parent3(z) Child4(c) {}␊
    ␊
        function x_testParent1() external {␊
            return super._testParent1();␊
        }␊
    }␊
    ␊
    contract XTypes is Types {␊
        constructor() {}␊
    ␊
        function x_testEnumType(Types.Enum e) external {␊
            return super._testEnumType(e);␊
        }␊
    ␊
        function x_testContractType(Types t) external {␊
            return super._testContractType(t);␊
        }␊
    }␊
    ␊
    contract XConstructorStorageLocation is ConstructorStorageLocation {␊
        constructor(string memory name) ConstructorStorageLocation(name) {}␊
    }␊
    ␊
    contract XChained0 is Chained0 {␊
        constructor() {}␊
    ␊
        function x_chained() external {␊
            return super._chained();␊
        }␊
    }␊
    ␊
    contract XChained1 is Chained1 {␊
        constructor() {}␊
    ␊
        function x_chained() external {␊
            return super._chained();␊
        }␊
    }␊
    ␊
    contract XChained2 is Chained2 {␊
        constructor() {}␊
    ␊
        function x_chained() external {␊
            return super._chained();␊
        }␊
    }␊
    ␊
    contract XWithVars is WithVars {␊
        constructor() {}␊
    ␊
        function xvar1() external view returns (uint256) {␊
            return var1;␊
        }␊
    ␊
        function xvar2() external view returns (uint256[] memory) {␊
            return var2;␊
        }␊
    ␊
        function xvar3(uint256 arg0) external view returns (uint8) {␊
            return var3[arg0];␊
        }␊
    ␊
        function xvar4() external view returns (WithVars.Struct memory) {␊
            return var4;␊
        }␊
    ␊
        function xvar5() external view returns (WithVars.Struct[] memory) {␊
            return var5;␊
        }␊
    ␊
        function xvar6(uint256 arg0) external view returns (WithVars.Struct memory) {␊
            return var6[arg0];␊
        }␊
    ␊
        function xvar7(uint256 arg0, bool arg1) external view returns (WithVars.Struct memory) {␊
            return var7[arg0][arg1];␊
        }␊
    ␊
        function xvar8(uint256 arg0, bool arg1) external view returns (WithVars.Struct[] memory) {␊
            return var8[arg0][arg1];␊
        }␊
    }␊
    `
