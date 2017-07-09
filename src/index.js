import Vue from 'vue';
import Card from './Card.vue';
import {LocalStorage} from './localStorage';

window.onload = function() {
  const mixin = {
    methods: {
      fetchTodos: function(key) {
        return LocalStorage.getItem(key);
      },
      setTodos: function(key, todos) {
        LocalStorage.setItem(key, todos);
      }
    }
  };

  const Todos = new Vue({
    el: '#todos',
    components: {
      'card': Card
    },
    mixins: [mixin],
    data() {
      return {
        todos: [],
        inputText: ''
      }
    },
    created: function() {
      this.todos = this.fetchTodos('todos');
    },
    methods: {
      addTodo() {
        this.todos.unshift({item: this.inputText});
        this.setTodos('todos', this.todos);
      },
      deleteTodo(index) {
        this.todos.splice(index, 1);
      }
    },
  });
}
