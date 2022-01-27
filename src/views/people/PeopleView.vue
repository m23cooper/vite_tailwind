<!--  Generated from VueView template-->

<template>
  <div id="PeopleView" class="">
    <h1 class="font-bold">PeopleView</h1>
    <PersonComponent class="" alias="poopascoop"></PersonComponent>
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Library imports
  import { Ref, ref } from 'vue';
  // import { onMounted, onUpdated, onUnmounted } from 'vue';

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Local imports
  // import IPerson from "./IPerson";
  import PersonComponent from "./PersonComponent.vue";

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Private
  const _name: string = "PeopleView";

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Methods


  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Hooks
  // onMounted(() => {
  //   console.log(`PeopleView mounted!`);
  // })
  // onUpdated(() => {
  //   console.log(`PeopleView updated!`);
  // })
  // onUnmounted(() => {
  //   console.log(`PeopleView unmounted!`);
  // })

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Public
  defineExpose({
    name: _name,
  });

</script>

<!------------------------------------------------------------------------------------------------->

<style scoped>

</style>
