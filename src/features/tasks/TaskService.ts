import { database } from '../../db';
import Task from '../../db/models/Task';
import { ensureLocalUser } from '../auth/userUtils';

export const createTask = async (title: string) => {
    const user = await ensureLocalUser();
    let newTask: Task;
    await database.write(async () => {
        newTask = await database.get<Task>('tasks').create(task => {
            task.userId = user.id;
            task.title = title;
            task.completed = false;
            task.dueDate = Date.now(); // Default to today
        });
    });
    return newTask!;
};

export const getIncompleteTasks = async () => {
    const tasks = await database.get<Task>('tasks').query().fetch();
    // Filter manually or use Q query if implemented properly
    return tasks.filter(t => !t.completed);
};
