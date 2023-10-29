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
    return {
        labels: ["Produce", "Dairy", "Deli", "Bakery", "General"],
      datasets: [
        {
          backgroundColor: ['#418883', '#E46651', '#00d8FF', '#DD1816'],
          data: [produceNumber, dairyNumber, deliNumber, bakeryNumber, generalNumber]
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
