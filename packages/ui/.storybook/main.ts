import { mergeConfig } from 'vite'

import type { StorybookConfig } from '@storybook/react-vite'
import tsconfigPaths from 'vite-tsconfig-paths'

import { join, dirname } from 'path'

/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value: string): any {
    return dirname(import.meta.resolve(join(value, 'package.json')))
}

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        getAbsolutePath('@storybook/addon-docs'),
        getAbsolutePath('@storybook/addon-onboarding'),
        getAbsolutePath('@chromatic-com/storybook'),
        // getAbsolutePath('@storybook/experimental-addon-test')
    ],
    framework: {
        name: getAbsolutePath('@storybook/react-vite'),
        options: {}
    },
    core: {
        disableTelemetry: true
    },
    async viteFinal(config) {
        return mergeConfig(config, {
            plugins: [tsconfigPaths()]
        })
    }
}

export default config
