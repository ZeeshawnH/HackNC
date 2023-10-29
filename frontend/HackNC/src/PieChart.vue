<template>
    <Pie
      id="my-chart-id"
      :options="options"
      :data="data"
    />
  </template>
  
  <script>
  import { Pie } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js'
  import { db } from './db.js'
  
  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)
  
  const data = await db.items.toArray();
  
  export default {
    name: 'PieChart',
    components: { Pie },
    data() {
      return {
        data: {
          labels: ["Produce", "Dairy", "Deli", "Bakery", "General"],
          datasets: [
            {
              backgrondColor: ['#418883', '#E46651', '#00d8FF', '#DD1816'],
              data: [2, 2, 3, 2]
            }
          ]
        },
        options: {
          responsive: true,
          maintainAspectRation: false
        }
      }
    }
  }
  </script>