const {ethers} = require("hardhat");

async function main(){
    const MyNFT = await ethers.getContractFactory("MyNFT");
    const myNft = await MyNFT.deploy("MyFirstNFT","MNFT");
    await myNft.deployed();
    console.log("Contract Successfully Deployed to: ",myNft.address);
}


main().then(()=>process.exit(0)).catch((error)=>{
    console.log(error);
    process.exit(1);
});



