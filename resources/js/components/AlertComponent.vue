<template>
    <div v-show="isVisible" class="alert alert-warning alert-dismissible fade show" role="alert">
        <slot></slot>
        <button @click="isVisible = false" type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
</template>

<script>
    export default {
        data() {
          return {
              isVisible: true
          }
        },
    }
</script>
