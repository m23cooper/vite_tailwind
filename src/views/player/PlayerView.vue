<!--  Generated from Vue View template-->

<template>
  <div id="PlayerView" class="">
    <h1 class="font-bold">PlayerView</h1>
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import { ref } from 'vue';
  import { onMounted, onUpdated, onUnmounted } from 'vue';
  import { Store } from "vuex";
  import { useStore } from "@/store/Store";
  import {ActionTypes as action} from "@/store/actionTypes";


  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Private
  const _name: string = "PlayerView";
  const _store:Store<any> = useStore();


  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Methods


  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Hooks
  onMounted(() => {
    _store.dispatch(action.GET_PLAYER, "666");
  })
  // onUpdated(() => {
  //   console.log(`PlayerView updated!`);
  // })
  // onUnmounted(() => {
  //   console.log(`PlayerView unmounted!`);
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
