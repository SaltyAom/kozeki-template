import '@ui/global.css'

import type { Meta, StoryObj } from '@storybook/react'

import { Doro, type DoroProps } from '.'

const meta: Meta<typeof Doro> = {
    title: 'Kozeki/doro',
    component: Doro
}

export default meta

type Story = StoryObj<DoroProps>

export const Default: Story = {}

export const Small: Story = {
    args: {
        variant: 'small'
    }
}

export const Medium: Story = {
    args: {
        variant: 'medium'
    }
}
