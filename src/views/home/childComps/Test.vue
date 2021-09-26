
<template>
<div class="goods">
    <!-- <input v-model="" /> -->
    <button @click="handleClick">test</button> 
</div>
</template>

<script>
// 这个不用管
import { test } from '../../../network/home.js'>
      return {
          username: '',
          password: ''
      }
  },
  methods: {
      handleClick() {
          test().then(res => {
              console.log(res)
          })
      }
  }
}
</script>
<style>

</style>