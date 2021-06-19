<template>
  <div class="cart-container" v-if="!$store.state.loading">
    <Card :value="item" v-for="item in $store.state.dataUser" :key="item.id" />
  </div>
</template>

<style scoped>
.cart-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin:12px;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import Card from "../components/Card.vue";
export default defineComponent({
  name: "Home",
  components: { Card },
});
</script>
