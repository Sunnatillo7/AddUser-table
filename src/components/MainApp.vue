<template>
  <div>
    <table class="table table-bordered table-stripped table-hover mt-4">
      <thead>
        <tr>
          <th>T/R</th>
          <th>Name</th>
          <th>Lastname</th>
          <th>Age</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in user" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.lastname }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.email }}</td>
          <td>{{ item.address }}</td>
        </tr>
      </tbody>
    </table>
   <div class="flex items-center justify-end mr-4">
     <button class="btn btn-success" @click="btn">Add user</button>
   </div>
    <appModal class="text-center mx-auto" v-model="dialog">
      <h1 class="text-[40px] font-bold">Add User</h1>
      <form @submit="(evt) => handleSubmit(evt)" class="my-2 space-y-2">
        <input class="form-control" type="text" placeholder="Name..." />
        <input class="form-control" type="text" placeholder="Lastname..." />
        <input class="form-control" type="text" placeholder="Age" />
        <input class="form-control" type="text" placeholder="Email" />
        <input class="form-control" type="text" placeholder="Address" />
        <div class="flex items-center justify-end">
          <button @click="Enter" class="btn btn-success mt-2">Enter</button>
          <button class="btn btn-info ml-4 mt-2">Close</button>
        </div>
      </form>
    </appModal>
  </div>
</template>

<script setup>
import { useStore } from "vuex";
import { computed, ref } from "vue";
import appModal from "../components/ui/app-modal.vue";
const name = ref("")
const lastname = ref("")
const age = ref()
const email = ref("")
const address = ref("")

const handleSubmit = (evt) =>{
    evt.preventDefault();
    name.value = evt.target[0].value
    lastname.value = evt.target[1].value
    age.value = evt.target[2].value
    email.value = evt.target[3].value
    address.value = evt.target[4].value
    
    
}

const dialog = ref(false);

const store = useStore();
// const item = ref("Salom")

const user = computed(() => store.getters.returnUsers);
const Enter = ()=>{
//    console.log(store.getters.addUser.push({name:"Salom"}))
   store.getters.addUser.push({name:name, lastname:lastname, age:age, email :email, address:address})
   dialog.value = false
}

const btn = () => {
  dialog.value = true;
};
</script>

<style></style>
