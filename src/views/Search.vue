<template>
  <div class="search">
    <div class="container">
      <h1>Search</h1>
      <form class="search_container">
        <input type="text" placeholder="search">
      </form>
      <h4>Recommend</h4>
      <div class="recommend">
        <div
          v-for="(item, index) in rc"
          :key="index"
          class="r-user"
          @click="$router.push(`/user/${item.id}`)"
        >
          <img :src="item.image_url">
          <div class="match">
            <h5>♡{{item.match | int}}</h5>
          </div>
          <h2>{{item.name}}</h2>
          <p>{{item.context}}</p>
        </div>
      </div>
    </div>
    <tab class="tab" :selected="2"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import Tab from '@/component/Tab.vue';
import { AxiosResponse, AxiosError } from 'axios';
import api from '@/utils/api';

@Component({
  components: {
    Tab,
  },
  filters: {
    int(value: number) {
      return Math.round(value);
    },
  },
})
export default class ChatList extends Vue {
  private rc: any[] = [];

  public alert(mes: string) {
    alert(mes);
  }

  public created() {
    api
      .getRC()
      .then((res: AxiosResponse) => {
        this.rc = res.data.recommendation;
      })
      .catch((err: AxiosError) => {
        alert(err);
        if (err.response!.status === 401) {
          this.$router.push('/');
        }
      });
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
.search {
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
.recommend {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.r-user {
  width: 40%;
  padding: 5%;
  position: relative;
}
img {
  width: 100%;
  border-radius: 10px;
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