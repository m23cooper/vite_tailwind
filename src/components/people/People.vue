<script setup lang="ts">
  //  Library imports
  import { Ref, ref } from 'vue';
  import { onMounted, onUpdated, onUnmounted } from 'vue';

  //  Project imports
  import IPerson from "./IPerson";


  // defineProps<{
    // name: string,
  // }>();

  const people:Ref<IPerson[]> = ref([{}]);

  let promise = fetch("https://swapi.dev/api/people/")
      .then(async (promise) => {

        const peeps = await promise.json();

        people.value = peeps.results as IPerson[];
      })
      .catch((error: any) => {
        console.log("Error caught");
      });

  onMounted(() => {
    console.log('mounted!');
  })
  onUpdated(() => {
    console.log('updated!')
  })
  onUnmounted(() => {
    console.log('unmounted!')
  })
</script>


<template>
  <h1>People</h1>
  <table class="people_table" v-for="person in people">
    <tr>
      <td>{{ person.name }}</td>
      <td>{{ person.gender }}</td>
      <td>{{ person.homeworld }}</td>
      <td>{{ person.eye_color }}</td>
    </tr>
  </table>
</template>


<style scoped>
  .people_table {
    width: 100%;
    border: 2px solid #000;
    table-border-color-dark: #000;
    color: blue;
  }
  td {
    WIDTH: 25%;

  }
</style>
