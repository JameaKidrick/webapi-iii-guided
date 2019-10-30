# Middleware Notes

# Jargon

`Separation of Concerns`
- I was everything in my software to do one thing and only one thing and have only one thing to change.
- Increases clean code ('we do NOT write code for the computer, code is a communication device, a way to reveal our intentions to another developer)

**EVERYTHING IS MIDDLEWARE!**

Well, almost everything :-)

## Types (based on how we got it or who build it)

- built-in: included with express.ex: `express.json()`
- third party: must be installed from `npm`
- custom: we code these!!

## Types (based on how it's being used)
- global: it will be executed on every request that comes into a server (install helmet for security ===> `npm i helmet`)


Order matters, it goes top to bottom and left to right