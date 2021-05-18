const MintDai = artifacts.require("MintDai");
const { legos } = require("@studydefi/money-legos");
const { ethers, Wallet, Contract } = require("ethers");

dssCdpManager='0x5ef30b9986345249bc32d8928B7ee64DE9435E39';
jug='0x19c0976f590D67707E62397C87829d896Dc0f1F1'
ethAJoin='0x2F0b23f53734252Bda2277357e97e1517d6B042A'
daiJoin='0x9759A6Ac90977b93B58547b4A71c78317f391A28'

module.exports = async function(callback) {
  try{

   // const [deployer,a2,a3,a4,a5,a6,a7,a8,a9,a10] = await ethers.getSigners();
    const contract = await MintDai.deployed()
   // const DAI = new ethers.Contract(legos.erc20.dai.address, legos.erc20.dai.abi, wallet);
   // const balance = await ethers.provider.getBalance(deployer.address);
   // console.log('Balance ETH b4:', ethers.utils.formatEther(await wallet.getBalance()))
   // console.log('Balance DAI b4:', ethers.utils.formatEther(await DAI.balanceOf(deployer.address)))
    console.log(legos.maker.dssCdpManager.address);
    console.log(legos.maker.jug.address);
    console.log(legos.maker.ethAJoin.address);
    console.log(legos.maker.daiJoin.address);

/*
    console.log('\nMinting DAI...')
    await contract.myCustomOpenVaultFunction(
      legos.maker.dssCdpManager.address,
      legos.maker.jug.address,
      legos.maker.ethAJoin.address,
      legos.maker.daiJoin.address,
      ethers.utils.parseUnits("5100", legos.erc20.dai.decimals), //5.1k DAI; Amount have to be high enough, cuz fees!
      { gasLimit: 4000000, value: ethers.utils.parseEther("3") },
    )
*/
  //  balance = await ethers.provider.getBalance(deployer.address);
 //   console.log('Balance ETH b4:', ethers.utils.formatEther(await wallet.getBalance()))
  //  console.log('Balance DAI after:', ethers.utils.formatEther(await DAI.balanceOf(wallet.address)))
 

  } catch (e) {
    console.log(e)
  } callback()
}