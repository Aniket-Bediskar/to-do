const taskService = require('../services/taskService');

exports.getAllTasks = (req, res) => {
  const tasks = taskService.getAllTasks();
  res.json(tasks);
};

exports.addTask = (req, res) => {
  const { description } = req.body;
  
  if (!description) {
    return res.status(400).json({ error: 'Task description cannot be empty' });
  }
  
  const newTask = taskService.addTask(description);
  res.status(200).json({status:200, message: 'Task added successfully', task: newTask });
};

exports.deleteTask = (req, res) => {
  const taskId = req.params.id;
  const taskToDelete = taskService.getTaskById(taskId);
  
  if (!taskToDelete) {
    return res.status(404).json({ error: 'Task not found' });
  }

  taskService.deleteTask(taskId);
  res.json({status:200, message: 'Task deleted successfully' });
};
