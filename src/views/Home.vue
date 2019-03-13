<template>
  <div class="home">
    <tab :selected="0"/>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import Tab from '@/component/Tab.vue';

@Component({
  components: { Tab },
})
export default class Home extends Vue {}
</script>

<style lang="scss" scoped>
</style>