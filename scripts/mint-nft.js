require("dotenv").config();
const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(""); // Enter Alchemy url


const contract = require("../artifacts/contracts/MyNft.sol/MyNFT.json");
const contractAddress = ""; // Deploy your contract first and paste the address here
const nftContract = new web3.eth.Contract(contract.abi,contractAddress);

async function mintNFT(tokenURI){
  

}

mintNFT(''); // Pass your NFT META DATA URI from pinata as argument.

// Finally open terminal and run this mint-nft script