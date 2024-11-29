<template>
  <div>
    <h2>Create New Ad</h2>
    <input type="text" v-model="adTitle" placeholder="Ad Title" />
    <textarea v-model="adContent" placeholder="Ad Content"></textarea>
    <button @click="createAd">Create Ad</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      adTitle: '',
      adContent: '',
    };
  },
  methods: {
    createAd() {
      const newAd = {
        title: this.adTitle,
        content: this.adContent,
      };
      this.$emit('create', newAd);
    },
  },
};
</script>

<style scoped>
h2 {
  color: #42b983;
}
input, textarea {
  display: block;
  margin-bottom: 10px;
  width: 100%;
}
</style>
