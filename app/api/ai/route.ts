import { openai } from '@ai-sdk/openai';
import { google } from '@ai-sdk/google';
import { convertToCoreMessages, streamText } from 'ai';

export const maxDuration = 30;

export const POST = async (req: Request) => {
  const { messages, modelProvider } = await req.json();

  const result = await streamText({
    model: modelProvider === 'gemini' ? google('gemini-1.5-flash') : openai('gpt-4o-mini'),
    system: 'You are a helpful assistant that will answer questions.',
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
};
