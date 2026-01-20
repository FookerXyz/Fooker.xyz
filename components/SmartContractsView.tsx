
import React from 'react';

const SOLIDITY_CODE = `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.31;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title Fooker Token (FOO)
 * @author Fooker 
 *
 * @notice
 * Fooker (FOO) is a fixed-supply ERC20 token with no ownership, governance,
 * or administrative privileges. The total supply is permanently capped and
 * fully minted at deployment.
 *
 * @dev
 * Design Principles:
 * - No ownership or privileged roles.
 * - No post-deployment minting or burning.
 * - No pausing, blacklisting, or transfer restrictions.
 * - Fully immutable after deployment.
 *
 * Supply Model:
 * - Total supply is fixed at 270,000,000 FOO.
 * - 100% of the supply is minted once in the constructor.
 * - No mechanism exists to alter the supply thereafter.
 *
 * Trust Assumptions:
 * - Users do not need to trust any operator, admin, or owner.
 * - Contract behavior is deterministic and enforced by code.
 *
 * Security:
 * - Implements the OpenZeppelin ERC20 standard.
 * - Relies on Solidity ^0.8.x built-in overflow checks.
 */
contract Fooker is ERC20 {
    /// @notice Total and maximum supply (fixed forever)
    uint256 public constant MAX_SUPPLY = 270_000_000 * 1e18;

    /**
     * @notice Deploys the token contract and mints the full supply.
     * @param vault Address receiving the entire initial token supply.
     */
    constructor(address vault) ERC20("Fooker", "FOO") {
        require(vault != address(0), "ZERO_ADDRESS");
        _mint(vault, MAX_SUPPLY);
    }
}`;

export const SmartContractsView: React.FC = () => {
  return (
    <div className="pt-28 pb-20 lg:pt-32 lg:pb-24 max-w-5xl mx-auto px-4 sm:px-6">
      <div className="mb-10 lg:mb-12">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tighter mb-4 text-white">
          Fooker <span className="gradient-text">Core Logic</span>
        </h1>
        <p className="text-white/60 text-sm sm:text-lg max-w-2xl mb-8">
          Fully audited, immutable, and transparent. The Fooker token (FOO) is built on standard-setting security principles.
        </p>
        
        <a 
          href="https://base.blockscout.com/address/0xc991Ba6675f3b07974c343564C2aE3E4bDf959FD?tab=contract" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#0052FF] text-white font-bold px-5 py-3 rounded-lg hover:bg-[#0042CC] transition-all shadow-md group text-sm"
        >
          <span>View on Blockscout</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </a>
      </div>

      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-[#0052FF] to-[#00C2FF] rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative bg-[#0A0B0D] rounded-xl overflow-hidden shadow-2xl border border-white/10">
          <div className="flex items-center justify-between px-4 sm:px-6 py-4 bg-white/5 border-b border-white/10">
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
            </div>
            <span className="text-[10px] font-mono text-white/40 tracking-widest">Fooker.sol</span>
          </div>
          <div className="p-4 sm:p-6 overflow-x-auto">
            <pre className="text-[10px] sm:text-sm font-mono text-[#00C2FF] leading-relaxed whitespace-pre sm:whitespace-pre-wrap break-words sm:break-normal">
              <code>{SOLIDITY_CODE}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};
