import {
    Connection,
    PublicKey
  } from "@solana/web3.js";
  import {
    getAssociatedTokenAddress,
    getAccount
  } from "@solana/spl-token";
  
  // RPC público da Solana
  const connection = new Connection("https://api.mainnet-beta.solana.com");
  
  // MINT do INS Token (substituir pelo seu)
  const INS_MINT = new PublicKey("COLE-AQUI-O-ENDERECO-DO-SEU-TOKEN");
  
  async function getTokenBalance() {
    if (!walletAddress) {
      alert("Conecte sua carteira primeiro!");
      return;
    }
  
    try {
      const owner = new PublicKey(walletAddress);
      const ata = await getAssociatedTokenAddress(INS_MINT, owner);
  
      const account = await getAccount(connection, ata);
      const balance = Number(account.amount) / Math.pow(10, 9); // token decimal 9
  
      document.getElementById("balance").innerText = "Saldo INS: " + balance;
    } catch (err) {
      console.error("Erro ao buscar saldo:", err);
      document.getElementById("balance").innerText = "Saldo INS: 0";
    }
  }
  