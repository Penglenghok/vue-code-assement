import { getUserDetail, getUserRef } from '@/services/data.service'
import { kFormatter } from '@/services/mapping.service';
import { createStore } from 'vuex'

export default createStore({
  state: {
    dataUser: [],
    dataUserDetail: <any>{},
    loading: true,
    loadingDetail: true
  },
  actions: {
    async fetchUser() {
      this.state.loading = true;
      this.state.dataUser = await (await getUserRef()).data
      this.state.loading = false
    },
    async getUserDetail({ commit }, payload) {
      this.state.loadingDetail = true
      this.state.dataUserDetail = {}
      this.state.dataUserDetail = await (await getUserDetail(payload)).data
      this.state.dataUserDetail.followers = kFormatter(this.state.dataUserDetail.followers)
      this.state.loadingDetail = false
    }
  }
})
