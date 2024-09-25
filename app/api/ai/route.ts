import { openai } from '@ai-sdk/openai';
import { google } from '@ai-sdk/google';
import { convertToCoreMessages, streamText } from 'ai';

export const maxDuration = 30;

export const POST = async (req: Request) => {
  const { messages } = await req.json();

  const result = await streamText({
    model: google('gemini-1.5-flash'),
    system: 'You are a helpful assistant that will answer questions. Do not use emojis.',
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
};
