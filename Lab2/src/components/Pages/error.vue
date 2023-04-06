<template>
    <div class="row mt-5">
        <div class="col-md-12">
            <div class="error-template">
                <h1>
                    Oops!</h1>
                <h2>
                    404 Not Found</h2>
                <div class="error-details">
                    Sorry, an error has occured, Requested page not found!
                </div>
                <div class="error-actions">
                    <router-link to="/" class="btn btn-success btn-lg"><span class="glyphicon glyphicon-home"></span>
                        Take Me Home </router-link>
                    <a href="http://www.jquery2dotnet.com" class="btn btn-dark btn-lg me-3"><span
                            class="glyphicon glyphicon-envelope"></span> Contact Support </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "errorePage"

}
</script>

<style scoped></style>