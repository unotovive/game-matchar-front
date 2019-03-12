<template>
  <div class="game-card">
    <img :src="game.img">
    <p>{{game.name}}</p>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
@Component({})
export default class GameCard extends Vue {
  @Prop({
    default: () => {
      return {};
    },
  })
  private game!: any;
}
</script> 
<style lang="scss" scoped>
.game-card {
  width: 110px;
  height: 150px;
  border-radius: 10px;
  box-shadow: 0px 0px 6px 3px rgba(0, 0, 0, 0.05);
  margin: 0.3em;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  img {
    margin-top: 10px;
    width: 80px;
    height: 80px;
    border-radius: 50px;
  }
  p {
    margin-bottom: 10px;
  }
}
</style>