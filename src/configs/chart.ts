export const options = {
  elements: {
    point: {
      radius: 1
    }
  },
  scales: {
    x: {
      border: {
        display: false
      },
      grid: {
        display: false
      },
      ticks: {
        display: false
      }
    },
    y: {
      border: {
        display: false
      },
      grid: {
        display: false
      },
      ticks: {
        font: {
          size: 16,
          weight: 'bold'
        }

        //   callback: formatNumber
      }
    }
  },
  plugins: {
    tooltip: {
      displayColors: false
    }
  }
}
