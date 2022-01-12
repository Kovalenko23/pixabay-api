<template>
  <div class="container">
    <div
      @click="card.delete = null"
      class="card"
      :data-tags="card.id"
      ref="div"
      v-for="card in cards"
      :key="card.id"
    >
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
        <div
          class="card__tags-item"
          @dblclick="dbleclickEditor(card)"
          v-for="tag of this.tagsList(card)"
          :key="tag"
        >
          <span class="card__tags_text noselect">{{ tag }}</span>
          <span
            v-if="card.delete"
            @click="deleteTag(card)"
            @blur="card.delete"
            class="card__tags-item_delete"
          ></span>
        </div>

        <label
          class="card__tags_button"
          for="input"
          v-show="card.delete"
          @click="addTag(card)"
          >+</label
        >
        <input
          v-if="card.input"
          @blur="card.input = null"
          id="input"
          v-on:keyup.enter="send(card)"
          type="text"
          class="card__tags_add"
        />
      </div>
    </div>
  </div>
</template>

<script>

export default {
    name: card
};
  
  
 
</script>

<style>
</style>