import server from './server'

const port = 5000

server.listen({ port }).then((s) => {
  console.log(`server listening on port ${port} at ${s.url}`)
})
