<template>
    <nav class="navbar navbar-expand-lg " style="background-color: #03C988;box-shadow: 1px 1px 5px #03C988;">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse " id="navbarNavDropdown">
                <ul class="navbar-nav gap-3">
                    <li class="nav-item">
                        <router-link class="nav-link" aria-current="page" to="/">Dashboard</router-link>
                    </li>
                    <li><button class="btn btn-dark" @click="addUser">Add New User</button>
                    </li>
                </ul>

            </div>

        </div>
    </nav>
</template>

<script>
export default {
    name: "navBar",
    methods:{
        addUser(){
            this.$router.push('/signup')
        }
    }
}
</script>

<style scoped></style>