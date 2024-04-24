import type { Meta, StoryObj } from '@storybook/angular';

import { componentWrapperDecorator } from '@storybook/angular/dist/client';

import { TaskListComponent } from './task-list.component';
import * as TaskStories from '../task/task.stories';

const meta: Meta<TaskListComponent> = {
  title: 'TaskList',
  component: TaskListComponent,
  tags: ['autodocs'],
  decorators: [
    componentWrapperDecorator(
      (story) => `<div style="margin: 3em">${story}</div>`
    ),
  ],
};

export default meta;

type Story = StoryObj<TaskListComponent>;

export const Default: Story = {
  args: {
    tasks: [
      { ...TaskStories.Default.args?.task, id: '1', title: 'Task 1' },
      { ...TaskStories.Default.args?.task, id: '2', title: 'Task 2' },
      { ...TaskStories.Default.args?.task, id: '3', title: 'Task 3' },
      { ...TaskStories.Default.args?.task, id: '4', title: 'Task 4' },
      { ...TaskStories.Default.args?.task, id: '5', title: 'Task 5' },
      { ...TaskStories.Default.args?.task, id: '6', title: 'Task 6' },
    ],
  },
};

export const WithTaskPinned: Story = {
  args: {
    tasks: [
      // Shaping the story through composition.
      // Inherited data coming from the Default story.
      ...(Default.args?.tasks?.slice(0, 5) || []),
      {
        id: '6',
        title: 'Task 6 (pinned)',
        state: 'TASK_PINNED',
      },
    ],
  },
};

export const Loading: Story = {
  args: {
    loading: true,
    tasks: [],
  },
};

export const Empty: Story = {
  args: {
    // Shaping stories through composition
    // Inherited data coming from the Loading story.
    ...Loading.args,
    loading: false,
  },
};
