import fs from 'fs/promises'

const message = await fs.readFile('./src/reto-1/message.txt', 'utf-8')

const getDecodedMessage = (message: string) => {
  const splitedMessage = message.split(' ')
  const decodedMessage: { [key: string]: number } = {}
  for (const word of splitedMessage) {
    decodedMessage[word] = (decodedMessage[word] ?? 0) + 1
  }
  const result = Object.entries(decodedMessage)
    .map(([word, count]) => `${word}${count}`)
    .join('')
  return result
}

console.log({ message: getDecodedMessage(message) })