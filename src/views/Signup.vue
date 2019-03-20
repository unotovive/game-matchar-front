<template>
  <div class="signup">
    <picker :isShow="showPicker" :list="tags" class="picker" :game="true" @select="select"/>
    <picker :isShow="showGPicker" :list="games" class="picker" @select="selectG"/>
    <div class="top">
      <h1>SignUp</h1>
    </div>
    <div class="main">
      <div class="img-name">
        <img :src="img">
        <input type="text" v-model="name" placeholder="ニックネームを入力">
      </div>
      <textarea
        v-model="context"
        placeholder="自己紹介を入力。例：ゆるくやっていきたいです！LoLメインでやっているので誘っていただけると嬉しいです。"
      />
      <div class="field" style="height: auto;">
        <h2>私のゲーム</h2>
        <div class="game-list">
          <div class="games" v-if="selectedGames.length > 0">
            <template>
              <div v-for="(game, index) in selectedGames" :key="index" class="game">
                <game-card :game="game"/>
              </div>
            </template>
          </div>
          <div @click="showGPicker = true" class="tag-plus">
            <p>+</p>
          </div>
        </div>
      </div>
      <div class="field">
        <h2>私のタイプ</h2>
        <div class="tag-list">
          <div class="tags" v-if="selectedTags.length > 0">
            <template>
              <div v-for="(tag, index) in selectedTags" :key="index" class="tag">{{tag.name}}</div>
            </template>
          </div>
          <div @click="showPicker = true" class="tag-plus">
            <p>+</p>
          </div>
        </div>
      </div>
      <div class="field" style="height: auto;">
        <h2>私の年齢</h2>
        <div class="age-list">
          <div @click="setAge(0)" class="age" :class="{ 'selected': age == 0 }">~10</div>
          <div @click="setAge(1)" class="age" :class="{ 'selected': age == 1 }">10~</div>
          <div @click="setAge(2)" class="age" :class="{ 'selected': age == 2 }">20~</div>
          <div @click="setAge(3)" class="age" :class="{ 'selected': age == 3 }">30~</div>
          <div @click="setAge(4)" class="age" :class="{ 'selected': age == 4 }">40~</div>
        </div>
      </div>
      <div class="field" style="height: auto;">
        <h2>私の性別</h2>
        <div class="age-list">
          <div @click="setGend(0)" class="gend" :class="{ 'selected': gend === 0 }">
            <font-awesome-icon icon="male"/>
          </div>
          <div @click="setGend(1)" class="gend" :class="{ 'selected': gend === 1 }">
            <font-awesome-icon icon="female"/>
          </div>
          <div @click="setGend(2)" class="gend" :class="{ 'selected': gend === 2 }">
            <font-awesome-icon icon="user-secret"/>
          </div>
        </div>
      </div>
      <div class="field" style="height: auto;">
        <h2>私がよく遊ぶ時間</h2>
        <div class="cp_ipcheck">
          <ul>
            <li class="list_item">
              <label>
                <input type="checkbox" v-model="activeTimes['1']" class="option-input05">
                平日午前中
              </label>
            </li>
            <li class="list_item">
              <label>
                <input type="checkbox" v-model="activeTimes['2']" class="option-input05">
                平日夕方
              </label>
            </li>
            <li class="list_item">
              <label>
                <input type="checkbox" v-model="activeTimes['3']" class="option-input05">
                平日夜
              </label>
            </li>
            <li class="list_item">
              <label>
                <input type="checkbox" v-model="activeTimes['4']" class="option-input05">
                休日午前中
              </label>
            </li>
            <li class="list_item">
              <label>
                <input type="checkbox" v-model="activeTimes['5']" class="option-input05">
                休日夕方
              </label>
            </li>
            <li class="list_item">
              <label>
                <input type="checkbox" v-model="activeTimes['6']" class="option-input05">
                休日夜
              </label>
            </li>
            <li class="list_item">
              <label>
                <input type="checkbox" v-model="activeTimes['7']" class="option-input05">
                深夜帯
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div class="field" style="height: auto;">
        <h2>ボイスチャット</h2>
        <div class="cp_ipcheck">
          <ul>
            <li class="list_item">
              <label>
                <input type="checkbox" v-model="VCflag" class="option-input05">
                できる
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div class="bot">
        <div class="button" @click="submit">次へ</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import Picker from '@/component/Picker.vue';
