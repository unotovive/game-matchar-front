<template>
  <div class="chat">
    <div class="top">
      <span @click="$router.go(-1)">＜戻る</span>
      <h1>{{name}}</h1>
    </div>
    <div class="main">
      <div v-for="(message, index) in messages" :key="index">
        <div class="message" :class="{ 'isme': message.senderId == myId}">
          <p class="mes">{{message.message}}</p>
        </div>
      </div>
    </div>
    <div class="bot">
      <h2>+</h2>
      <input v-model="mes" aria-label="message" type="text">
      <div @click="add" class="send">送信</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { db } from '@/firebase';
import { AxiosResponse, AxiosError } from 'axios';
import api from '@/utils/api';

@Component({})
export default class Chat extends Vue {
  @Prop({ default: 'test' })
  private name!: string;

  @Prop({ default: '' })
  private cid!: string;

  private messages: any[] = [];
  private room: any = null;
  private myId: number = 1;

  private mes: string = '';

  public created() {
    api
      .getMe()
      .then((res: AxiosResponse) => {
        this.myId = res.data.id;
      })
      .catch((err: AxiosError) => {
        alert(err);
        if (err.response!.status === 401) {
          this.$router.push('/');
        }
      });
    this.$bind(
      'messages',
      db
        .collection('chats')
        .doc(this.cid)
        .collection('messages')
        .orderBy('createdAt', 'desc'),
    );
    this.$bind('room', db.collection('chats').doc(this.cid));
  }

  public add() {
    if (this.mes) {
      db.collection('chats')
        .doc(this.cid)
        .collection('messages')
        .add({
          createdAt: new Date(),
          name: 'test',
          senderId: this.myId,
          message: this.mes,
        });
      this.mes = '';
    }
  }
}
</script>

<style lang="scss" scoped>
.chat {
  width: 100%;
  height: 100%;
  overflow: auto;
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
.bot {
  position: fixed;
  height: 52px;
  width: 100%;
  bottom: 0;
  background: #fff;
  font-family: 'Comfortaa';
  color: #333;
  box-shadow: 0px 0px 6px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 1.4rem;
    padding-left: 0.7em;
  }
}
.main {
  width: 100%;
  padding: 60px 1em;
  background: #f7f7f7;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}
.message {
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
}
.mes {
  max-width: 80%;
  background: rgb(255, 164, 128);
  padding: 6px 1em;
  margin-top: 6px;
  border-radius: 15px;
}
.isme {
  justify-content: flex-end;
  .mes {
    background: rgb(108, 205, 250);
  }
}

input {
  height: 40px;
  background: #eee;
  appearance: none;
  outline: none;
  border: none;
  border-radius: 30px;
  width: 1000px;
  padding: 0 1em;
}
h2 {
  font-size: 1.4rem;
  min-width: 2rem;
}
.send {
  min-width: 60px;
  background: #71b347;
  height: 30px;
  border-radius: 5px;
  margin: 3px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.send:active {
  background: #5e963b;
}
</style>