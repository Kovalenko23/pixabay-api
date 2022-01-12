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
</template>

<script>
export default {

}
</script>

<style>

</style>