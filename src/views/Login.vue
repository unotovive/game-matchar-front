<template>
  <div class="login">
    <div class="container" v-if="mode === 'login'">
      <h1>GameMatchar</h1>
      <img src="@/assets/mark.png">
      <input v-model="email" type="email" placeholder="email">
      <input v-model="password" type="password" placeholder="password">
      <div @click="login" class="button">Login</div>
      <p @click="mode = 'register' ">Register</p>
    </div>
    <div class="container" v-if="mode === 'register'">
      <h1>GameMatchar</h1>
      <img src="@/assets/mark.png">
      <input v-model="email" type="email" placeholder="email">
      <input v-model="password" type="password" placeholder="password">
      <input v-model="passconf" type="password" placeholder="Confirm password">
      <div @click="register" class="button">Register</div>
      <p @click="mode = 'login' ">Login</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import api from '@/utils/api';
import { AxiosError, AxiosResponse } from 'axios';

@Component({})
export default class Login extends Vue {
  private mode: string = 'login';
  private email: string = '';
  private password: string = '';
  private passconf: string = '';

  public login() {
    api
      .login(this.email, this.password)
      .then((res: AxiosResponse) => {
        if (res.data && res.data.isFirstLogin) {
          this.$router.push('/signup');
        } else {
          this.$router.push('/home');
        }
      })
      .catch((err: AxiosError) => {
        alert(err);
      });
  }
  public register() {
    if (this.password === this.passconf) {
      api.register(this.email, this.password);
    } else {
      alert('passwordが一致しません');
    }
  }
}
</script>

<style lang="scss" scoped>
input {
  background: none;
  width: 80%;
  height: 2rem;
  border: none;
  border-bottom: 2px solid rgba(0, 0, 0, 0.2);
  padding: 0.2rem;
  margin: 0.2rem;
  box-sizing: border-box;
  color: #444;
  font-size: 1.1em;
}
::placeholder {
  color: rgba(0, 0, 0, 0.2);
  font-size: 1.1rem;
}
.login {
  user-select: none;
  width: 100%;
  height: 100%;
  background: rgb(118, 184, 82);
  background: linear-gradient(
    rgba(255, 255, 255, 1) 0%,
    rgb(175, 209, 156) 3%,
    rgba(118, 184, 82, 1) 5%,
    rgba(141, 194, 111, 1) 100%
  );
  color: #fff;

  .container {
    position: relative;
    top: 18%;
    height: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    h1 {
      font-size: 2.5rem;
      font-family: 'Comfortaa';
      font-weight: bold;
    }

    img {
      width: 50%;
    }

    .button {
      width: 200px;
      min-height: 50px;
      max-height: 50px;
      border-radius: 50px;
      background: #fff;
      color: #76b852;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2em;
      font-weight: bold;
      box-shadow: 0px 0px 6px 4px rgba(0, 0, 0, 0.07);
    }
    .button:active {
      color: #71b347;
      background: #eee;
    }
  }
}
p {
  margin: 0.7rem;
}
</style>