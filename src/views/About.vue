<template>
  <div class="about">
    <div v-if="!$store.state.loadingDetail" class="container">
      <div class="image-container">
        <img :src="$store.state.dataUserDetail.avatar_url" />
      </div>
      <div class="info-container">
        <p class="name">{{ $store.state.dataUserDetail.name }}</p>
        <p class="login">{{ $store.state.dataUserDetail.login }}</p>
        <p>
          Followers: <b>{{ $store.state.dataUserDetail.followers }}</b> | Following:
          <b>{{ $store.state.dataUserDetail.following }}</b>
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "About",
  async created() {
    this.$store.dispatch("getUserDetail", this.$route.params.name);
  },
});
</script>

<style lang="scss" scoped>
.about {
  display: flex;
  justify-content: center;
  align-items: center;
  .container {
    margin-top: 24px;
    display: flex;
    flex-wrap: wrap;
    max-width: 800px;
    .image-container {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: 300px;
        height: 300px;
        border-radius: 12px;
      }
    }
    .info-container {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      padding: 24px;
      p {
        margin: 0;
      }
      .name {
        font-size: 30px;
        font-weight: 500;
      }
      .login {
        font-size: 24px;
        font-weight: 300;
        margin-bottom: 24px;
      }
    }
  }
}
</style>