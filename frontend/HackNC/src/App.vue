<script setup>
    import { ref } from 'vue'
    import Adder from './Adder.vue'
    import List from './List.vue'

    const count = ref(0);
</script>
<template>
    <h1>adder</h1>
    <Adder/>

    <h1>button count</h1>
    {{ count }}
    <button @click="count++">inc</button>

    <h1>friend list</h1>
    <List />
</template>
