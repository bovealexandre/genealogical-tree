<template>
  <div class="hello">
    <div v-if="$apollo.queries.Families.loading">
      Loading...
    </div>
    <family-item v-for="family in Families" :key="family.family_id" :family="family"></family-item>
    <add-button></add-button>
  </div>
</template>

<script lang="ts">
import FamilyItem from './FamilyItem.vue';
import AddButton from './AddButton.vue';

import FAMILIES from '@/graphql/Family.gql';

export default {
  name: 'FamiliesList',
  components: { FamilyItem, AddButton },
  data() {
    return {
      Families: [],
    };
  },
  apollo: {
    Families: FAMILIES,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
