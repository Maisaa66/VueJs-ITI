<template>
  <div class="container w-100 h-100 p-5" :class="{'dark-theme':darkMode}">
    <div class="row d-flex justify-content-center mb-5">
      <div class="col-sm-5 col-md-2 ">
        <div class="form-check form-switch ">
          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" v-model="darkMode">
          <label class="form-check-label" for="flexSwitchCheckDefault">Dark Mode<span v-if="!darkMode"> 🌚</span><span v-if="darkMode"> 🌞</span></label>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12 d-flex justify-content-center">
        <button class="btn ms-3" :class="darkMode? 'btn-info': 'btn-primary'" @click="$event => this.show = 'form'">Form</button>
        <button class="btn  ms-3" :class="darkMode? 'btn-info': 'btn-primary'" @click="$event => this.show = 'users'">Display Users</button>
        <button class="btn " :class="darkMode? 'btn-info': 'btn-primary'" @click="$event => this.show = 'admins'">Display Admins</button>

      </div>
    </div>
    <div class="row" v-if="this.show == 'form'">
      <div class="col-12 d-flex justify-content-center">
        <form class="w-50 ">
          <div class="mb-3">
            <label for="id" class="form-label">ID</label>
            <input type="text" class="form-control" id="id" aria-describedby="emailHelp" v-model="formData.id">
            <div id="emailHelp" class="form-text">We'll never share your information with anyone else.</div>

          </div>
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" aria-describedby="emailHelp" v-model="formData.name">
          </div>
          <div class="mb-3">
            <label for="age" class="form-label">Age</label>
            <input type="number" class="form-control" id="age" v-model="formData.age">
          </div>
          <div class="mb-3 form-check">
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"
                v-model="formData.role" v-bind:value="'user'">
              <label class="form-check-label" for="flexRadioDefault1">
                User
              </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"
                v-model="formData.role" v-bind:value="'admin'">
              <label class="form-check-label" for="flexRadioDefault2">
                Admin
              </label>
            </div>
          </div>
          <button @click.prevent="formHandling" class="btn" :class="darkMode? 'btn-info': 'btn-primary'">Submit</button>
        </form>
      </div>

    </div>

    <div class="row" v-else-if="this.show == 'users'">
      <div class="col-12 d-flex justify-content-center flex-column">
        <UsersComponent :users="this.users" @deleteUser="deleteUSer" :darkMode="this.darkMode"/>
      </div>
    </div>

    <div class="row" v-else-if="this.show == 'admins'">
      <div class="col-12 d-flex justify-content-center flex-column">
        <AdminComponent :admins="this.admins" @deleteAdmin="deleteAdmin" :darkMode="this.darkMode"/>
      </div>
    </div>

  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import UsersComponent from './components/UsersComponent.vue';
import AdminComponent from './components/AdminComponent.vue';
export default {
  name: 'App',
  components: {
    UsersComponent,
    AdminComponent

  },
  data() {
    return {
      formData: {
        name: "",
        age: null,
        role: null,
        id: null
      },

      users: [],
      admins: [],
      show: "",
      darkMode: false,
    }
  },

  methods: {
    formHandling() {
      let newUser = { ...this.formData }
      console.log(newUser)
      if (newUser.role === "user") {
        this.users.push(newUser)
      }
      else if (newUser.role == "admin") {
        this.admins.push(newUser);
      }
      console.log(this.users, this.admins);
      console.log(this.darkMode);
    },
    deleteUSer(id) {
      this.users = this.users.filter((user) => user.id !== id);
      console.log(id);
    },
    deleteAdmin(id) {
      this.admins = this.admins.filter((admin) => admin.id !== id)
    }

  },
  props: []
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}

.dark-theme{
background-color: #2c3e50;
color: white;
}
</style>
