<template>
  <Bar
    id="my-chart-id"
    :options="chartOptions"
    :data="chartData"
  />
</template>

<script>
import { Bar } from 'vue-chartjs'
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js'
import { db } from './db.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const data = await db.items.toArray();

export default {
  name: 'BarChart',
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: data.map(row => row.generalName),
        datasets: [
          {
            label: 'Acquisitions',
            data: data.map(row => row.count)
          }
        ]
      },
      chartOptions: {
        responsive: true
      }
    }
  }
}
</script>
