<template>
  <div class="user">
    <div class="main1">
      <div class="back" @click="$router.go(-1)">＜</div>
      <img :src="user.user.image_url">
      <div class="cont">
        <div class="name-cont">
          <h1>{{user.user.name}}, {{user.user.age | age }}, {{user.user.sex | gend}}</h1>
          <div @click="request" class="req">Send Request</div>
        </div>
        <h4>Intro</h4>
        <p class="intro">{{user.user.context}}</p>
        <div class="line"/>
        <h4>Games</h4>
        <div class="game-list">
          <div class="games" v-if="user.playGame.length > 0">
            <template>
              <div v-for="(game, index) in user.playGame" :key="index" class="game">
                <game-card :game="game"/>
              </div>
            </template>
          </div>
          <div v-else>ゲームが選択されていません。</div>
        </div>
        <div class="line"/>
        <h4>Tags</h4>
        <div class="tag-list">
          <div class="tags" v-if="user.tag.length > 0">
            <template>
              <div v-for="(tag, index) in user.tag" :key="index" class="tag">{{tag.tag}}</div>
            </template>
          </div>
          <div v-else>タグが設定されていません。</div>
        </div>
        <div class="line"/>
        <h4>ActiveTimes</h4>
        <div class="times">
          <p class="time" v-for="item in user.activeTime" :key="item">{{item.time}},</p>
        </div>
      </div>
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
      });
  }
}
</script>

<style lang="scss" scoped>
.user {
  height: 100vh;
  width: 100vw;
  background: #f7f7f7;
  top: 0;
  overflow: auto;
  padding-top: 100px;
}
.main1 {
  width: 100%;
  background: #fff;
  border-radius: 2em 2em 0 0;
  box-shadow: 0px 0px 6px 4px rgba(0, 0, 0, 0.07);
}
img {
  position: relative;
  top: -70px;
  width: 150px;
  height: 150px;
  box-shadow: 0px 0px 6px 4px rgba(0, 0, 0, 0.07);
  border-radius: 10px;
}
.cont {
  width: 100%;
  position: relative;
  top: -40px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1 {
  font-size: 1.4rem;
  font-weight: bold;
  display: flex;
  box-sizing: border-box;
  margin-bottom: 0.7rem;
}
.name-cont {
  width: 100%;
  display: flex;
  padding: 0 1.2rem;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;
}
.req {
  padding: 0.3rem;
  border-radius: 1rem;
  border: 2px solid rgb(135, 214, 31);
  background: rgb(135, 214, 31);
  color: #fff;
}
.req:active {
  background: rgb(125, 204, 21);
}
.intro {
  width: 100%;
  padding: 0 1.2rem;
  box-sizing: border-box;
  color: #888;
}
.game-list {
  width: 100%;
  overflow: scroll;
  padding: 0 1.2rem;
  box-sizing: border-box;
}
.games {
  display: flex;
}
.line {
  height: 1px;
  width: 95%;
  margin-top: 1.2rem;
  margin-bottom: 0.7rem;
  background: rgba(0, 0, 0, 0.07);
}
h4 {
  box-sizing: border-box;
  color: #888;
  width: 100%;
  padding: 0 1.2rem;
  padding-bottom: 0.7rem;
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
.times {
  width: 100%;
  padding: 0 1.2rem;
  box-sizing: border-box;
  display: flex;
}
.back {
  position: absolute;
  top: 20px;
  left: 20px;
  color: rgba(0, 0, 0, 0.3);
  font-weight: bold;
  font-size: 1.4rem;
}
</style>