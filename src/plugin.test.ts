/// <reference types="@nomiclabs/hardhat-truffle5" />
/// <reference types="@nomiclabs/hardhat-ethers" />

import test from 'ava';
import { BigNumber } from 'ethers';
// import { BN } from 'bn.js';
import hre from 'hardhat';

test('ethers', async t => {
  const Foo = await hre.ethers.getContractFactory('XFoo');
  const foo = await Foo.deploy();
  t.is((await foo.x_testFoo()).toHexString(), '0x0f00');

  const XWithVars = await hre.ethers.getContractFactory('XWithVars');
  const withVars = await XWithVars.deploy();
  t.is((await withVars.xvar1()).toNumber(), 55);
  t.deepEqual((await withVars.xvar2()), [BigNumber.from(1), BigNumber.from(2), BigNumber.from(3)]);
  t.is((await withVars.xvar3(1)), 2);
  t.deepEqual((await withVars.xvar4()).a, BigNumber.from(1));
  // t.deepEqual((await withVars.xvar5()), TODO);
  t.deepEqual((await withVars.xvar6(1)).a, BigNumber.from(2));
  t.deepEqual((await withVars.xvar7(1, true)).a, BigNumber.from(10));
  // t.deepEqual((await withVars.xvar8(1, true)), TODO);

});

test('truffle', async t => {
  const XFoo = hre.artifacts.require('XFoo');
  const foo = await XFoo.new();
  t.is((await foo.x_testFoo()).toString('hex'), 'f00');

  const XWithVars = hre.artifacts.require('XWithVars');
  const withVars = await XWithVars.new();
  // TODO
});
