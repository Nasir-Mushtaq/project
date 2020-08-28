import TaskManager from "./taskmanager.js"
import path from "path"
import fs from "fs"
import { TestScheduler } from "jest"
import { hasUncaughtExceptionCaptureCallback } from "process"

const html = fs.readFileSync(path.resolve(__dirname, "./index.html"), "utf-8")

let taskmanager
let list 
let task

beforeEach(() => {
    document.documentElement.innerHTML = html.toString()
    localStorage.clear()
    list = document.getElementById('taskList')
    taskmanager = new TaskManager(list)
})

test("Task should add to task list", () => {
    expect(taskmanager).toBeDefined()
    expect(list).toBeDefined()
    expect(taskmanager.tasksArray.length).toBe(0)
    expect(list.children.length).toBe(0)

    taskmanager.addTaskToList(
        "Daily Opening",
        "Zoom meeting",
        "2020-08-08",
        "09:45",
        "John",
        "Call",
        "Complete"
    )
})

test("Task should be deletd from task list", () => {
    expect(taskmanager).toBeDefined()
    expect(list).toBeDefined()
    expect(taskmanager.tasksArray.length).toBe(0)

    taskmanager.removeTask(1234)
})


test("Task should update", () => {
    expect(taskmanager).toBeDefined()
    expect(list).toBeDefined()
    expect(taskmanager.tasksArray.length).toBe(0)
    expect(list.children.length).toBe(0)

    taskmanager.updateTask()
})