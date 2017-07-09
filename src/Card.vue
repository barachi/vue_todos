<template>
<div class="card">
  <div class="card-block">
    <div class="card-text">{{ item }}</div>
      <button v-on:click="deleteItem" class="btn btn-primary" type="button" name="deleteItem" value="aaaa">delete todo</button>
    </div>
  </div>
</div>
</template>

<script>

export default {
  name: 'Card',
  props: ['item', 'index'],
  methods: {
    deleteItem(event) {
      this.$emit('delete-item');
    }
  }
};
</script>