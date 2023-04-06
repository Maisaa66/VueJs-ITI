<template>
    <section>
        <div class="container py-5">
            <div class="row d-flex justify-content-center align-items-center">
                <div class="col-lg-8 col-xl-6">
                    <div class="card rounded-3" style="box-shadow: 1px 1px 10px grey;">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/img3.webp"
                            class="w-100" style="border-top-left-radius: .3rem; border-top-right-radius: .3rem;"
                            alt="Sample photo">
                        <div class="card-body p-4 p-md-5">
                            <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>

                            <form class="px-md-2" @submit.prevent="updateUser()">

                                <div class="row">
                                    <div class="col-6">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="floatingInput"
                                                placeholder="name@example.com" v-model="first_name">
                                            <label for="floatingInput">First Name</label>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="floatingInput"
                                                placeholder="name@example.com" v-model="last_name">
                                            <label for="floatingInput">Last Name</label>
                                        </div>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="form-floating mb-3">
                                            <input type="text" class="form-control" id="floatingInput"
                                                placeholder="reactjs, ui/ux" v-model="skills">
                                            <label for="floatingInput">Skills</label>
                                        </div>


                                    </div>
                                    <div class="col-md-1 mb-4">
                                        <label>Gender</label>
                                        <div class="dropdown">
                                            <button class="btn btn-secondary dropdown-toggle" type="button"
                                                data-bs-toggle="dropdown" aria-expanded="false">
                                                {{ gender }}
                                            </button>
                                            <ul class="dropdown-menu">
                                                <li><button class="dropdown-item" type="button"
                                                        @click="gender = 'Female'">Female</button></li>
                                                <li><button class="dropdown-item" type="button"
                                                        @click="gender = 'Male'">Male</button></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <button type="submit" class="btn btn-success btn-lg mb-1">Update</button>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
export default {
    name: "updatePage",

    data() {
        return {
            id:"",
            first_name: "",
            last_name: "",
            skills: "",
            gender: ""
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
                        this.skills = res.data.skills,
                        console.log(this.first_name, this.last_name, this.id, this. gender, this.skills)
                }).
                catch((err)=>console.log(err))

               


        },

        updateUser(){
            axios.put(`http://localhost:3000/users/${this.id}`,{
                first_name: this.first_name,
                last_name: this.last_name,
                gender: this.gender,
                skills: this.skills
            })
            .then((res)=>{
                console.log(res.data);
                this.$router.push("/")
            })
        }


    }
}
</script>

<style scoped></style>