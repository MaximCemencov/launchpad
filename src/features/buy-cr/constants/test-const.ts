import { isProd } from "../../../shared/config";

export const TEST_SWAP_CONTRACT_DATA = {
  address: isProd()
    ? "0x1Fc935391d2af212E5C44fBb38491C8154bf8FBf"
    : "0x1Fc935391d2af212E5C44fBb38491C8154bf8FBf",
  abi: [
      { inputs :[], stateMutability: "nonpayable", type: "constructor"},
      { anonymous: false,
        inputs :[
            {
              indexed: true,
              internalType: "address",
              name: "previousOwner",
              type: "address",
            },
            {
              indexed:true,
              internalType:"address",
              name:"newOwner",
              type:"address"
            }
          ],
        name:"OwnershipTransferred",
        type:"event"
      },
      {
        inputs :[],
        name: "addrSafe",
        outputs: [{internalType:"address",name:"",type:"address"}],
        stateMutability: "view",
        type: "function"
      },
      {
        inputs :[
          {internalType:"bytes32",name:"symbol",type:"bytes32"},
          { internalType:"uint256", name:"_amount", type:"uint256" }],
        name:"buyToken",
        outputs:[],
        stateMutability:"nonpayable",
        type:"function"
      },
      {
        inputs:[
          {internalType:"bytes32",name:"symbol",type:"bytes32"},
          { internalType:"uint8", name:"tier", type:"uint8" }],
        name:"getTierTokenPrice",
        outputs:[{internalType:"uint256",name:"",type:"uint256"}],
        stateMutability:"view",type:"function"},
      {
        inputs: [],
        name:"getWhitelistedSymbols",
        outputs:[{internalType:"bytes32[]",name:"",type: "bytes32[]"}],
        stateMutability:"view",
        type:"function"
      },
      {
        inputs:[{internalType:"bytes32",name:"symbol",type:"bytes32"}],
        name:"getWhitelistedTokenAddress",
        outputs:[{internalType:"address",name:"",type:"address"}],
        stateMutability:"view",type:"function"
      },
      {
        inputs:[
          {internalType:"address",name:"account",type:"address"},
          {internalType:"bytes32",name:"symbol",type:"bytes32"}],
        name:"myPrice",
        outputs:[{internalType:"uint256",name:"",type:"uint256"}],
        stateMutability:"view",
        type:"function"
      },
      {
        inputs:[],
        name:"owner",
        outputs:[{internalType:"address",name:"",type:"address"}],
        stateMutability:"view",type:"function"
      },
      {
        inputs:[
          {internalType:"bytes32",name:"",type:"bytes32"},
          {internalType:"uint8",name:"",type:"uint8"}
        ],
        name:"priceTokens",
        outputs:[{internalType:"uint256",name:"",type:"uint256"}],
        stateMutability:"view",
        type:"function"
      },
      {
        inputs:[],
        name:"renounceOwnership",
        outputs:[],
        stateMutability:"nonpayable",
        type:"function"
      },
      {
        inputs:[{internalType:"address",name:"_addrSafe",type:"address"}],
        name:"setAddressSafe",
        outputs:[],
        stateMutability:"nonpayable",
        type:"function"
      },
      {
        inputs:[
          { internalType:"bytes32",name:"symbol",type:"bytes32"},
          { internalType:"address",name:"addrToken",type:"address"}],
        name:"setSwapToken",
        outputs:[],
        stateMutability:"nonpayable",
        type:"function"
      },
      {
        inputs:[{internalType:"bytes32",name:"",type:"bytes32"}],
        name:"swapPairs",
        outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],
        stateMutability:"view",
        "type":"function"
      },
      {
        "inputs":[
          {internalType:"bytes32",name:"symbol",type:"bytes32"},
          {internalType:"uint256",name:"_amount",type:"uint256"}
        ],
        name:"swapToken",
        outputs:[],
        stateMutability:"nonpayable",
        type:"function"
      },
      {
        inputs:[{internalType:"bytes32",name:"",type:"bytes32"}],
        name:"swapTokens",
        outputs:[{internalType:"address",name:"",type:"address"}],
        stateMutability:"view",
        type:"function"
      },
      {
        inputs:[
          {internalType:"bytes32",name:"",type:"bytes32"},
          {internalType:"bytes32",name:"",type:"bytes32"}],
        name:"swapTokensPrice",
        outputs:[{internalType:"uint256",name:"",type:"uint256"}],
        stateMutability:"view",
        type:"function"
      },
      {
        inputs:[
          {internalType:"bytes32",name:"symbolFrom",type:"bytes32"},
          {internalType:"bytes32",name:"symbolTo",type:"bytes32"},
          {internalType:"uint256",name:"price",type:"uint256"}],
        name:"swaplistToken",
        outputs:[],
        stateMutability:"nonpayable",
        type:"function"
      },
      {
        inputs:[
          {internalType:"bytes32",name:"symbol",type:"bytes32"},
          {internalType:"uint8",name:"tier",type:"uint8"},
          {internalType:"uint256",name:"price",type:"uint256"}],
        name:"tierTokenPrice",
        outputs:[],
        stateMutability:"nonpayable",
        type:"function"
      },
      {
        inputs:[{"internalType":"address","name":"newOwner","type":"address"}],
        name:"transferOwnership",
        outputs:[],
        stateMutability:"nonpayable",
        type:"function"
      },
      {
        inputs:[
          {internalType:"bytes32",name:"symbol",type:"bytes32"},
          {internalType:"address",name:"tokenAddress",type:"address"},
          {internalType:"uint256",name:"basePrice",type:"uint256"}],
        name:"whitelistToken",
        outputs:[],
        stateMutability:"nonpayable",
        type:"function"
      },
      {
        inputs:[{internalType:"uint256",name:"",type:"uint256"}],
        name:"whitelistedSymbols",
        outputs:[{internalType:"bytes32",name:"",type:"bytes32"}],
        stateMutability:"view",
        type:"function"
      },
      {
        inputs:[{internalType:"bytes32",name:"",type: "bytes32"}],
        name:"whitelistedTokens",
        outputs:[{internalType:"address",name:"",type:"address"}],
        stateMutability:"view",
        type:"function"
      },
      {
        "inputs":[
          {internalType:"address",name:"_tokenContract",type:"address"},
          {internalType:"uint256",name:"_amount",type:"uint256"}],
        name:"withdrawToken",
        outputs:[],
        stateMutability:"nonpayable",
        type:"function"
      }
      ],
};
