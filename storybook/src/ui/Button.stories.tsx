import { Button, buttonVariants } from '@common/ui/components';
import type { Meta, StoryObj } from '@storybook/react';
// import type { VariantProps } from 'tailwind-variants';
import { AddIcon } from '@common/ui/icons';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: Object.keys(buttonVariants.variants.variant),
    },
    size: {
      control: 'select',
      options: Object.keys(buttonVariants.variants.size),
    },
    children: { control: 'text' },
    asChild: { control: 'boolean' },
  },
  args: {
    children: 'Button',
    variant: 'default',
    size: 'default',
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};
// variant 별 버튼 렌더링 스토리
export const Variants: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-2">
      {(Object.keys(buttonVariants.variants.variant) as (keyof typeof buttonVariants.variants.variant)[]).map(
        (variant) => (
          <Button key={variant} {...args} variant={variant}>
            <AddIcon />
            {variant}
          </Button>
        ),
      )}
    </div>
  ),
};

// size 별 버튼 렌더링 스토리
export const Sizes: Story = {
  render: (args) => (
    <div className="flex flex-wrap gap-2">
      {(Object.keys(buttonVariants.variants.size) as (keyof typeof buttonVariants.variants.size)[]).map((size) => (
        <Button key={size} {...args} size={size}>
          {size}
        </Button>
      ))}
    </div>
  ),
};
