let tasks = [];
let nextTaskId = 1;

exports.getAllTasks = () => tasks;

exports.addTask = (description) => {
  const newTask = { id: nextTaskId++, description };
  tasks.push(newTask);
  return newTask;
};

exports.deleteTask = (taskId) => {
  tasks = tasks.filter(task => task.id !== parseInt(taskId));
};

exports.getTaskById = (taskId) => {
  return tasks.find(task => task.id === parseInt(taskId));
};
