/*
   Filename: sophisticated_code.js

   This code demonstrates a sophisticated and complex implementation of a task scheduling system.
   It includes methods to add tasks, assign them to workers, track their progress, and generate reports.

   Note: This is a simplified example and may not include every possible edge case or error handling.
*/

class Task {
  constructor(id, name, description) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.worker = null;
    this.progress = 0;
    this.completed = false;
  }

  assignToWorker(worker) {
    this.worker = worker;
  }

  updateProgress(progress) {
    this.progress = progress;

    if (progress >= 100) {
      this.complete();
    }
  }

  complete() {
    this.completed = true;
    console.log(`Task ${this.id}: ${this.name} completed by ${this.worker}`);
  }
}

class Worker {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }

  toString() {
    return `${this.name} (ID: ${this.id})`;
  }
}

class TaskScheduler {
  constructor() {
    this.tasks = [];
    this.workers = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  assignTaskToWorker(taskId, workerId) {
    const task = this.tasks.find((t) => t.id === taskId);
    const worker = this.workers.find((w) => w.id === workerId);

    if (task && worker) {
      task.assignToWorker(worker);
      console.log(`Task ${taskId} assigned to ${worker}`);
    } else {
      console.error("Invalid task ID or worker ID.");
    }
  }

  updateTaskProgress(taskId, progress) {
    const task = this.tasks.find((t) => t.id === taskId);

    if (task) {
      task.updateProgress(progress);
    } else {
      console.error("Invalid task ID.");
    }
  }

  addWorker(worker) {
    this.workers.push(worker);
  }

  generateTaskReport() {
    this.tasks.forEach((task) => {
      console.log(`Task ${task.id}: ${task.name}`);
      console.log(`Description: ${task.description}`);
      console.log(`Assigned To: ${task.worker}`);
      console.log(`Progress: ${task.progress}%`);
      console.log("------------------");
    });
  }
}

// Usage Example

let scheduler = new TaskScheduler();

let worker1 = new Worker(1, "John");
let worker2 = new Worker(2, "Alice");

scheduler.addWorker(worker1);
scheduler.addWorker(worker2);

let task1 = new Task(1, "Task 1", "Implement feature A");
let task2 = new Task(2, "Task 2", "Write unit tests");

scheduler.addTask(task1);
scheduler.addTask(task2);

scheduler.assignTaskToWorker(1, 1);
scheduler.assignTaskToWorker(2, 2);

scheduler.updateTaskProgress(1, 30);
scheduler.updateTaskProgress(2, 60);

scheduler.generateTaskReport();
