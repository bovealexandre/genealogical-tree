<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <FamilyList/>
  </div>
</template>

<script>
// @ is an alias to /src
import FamilyList from '@/components/FamilyList.vue';

export default {
  name: 'Home',
  components: {
    FamilyList,
  },
};
</script>
