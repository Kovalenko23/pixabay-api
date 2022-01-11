<template>
  <label class="sort-label" for="sort">sort</label>
  <select
    v-model="selected"
    @change="sortJson"
    name="option"
    class="sort"
    id="sort"
  >
    <option class="sort__item" value="">-</option>
    <option class="sort__item" value="Likes">Likes</option>
    <option class="sort__item" value="Comments">Comments</option>
  </select>
  <div class="filter">
    <input
      @keyup="debouncedHandler"
      type="text"
      placeholder="filter"
      class="filter__tags"
    />
  </div>
<container/>
</template>


<script>
import { debounce } from "lodash";
import container from "../components/container.vue"
export default {
  name: "CatsList",
  data() {
    return {
      selected: "",
      inputField: "",
      
    };
  },
  
components:{container},
  computed: {
    cards() {
      let newArray = [];
      if (this.inputField === "") return this.$store.getters.GET_JSON;
      else {
        for (let i of this.$store.getters.GET_JSON) {
          if (
            i.tags.split(/,| /).find((word) => word.trim() === this.inputField)
          )
            newArray.push(i);
        }
        return newArray;
      }
    },
    tags() {
      return this.$store.getters.GET_TAGS;
    },
    debouncedHandler() {
      return debounce(this.handler, 300);
    }, 
  },
  methods: {
    handler(event) {
      let value = event.target.value;
      console.log(value);
      this.inputField = value;
    },
    tagsList(arg) {
      let cardTags = [];
      for (let i of arg.tags.split(",")) {
        cardTags.push(i.trim());
      }
      return cardTags;
    },
    sortJson() {
      this.$store.dispatch(`loadCats`, this.selected);
    },
  },
};
</script>
