<template>
  <div>
    <h1>Campaign Details</h1>
    <CampaignDetails :campaign="campaign" />
  </div>
</template>

<script>
import CampaignDetails from '@/components/CampaignDetails.vue';

export default {
  name: 'CampaignDetail',
  components: {
    CampaignDetails,
  },
  data() {
    return {
      campaign: null,
    };
  },
  created() {
    const campaignId = this.$route.params.id;
    // Fetch campaign details based on campaignId
    this.campaign = { id: campaignId, name: `Campaign ${campaignId}` }; // Example data
  },
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
