<template>
<form class="w-50 ">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input type="text" class="form-control" id="name" aria-describedby="emailHelp" v-model="formData.name">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
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
          <button @click.prevent="formHandling" class="btn btn-primary">Submit</button>
        </form>
</template>

<script>
    export default {
        name:"FormComponent",
    }
</script>

<style scoped>

</style>