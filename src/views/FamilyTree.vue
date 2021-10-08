<template>
  <div class="family-tree">
    <FamilyTreeComponent/>
  </div>
</template>

<script>
// @ is an alias to /src
import FamilyTreeComponent from '@/components/FamilyTree.vue';

export default {
  name: 'FamilyTree',
  components: {
    FamilyTreeComponent,
  },
};
</script>
