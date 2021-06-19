<template>
  <div class="header-container">
    <p>Vue App</p>
  </div>
</template>

<style lang="scss">
.header-container {
  background-color: #42b983;
  position: sticky;
  top: 0;
  p {
    margin: 0;
    padding: 12px ;
    color: white;
    font-weight: 600;
    font-size: 24px;
  }
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "LayoutHeader",
});
</script>