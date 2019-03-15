<template>
  <div class="request">
    <div class="container">
      <h1>Requests</h1>
      <div style="margin-top: 1rem;"/>
      <h4>Receiving</h4>
      <div class="reqs">
        <div v-for="(item, index) in recieving" :key="index" class="card">
          <div class="profile">
            <img :src="item.img">
            <div class="prof-info">
              <h2>{{item.name}}</h2>
              <p>{{item.description}}</p>
            </div>
          </div>
          <div class="line"/>
          <div class="button">
            <div class="c-b">×</div>
            <div class="a-b">✔︎</div>
          </div>
        </div>
      </div>
      <h4>Sending</h4>
      <div class="reqs">
        <div v-for="(item, index) in sending" :key="index" class="card">
          <div class="profile">
            <img :src="item.img">
            <div class="prof-info">
              <h2>{{item.name}}</h2>
              <p>{{item.description}}</p>
            </div>
          </div>
          <div class="line"/>
          <div class="button">
            <div class="c-b-l">cancel</div>
          </div>
        </div>
      </div>
    </div>
    <tab class="tab" :selected="3"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import Tab from '@/component/Tab.vue';

@Component({
  components: { Tab },
})
export default class Home extends Vue {
  private recieving: any[] = [
    {
      id: 1,
      name: 'おとべ',
      img: 'http://placekitten.com/150/150',
      description:
        'むかしむかしあるところにたけとりのおきなといふものありけり。おじいさんは山へ芝刈りに、おばあさんは川へ洗濯に行きました。かの邪智暴虐の王を許してはならないと決意した。',
    },
    {
      id: 1,
      name: 'おとべ',
      img: 'http://placekitten.com/150/150',
      description:
        'むかしむかしあるところにたけとりのおきなといふものありけり。おじいさんは山へ芝刈りに、おばあさんは川へ洗濯に行きました。かの邪智暴虐の王を許してはならないと決意した。',
    },
    {
      id: 1,
      name: 'おとべ',
      img: 'http://placekitten.com/150/150',
      description:
        'むかしむかしあるところにたけとりのおきなといふものありけり。おじいさんは山へ芝刈りに、おばあさんは川へ洗濯に行きました。かの邪智暴虐の王を許してはならないと決意した。',
    },
  ];
  private sending: any[] = [
    {
      id: 1,
      name: 'おとべ',
      img: 'http://placekitten.com/150/150',
      description:
        'むかしむかしあるところにたけとりのおきなといふものありけり。おじいさんは山へ芝刈りに、おばあさんは川へ洗濯に行きました。かの邪智暴虐の王を許してはならないと決意した。',
    },
    {
      id: 1,
      name: 'おとべ',
      img: 'http://placekitten.com/150/150',
      description:
        'むかしむかしあるところにたけとりのおきなといふものありけり。おじいさんは山へ芝刈りに、おばあさんは川へ洗濯に行きました。かの邪智暴虐の王を許してはならないと決意した。',
    },
  ];
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 1.4rem;
  font-weight: bold;
}
h2 {
  margin: 0.5rem 0;
  font-size: 1.2rem;
}
p {
  height: 4rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
}
h4 {
  box-sizing: border-box;
  color: #888;
  width: 100%;
  padding: 0.7rem 0;
  display: flex;
}
.request {
  width: 100%;
  height: 100%;
  background: #f7f7f7;
  box-sizing: border-box;
  overflow: auto;
}
.container {
  padding: 1rem;
  padding-bottom: calc(52px + 1rem);
}
.tab {
  z-index: 10;
  position: fixed;
  bottom: 0;
  left: 0;
}
.reqs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.recieving {
  width: 100%;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;
  padding: 0.5rem 0;
}
.line {
  height: 1px;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  margin: 0 auto;
}
img {
  width: 70px;
  border-radius: 50px;
  margin-right: 1rem;
}
.card {
  width: 100%;
  background: #fff;
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  padding: 1rem;
  box-shadow: 0px 0px 6px 4px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
}
.prof-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.profile {
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  p {
    height: 2rem;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }
}
.button {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  padding-top: 1rem;
  padding-bottom: 0;
  font-size: 1.2rem;
  font-weight: bold;
}
.c-b {
  height: 36px;
  width: 80px;
  border-radius: 30px;
  color: rgba(0, 0, 0, 0.3);
  border: 3px solid rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.c-b-l {
  height: 36px;
  width: 160px;
  border-radius: 30px;
  color: rgba(0, 0, 0, 0.3);
  border: 3px solid rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.a-b {
  height: 36px;
  width: 80px;
  background: rgb(241, 80, 31);
  border-radius: 30px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>