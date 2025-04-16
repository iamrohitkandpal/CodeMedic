import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.AI_KEY);
const model = genAI.getGenerativeModel({model: "gemini-2.0-flash"});


const result = await model.generateContent(prompt);
const { text } = result;

console.log(text);