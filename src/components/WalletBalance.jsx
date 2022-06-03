import { useState } from 'react';
import { ethers } from 'ethers';

function WalletBalance() {

    const [balance, setBalance] = useState();

    const getBalance = async () => {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const balance = await provider.getBalance(account);
        setBalance(ethers.utils.formatEther(balance));
    };

    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">钱包余额: {balance}</h5>
          <button className="btn btn-success" onClick={() => getBalance()}>连接钱包获取余额</button>
        </div>
      </div>
    );
  };

  export default WalletBalance;