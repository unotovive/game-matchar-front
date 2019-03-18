<template>
  <div class="home">
    <div class="container">
      <h1>Home</h1>
      <form class="search_container">
        <input type="text" placeholder="search">
      </form>
      <h4>Frends</h4>
      <div class="frend">
        <div
          v-for="(item, index) in friends"
          :key="index"
          class="f-user"
          @click="openChat(item.id)"
        >
          <img :src="item.img">
          <h2>{{item.name}}</h2>
        </div>
      </div>
    </div>
    <tab class="tab" :selected="1"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import Tab from '@/component/Tab.vue';
import api from '@/utils/api';
import { AxiosError, AxiosResponse, AxiosRequestConfig } from 'axios';
@Component({
  components: { Tab },
})
export default class Home extends Vue {
  private friends: any[] = [];

  private me: any = null;

  private created() {
    api
      .getMe()
      .then((res: AxiosResponse) => {
        this.me = res.data;
      })
      .catch((err: AxiosError) => {
        alert(err);
      });
    api
      .getFriendList()
      .then((res: AxiosResponse) => {
        this.friends = res.data;
      })
      .catch((err: AxiosError) => {
        alert(err);
      });
  }

  private openChat(id: number) {
    const cid = this.me.id > id ? `${id}-${this.me.id}` : `${this.me.id}-${id}`;
    this.$router.push({ name: 'chat', params: { cid } });
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 1.4rem;
  font-weight: bold;
}
h2 {
  margin: 0.5rem 0;
  font-size: 1.2rem;
}
p {
  height: 4rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
}
h4 {
  box-sizing: border-box;
  color: #888;
  width: 100%;
  padding: 0.7rem 0;
  display: flex;
}
input {
  width: 100%;
  height: 2.4rem;
  background: #ededed;
  border-radius: 1.5rem;
  margin: 1rem 0;
  padding: 0 1rem;
  border: none;
  box-sizing: border-box;
}
.home {
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  box-sizing: border-box;
  overflow: auto;
}
.container {
  padding: 1rem;
  padding-bottom: calc(52px + 1rem);
}
.tab {
  z-index: 10;
  position: fixed;
  bottom: 0;
  left: 0;
}
.frends {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.f-user {
  width: 100%;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
}
img {
  width: 70px;
  border-radius: 50px;
  margin-right: 1rem;
}
.match {
  width: 3rem;
  height: 1.1rem;
  font-size: 0.9rem;
  background: #fff;
  position: absolute;
  top: 120px;
  left: 0;
  border-radius: 1rem;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.04);
  color: rgb(240, 100, 142);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>