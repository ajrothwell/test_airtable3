<template>
  <div id="app">
    <ul>
      <li
        v-for="(datapoint, index) of dataset"
        :key="index"
      >
        {{ datapoint.Notes }}
        <img
          :src="getAttachments(datapoint)"
          class="the-img"
        >
      </li>
    </ul>
  </div>
</template>

<script>
import Airtable from 'airtable';

export default {
  name: 'App',
  computed: {
    dataset() {
      return this.$store.state.sources.dataset;
    },
  },
  mounted() {
    var base = new Airtable({ apiKey: 'keyvWacAcaLOuPZJq' }).base('appxMfxTM3tiTOD61');

    let store = this.$store;

    base('Table 1').select({
      maxRecords: 3,
      view: "Grid view",
    }).eachPage(function page(records) {
      // This function (`page`) will get called for each page of records.
      let data = [];
      // console.log('records:', records);
      for (let record of records) {
        console.log('record:', record);
        data.push(record.fields);
      }
      store.commit('setDataset', data);
    });



  },
  methods: {
    getAttachments(item) {
      console.log('in getAttachments, item:', item);
      if (item.Attachments) {
        console.log('in getAttachments, item.Attachments[0]:', item.Attachments[0]);
        return item.Attachments[0].url;
      }
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.the-img {
  height: 90px;
}
</style>
