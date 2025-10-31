// ** MUI Imports
import { Stack } from '@mui/material'

// React-chart Imports
import { Line } from 'react-chartjs-2'

// Chart Imports
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'

// ** Mock data Imports
import { options, chartData } from 'src/mock/data'

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend)

export const LineChartComponent = () => {
  return (
    <Stack className='justify-center'>
      <Line data={chartData} options={options} />
    </Stack>
  )
}
