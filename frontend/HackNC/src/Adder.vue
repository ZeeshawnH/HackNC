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

const defaultPrice = 21;

const status = ref('');
const rawName = ref('');
const price = ref(defaultPrice);

async function add() {
  try {
    const id = await db.items.add({
        rawName: rawName.value,
        generalName: "general nane",
        category: "produce",
        store: price.value,
        time: Date.now(),
        price: 4,
    });

    status.value = 'something added idk what this is';

    // Reset form:
    rawName.value = '';
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
      Raw Name:
      <input v-model="rawName" type="text" />
    </label>
    <br />
    <label>
      Price:
      <input v-model="price" type="number" />
    </label>
    <br />
    <button @click="add">Add</button>
    <p>{{ status }}</p>
  </fieldset>
</template>
<script>
    import { db } from "./db"

    export default {
        data() {
            return {
              status: '',
              rawName: '',
              price: this.defaultPrice,
            };
        },
        methods: {
            async add() {
                  try {
                    const id = await db.items.add({
                        rawName: this.rawName,
                        generalName: "general nane",
                        category: "produce",
                        store: "Store",
                        time: Date.now(),
                        price: this.price,
                    });

                    this.status = 'something added idk what this is';

                    // Reset form:
                    this.rawName = '';
                    this.price = this.defaultPrice;
                  } catch (error) {
                    this.status = `Failed to add something: ${error.message}`;
                  }
            },
          },
        }
</script>
