import Chart from 'https://cdn.jsdelivr.net/npm/chart.js/auto/+esm';

const ctx = document.getElementById('volume-chart').getContext('2d');
const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['01/08', '02/08', '03/08', '04/08', '05/08', '06/08', '07/08'],
    datasets: [{
      label: 'Volume de Transações (INS)',
      data: [1500, 2200, 1800, 3000, 2500, 2700, 3200],
      borderColor: '#22d3ee',
      backgroundColor: 'rgba(34, 211, 238, 0.2)',
      fill: true,
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
        title: { display: true, text: 'Volume (INS)', color: '#e5e7eb' },
        ticks: { color: '#e5e7eb' }
      },
      x: {
        title: { display: true, text: 'Data', color: '#e5e7eb' },
        ticks: { color: '#e5e7eb' }
      }
    },
    plugins: {
      legend: { labels: { color: '#e5e7eb' } }
    }
  }
});

// Função placeholder para carregar dados on-chain (exemplo)
async function loadOnChainData() {
  // Exemplo: Conectar à Solana para obter volume de transações
  /*
  import * as web3 from '@solana/web3.js';
  const connection = new web3.Connection(web3.clusterApiUrl('mainnet-beta'), 'confirmed');
  const tokenAddress = new web3.PublicKey('ENDEREÇO_DO_TOKEN_INS');
  const signatures = await connection.getConfirmedSignaturesForAddress2(tokenAddress);
  // Processar dados para o gráfico
  */
  console.log('Carregar dados on-chain aqui');
}
loadOnChainData();