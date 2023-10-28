<script setup>
    import { ref } from 'vue'
    import FriendAdder from './FriendAdder.vue'
    import FriendList from './FriendList.vue'

    const count = ref(0);
</script>
<template>
    <h1>friend adder</h1>
    <FriendAdder />

    <h1>button count</h1>
    {{ count }}
    <button @click="count++">inc</button>

    <h1>friend list</h1>
    <FriendList />
</template>
<script>
    import { liveQuery } from "dexie";
    import { useObservable } from "@vueuse/rxjs";
    import { db } from "./db";

    export default {
        name: "FriendList",
        setup() {
          return {
            db,
            friends: useObservable(
                liveQuery(() => db.friends.toArray())
                ),
            };
        },
    };
</script>
