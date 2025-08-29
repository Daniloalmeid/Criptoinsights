// js/wallet.js
import * as web3 from '@solana/web3.js';

async function connectWallet() {
  try {
    const { solana } = window;
    if (solana && solana.isPhantom) {
      const response = await solana.connect();
      const publicKey = response.publicKey.toString();
      document.getElementById('wallet-address').innerText = `Carteira: ${publicKey}`;
      await checkBalance(publicKey);
    } else {
      alert('Por favor, instale a Phantom Wallet!');
    }
  } catch (error) {
    console.error('Erro ao conectar:', error);
  }
}

async function checkBalance(publicKey) {
  const connection = new web3.Connection(web3.clusterApiUrl('mainnet-beta'), 'confirmed');
  const tokenAccount = new web3.PublicKey('ENDEREÇO_DO_TOKEN_INS'); // Substituir pelo endereço do token INS
  const balance = await connection.getTokenAccountBalance(new web3.PublicKey(publicKey));
  document.getElementById('balance').innerText = `Saldo: ${balance.value.uiAmount} INS`;
}

document.getElementById('connect-wallet').addEventListener('click', connectWallet);