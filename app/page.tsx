'use client';

import { useRef, useState, useEffect } from 'react';
import { useChat } from 'ai/react';
import { useMantineTheme } from '@mantine/core';
import { Flex, ScrollAreaAutosize, Paper, Container, Stack, Button } from '@mantine/core';

import { ModelProvider } from '@/models';
import { ChatMessage, InputArea, ModelProviderPicker } from '@/components';

const Home = () => {
  const viewportRef = useRef<HTMLDivElement>(null);

  const theme = useMantineTheme();

  const [modelProvider, setModelProvider] = useState<ModelProvider>('gemini');

  const { input, setInput, append, messages, error, reload } = useChat({
    id: modelProvider,
    api: '/api/ai',
    body: {
      modelProvider: modelProvider,
    },
    initialMessages: [
      {
        id: 'initial',
        role: 'assistant',
        content: 'Hi, ask me anything.',
        createdAt: new Date(),
      },
    ],
  });

  const scrollToBottom = () =>
    viewportRef.current!.scrollTo({ top: viewportRef.current!.scrollHeight, behavior: 'smooth' });

  const handleModelProviderChange = (value: string) => {
    setModelProvider(value as ModelProvider);
  };

  const handleReload = () => {
    reload();
  };

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
    <Container mih="100vh" mah="100vh">
      <Flex mih="100vh" mah="100vh" direction="column" align="center" justify="center" gap={16}>
        <ModelProviderPicker value={modelProvider} onChange={handleModelProviderChange} />
        <Stack
          component={Paper}
          w="100%"
          bg="dark"
          p={30}
          style={{
            borderTop: `2px solid ${error ? theme.colors.red[6] : theme.colors.blue[6]}`,
            transition: 'border-color 0.3s ease-in-out',
          }}
        >
          {error && (
            <Button onClick={handleReload} variant="light" color="red" fullWidth>
              An error has occured. Click here to reload.
            </Button>
          )}
          <ScrollAreaAutosize viewportRef={viewportRef} h={500} mah={500} offsetScrollbars>
            <Flex direction="column" gap={16}>
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
            </Flex>
          </ScrollAreaAutosize>
          <InputArea value={input} onChange={setInput} onSubmit={handleSubmit} />
        </Stack>
      </Flex>
    </Container>
  );
};

export default Home;
