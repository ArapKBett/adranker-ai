<template>
  <li @click="selectCampaign">
    {{ campaign.name }}
  </li>
</template>

<script>
export default {
  props: {
    campaign: Object,
  },
  methods: {
    selectCampaign() {
      this.$emit('select', this.campaign);
    },
  },
};
</script>

<style scoped>
li {
  cursor: pointer;
  padding: 10px;
  border-bottom: 1px solid #ccc;
}
li:hover {
  background-color: #f0f0f0;
}
</style>
