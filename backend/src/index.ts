import express from 'express'
import * as trpcExpress from '@trpc/server/adapters/express'
import { trpcRouter } from './trpc'

const ideas = [
  { nick: 'cool-idea-nick1', name: 'Idea 1', description: 'Description of idea 1...' },
  { nick: 'cool-idea-nick2', name: 'Idea 2', description: 'Description of idea 2...' },
  { nick: 'cool-idea-nick3', name: 'Idea 3', description: 'Description of idea 3...' },
  { nick: 'cool-idea-nick4', name: 'Idea 4', description: 'Description of idea 4...' },
  { nick: 'cool-idea-nick5', name: 'Idea 5', description: 'Description of idea 5...' },
  { nick: 'cool-idea-nick6', name: 'Idea 6', description: 'Description of idea 6...' },
]

const expressApp = express()
expressApp.get('/ping', (req, res) => {
  res.send('pong')
})

expressApp.use('/trpc', trpcExpress.createExpressMiddleware({
  router: trpcRouter
}))
expressApp.listen(3000, () => {
  console.info('Listening at http://localhost:3000')
})
