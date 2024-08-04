function generateMap(canvas) {
  const ctx = canvas.getContext('2d')

  const cellSize = 20
  const width = 20 // Maze width in cells
  const height = 20 // Maze height in cells

  canvas.width = width * cellSize
  canvas.height = height * cellSize
  const stack = []
  const maze = Array.from({ length: height }, () => Array(width).fill(false))
  const visited = Array.from({ length: height }, () => Array(width).fill(false))

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ]

  function isInBounds(x, y) {
    return x > 0 && y > 0 && x < width - 1 && y < height - 1
  }

  function drawCell(x, y, color) {
    ctx.fillStyle = color
    ctx.fillRect(x * cellSize, y * cellSize, cellSize, cellSize)
    // ctx.strokeRect(x * cellSize, y * cellSize, cellSize, cellSize);
  }

  function visit(x, y) {
    visited[y][x] = true
    drawCell(x, y, 'white')
    stack.push([x, y])

    while (stack.length > 0) {
      const [cx, cy] = stack.pop()
      const neighbors = []

      directions.forEach(([dx, dy]) => {
        const nx = cx + dx * 2
        const ny = cy + dy * 2

        if (isInBounds(nx, ny) && !visited[ny][nx]) {
          neighbors.push([nx, ny, dx, dy])
        }
      })

      if (neighbors.length > 0) {
        stack.push([cx, cy])

        const [nx, ny, dx, dy] = neighbors[Math.floor(Math.random() * neighbors.length)]

        visited[ny][nx] = true
        drawCell(nx, ny, 'white')
        drawCell(cx + dx, cy + dy, 'white')

        stack.push([nx, ny])
      }
    }
  }

  visit(1, 1)
}

export { generateMap }
