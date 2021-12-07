import { NuxtAxiosInstance } from '@nuxtjs/axios'

export class MTGRepository {
  private readonly axios: NuxtAxiosInstance
  constructor($axios: NuxtAxiosInstance) {
    this.axios = $axios
  }

  post(){
    return this.axios.$post('hoge')
  }
}