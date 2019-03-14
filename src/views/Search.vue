<template>
  <div class="search">
    <div class="container">
      <h1>Search</h1>
      <form class="search_container">
        <input type="text" placeholder="search">
      </form>
      <h4>Recommend</h4>
      <div class="recommend">
        <div v-for="(item, index) in recommend" :key="index" class="r-user">
          <img :src="item.img">
          <div class="match">
            <h5>♡{{item.match}}</h5>
          </div>
          <h2>{{item.name}}</h2>
          <p>{{item.description}}</p>
        </div>
      </div>
    </div>
    <tab class="tab" :selected="2"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import Tab from '@/component/Tab.vue';

@Component({
  components: {
    Tab,
  },
})
export default class ChatList extends Vue {
  private recommend: any[] = [
    {
      id: 1,
      name: 'otobe',
      img: 'http://placehold.jp/150x150.png',
      age: 1,
      gend: 0,
      match: 78,
      description:
        'ここには長めのユーザー説明っぽい文章的な何かが入る気がするんですよ、おそらく。',
      playTime: ['じゅうじ', 'じゅうにじ'],
      games: [
        {
          id: '1',
          name: 'Global Brand Coordinator',
          img: 'http://placehold.jp/150x150.png',
        },
        {
          id: '2',
          name: 'Global Quality Administrator',
          img: 'http://placehold.jp/150x150.png',
        },
        {
          id: '3',
          name: 'Central Infrastructure Analyst',
          img: 'http://placehold.jp/150x150.png',
        },
        {
          id: '4',
          name: 'Legacy Functionality Officer',
          img: 'http://placehold.jp/150x150.png',
        },
      ],
      tags: [
        {
          id: '1',
          name: 'deliverables',
        },
        {
          id: '2',
          name: 'Future',
        },
        {
          id: '3',
          name: 'Fiji',
        },
        {
          id: '4',
          name: 'SSL',
        },
        {
          id: '5',
          name: 'Chair',
        },
      ],
    },
    {
      id: 1,
      name: 'otobe',
      img: 'http://placehold.jp/150x150.png',
      age: 1,
      gend: 0,
      match: 78,
      description:
        'ここには長めのユーザー説明っぽい文章的な何かが入る気がするんですよ、おそらく。',
      playTime: ['じゅうじ', 'じゅうにじ'],
      games: [
        {
          id: '1',
          name: 'Global Brand Coordinator',
          img: 'http://placehold.jp/150x150.png',
        },
        {
          id: '2',
          name: 'Global Quality Administrator',
          img: 'http://placehold.jp/150x150.png',
        },
        {
          id: '3',
          name: 'Central Infrastructure Analyst',
          img: 'http://placehold.jp/150x150.png',
        },
        {
          id: '4',
          name: 'Legacy Functionality Officer',
          img: 'http://placehold.jp/150x150.png',
        },
      ],
      tags: [
        {
          id: '1',
          name: 'deliverables',
        },
        {
          id: '2',
          name: 'Future',
        },
        {
          id: '3',
          name: 'Fiji',
        },
        {
          id: '4',
          name: 'SSL',
        },
        {
          id: '5',
          name: 'Chair',
        },
      ],
    },
    {
      id: 1,
      name: 'otobe',
      img: 'http://placehold.jp/150x150.png',
      age: 1,
      gend: 0,
      match: 78,
      description:
        'ここには長めのユーザー説明っぽい文章的な何かが入る気がするんですよ、おそらく。',
      playTime: ['じゅうじ', 'じゅうにじ'],
      games: [
        {
          id: '1',
          name: 'Global Brand Coordinator',
          img: 'http://placehold.jp/150x150.png',
        },
        {
          id: '2',
          name: 'Global Quality Administrator',
          img: 'http://placehold.jp/150x150.png',
        },
        {
          id: '3',
          name: 'Central Infrastructure Analyst',
          img: 'http://placehold.jp/150x150.png',
        },
        {
          id: '4',
          name: 'Legacy Functionality Officer',
          img: 'http://placehold.jp/150x150.png',
        },
      ],
      tags: [
        {
          id: '1',
          name: 'deliverables',
        },
        {
          id: '2',
          name: 'Future',
        },
        {
          id: '3',
          name: 'Fiji',
        },
        {
          id: '4',
          name: 'SSL',
        },
        {
          id: '5',
          name: 'Chair',
        },
      ],
    },
    {
      id: 1,
      name: 'otobe',
      img: 'http://placehold.jp/150x150.png',
      age: 1,
      gend: 0,
      match: 78,
      description:
        'ここには長めのユーザー説明っぽい文章的な何かが入る気がするんですよ、おそらく。',
      playTime: ['じゅうじ', 'じゅうにじ'],
      games: [
        {
          id: '1',
          name: 'Global Brand Coordinator',
          img: 'http://placehold.jp/150x150.png',
        },
        {
          id: '2',
          name: 'Global Quality Administrator',
          img: 'http://placehold.jp/150x150.png',
        },
        {
          id: '3',
          name: 'Central Infrastructure Analyst',
          img: 'http://placehold.jp/150x150.png',
        },
        {
          id: '4',
          name: 'Legacy Functionality Officer',
          img: 'http://placehold.jp/150x150.png',
        },
      ],
      tags: [
        {
          id: '1',
          name: 'deliverables',
        },
        {
          id: '2',
          name: 'Future',
        },
        {
          id: '3',
          name: 'Fiji',
        },
        {
          id: '4',
          name: 'SSL',
        },
        {
          id: '5',
          name: 'Chair',
        },
      ],
    },
  ];

  public alert(mes: string) {
    alert(mes);
  }
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
input {
  width: 100%;
  height: 2.4rem;
  background: #ededed;
  border-radius: 1.5rem;
  margin: 1rem 0;
  padding: 0 1rem;
  border: none;
  box-sizing: border-box;
}
.search {
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
.recommend {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.r-user {
  width: 40%;
  padding: 5%;
  position: relative;
}
img {
  width: 100%;
  border-radius: 10px;
}
.match {
  width: 3rem;
  height: 1.1rem;
  font-size: 0.9rem;
  background: #fff;
  position: absolute;
  top: 120px;
  left: 0;
  border-radius: 1rem;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.04);
  color: rgb(240, 100, 142);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>