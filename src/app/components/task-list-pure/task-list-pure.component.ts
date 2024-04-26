import { Component, EventEmitter, Input, Output } from "@angular/core";

import type { TaskModel } from "../../models/task.model";
import { TaskComponent } from "../task/task.component";

@Component({
	selector: "app-task-list-pure",
	standalone: true,
	imports: [TaskComponent],
	templateUrl: "./task-list-pure.component.html",
	styleUrl: "./task-list-pure.component.css",
})
export class TaskListPureComponent {
	/**
	 * @ignore
	 * Component property to define ordering of tasks
	 * */
	tasksInOrder: TaskModel[] = [];

	/** Checks if it is in loading state */
	@Input() loading = false;

	/**
	 * Event to change the task to pinned
	 * */
	@Output() onPinTask = new EventEmitter<string>();

	/**
	 * Event to change the task to archived
	 * */
	@Output() onArchiveTask = new EventEmitter<string>();

	/** The list of tasks */
	@Input() set tasks(arr: TaskModel[]) {
		const pinnedTasks = arr.filter((task) => task.state === "TASK_PINNED");
		const filteredTasks = arr.filter(
			(task) => task.state !== "TASK_ARCHIVED" && task.state !== "TASK_PINNED",
		);
		this.tasksInOrder = [...pinnedTasks, ...filteredTasks];
	}
}
