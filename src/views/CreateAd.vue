<template>
  <div>
    <h1>Create New Ad</h1>
    <AdCreator @create="createAd" />
  </div>
</template>

<script>
import AdCreator from '@/components/AdCreator.vue';

export default {
  name: 'CreateAd',
  components: {
    AdCreator,
  },
  methods: {
    createAd(newAd) {
      console.log('New Ad Created:', newAd);
      // Handle ad creation logic here
    },
  },
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
