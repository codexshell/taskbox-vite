import type { Meta, StoryObj } from "@storybook/angular";

import { TaskComponent } from "./task.component";

const meta: Meta<TaskComponent> = {
	title: "Task",
	component: TaskComponent,
	tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<TaskComponent>;

export const Default: Story = {
	args: {
		task: {
			id: "1",
			title: "Test Task",
			state: "TASK_INBOX",
		},
	},
};

export const Pinned: Story = {
	args: {
		task: {
			...Default.args?.task,
			state: "TASK_PINNED",
		},
	},
};

export const Archived: Story = {
	args: {
		task: {
			...Default.args?.task,
			state: "TASK_ARCHIVED",
		},
	},
};