import axios, { AxiosError } from 'axios';
import GameCard from '@/component/GameCard.vue';
import api from '@/utils/api';

@Component({
  components: {
    Picker,
    GameCard,
  },
})
export default class Signup extends Vue {
  private tags: any[] = [];
  private games: any[] = [];

  private selectedTags: any[] = [];
  private selectedGames: any[] = [];

  private age: number | null = null;
  private gend: number | null = null;

  private img: string = '';
  private name: string = '';
  private context: string = '';
  private VCflag: boolean = false;
  private activeTimes: any = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    7: false,
  };

  private showPicker: boolean = false;
  private showGPicker: boolean = false;

  public created() {
    const imgnum: number = Math.floor(Math.random() * Math.floor(1080));
    this.img = `https://picsum.photos/500?image=${imgnum}`;

    api
      .getTags()
      .then((res: any) => {
        this.tags = res.data.TagInfo;
      })
      .catch((err: AxiosError) => {
        alert(err);
        if (err.response!.status === 401) {
          this.$router.push('/');
        }
      });
    api
      .getGames()
      .then((res: any) => {
        this.games = res.data.GameInfo;
      })
      .catch((err: AxiosError) => {
        alert(err);
        if (err.response!.status === 401) {
          this.$router.push('/');
        }
      });
  }
  public submit() {
    const activeTimes: number[] = [];
    for (const k in this.activeTimes) {
      if (this.activeTimes[k]) {
        activeTimes.push(Number(k));
      }
    }
    const params = {
      name: this.name,
      img: this.img,
      context: this.context,
      VCflag: this.VCflag ? '1' : '0',
      sex: String(this.gend),
      age: String(this.age),
      games: this.selectedGames.map((game: any) => Number(game.id)),
      tags: this.selectedTags.map((tag: any) => Number(tag.id)),
      activeTimes,
    };
    api
      .signUp(params)
      .then(() => {
        this.$router.push('/home');
      })
      .catch((err: AxiosError) => {
        alert(err);
        if (err.response!.status === 401) {
          this.$router.push('/');
        }
      });
  }
  public select(selected: any[]) {
    this.showPicker = false;
    this.selectedTags = selected.length === 0 ? [] : selected;
  }
  public selectG(selected: any[]) {
    this.showGPicker = false;
    this.selectedGames = selected.length === 0 ? [] : selected;
  }
  public setAge(n: number) {
    this.age = n === this.age ? null : n;
  }
  public setGend(n: number) {
    this.gend = n === this.gend ? null : n;
  }
}
</script>

<style lang="scss" scoped>
.signup {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.top {
  height: 52px;
  display: flex;
  align-items: center;
  width: 100%;
  color: #6ac6b4;
  position: fixed;
  font-size: 1.2rem;
  text-align: left;
  z-index: 200;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.9) 100%
  );

  h1 {
    font-weight: bold;
    font-size: 1.4rem;
    padding-left: 0.7em;
  }
}

.main {
  background: #fff;
  width: 100%;
  height: auto;
  padding: 1rem;
  padding-top: calc(1em + 52px);
  padding-bottom: 1em;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;

  .img-name {
    height: 100px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      border-radius: 40px;
      height: 80px;
      width: 80px;
    }
    input[type='text'] {
      font-family: 'Nunito', 'M PLUS Rounded 1c', sans-serif;
      border: none;
      border-radius: 0;
      outline: none;
      background: #f2f2f2;
      border-radius: 5px;
      width: calc(100% - 100px);
      margin-left: 10px;
      padding: 0 0.5em;
      height: 2.4rem;
    }
  }

  textarea {
    margin-top: 0.7em;
    width: 100%;
    font-family: 'Nunito', 'M PLUS Rounded 1c', sans-serif;
    border: none;
    border-radius: 0;
    outline: none;
    background: #f2f2f2;
    border-radius: 5px;
    padding: 0.5em 0.5em;
    height: 7.2rem;
    box-sizing: border-box;
  }
}
.field {
  height: 80px;
  margin-top: 0.8rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}
