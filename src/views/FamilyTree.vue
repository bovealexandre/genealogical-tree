<template>
  <div id="app">
    <VueFamilyTree
      :tree="tree"
      @card-click="cardClick"
    >
        <template v-slot:card="{item}">
            {{ item.name }}
        </template>
    </VueFamilyTree>
  </div>
</template>

<script>
import VueFamilyTree from 'vue-family-tree';
import gql from 'graphql-tag';

const GET_FAMILY = gql`
  type Person {
    individual_couple: String,
    individual_date_of_birth: Date,
    individual_details: String,
    individual_gender: String,
    individual_first_name: String,
    individual_id: String,
    individual_image: String,
    individual_last_name: String,
    individual_parent: String,
    individual_place_of_birth: String,
  }

  type Query {
    getPeople: [Person]
    getPerson(id: Int!): Person
  }

  schema {
    query: Query
  }
`;

export default {
  name: 'FamilyTree',
  components: {
    VueFamilyTree,
  },
  data() {
    return {
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
      Family: [],
    };
  },
  methods: {
    cardClick(item) {
      console.log(item);
    },
  },
  apollo: {
    Family: GET_FAMILY,
  },
};
</script>
