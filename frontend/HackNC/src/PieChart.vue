<script setup>
import { ref, computed } from 'vue'
import { Pie } from 'vue-chartjs'
import { liveQuery } from "dexie";
import { useObservable } from "@vueuse/rxjs";
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale } from 'chart.js'
import { db } from './db.js'

ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale, LinearScale)


const items = useObservable(
  liveQuery(() => db.items.toArray())
)

const options = ref({
      responsive: true,
      maintainAspectRation: false
})


const data = computed(() => {
let map = new Map();
if (items.value) {
    for (let item of items.value) {
        let value = map.get(item.category)
        if (!value) value = 0
        value += item.price
        map.set(item.category, value)
    }
}
let array = []
for (const [key, value] of map) {
    array.push(value)
}
    return {
        labels: ["Produce", "Dairy", "Deli", "Bakery", "General"],
      datasets: [
        {
          backgroundColor: ['#418883', '#E46651', '#00d8FF', '#DD1816'],
          data: array
        }
      ]
}
})
</script>

<template>
    <Pie
      id="my-chart-id"
      :options="options"
      :data="data"
    />
</template>
