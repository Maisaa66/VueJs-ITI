<template>
    <!-- <div class="d-flex justify-content-center">
        <table class="table mt-2 w-75">
  <thead class="table-dark">
<tr>
    <th>ID</th>
    <th>Name</th>
    <th>Gender</th>
    <th>Skills</th>
    <th>Operations</th>
</tr>
  </thead>
  <tbody>
    <tr v-for="user in users" :key="user.id">
        <td>{{ user.id }}</td>
        <td>{{user.first_name +" " +user.last_name}}</td>
        <td>{{user.gender}}</td>
        <td>{{user.skills}}</td>
        <td><button class="btn btn-danger">Delete</button><button class="btn btn-info me-3">Update</button></td>
    </tr>
  </tbody>
</table>
    </div> -->

    <section class="intro mt-3">
        <div class="bg-image h-50" style="background-color: #f5f7fa;">
            <div class="mask d-flex align-items-center h-50">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-12">
                            <div class="card shadow-2-strong">
                                <div class="card-body p-0">
                                    <div class="table-responsive table-scroll" data-mdb-perfect-scrollbar="true"
                                        style="position: relative; height: 700px">
                                        <table class="table table-dark mb-0">
                                            <thead style="background-color: #393939;">
                                                <tr class="text-uppercase text-success">
                                                    <th scope="col">ID</th>
                                                    <th scope="col">Name</th>
                                                    <th scope="col">Gender</th>
                                                    <th scope="col">Skills</th>
                                                    <th scope="col">Operations</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="user in users" :key="user.id">
                                                    <td>{{ user.id }}</td>
                                                    <td>{{ user.first_name + " " + user.last_name }}</td>
                                                    <td>{{ user.gender }}</td>
                                                    <td>{{ user.skills }}</td>
                                                    <td>
                                                        <router-link class="btn btn-info " :to="`/profile/${user.id}`">Show
                                                            More</router-link>
                                                        <button class="btn btn-danger me-2"
                                                            @click="deleteUser(user.id)">X</button>

                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
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
    name: "dashboardPage",
    data() {
        return {
            users: [],
        }
    },
    created() {
        this.getAllUsers();
    },

    methods: {

        getAllUsers() {
            axios.get("http://localhost:3000/users")
                .then((res) => this.users = res.data)
        },
        deleteUser(id) {
            console.log(id);
            axios.delete(`http://localhost:3000/users/${id}`)
                .then((res) => {
                    console.log(res.data)
                    this.getAllUsers()});
            
        }

    }

}
</script>

<style scoped>
.into{
    height: 100vh;
}

table td,
table th {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  min-width: 200px;
  max-width: 200px;
    
}

.card {
    border-radius: .5rem;
   
}

.table-scroll {
    border-radius: .5rem;
}

thead {
    top: 0;
    position: sticky;
}</style>