.game-list {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.8rem;
}
.games {
  overflow: scroll;
  display: flex;
  align-items: center;
}
.game-plus {
  width: 2rem;
  height: 2rem;
  border-radius: 2em;
  font-weight: bold;
  font-size: 2em;
  padding: 0;
  color: #6ac6b4;
  border: 2px solid #6ac6b4;
  min-width: 2rem;
  margin-left: 1rem;
  p {
    position: relative;
    top: -2px;
  }
}
.tag-list {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.tags {
  height: calc(80px - 1.2em);
  overflow: scroll;
  display: flex;
  align-items: center;
}
.tag-plus {
  width: 2rem;
  height: 2rem;
  border-radius: 2em;
  font-weight: bold;
  font-size: 2em;
  padding: 0;
  color: #6ac6b4;
  border: 2px solid #6ac6b4;
  min-width: 2rem;
  margin-left: 1rem;
  p {
    position: relative;
    top: -2px;
  }
}
.tag {
  height: 1.3em;
  width: auto;
  border: 2px solid #6ac6b4;
  color: #6ac6b4;
  border-radius: 0.8em;
  white-space: pre;
  padding: 0 0.5em;
  margin-right: 0.3em;
}
h2 {
  height: 1.2em;
  font-size: 1.2em;
  font-weight: bold;
}
.age-list {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding-top: 0.7em;
}
.age {
  border: 2px solid #888;
  color: #888;
  border-radius: 5px;
  height: 2em;
  width: 3em;
  display: flex;
  align-items: center;
  justify-content: center;
}
.gend {
  border: 2px solid #888;
  color: #888;
  border-radius: 5px;
  height: 4em;
  width: 5em;
  display: flex;
  align-items: center;
  justify-content: center;
}
.picker {
  width: 100vw;
  height: 100vh;
  z-index: 500;
  position: fixed;
  top: 0;
}
.selected {
  color: #6ac6b4;
  border-color: #6ac6b4;
}
.cp_ipcheck {
  width: 100%;
  text-align: left;
  user-select: none;
  margin-top: 0.7em;
}
.cp_ipcheck .list_item {
  margin: 0 0 0.5rem 0;
  padding: 0;
}
.cp_ipcheck label {
  line-height: 135%;
  position: relative;
  cursor: pointer;
}
.cp_ipcheck .option-input05 {
  position: relative;
  margin: 0 1rem 0 0;
  cursor: pointer;
}
.cp_ipcheck .option-input05:before {
  position: absolute;
  z-index: 1;
  top: 0.125rem;
  left: 0.1875rem;
  width: 0.75rem;
  height: 0.375rem;
  content: '';
  -webkit-transition: -webkit-transform 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75);
  transition: transform 0.4s cubic-bezier(0.45, 1.8, 0.5, 0.75);
  -webkit-transform: rotate(-45deg) scale(0, 0);
  transform: rotate(-45deg) scale(0, 0);
  border: 2px solid #6ac6b4;
  border-top-style: none;
  border-right-style: none;
}
.cp_ipcheck .option-input05:checked:before {
  -webkit-transform: rotate(-45deg) scale(1, 1);
  transform: rotate(-45deg) scale(1, 1);
}
.cp_ipcheck .option-input05:after {
  position: absolute;
  top: -0.125rem;
  left: 0;
  width: 1rem;
  height: 1rem;
  content: '';
  cursor: pointer;
  border: 2px solid #f2f2f2;
  background: #ffffff;
}
.bot {
  height: 52px;
  width: 100vw;
  background: #fff;
  color: #444;
  font-size: 1.1rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  h1 {
    font-size: 1.4rem;
    padding-left: 0.7em;
  }
}
.button {
  width: 90%;
  height: 80%;
  margin-top: auto;
  background: #6ac6b4;
  border-radius: 5px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.button:active {
  background: #d3406a;
}
</style>
