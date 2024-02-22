import {GoogleGenerativeAI } from "@google/generative-ai";
import {AI_API} from "../urls";

const genAI = new GoogleGenerativeAI(AI_API);

export const model = genAI.getGenerativeModel({ model: "gemini-pro"});

