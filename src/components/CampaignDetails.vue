<template>
  <div v-if="campaign">
    <h2>{{ campaign.name }}</h2>
    <p>Details about the campaign...</p>
  </div>
</template>

<script>
export default {
  props: {
    campaign: Object,
  },
};
</script>

<style scoped>
h2 {
  color: #333;
}
</style>
