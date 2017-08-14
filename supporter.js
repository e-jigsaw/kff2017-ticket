const {readFileSync} = require('fs')
const parse = require('csv-parse/lib/sync')

const csv = parse(readFileSync('supporter.utf8.csv')).map(row => [
  row[2],
  row[3],
  row[5],
  `"${
    row[12].split('/').map(
      str => {
        const tickets = str.replace(/カナザワ映画祭２０１７/, '').split(',')
        return `${tickets[0]} ${tickets[2]}`
      }
    ).join('\n')
  }"`
].join(',')).join('\n')

console.log(csv)
