<template>
  <div>
    <div class="space-x-3 flex items-center justify-center">
      <router-link to="/todos" class="text-blue-400 text-[23px]">Todos</router-link>
      <router-link to="/comments" class="text-blue-400 text-[23px]">Comments</router-link>
      <router-link to="/images" class="text-blue-400 text-[23px]">Images</router-link>
      <router-link to="/posts" class="text-blue-400 text-[23px]">Posts</router-link>
    </div>
    <div class="flex items-center justify-center space-x-4 mt-[100px]">
      <button @click="$store.dispatch('decreseCount')" class="btn btn-danger">-</button>
      <h1 class="font-bold text-[35px]">Count : {{ $store.state.count }}</h1>
      <button @click="$store.dispatch('increaseCount')" class="btn btn-success">+</button>
    </div>
    <div>
      <div class="flex space-x-4 items-center justify-center mt-5">
        <h1 class="font-bold text-[35px] text-center">
          Count2: {{ $store.state.count2 }}
        </h1>
        <button @click="$store.dispatch('increaseCount2')" class="btn btn-success">
          Go
        </button>
      </div>
      <div class="text-center my-2">
        <h1 class="font-semibold text-[30px]">Step : {{ $store.state.step }}</h1>
        <button @click="$store.dispatch('addStep')" class="btn btn-info mx-4 my-2">
          Add
        </button>
        <button @click="$store.dispatch('minusStep')" class="btn btn-danger mx-4 my-2">
          Minus
        </button>
      </div>
    </div>

    <div class="flex space-x-4 space-y-2 flex-wrap">
      <div class="bg-slate-400" v-for="item in $store.state.users" :key="item.id">
        <p>{{ item.name }}</p>
        <p>{{ item.username }}</p>
        <p>{{ item.email }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import store from "@/store";

onMounted(() => {
  store.dispatch("getUsers");
});
</script>
