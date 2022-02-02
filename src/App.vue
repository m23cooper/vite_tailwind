<!--  Generated from Vue View template-->

<template>
  <div id="App" class="flex flex-col m-4 border border-stone-800 bg-amber-700">
    <PlayerView class=""></PlayerView>
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import PlayerView from "@/views/player/PlayerView.vue";
  import {onMounted} from "vue";
  import {Store} from "vuex";
  import {ActionTypes as action} from "./store/actionTypes";
  import {useStore} from "./store/Store";


//////////////////////////////////////////////////////////////////////////////////////////////////
  //  Private
  const _name: string = "App";
  const _store:Store<any> = useStore();


  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Methods


  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Hooks
  onMounted(() => {
    _store.dispatch(action.INIT_DEVICE);
  });
  // onUpdated(() => {
  //   console.log(`App updated!`);
  // })
  // onUnmounted(() => {
  //   console.log(`App unmounted!`);
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
