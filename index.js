function newTask(title, description) {
  const task = {
    title,
    description,
    complete: false,


    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}


const task1 = newTask("Clean Cat Litter", "Take; all the poo out of the litter box");
const task2 = newTask("Do Laundry", "yuck");
const tasks = [task1, task2];

task1.logState();
task1.markCompleted();
task1.logState();