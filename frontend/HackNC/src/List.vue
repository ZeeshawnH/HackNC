<script setup>
import { ref, reactive } from "vue"
import { liveQuery } from "dexie";
import { useObservable } from "@vueuse/rxjs";
import { db } from "./db";

const items = useObservable(
  liveQuery(() => db.items.toArray())
)
</script>

<template>
  <ul>
    <li v-for="item in items" :key="item.id">
        {{ item.rawName }}, {{ item.category }}, {{ item.price }}
    </li>
  </ul>
</template>
