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
import { isEmpty } from 'rxjs'
  
  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)
  
  const items = await db.items.toArray();
  
  let produceNumber = 0;
  let dairyNumber = 0;
  let deliNumber = 0;
  let bakeryNumber = 0;
  let generalNumber = 0;
  for (let i = 0; i < items.length; i++) {
    if (items[i].category == "Produce") {
        produceNumber++;
    }
    if (items[i].category == "Dairy") {
        dairyNumber++;
    }
    if (items[i].category == "Deli") {
        deliNumber++;
    }
    if (items[i].category == "Bakery") {
        bakeryNumber++;
    }
    if (items[i].category == "General") {
        generalNumber++;
    }
  }


  console.log(produceNumber);

  export default {
    name: 'PieChart',
    components: { Pie },
    data() {
      return {
        data: {
          labels: ["Produce", "Dairy", "Deli", "Bakery", "General"],
          datasets: [
            {
              backgroundColor: ['#418883', '#E46651', '#00d8FF', '#DD1816'],
              data: [produceNumber, dairyNumber, deliNumber, bakeryNumber, generalNumber]
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