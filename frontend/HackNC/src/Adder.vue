<script setup>
import { ref } from "vue"
import { db } from "./db"

/*
defineProps({
    defaultPrice: {
      type: Number,
      default: 21,
    },
});*/

const defaultCategory = 'Dairy';
const defaultPrice = 21;

const status = ref('');
const category = ref(defaultCategory);
const price = ref(defaultPrice);

async function add() {
  try {
    const id = await db.items.add({
        rawName: "raw name",
        generalName: "general nane",
        category: category.value,
        store: "foodlion",
        time: Date.now(),
        price: price.value,
    });

    status.value = 'something added idk what this is';

    // Reset form:
    category.value = defaultCategory;
    price.value = defaultPrice;
  } catch (error) {
    status.value = 'Failed to add something ' + error;
  }
}
</script>
<!-- FriendAdder.vue -->
<template>
  <fieldset>
    <legend>Add new friend</legend>
    <label>
      Category:
      <input v-model="category" type="text" />
    </label>
    <label>
      price:
      <input v-model="price" type="number" />
    </label>
    <br />
    <button @click="add">Add</button>
    <p>{{ status }}</p>
  </fieldset>
</template>
