const fs = require('fs')

const filename = process.argv[2]

if (!filename) {
  console.log("Error: Missing file name")
  process.exit(1)
}

try {
  const data = fs.readFileSync(filename, 'utf8')
  
  console.log(data)

  const lines = data === "" ? 0 : data.split('\n').length
  console.log("Total lines:", lines)
} catch (err) {
  console.log("Error: file not found")
}
