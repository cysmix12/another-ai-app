'use client';

import { useRef, useEffect } from 'react';
import { useChat } from 'ai/react';
import { Flex, ScrollAreaAutosize, Text } from '@mantine/core';

import { ChatMessage, InputArea } from '@/components';

const Home = () => {
  const viewportRef = useRef<HTMLDivElement>(null);

  const { input, setInput, append, messages } = useChat({
    api: '/api/ai',
  });

  const scrollToBottom = () =>
    viewportRef.current!.scrollTo({ top: viewportRef.current!.scrollHeight, behavior: 'smooth' });

  const handleSubmit = () => {
    append({
      role: 'user',
      content: input,
    });
    setInput('');
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      <Text>Another AI App</Text>
      <ScrollAreaAutosize viewportRef={viewportRef} h={500} mah={500}>
        <Flex direction="column" gap={16}>
          {messages.map((message) => (
            <ChatMessage key={message.id} message={message} />
          ))}
        </Flex>
      </ScrollAreaAutosize>
      <InputArea value={input} onChange={setInput} onSubmit={handleSubmit} />
    </>
  );
};

export default Home;
