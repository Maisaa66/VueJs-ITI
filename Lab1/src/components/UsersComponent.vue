<template>
<div class="m-auto w-50 mt-5">
    <h1 >Users</h1>
        <table class="table" :class="{'text-light':darkMode}" >
            <thead>
                <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>

                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr v-for="data in users" :key="data.id">
                    <td>{{ data.id }}</td>
                    <td>{{ data.name }}</td>
                    <td>{{ data.age }}</td>
                    <td><button class="btn btn-danger"  @click="$event=>$emit('deleteUser', data.id)">delete</button></td>

                </tr>

            </tbody>
        </table>
</div>
   
</template>

<script>
export default {
    name: "userComponent",
    props:['users', "darkMode"],
    emits:["deleteUser"]
}
</script>

<style scoped></style>