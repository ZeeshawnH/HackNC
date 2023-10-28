<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.rawName }}, {{ item.price }}
    </li>
  </ul>
</template>

<script>
  import { liveQuery } from "dexie";
  import { useObservable } from "@vueuse/rxjs";
  import { db } from "./db";

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

