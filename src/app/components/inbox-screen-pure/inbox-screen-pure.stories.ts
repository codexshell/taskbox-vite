import type { Meta, StoryObj } from '@storybook/angular';
import { applicationConfig } from '@storybook/angular/dist/client';
import { fireEvent, within } from '@storybook/test';

import { provideStore } from '@ngxs/store';
import { TaskState } from '../../state/task.state';
import { InboxScreenPureComponent } from './inbox-screen-pure.component';

const meta: Meta<InboxScreenPureComponent> = {
  title: 'InboxScreenPure',
  component: InboxScreenPureComponent,
  tags: ['autodocs'],
  decorators: [
    applicationConfig({
      providers: [provideStore([TaskState])],
    }),
  ],
};

export default meta;

type Story = StoryObj<InboxScreenPureComponent>;

export const Default: Story = {};

export const ErrorTestCase: Story = {
  args: {
    error: true,
  },
};

export const WithInteractions: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    // Simulates pinning of first task
    await fireEvent.click(canvas.getByLabelText('pinTask-1'));
    // Simulates pinning the third task
    await fireEvent.click(canvas.getByLabelText('pinTask-3'));
  },
};
