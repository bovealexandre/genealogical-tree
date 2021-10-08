<template>
  <div id="app">
    <VueFamilyTree
      :tree="tree"
      @card-click="cardClick"
    >
        <!-- <template v-slot:card="{item}">
            {{ item.name }}
        </template> -->
    </VueFamilyTree>
  </div>
</template>

<script>
import VueFamilyTree from 'vue-family-tree';

import GETFAMILIES from '@/graphql/getFamily.gql';

export default {
  name: 'FamilyTreeComponent',
  components: {
    VueFamilyTree,
  },
  created() {
    this.id = this.$route.params.family_id;
  },
  data() {
    return {
      id: '',
      getFamily: [],
      tree: [{
        firstPerson: {
          name: 'John Walker',
          image: 'https://picsum.photos/300/300?random=1',
        },
        secondPerson: {
          name: 'Jannet Grem',
          image: 'https://picsum.photos/300/300?random=2',
        },
        children: [{
          firstPerson: {
            name: 'Katia',
          },
          secondPerson: {
            name: 'Oleg',
          },
          children: [{
            firstPerson: {
              name: 'Gleb',
            },
            secondPerson: {
              name: 'Viktoriya',
            },
            children: [{
              firstPerson: {
                name: 'Rim',
              },
              secondPerson: {
                name: 'Natasha',
              },
            },
            {
              firstPerson: {
                name: 'Leonid',
              },
            }],
          },
          {
            firstPerson: {
              name: 'Olga',
            },
            secondPerson: {
              name: 'Nikita',
            },
          }],
        },
        {
          firstPerson: {
            name: 'Vitia',
          },
          secondPerson: {
            name: 'Dasha',
          },
        },
        {
          firstPerson: {
            name: 'Antonio Wild',
            image: 'https://picsum.photos/300/300?random=3',
          },
          secondPerson: {
            name: 'Olivia Olson',
          },
          children: [{
            firstPerson: {
              name: 'Kristina Wild',
            },
          },
          {
            firstPerson: {
              name: 'Alexey Wild',
            },
          },
          {
            firstPerson: {
              name: 'Viktor Wild',
            },
          }],
        }],
      }],
    };
  },
  methods: {
    cardClick(item) {
      console.log(item);
    },
  },
  apollo: {
    getFamily: {
      query: GETFAMILIES,
      variables() {
        return {
          id: this.id,
        };
      },
    },
  },
};
</script>
