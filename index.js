function shout (hello)
{
  return hello.toUpperCase()
}

function whisper (HELLO)
{
  return HELLO.toLowerCase()
}

function logShout (hello) {
  console.log("HELLO")
}

function logWhisper(HELLO) {
  console.log("hello")
}

function sayHiToGrandma(x) {

  if (x.toLowerCase() === x)
  return `I can't hear you!`
  
  if (x.toUpperCase() === x)
  return `YES INDEED!`
  
  if (x === `I love you, Grandma.`)
  return `I love you, too.`
  }