<template>
  <div :key="family.family_id">
    <h3>{{ family.family_name }}</h3>
    <p>{{ family.family_details }}</p>
    <p>{{ family.family_description }}</p>
    <span>{{ family.family_date_from }} - {{ family.family_date_to }}</span>
  </div>
</template>

<script>
export default {
  name: 'FamilyItem',
  props: ['family'],
};
</script>
