import express from "express";

const router = express.Router();

router.get('/jokes',(req,res)=>{
    const jokes = [
  {
    "id": 1,
    "category": "Programming",
    "setup": "Why do programmers prefer dark mode?",
    "punchline": "Because light attracts bugs."
  },
  {
    "id": 2,
    "category": "Science",
    "setup": "Why can't you trust an atom?",
    "punchline": "Because they make up everything."
  },
  {
    "id": 3,
    "category": "Dad Jokes",
    "setup": "What do you call a fake noodle?",
    "punchline": "An impasta."
  },
  {
    "id": 4,
    "category": "Animals",
    "setup": "What do you call a bear with no teeth?",
    "punchline": "A gummy bear."
  },
  {
    "id": 5,
    "category": "Programming",
    "setup": "How many programmers does it take to change a light bulb?",
    "punchline": "None, that's a hardware problem."
  },
  {
    "id": 6,
    "category": "Wordplay",
    "setup": "Why did the scarecrow win an award?",
    "punchline": "Because he was outstanding in his field."
  },
  {
    "id": 7,
    "category": "Food",
    "setup": "Why don't eggs tell jokes?",
    "punchline": "They'd crack each other up."
  },
  {
    "id": 8,
    "category": "Math",
    "setup": "Why was the equal sign so humble?",
    "punchline": "Because it knew it wasn't less than or greater than anyone else."
  }
]
res.send(jokes);



})


export default router