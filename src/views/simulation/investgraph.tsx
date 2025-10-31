// ** React Imports
import { useState, useEffect } from 'react'

// ChartJs Imports
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
  ScriptableContext
} from 'chart.js'
import { Line } from 'react-chartjs-2'

// ** Types Import
import { InvestGraphProps } from 'src/types'

// ** Mock data Imports
import { mockupData } from './mockup'

// ** Utils Import
import { formatNumber } from 'src/utils/helper'

Chart.register(LineController, LineElement, PointElement, LinearScale, CategoryScale, Filler, Tooltip)

const InvestGraph = ({ dataOption }: InvestGraphProps) => {
  const [pricePeak, setPricePeak] = useState<{ min: number; max: number }>({ min: 0, max: 0 })
  const [marketcapPeak, setMarketcapPeak] = useState<{ min: number; max: number }>({ min: 0, max: 0 })

  useEffect(() => {
    if (mockupData) {
      if (mockupData.prices) {
        const priceData = mockupData.prices.map(element => element[1])
        setPricePeak({ min: Math.min(...priceData), max: Math.max(...priceData) })
      }
      if (mockupData.market_caps) {
        const marketCapData = mockupData.market_caps.map(element => element[1])
        setMarketcapPeak({ min: Math.min(...marketCapData), max: Math.max(...marketCapData) })
      }
    }
  }, [mockupData])

  const getChartData = () => {
    const dataSet = dataOption === 'price' ? mockupData?.prices : mockupData?.market_caps
    const labels = dataSet?.map(item => new Date(item[0]).toLocaleString()) || []
    const chartData = dataSet?.map(item => item[1]) || []

    return { labels, chartData }
  }

  const getPointStyles = (dataSet: number[]) => {
    return dataSet.map(item => {
      if (dataOption === 'price') {
        return item === pricePeak.min || item === pricePeak.max ? 5 : 1
      } else {
        return item === marketcapPeak.min || item === marketcapPeak.max ? 5 : 1
      }
    })
  }

  const getPointBackgroundColors = (dataSet: number[]) => {
    return dataSet.map(item => {
      if (dataOption === 'price') {
        return item === pricePeak.min ? '#FF7070' : '#E5AE21'
      } else {
        return item === marketcapPeak.min ? '#FF7070' : '#E5AE21'
      }
    })
  }

  const getPointBorderColors = (dataSet: number[]) => {
    return dataSet.map(item => {
      if (dataOption === 'price') {
        return item === pricePeak.min ? '#FF707040' : item === pricePeak.max ? '#E5AE2140' : '#FFFFFF00'
      } else {
        return item === marketcapPeak.min ? '#FF707040' : item === marketcapPeak.max ? '#E5AE2140' : '#FFFFFF00'
      }
    })
  }
  const { labels: chartLabels, chartData: dataset } = getChartData()

  return (
    <Line
      data={{
        labels: chartLabels,
        datasets: [
          {
            label: 'Price',
            data: dataset,
            pointBorderWidth: 10,
            pointRadius: getPointStyles(dataset),
            pointBackgroundColor: getPointBackgroundColors(dataset),
            pointBorderColor: getPointBorderColors(dataset),
            fill: 'origin',
            backgroundColor: (context: ScriptableContext<'line'>) => {
              const ctx = context.chart.ctx
              const height = context.chart.height * 2
              const gradient = ctx.createLinearGradient(0, 0, 0, height)
              gradient.addColorStop(0, 'rgba(132, 202, 22, 1)')
              gradient.addColorStop(0.35, 'rgba(132, 202, 22, .3)')
              gradient.addColorStop(0.7, 'rgba(255, 255, 255, .05)')
              gradient.addColorStop(1, 'rgba(255, 255, 255, 0)')

              return gradient
            },
            borderColor: '#84CC16'
          }
        ]
      }}
      options={{
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
              },
              callback: formatNumber
            }
          }
        },
        plugins: {
          tooltip: {
            displayColors: false
          }
        }
      }}
    />
  )
}

export default InvestGraph
