// Se declara el arreglo
const messages = [
  'The best way to predict your future is to create it - Abraham Lincoln',
  'Choose a job you love, and you will never have to work a day in your life - Confucio',
  'We all have two lives, the second begins when we realize we only have on',
  'The dreamers are the saviors of the world',
  'Always turn a negative situation into a positive situation - Michael Jordan',
  'Hello world!!! - Any developer',
  'Happiness is when what you think, what you say, and what you do are in harmony - Mahatma Gandhi',
  'Who seeks shall find - Sófocles',
  'Go back to work, this is not the time for a break - Abraham Lincoln',
  'Go back to work, this codo don´t gonna made by himself',
]

//Crear función para enviar aleatoriamente  los nombres del arreglo
const randomMsg = () => {
const message = messages[Math.floor(Math.random()*messages.length)]
    console.log(message)
}

// Exportar como un módulo

module.exports = { randomMsg }
