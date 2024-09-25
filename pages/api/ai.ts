import { openai } from '@ai-sdk/openai';
import { convertToCoreMessages, streamText } from 'ai';

export const maxDuration = 30;

export const handler = async (req: Request) => {
  const { messages } = await req.json();

  const result = await streamText({
    model: openai('gpt-4-turbo'),
    system: 'You are a helpful assistant that will answer questions.',
    messages: convertToCoreMessages(messages),
  });

  return result.toDataStreamResponse();
};
