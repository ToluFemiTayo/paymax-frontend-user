<template>
    <div>
        <div class="container-fluid">
            <div class="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 class="h3 mb-0 text-gray-800">Bills</h1>
            </div>
            <div class="row">
                <div class="col-lg-5">
                    
                </div>

                <div class="col-lg-4">

                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        layout: 'customers',
        methods: {
            openBio() {
                $('#edit-personal-details').modal('show');
            }
        }
    }
</script>

<style>
    .bg-white {
        background-color: #fff;
    }
</style>