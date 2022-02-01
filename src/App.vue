<!--  Generated from VueView template-->

<template>
  <div id="App" class="flex p-4 m-4 border border-stone-800 bg-amber-700">
    <PeopleView class="text-white" alias="peep"></PeopleView>
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  import {onMounted} from "vue";
  import {Store} from "vuex";
  import {ActionTypes as action} from "./store/actions";
  import {useStore} from "./store/Store";
  import PeopleView from "./views/people/PeopleView.vue";

  const _store:Store<any> = useStore();

  onMounted(() => {
     _store.dispatch(action.INIT_DEVICE);
  });

</script>

<!------------------------------------------------------------------------------------------------->

<style scoped>

</style>
