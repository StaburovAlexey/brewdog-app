<template>
  <div class="row container cards">
    <card-beer></card-beer>
    <card-beer></card-beer>
    <card-beer></card-beer>
    <card-beer></card-beer>
  </div>
</template>

<script>
import CardBeer from '@/components/CardBeer.vue';
export default {
  components: { CardBeer },

  data: () => ({
    cards: [
      {
        name: "Пиво",
        img: "https://leolsbeer.ru/upload/iblock/c4d/heineken-lager-0-65-l-alk-5-0.png",
        tags: ["хуй", "говно", "муровей"],
        ibu: 5,
        abv: 4,
      },
    ],
  }),
  
};
</script>

<style lang="scss" scoped></style>
