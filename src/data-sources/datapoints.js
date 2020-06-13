export default {
  id: 'covid-free-meals',
  type: 'airtable',
  dependent: 'none',
  resettable: false,
  apiKey: process.env.VUE_APP_AIRTABLE_API_KEY,
  databaseKey: process.env.VUE_APP_AIRTABLE_BASE,
};
