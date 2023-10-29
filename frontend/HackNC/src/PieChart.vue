<script setup>
import { ref } from 'vue'
import { Pie } from 'vue-chartjs'
import { liveQuery } from "dexie";
import { useObservable } from "@vueuse/rxjs";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js'
import { db } from './db.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)

const options = ref({
      responsive: true,
      maintainAspectRation: false
})

const items = ref(useObservable(
  liveQuery(() => db.items.toArray())
))

console.log(items)

const data = ref({
  labels: ["Produce", "Dairy", "Deli", "Bakery", "General"],
  datasets: [
    {
      backgrondColor: ['#418883', '#E46651', '#00d8FF', '#DD1816'],
      data: [2, 2, 3, 2]
    }
  ]
})
</script>

<template>
    <Pie
      id="my-chart-id"
      :options="options"
      :data="data"
    />
</template>
