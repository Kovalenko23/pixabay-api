<template>
  <div class="input_form">
    <input
      @keyup="debouncedHandler"
      type="text"
      placeholder="filter"
      class="filter__tags"
    />
  </div>
</template>

<script>
export default {
    
};
</script>

<style>
</style>