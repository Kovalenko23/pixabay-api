<template>
 <filter/>
  <inputForm/>
<container/>
</template>


<script>
import { debounce } from "lodash";
import container from './CatsListComponent/container.vue';
import filter from './CatsListComponent/searchTools/filter.vue'
import inputForm from './CatsListComponent/searchTools/inputForm.vue'

export default {
  components: { container },
  name: "CatsList",

  data() {
    return {
      selected: "",
      inputField: "",
    };
  },
  computed: {
    cards() {
      let newCards = [];
      if (this.inputField === "") return this.$store.getters.getJson;
      else {
        for (let i of this.$store.getters.getJson) {
          if (
            i.tags.split(/,| /).find((word) => word.trim() === this.inputField)
          )
            newCards.push(i); 
        }
        console.log(newCards);
        return newCards;
      }
    },

    tags() {
      return this.$store.getters.getTags;
    },
    debouncedHandler() {
      return debounce(this.handler, 300);
    },
  },
  methods: {
    handler(event) {
      let value = event.target.value;
      this.inputField = value;
    },

    dbleclickEditor(value) {
      value.delete = true;
    },

    deleteTag(value) {
      let tags = this.tagsList(value);
      let tagText = event.target.closest(".card__tags-item");
      tagText = tagText.querySelector(`.card__tags_text`).innerText;
      tags = tags.filter((e) => e !== tagText);
      tags = tags.join(", ");
      value.tags = tags;
      value.delete = false;
    },

    addTag(value) {
      value.input = true;
      value.delete = false;
    },

    send(value) {
      const parents = event.target.closest(".card__tags");
      const inputValue = parents.querySelector("input").value;
      if (inputValue.trim() !== ``) {
        value.tags += `, ${parents.querySelector("input").value}`;
      }

      value.input = false;
    },

    tagsList(arg) {
      let cardTags = [];
      for (let i of arg.tags.split(",")) {
        cardTags.push(i.trim());
      }
      return cardTags;
    },

    sortJson() {
      this.$store.dispatch(`loadJson`, this.selected);
    },
  },
};
</script>


