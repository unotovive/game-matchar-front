<template>
  <div class="signup">
    <div class="top">
      <h1>GameMatchar</h1>
    </div>
    <div class="main">
      <div class="img-name">
        <img src="@/assets/kuma3.jpeg">
        <input type="text" placeholder="ニックネームを入力">
      </div>
      <textarea placeholder="自己紹介を入力。例：ゆるくやっていきたいです！LoLメインでやっているので誘っていただけると嬉しいです。"/>
      <div class="field">
        <h2>私のタイプ</h2>
        <div class="tag-list">
          <div class="tags">
            <template v-if="selectedTags.length == 0">
              <p>タグを選択してください</p>
            </template>
            <template v-else>
              <div v-for="(tag, index) in selectedTags" :key="index" class="tag">{{tag.name}} ✖︎</div>
            </template>
          </div>
          <div class="tag-plus">+</div>
        </div>
      </div>
      <div class="field">
        <h2>私の年齢</h2>
        <div class="age-list">
          <div class="age">~10</div>
          <div class="age">10~</div>
          <div class="age">20~</div>
          <div class="age">30~</div>
          <div class="age">40~</div>
        </div>
      </div>
      <div class="field">
        <h2>私の性別</h2>
        <div class="age-list">
          <div class="gend">~10</div>
          <div class="gend">10~</div>
          <div class="gend">20~</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import axios from 'axios';

@Component({})
export default class Signup extends Vue {
  private tags: any[] = [];

  private selectedTags: any[] = [];

  public created() {
    axios
      .get('http://5c86094ecc034a0014bd24ae.mockapi.io/tag/tags')
      .then((res: any) => {
        this.tags = res.data;
        this.selectedTags = res.data;
      });
  }
}
</script>

<style lang="scss" scoped>
.signup {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.top {
  position: fixed;
  height: 52px;
  width: 100%;
  background: #fff;
  font-family: 'Comfortaa';
  color: #71b347;
  font-size: 1.2rem;
  font-weight: bold;
  box-shadow: 0px 0px 6px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;

  h1 {
    font-size: 1.4rem;
    padding-left: 0.7em;
  }
}

.main {
  background: #f7f7f7;
  height: 100%;
  width: 100%;
  padding: 1rem;
  padding-top: calc(1em + 52px);
  box-sizing: border-box;

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
      background: #ddd;
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
    background: #ddd;
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
  width: 1.3em;
  height: 1.3em;
  border-radius: 0.9em;
  font-weight: bold;
  color: #71b347;
  border: 2px solid #71b347;
  min-width: 1.1em;
  margin-left: 1em;
}
.tag {
  height: 1.3em;
  width: auto;
  border: 2px solid #71b347;
  color: #71b347;
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
</style>