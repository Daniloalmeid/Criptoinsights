// js/utils.js
import * as web3 from '@solana/web3.js';

export async function getTokenActivity(tokenAddress) {
  const connection = new web3.Connection(web3.clusterApiUrl('mainnet-beta'), 'confirmed');
  const signatures = await connection.getConfirmedSignaturesForAddress2(new web3.PublicKey(tokenAddress));
  return signatures.map(sig => ({
    signature: sig.signature,
    timestamp: sig.slot
  }));
}