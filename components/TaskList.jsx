import { useState } from 'react';
import { Plus } from 'lucide-react';

export default function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [sortOrder, setSortOrder] = useState('normal');

  const addTask = () => {
    const newTask = {
      id: Date.now(),
      name: '',
      description: '',
      dueDate: '',
      priority: 'Medium',
      status: 'On track',
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (id, field, value) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, [field]: value } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const priorityValue = (priority) => {
    if (priority === 'High') return 3;
    if (priority === 'Medium') return 2;
    if (priority === 'Low') return 1;
    return 0;
  };

  let displayedTasks = tasks;
  if (sortOrder === 'high') {
    displayedTasks = [...tasks].sort((a, b) => priorityValue(b.priority) - priorityValue(a.priority));
  } else if (sortOrder === 'low') {
    displayedTasks = [...tasks].sort((a, b) => priorityValue(a.priority) - priorityValue(b.priority));
  }

  return (
    <div className="max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-900">My Tasks</h1>
        <div className="flex gap-2 items-center">
          <select
            value={sortOrder}
            onChange={e => setSortOrder(e.target.value)}
            className="bg-gray-100 text-gray-700 px-1 py-2 rounded-lg border border-gray-300 font-medium shadow"
          >
            <option value="normal">Normal</option>
            <option value="high">High</option>
            <option value="low">Low</option>
          </select>
          <button
            onClick={addTask}
            className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow"
          >
            <Plus size={16} />
            <span>Add Task</span>
          </button>
        </div>
      </div>
      {/* Tasks Table */}
      <div className="bg-white rounded-lg border border-gray-200 shadow overflow-hidden mb-8">
        <div className="grid grid-cols-7 gap-4 p-4 bg-gray-50 border-b border-gray-200">
          <div className="text-gray-700 font-medium">Done</div>
          <div className="text-gray-700 font-medium">Name</div>
          <div className="text-gray-700 font-medium">Description</div>
          <div className="text-gray-700 font-medium">Due Date</div>
          <div className="text-gray-700 font-medium">Priority</div>
          <div className="text-gray-700 font-medium">Status</div>
          <div className="text-gray-700 font-medium">Actions</div>
        </div>
        {displayedTasks.length === 0 && (
          <div className="p-6 text-center text-gray-400">No tasks yet. Click "Add Task" to get started.</div>
        )}
        {displayedTasks.map((task) => (
          <div key={task.id} className="grid grid-cols-7 gap-4 p-4 border-b border-gray-100 hover:bg-blue-50 transition-colors items-center">
            <div className="flex justify-center">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={e => updateTask(task.id, 'completed', e.target.checked)}
                className="h-5 w-5 text-blue-600 "
              />
            </div>
            <input
              type="text"
              value={task.name}
              onChange={e => updateTask(task.id, 'name', e.target.value)}
              className="bg-transparent text-gray-900 border-b border-gray-200 py-1 rounded"
              placeholder="Task name"
            />
            <input
              type="text"
              value={task.description}
              onChange={e => updateTask(task.id, 'description', e.target.value)}
              className="bg-transparent text-gray-700 border-b border-gray-200 px-2 py-1 rounded"
              placeholder="Description"
            />
            <input
              type="date"
              value={task.dueDate}
              onChange={e => updateTask(task.id, 'dueDate', e.target.value)}
              className="bg-transparent text-gray-700 border-b border-gray-200 px-2 py-1 rounded"
            />
            <select
              value={task.priority}
              onChange={e => updateTask(task.id, 'priority', e.target.value)}
              className="bg-gray-50 text-gray-700 border border-gray-200 rounded px-2 py-1 focus:border-blue-500"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
            <select
              value={task.status}
              onChange={e => updateTask(task.id, 'status', e.target.value)}
              className="bg-gray-50 text-gray-700 border border-gray-200 rounded px-2 py-1 focus:border-blue-500"
            >
              <option value="On track">On track</option>
              <option value="At risk">At risk</option>
              <option value="Off track">Off track</option>
            </select>
            <button
              onClick={() => deleteTask(task.id)}
              className="text-red-500 hover:text-red-700 transition-colors px-2 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
} 