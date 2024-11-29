<template>
  <div>
    <h1>Budget Allocation</h1>
    <BudgetAllocator @allocate="allocateBudget" />
  </div>
</template>

<script>
import BudgetAllocator from '@/components/BudgetAllocator.vue';

export default {
  name: 'Budget',
  components: {
    BudgetAllocator,
  },
  methods: {
    allocateBudget(budget) {
      console.log('Allocated Budget:', budget);
      // Handle budget allocation logic here
    },
  },
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
