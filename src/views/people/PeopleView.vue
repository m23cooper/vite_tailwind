<!--  Generated from VueView template-->

<template>
  <div id="PeopleView" class="">
    <h1 class="font-bold">Player: {{ alias}}</h1>
    <PersonComponent class="" alias="poopascoop"></PersonComponent>
    <button v-on:click="onClickHandler">CLICK</button>
  </div>
</template>

<!------------------------------------------------------------------------------------------------->

<script setup lang="ts">
  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Library imports
  import {computed, ComputedRef, Ref, ref} from 'vue';
  // import { onMounted, onUpdated, onUnmounted } from 'vue';
  import { MutationTypes as mutate } from '../../store/mutation';
  import { ActionTypes as action } from '../../store/actions';

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Local imports
  // import IPerson from "./IPerson";
  import PersonComponent from "./PersonComponent.vue";
  import {useStore} from "vuex";

  const _store = useStore();

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Private
  const _name: string = "PeopleView";
  const alias: ComputedRef<string> = computed( () => _store.getters.playerVO.alias);

  //////////////////////////////////////////////////////////////////////////////////////////////////
  //  Methods

  const onClickHandler = (evt: any) => {
    _store.dispatch(action.CLEAR_UI, {"alias": "helen"});
  }


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
