import type { Meta, StoryObj } from '@storybook/react'
import { fn } from '@storybook/test'
import Typography from './typography'

const meta = {
  title: 'Components/Button',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'Button',
    onClick: fn(),
  },
} as Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

export const Primary: Story = {
  args: {
    color: 'primary',
  },
}

export const Secondary: Story = {
  args: {
    color: 'secondary',
  },
}
