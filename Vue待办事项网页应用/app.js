// app.js

const { createApp, ref, computed, watchEffect } = Vue;

createApp({
  setup() {
    // 从localStorage加载数据
    const loadTodos = () => {
      const savedTodos = localStorage.getItem('vue-todos');
      return savedTodos ? JSON.parse(savedTodos) : [];
    };

    // 保存数据到localStorage
    const saveTodos = (todos) => {
      localStorage.setItem('vue-todos', JSON.stringify(todos));
    };

    const todos = ref(loadTodos());
    const newTodo = ref({ text: '', priority: 'medium', dueDate: '' });
    const filter = ref('all');
    const searchQuery = ref('');

    // 监听todos变化，自动保存到localStorage
    watchEffect(() => {
      saveTodos(todos.value);
    });

    // 根据关键词搜索任务
    const filteredTodos = computed(() => {
      let result = [...todos.value];

      if (filter.value === 'completed') {
        result = result.filter(t => t.done);
      } else if (filter.value === 'active') {
        result = result.filter(t => !t.done);
      } else if (filter.value === 'high') {
        result = result.filter(t => t.priority === 'high');
      } else if (filter.value === 'low') {
        result = result.filter(t => t.priority === 'low');
      }

      if (searchQuery.value.trim()) {
        const query = searchQuery.value.toLowerCase();
        result = result.filter(t => t.text.toLowerCase().includes(query));
      }

      return result;
    });

    function getPriorityLabel(priority) {
      switch (priority) {
        case 'high': return '高优先级';
        case 'medium': return '中优先级';
        case 'low': return '低优先级';
      }
    }

    function addTodo() {
      if (!newTodo.value.text.trim()) return;
      todos.value.push({
        ...newTodo.value,
        priorityLabel: getPriorityLabel(newTodo.value.priority),
        done: false,
        isEditing: false
      });
      newTodo.value = { text: '', priority: 'medium', dueDate: '' };
    }

    function removeTodo(index) {
      // 从filteredTodos中获取实际的todo项
      const todoToRemove = filteredTodos.value[index];
      // 在原始todos数组中查找并删除
      const originalIndex = todos.value.findIndex(t => 
        t.text === todoToRemove.text && 
        t.priority === todoToRemove.priority && 
        t.done === todoToRemove.done
      );
      if (originalIndex !== -1) {
        todos.value.splice(originalIndex, 1);
      }
    }

    function editTodo(index) {
      const todo = filteredTodos.value[index];
      // 保存原始值，以便取消编辑时恢复
      todo.editText = todo.text;
      todo.editPriority = todo.priority;
      todo.editDueDate = todo.dueDate;
      todo.isEditing = true;
    }

    function saveTodoEdit(index) {
      const todo = filteredTodos.value[index];
      if (!todo.editText.trim()) return; // 不允许保存空内容
      
      todo.text = todo.editText;
      todo.priority = todo.editPriority;
      todo.dueDate = todo.editDueDate;
      todo.priorityLabel = getPriorityLabel(todo.priority);
      todo.isEditing = false;
      
      // 清除编辑状态的临时数据
      delete todo.editText;
      delete todo.editPriority;
      delete todo.editDueDate;
    }

    function cancelTodoEdit(index) {
      const todo = filteredTodos.value[index];
      todo.isEditing = false;
      // 清除编辑状态的临时数据
      delete todo.editText;
      delete todo.editPriority;
      delete todo.editDueDate;
    }

    function clearAll() {
      todos.value = todos.value.filter(t => !t.done);
    }

    const totalTodos = computed(() => todos.value.length);
    const completedTodos = computed(() => todos.value.filter(t => t.done).length);

    return {
      todos,
      newTodo,
      addTodo,
      removeTodo,
      editTodo,
      saveTodoEdit,
      cancelTodoEdit,
      filteredTodos,
      filter,
      searchQuery,
      clearAll,
      totalTodos,
      completedTodos
    };
  }
}).mount('#app');