
<template>
  <LayoutHeader />
  <router-view />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import LayoutHeader from "../components/LayoutHeader.vue";

export default defineComponent({
  name: "Home",
  components: {
    LayoutHeader,
  },
  created() {
    this.$store.dispatch("fetchUser");
  },
});
</script>
