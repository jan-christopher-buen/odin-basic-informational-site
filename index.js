import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'

const routes = new Map([
  ['/', 'index.html'],
  ['/about', 'about.html'],
  ['/contact-me', 'contact-me.html'],
])

const server = createServer(async (request, response) => {
  try {
    const { pathname } = new URL(request.url, 'http://localhost:8080')
    const file = routes.get(pathname)
    const html = await readFile(new URL(file ?? '404.html', import.meta.url))

    response.writeHead(file ? 200 : 404, {
      'Content-Type': 'text/html; charset=utf-8',
    })
    response.end(html)
  } catch (error) {
    console.error('Unable to serve request:', error)
    response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' })
    response.end('Internal Server Error')
  }
})

server.listen(8080, () => {
  console.log('Server running at http://localhost:8080')
})
