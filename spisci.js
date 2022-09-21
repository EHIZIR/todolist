const todoList = {
    items: [
      {
        text: 'Завершить текущий челлендж',
        completed: false,
      },
      {
        text: 'Отдохнуть во время перерыва',
        completed: false,
      },
      {
        text: 'Помочь напарнику понять код',
        completed: false,
      },
      {
        text: 'Выиграть в мафию',
        completed: true,
      },
    ],
  
    printAll: function() {
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i].text)
        }
    },
  
    add: function(newTask) {
        this.items.unshift({text: newTask, completed: false})
    },
  
    remove: function(indexDel) {
        this.items.splice(indexDel, 1)
    },
  
    print: function(index) {
        console.log(this.items[index].text)
    },
  
    complete: function(index) {},
  };

  todoList.print(2)
  todoList.add('Перейти к следующему релизу')
  todoList.remove(2)
  
  console.log(todoList.printAll())