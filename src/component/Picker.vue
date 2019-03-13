<template>
  <div class="picker" v-if="isShow">
    <div class="to">
      <h1 v-if="selected.length === 0">{{placeholder}}</h1>
      <transition-group v-else tag="div" name="selected" class="selected">
        <div
          @click="unSelect(item, index)"
          v-for="(item, index) in selected"
          :key="item.id"
          class="item"
        >{{item.name}} ×</div>
      </transition-group>
    </div>
    <template v-if="game">
      <transition-group tag="div" name="selected" class="list">
        <div
          @click="select(item, index)"
          v-for="(item, index) in notSelected"
          :key="item.id"
          class="item"
        >{{item.name}} +</div>
      </transition-group>
    </template>
    <template v-else>
      <transition-group tag="div" name="selected" class="list">
        <div v-for="(item, index) in notSelected" :key="item.id" @click="select(item, index)">
          <game-card :game="item"/>
        </div>
      </transition-group>
    </template>
    <div class="bot">
      <div class="button" @click="$emit('select', selected)" v-if="selected.length === 0">追加しないで戻る</div>
      <div class="button" @click="$emit('select', selected)" v-else>選択中の{{selected.length}}個を追加</div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import GameCard from '@/component/GameCard.vue';

@Component({
  components: {
    GameCard,
  },
})
export default class Picker extends Vue {
  @Prop({ default: false })
  private isShow!: boolean;

  @Prop({ default: '選択してください' })
  private placeholder?: string;

  @Prop({ default: false })
  private game!: boolean;

  @Prop({
    default: [],
  })
  private list!: any[];

  private selected: any[] = [];
  private notSelected: any[] = [];

  @Watch('list', { immediate: true })
  public listChanged() {
    Object.assign(this.notSelected, this.list);
  }
  public select(item: any, index: number) {
    this.selected.unshift(item);
    this.notSelected.splice(index, 1);
  }
  public unSelect(item: any, index: number) {
    this.notSelected.unshift(item);
    this.selected.splice(index, 1);
  }
}
</script>

<style lang="scss" scoped>
.picker {
  height: 100vh;
  width: 100vw;
  background: #f7f7f7;
  overflow: auto;
  .to {
    position: fixed;
    height: 64px;
    width: 100%;
    top: 0;
    background: #fff;
    font-family: 'Comfortaa';
    color: #444;
    font-size: 1.1rem;
    font-weight: bold;
    box-shadow: 0px 0px 6px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    align-items: center;
    z-index: 200;
    h1 {
      font-size: 1.4rem;
      padding-left: 0.7em;
    }
  }
  .bot {
    position: fixed;
    height: 64px;
    width: 100%;
    bottom: 0;
    background: #fff;
    font-family: 'Comfortaa';
    color: #444;
    font-size: 1.1rem;
    font-weight: bold;
    box-shadow: 0px 0px 6px 4px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 1.4rem;
      padding-left: 0.7em;
    }
  }
  .selected {
    width: 100vw;
    height: 100%;
    display: flex;
    align-items: center;
    overflow: scroll;
    word-break: keep-all;
    white-space: pre;
  }
  .list {
    width: 100vw;
    padding-top: calc(64px + 1em);
    padding-bottom: calc(64px + 1em);
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
  }
  .item {
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
    transition: all 0.3s;
  }
  .button {
    width: 90%;
    height: 80%;
    background: #f74a7b;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
  }
  .button:active {
    background: #d3406a;
  }
  .item:active {
    background: #528533;
  }
  .selected-enter-active,
  .selected-leave-active {
    transform: transrateY(0);
  }
  .selected-enter,
  .selected-leave-to {
    opacity: 0;
    transform: transrateY(-50px);
  }
}
</style>
