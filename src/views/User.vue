<template>
  <div class="user">
    <img class="bg" src="@/assets/logo.png">
    <div class="wrapper"></div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import GameCard from '@/component/GameCard.vue';
import api from '@/utils/api';
import { AxiosError, AxiosResponse } from 'axios';

@Component({
  components: {
    GameCard,
  },
  filters: {
    age(age: string) {
      switch (Number(age)) {
        case 0:
          return '~10';
        case 1:
          return '10~';
        case 2:
          return '20~';
        case 3:
          return '30~';
        case 4:
          return '40~';
        default:
          return '?';
      }
    },
    gend(gend: string) {
      switch (Number(gend)) {
        case 0:
          return '🚹';
        case 1:
          return '🚺';
        case 2:
          return '㊙︎';
        default:
          return '?';
      }
    },
  },
})
export default class User extends Vue {
  private user: any = {};

  @Prop({ default: 0 })
  private id!: number;

  public created() {
    api
      .getUser(this.id)
      .then((res: AxiosResponse) => {
        this.user = res.data;
      })
      .catch((err: AxiosError) => {
        alert(err);
        if (err.code === '401') {
          this.$router.push('/');
        }
      });
  }

  public request() {
    const params = {
      reciever_id: this.id,
    };
    api
      .request(params)
      .then(() => {
        alert('送信しました');
      })
      .catch((err: AxiosError) => {
        alert(err);
        if (err.code === '401') {
          this.$router.push('/');
        }
      });
  }
}
</script>

<style lang="scss" scoped>
.user {
  height: 100vh;
  width: 100vw;
  overflow: auto;
  position: relative;
}
.bg {
  position: fixed;
  right: -50px;
  top: 20%;
  width: 80vw;
  z-index: 10;
}
.wrapper {
  position: absolute;
  top: 0;
  min-height: 100vh;
  width: 100vw;
  background: rgba(#ffffff, 0.8);
  z-index: 100;
}
</style>