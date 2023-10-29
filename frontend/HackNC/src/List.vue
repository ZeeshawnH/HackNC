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
      {{ item.rawName }}, {{ item.price }}
    </li>
  </ul>
</template>
<!--
<script>
  import { liveQuery } from "dexie";
  import { useObservable } from "@vueuse/rxjs";
  import { db } from "./db";

  console.log((await db.items.toArray())[0]);
  export default {
    setup() {
      return {
        db,
        items: useObservable(
          liveQuery(() => db.items.toArray())
        ),
      };
    },
  };
</script>
-->
