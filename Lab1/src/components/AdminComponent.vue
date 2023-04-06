<template>
<div class="m-auto w-50 mt-5">
    <h1>Admins</h1>
    <table class="table" :class="{'text-light':darkMode}">
        <thead>
            <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>

            </tr>
        </thead>
        <tbody class="table-group-divider">
            <tr v-for="data in admins" :key="data.id">
                <td>{{ data.id }}</td>
                <td>{{ data.name }}</td>
                <td>{{ data.age }}</td>
                <td><button class="btn btn-danger" @click="$event=>$emit('deleteAdmin', data.id)">delete</button></td>
            </tr>

        </tbody>
    </table>
</div>

</template>

<script>
export default {
name: "adminComponent",
props:['admins', "darkMode"],
emits:["deleteAdmin"]
}
</script>

<style scoped></style>