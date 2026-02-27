const ctx = document.getElementById('kpiChart').getContext('2d');

const kpiChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['FY25A', 'FY26F', 'FY27F', 'FY28F', 'FY29F', 'FY30F'],
    datasets: [
      {
        label: 'Revenue',
        data: [3222, 3850, 4560, 5320, 6100, 7100],
        borderColor: '#27ae60',
        backgroundColor: 'rgba(39, 174, 96, 0.1)',
        fill: true,
        tension: 0.3
      },
      {
        label: 'EBITDA',
        data: [849, 1020, 1185, 1350, 1500, 1650],
        borderColor: '#2980b9',
        backgroundColor: 'rgba(41, 128, 185, 0.1)',
        fill: true,
        tension: 0.3
      },
      {
        label: 'Net Profit',
        data: [499, 610, 720, 830, 940, 1050],
        borderColor: '#e67e22',
        backgroundColor: 'rgba(230, 126, 34, 0.1)',
        fill: true,
        tension: 0.3
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'KPI Trends (FY25–FY30)',
        font: {
          size: 18
        }
      },
      legend: {
        position: 'bottom'
      }
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'USD ($000)'
        }
      }
    }
  }
});
