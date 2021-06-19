<template >
  <div class="card" v-on:click="navigate">
    <img :src="avatar_url" alt="People" />
    <p>{{ login }}</p>
  </div>
</template>

<style lang="scss" scoped>
.card {
  flex: 1 0 21%;
  border: 1px solid #e0e0e0;
  margin: 12px;
  padding: 24px;
  border-radius: 12px;
  img {
    width: 200px;
    height: 200px;
    border-radius: 12px;
  }
}
</style>
    
<script lang="ts">
import { getUserDetail } from "@/services/data.service";
import { defineComponent } from "vue";
export default defineComponent({
  name: "Card",
  props: ["value"],
  data() {
    return { ...this.value };
  },
  methods: {
    async getFollowerAndFollowing(payload) {
      return await getUserDetail(payload);
    },
    navigate() {
      this.$router.push(`/about/${this.login}`);
    },
  },
  async created() {
    // const { data } = await this.getFollowerAndFollowing(this.login);
    // this.detail = data;
  },
});
</script>