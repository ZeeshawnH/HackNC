<template>
    <Line
      id="my-chart-id"
      :options="options"
      :data="data"
    />
  </template>
  
  <script>
  import { Line } from 'vue-chartjs'
  import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale } from 'chart.js'
  import { db } from './db.js'
import { isEmpty } from 'rxjs'
  
  ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale)
  
  const items = await db.items.toArray();
  
  let produceTotal = 0;
  let dairyTotal = 0;
  let deliTotal = 0;
  let bakeryTotal = 0;
  let generalTotal = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].category == "Produce") {
      produceTotal += items[i].price;
    }
    if (items[i].category == "Dairy") {
      dairyTotal += items[i].price;
    }
    if (items[i].category == "Deli") {
      deliTotal += items[i].price;
    }
    if (items[i].category == "Bakery") {
      bakeryTotal += items[i].price;
    }
    if (items[i].category == "General") {
      generalTotal += items[i].price;
    }
  }

  export default {
    name: 'LineChart',
    components: { Line },
    data() {
      return {
        data: {
          labels: ["Produce", "Dairy", "Deli", "Bakery", "General"],
          datasets: [
            {
              backgroundColor: ['#418883', '#E46651', '#00d8FF', '#DD1816'],
              data: [produceTotal, dairyTotal, deliTotal, bakeryTotal, generalTotal]
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