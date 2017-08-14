const {readFileSync} = require('fs')
const parse = require('csv-parse/lib/sync')

const csv = parse(readFileSync('report.utf8.csv')).map(row => [
  row[2],
  row[3],
  row[6],
  row[11].match(/PayPal/) ? 'PayPal' : row[11],
  `"${
    row[15].split('/').map(
      str => {
        const tickets = str.replace(/カナザワ映画祭２０１７/, '').split(',')
        return `${tickets[0]} ${tickets[2]}`
      }
    ).join('\n')
  }"`
].join(',')).join('\n')

console.log(csv)
