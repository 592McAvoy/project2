<template>
  <div class="competition">
    <h3>比赛</h3>
    <carousel></carousel>
    <category></category>
  </div>
</template>

<script>
  import Carousel from 'components/carousel/carousel'
  import Category from 'components/category/category'
  export default {
    name: 'competition',
    components: {
        Carousel,
        Category
    }
  }
</script>
