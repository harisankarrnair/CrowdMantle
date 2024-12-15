import { ethers } from "ethers";
import Web3Modal from "web3modal";
import crowdFunding from "./CrowdFunding.json";

export const CrowdFundingAddress = "0xb06cbBeAE36EdBa7a14D733E8aE922a29630c7C1";

export const CrowdFundingABI = crowdFunding.abi;

//NETWORK
const networks = {
  mantle_mainnet: {
    chainId: `0x${Number(5000).toString(16)}`,
    chainName: "Mantle Mainnet",
    nativeCurrency: {
      name: "MNT",
      symbol: "MNT",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.mantle.xyz"],
    blockExplorerUrls: ["https://mantlescan.xyz/"],
  },
  mantle_testnet: {
    chainId: `0x${Number(5003).toString(16)}`,
    chainName: "Mantle Testnet",
    nativeCurrency: {
      name: "MNT",
      symbol: "MNT",
      decimals: 18,
    },
    rpcUrls: ["https://rpc.sepolia.mantle.xyz"],
    blockExplorerUrls: ["https://sepolia.mantlescan.xyz/"],
  },
  localhost: {
    chainId: `0x${Number(5003).toString(16)}`,
    chainName: "localhost",
    nativeCurrency: {
      name: "MNT",
      symbol: "MNT",
      decimals: 18,
    },
    rpcUrls: ["http://127.0.0.1:8545/"],
    blockExplorerUrls: ["https://sepolia.mantlescan.xyz/"],
  },
};

const changeNetwork = async ({ networkName }) => {
  try {
    if (!window.ethereum) throw new Error("No crypto wallet found");
    await window.ethereum.request({
      method: "wallet_addEthereumChain",
      params: [
        {
          ...networks[networkName],
        },
      ],
    });
  } catch (err) {
    console.log(err.message);
  }
};

export const handleNetworkSwitch = async () => {
  const networkName = "mantle_testnet";
  await changeNetwork({ networkName });
};
