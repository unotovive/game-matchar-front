<template>
  <div class="user">
    <img class="bg" src="@/assets/logo.png">
    <div class="wrapper">
      <div class="top">
        <font-awesome-icon @click="$router.go(-1)" icon="arrow-left"/>
      </div>
      <div class="prof-info">
        <img class="prof-img" :src="user.user.image_url">
        <div class="prof-t">
          <h1
            class="prof-tt"
          >{{user.user.name}} / {{user.user.age | age }} / {{user.user.sex | gend}}</h1>
          <div @click="request" class="req">Send Request</div>
        </div>
      </div>
      <div class="sec">
        <h2 class="st">Introduction</h2>
        <p class="intro">{{user.user.context}}</p>
      </div>
      <div class="sec">
        <h2 class="st">Games</h2>
        <div class="game-list">
          <div class="games" v-if="user.playGame.length > 0">
            <div v-for="(game, index) in user.playGame" :key="index" class="game">
              <game-card :game="game"/>
            </div>
          </div>
          <div v-else>ゲームが選択されていません。</div>
        </div>
      </div>
      <div class="sec">
        <h2 class="st">Tags</h2>
        <div class="tag-list">
          <div class="tags" v-if="user.tag.length > 0">
            <template>
              <div v-for="(tag, index) in user.tag" :key="index" class="tag">{{tag.name}}</div>
            </template>
          </div>
          <div v-else>タグが設定されていません。</div>
        </div>
      </div>
      <div class="sec">
        <h2 class="st">VoiceChat</h2>
        <p class="intro" v-if="user.user.VC_flag">VC可能</p>
        <p class="intro" v-else>VC不可能</p>
      </div>
      <div class="sec">
        <h2 class="st">PlayTime</h2>
        <div class="times">
          <p class="intro" v-for="item in user.activeTime" :key="item">{{item.time}},</p>
        </div>
      </div>
      <div style="height: 3rem;"/>
    </div>
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
        if (err.response!.status === 401) {
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
        if (err.response!.status === 401) {
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
  padding: 0 1rem;
  box-sizing: border-box;
}
.top {
  width: 100%;
  display: flex;
  align-items: center;
  height: 52px;
}
.prof-info {
  padding-top: 1rem;
  display: flex;
  align-items: center;
  box-sizing: border-box;
}
.prof-img {
  height: 100px;
  width: 100px;
  border-radius: 50px;
  box-sizing: border-box;
}
.prof-t {
  padding-left: 1rem;
  height: 100px;
  padding: 10px 1rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-sizing: border-box;
}
.prof-tt {
  font-size: 1.2rem;
  font-weight: bold;
  box-sizing: border-box;
}
.req {
  height: 36px;
  width: 140px;
  background: #6ac6b4;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  box-sizing: border-box;
}
.req:active {
  background: #5ab6a4;
  color: #eee;
}
.st {
  font-size: 1.1rem;
  font-weight: bold;
  display: flex;
  padding: 1.2rem 0;
  width: 100%;
  box-sizing: border-box;
}
.sec {
  width: 100%;
  box-sizing: border-box;
}
.intro {
  box-sizing: border-box;
  text-align: start;
  word-break: keep-all;
  word-wrap: break-word;
}
.game-list {
  width: 100%;
  overflow: scroll;
  box-sizing: border-box;
}
.games {
  display: flex;
}
.tag-list {
  width: 100%;
  box-sizing: border-box;
  padding: 0 1.2rem;
}
.tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.tag {
  height: 2em;
  margin: 0.3em;
  color: #fff;
  font-weight: bold;
  border-radius: 1em;
  padding: 0 1em;
  width: auto;
  background: #71b347;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>