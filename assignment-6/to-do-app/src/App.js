import React, { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Handle input change
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Add a new todo
  const addTodo = () => {
    if (inputValue.trim() !== '') {
      // Create new todo with unique id
      const newTodo = {
        id: Date.now(),
        text: inputValue,
        completed: false
      };
      
      // Add to todos array and sort in ascending order by text content
      const updatedTodos = [...todos, newTodo].sort((a, b) => 
        a.text.localeCompare(b.text)
      );
      
      setTodos(updatedTodos);
      setInputValue(''); // Clear input field
    }
  };

  // Handle key press (for Enter key)
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  // Delete a todo
  const deleteTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  // Toggle todo completion status
  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ).sort((a, b) => a.text.localeCompare(b.text));
    
    setTodos(updatedTodos);
  };

  return (
    <div className="App" style={{ maxWidth: '500px', margin: '0 auto', padding: '20px' }}>
      <h1>Todo List</h1>
      
      <div style={{ display: 'flex', marginBottom: '20px' }}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
          placeholder="Add a new task"
          style={{ 
            flexGrow: 1, 
            padding: '8px', 
            marginRight: '10px',
            borderRadius: '4px',
            border: '1px solid #ddd' 
          }}
        />
        <button 
          onClick={addTodo}
          style={{ 
            padding: '8px 16px', 
            background: '#4CAF50', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer' 
          }}
        >
          Add
        </button>
      </div>
      
      {todos.length === 0 ? (
        <p>No tasks yet. Add some!</p>
      ) : (
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {todos.map(todo => (
            <li 
              key={todo.id} 
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'space-between',
                padding: '8px',
                marginBottom: '8px',
                background: '#f9f9f9',
                borderRadius: '4px',
                borderLeft: todo.completed ? '3px solid #4CAF50' : '3px solid #ddd'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleComplete(todo.id)}
                  style={{ marginRight: '10px' }}
                />
                <span style={{ 
                  textDecoration: todo.completed ? 'line-through' : 'none', 
                  color: todo.completed ? '#888' : '#000' 
                }}>
                  {todo.text}
                </span>
              </div>
              <button 
                onClick={() => deleteTodo(todo.id)}
                style={{ 
                  padding: '5px 10px', 
                  background: '#f44336', 
                  color: 'white', 
                  border: 'none', 
                  borderRadius: '4px', 
                  cursor: 'pointer' 
                }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
      
      {todos.length > 0 && (
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
          <p>{todos.length} {todos.length === 1 ? 'task' : 'tasks'}</p>
          <p>{todos.filter(todo => todo.completed).length} completed</p>
        </div>
      )}
    </div>
  );
}

export default App;