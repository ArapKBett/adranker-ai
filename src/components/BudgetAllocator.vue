<template>
  <div>
    <h2>Budget Allocator</h2>
    <input type="number" v-model="budget" />
    <button @click="allocateBudget">Allocate Budget</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      budget: 0,
    };
  },
  methods: {
    allocateBudget() {
      this.$emit('allocate', this.budget);
    },
  },
};
</script>

<style scoped>
h2 {
  color: #42b983;
}
input {
  margin-right: 10px;
}
</style>
