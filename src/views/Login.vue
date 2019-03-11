<template>
  <div class="login">
    <div class="container">
      <h1>GameMatchar</h1>
      <img src="@/assets/mark.png"/>
      <div class="button">Twitter Login</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
@Component({})
export default class Login extends Vue {
}
</script>

<style lang="scss" scoped>
.login {
  user-select: none;
  width: 100%;
  height: 100%;
  background: rgb(118,184,82);
  background: linear-gradient(90deg, rgba(118,184,82,1) 0%, rgba(141,194,111,1) 100%);
  color: #fff;

  .container {
    position: relative;
    top: 20%;
    height: 53%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    h1 {
      font-size: 2.5rem;
      font-family: 'Comfortaa';
      font-weight: bold;
    }

    img {
      height: 60%;
    }

    .button {
      width: 200px;
      height: 50px;
      border-radius: 50px;
      background: #fff;
      color: #76b852;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2em;
      font-weight: bold;
      box-shadow:0px 0px 6px 4px rgba(0,0,0,0.07);
    }
    .button:active {
      color: #71b347;
      background: #eee;
    }
  }
}
</style>