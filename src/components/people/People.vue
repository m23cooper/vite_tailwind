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
  <h1 class="font-bold">People</h1>
  <table id="people__table" class="table-auto border-collapse border border-slate-400 w-screen content-start">
    <thead>
    <tr>
      <th>Name</th>
      <th>Gender</th>
      <th>Homeworld</th>
      <th>Eye Colour</th>
    </tr>
    </thead>
    <tbody v-for="person in people">
      <tr class="border border-slate-200">
        <td>{{ person.name }}</td>
        <td>{{ person.gender }}</td>
        <td>{{ person.homeworld }}</td>
        <td>{{ person.eye_color }}</td>
      </tr>
    </tbody>
  </table>
</template>


<style scoped>
</style>
