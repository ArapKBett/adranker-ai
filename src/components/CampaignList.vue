<template>
  <div>
    <h1>Campaign List</h1>
    <ul>
      <CampaignItem
        v-for="campaign in campaigns"
        :key="campaign.id"
        :campaign="campaign"
        @select="selectCampaign"
      />
    </ul>
  </div>
</template>

<script>
import CampaignItem from './CampaignItem.vue';

export default {
  components: {
    CampaignItem,
  },
  data() {
    return {
      campaigns: [
        { id: 1, name: 'Campaign 1' },
        { id: 2, name: 'Campaign 2' },
      ],
    };
  },
  methods: {
    selectCampaign(campaign) {
      this.$emit('select', campaign);
    },
  },
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
