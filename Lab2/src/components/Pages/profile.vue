<template>
    <div class="d-flex justify-content-center align-items-center mt-5">

        <div class="card p-3" style="width: 25rem;">
            <img src="https://img.freepik.com/free-icon/user_318-159711.jpg" class="card-img-top m-auto"
                alt="Chicago Skyscrapers" style="width: 200px; height: 200px;" />
            <div class="card-body">
                <h5 class="card-title">{{ first_name + " " + last_name }}</h5>
                <p class="card-text">{{ gender }}</p>
                <p class="card-text">{{ skill }}</p>
            </div>
            <div class="card-body">
                <router-link class="btn btn-info" :to="`/update/${id}`">Update</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "profilePage",
    data() {
        return {
            id: "",
            first_name: "",
            last_name: "",
            gender: "",
            skill: ""

        }
    },
    created() {
        this.getUserByID();
    },
    methods: {
        getUserByID() {
            this.id = this.$route.params.id
            axios.get(`http://localhost:3000/users/${this.id}`)
                .then((res) => {
                        this.first_name = res.data.first_name,
                        this.last_name = res.data.last_name,
                        this.gender = res.data.gender,
                        this.skill = res.data.skills,
                        console.log(res.data.skills,this.first_name, this.last_name, this.id, this.gender, this.skill)
                }).
                catch((err) => console.log(err))


        }
    }
}
</script>

<style scoped></style>