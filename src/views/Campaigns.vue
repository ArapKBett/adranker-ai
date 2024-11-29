<template>
  <div>
    <h1>Campaigns</h1>
    <CampaignList @select="selectCampaign" />
  </div>
</template>

<script>
import CampaignList from '@/components/CampaignList.vue';

export default {
  name: 'Campaigns',
  components: {
    CampaignList,
  },
  methods: {
    selectCampaign(campaign) {
      this.$router.push({ name: 'CampaignDetail', params: { id: campaign.id } });
    },
  },
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
