'use client';

import { useRef, useEffect } from 'react';
import { useChat } from 'ai/react';
import { useMantineTheme } from '@mantine/core';
import { Flex, ScrollAreaAutosize, Paper, Container, Stack } from '@mantine/core';

import { ChatMessage, InputArea } from '@/components';

const Home = () => {
  const viewportRef = useRef<HTMLDivElement>(null);

  const theme = useMantineTheme();

  const { input, setInput, append, messages } = useChat({
    initialMessages: [
      {
        id: 'initial',
        role: 'assistant',
        content: 'Hi, ask me anything.',
        createdAt: new Date(),
      },
    ],
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
    <Container component={Flex} mih="100vh" mah="100vh" direction="column" align="center" justify="center">
      <Stack
        component={Paper}
        w="100%"
        bg="dark"
        p={30}
        style={{
          borderTop: `2px solid ${theme.colors.blue[6]}`,
        }}
      >
        <ScrollAreaAutosize viewportRef={viewportRef} h={500} mah={500} offsetScrollbars>
          <Flex direction="column" gap={16}>
            {messages.map((message) => (
              <ChatMessage key={message.id} message={message} />
            ))}
          </Flex>
        </ScrollAreaAutosize>
        <InputArea value={input} onChange={setInput} onSubmit={handleSubmit} />
      </Stack>
    </Container>
  );
};

export default Home;
