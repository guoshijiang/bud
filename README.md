## 第一部分

### 1.合约测试
```
npx hardhat test
```

### 2. 合约部署 ropsten
```
npx hardhat run --network bsctest scripts/deploy.js
```

### 3. 合约 verify 和 publish
```
npx hardhat verify --contract contracts/EthNft.sol:EthNft  --network bsctest 0x6983eccfFeF3fb3AC77604123F7aBEdE64797C66
```

## 第二部分

### 1.安装依赖
```
npm install
```

### 2.合约地址和图片信息替换


img 里面的图片信息改成自己的
`Home.jsx` 里面的 `const contractAddress = '0x18e80942Df64B1600703C64CDE69856532ed8e87';`； contractAddress 改成自己的


### 3.运行项目 Mint NFT

```
npm run dev 运行项目
然后就可以去界面上 mint NFT 了
```
