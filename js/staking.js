async function stakeTokens(amount) {
    if (!walletAddress) {
      alert("Conecte a carteira primeiro!");
      return;
    }
    console.log(`Stake de ${amount} INS`);
    alert(`Você colocou ${amount} INS em stake!`);
  }
  
  async function unstakeTokens(amount) {
    if (!walletAddress) {
      alert("Conecte a carteira primeiro!");
      return;
    }
    console.log(`Unstake de ${amount} INS`);
    alert(`Você retirou ${amount} INS do stake!`);
  }
  