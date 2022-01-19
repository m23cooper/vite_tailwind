<script setup lang="ts">
  import  {Ref, ref } from 'vue';
  import { onMounted, onUpdated, onUnmounted } from 'vue';
  import IPerson from "./IPerson";

  // const props:object = {name: string};
  //
  // defineProps<{name: string}>();

  let people:Ref<IPerson> = ref({skin_color: "fair"});

  async function getPeople():Promise<any>
  {
    console.log('getPeople!');
    let promise = await fetch("https://swapi.dev/api/people/");

    const peeps = await promise.json();

    people.value = peeps.results;
  }

  onMounted(() => {
    console.log('mounted!');
    getPeople();
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
</style>
