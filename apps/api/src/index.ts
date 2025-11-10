import { Elysia } from 'elysia'
import { openapi, fromTypes } from '@elysiajs/openapi'
import { cors } from '@elysiajs/cors'

import { otel } from '@api/modules'

export const app = new Elysia()
    .use(
        openapi({
            references: fromTypes(
                process.env.NODE_ENV === 'production'
                    ? 'dist/src/index.d.ts'
                    : 'src/index.ts'
            )
        })
    )
    .use(otel)
    .use(
        cors({
            origin: 'http://localhost:3000'
        })
    )
    .get('/', () => 'Hello Elysia')
    .listen(Bun.env.PORT ?? 3001)

process.on('beforeExit', app.stop)

export type app = typeof app

console.log(
    `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)
