<template>
   <div class="container">
    <div class="card" v-for="card in cards" :key="card.id">
      <a v-bind:href="card.pageURL" target="_blank" class="card__image">
        <img v-bind:src="card.largeImageURL" alt="random-picture" />
      </a>
      <div class="card__social">
        <div class="card__social_likes">
          <i class="likes fas fa-thumbs-up"></i> {{ card.likes }}
        </div>
        <div class="card__social_comments">
          {{ card.comments }}<i class="comments fas fa-comments"></i>
        </div>
      </div>
      <div class="card__tags">
        <span
          v-for="tag of this.tagsList(card)"
          :key="tag"
          class="card__tags-item"
          >{{ tag }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>