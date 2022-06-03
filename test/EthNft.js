const hre = require("hardhat");
const { expect } = require("chai");


describe("Test EthNft", function() {
    it("It should deploy the contract, mint a token, and resolve to the right URI", async function() {
        const NFT = await hre.ethers.getContractFactory("EthNft");
        const nft = await NFT.deploy();
        const URI = "ipfs://QmecKFh9YamJpS6VmntCpZm65oKtv7WHu7tEwsCquYSrSD";
        await nft.mint("0xECF09D36f07EC396f97DD448D9E4bcb19fE4Ec3A", URI)
        await nft.deployed();
    });
});

