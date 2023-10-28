<script setup>
    defineProps({
        defaultPrice: {
          type: Number,
          default: 21,
        },
    });
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
                        store: this.price,
                        time: Date.now(),
                        price: 4,
                    });

                    this.status = 'something added idk what this is';

                    // Reset form:
                    this.rawName = '';
                    this.price = this.defaultPrice;
                  } catch (error) {
                    this.status = 'Failed to add something';
                  }
            },
          },
        }
</script>
