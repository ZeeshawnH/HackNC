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
      Category:
      <input v-model="category" type="text" />
    </label>
    <br />
    <label>
      Dairy:
      <input v-model="dairy" type="text" />
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
                        rawName: "",
                        generalName: "general nane",
                        category: this.category,
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
