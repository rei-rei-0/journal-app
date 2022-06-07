const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000
app.use(cors())

const questions = {
  1:{ //greeting
    1: 'How was your day?',
    2: 'What was the best part of your day?',
    3: 'What was the most interesting thing you did today?',
    4: 'What did you do today?',
    5: 'What is something you did today that you\'d love to do every day?',
    6: 'What was the best thing that happened today?'
  },
  2:{ //food
    1: 'What did you eat?',
    2: 'What did you have for lunch?',
    3: 'What were you craving to eat today?',
    4: 'What did you have for food today?'
  },
  3:{ //hobbies
    1: 'What did you do for fun?',
    2: 'Did you do anything fun today?',
    3: 'What did you do in your free time?'
  },
  4:{ //feelings
    1: 'Did anything frustrate you?',
    2: 'How are you feeling?',
    3: 'Did anything bring you happiness?',
    4: 'How was your mood?',
    5: 'Did anything upset you today?',
    6: 'Did anything stress you out today?'
  },
  5:{ //goals
    1: 'What are your goals for today?',
    2: 'What are your goals for tomorrow?'
  },
  6:{ //gratitude
    1: 'What 3 things are you grateful for?',
    2: 'Did you reach out to anyone to show your gratitude?'
  },
  7:{ //ending
    1: 'Good night! I\'ll see you tomorrow!',
    2: 'Good night! Don\'t stay up too late.',
    3: 'Good night! Try to sleep soon.',
    4: 'Good night! Sweet dreams!'
  },
  'unknown':{ //error
    1: 'error',
    2: 'error',
    3: 'error'
  }
}

app.get('/', (req, res)=>{
  res.sendFile(__dirname + '/index.html')
})

app.get('/messaging', (req, res)=>{
  res.sendFile(path.join(__dirname + '../client-side/messaging.html')) // need to link to messaging
})

app.get('/api/:number', (req, res)=>{
  const questionNum = req.params.number
  if( questions[questionNum] ){
      res.json(questions[questionNum])
  }else{
      res.json(questions['unknown'])
  }
})

app.listen(process.env.PORT || PORT, ()=>{
  console.log(`The server is running on port ${PORT}!`)
})

app.get('/api', (req, res)=>{
  res.json(questions)
})