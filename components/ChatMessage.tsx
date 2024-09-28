import { Message } from '@ai-sdk/ui-utils';
import { Paper, Avatar, Flex, Stack, Text, TypographyStylesProvider } from '@mantine/core';
import { format } from 'date-fns';
import Markdown from 'markdown-to-jsx';

import { AVATAR } from '@/constants';

interface WithMarkdownProps {
  content: string;
}

const WithMarkdown = (props: WithMarkdownProps) => {
  const { content } = props;

  return (
    <TypographyStylesProvider>
      <Markdown>{content}</Markdown>
    </TypographyStylesProvider>
  );
};

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = (props: ChatMessageProps) => {
  const { message } = props;

  const isUser = message.role === 'user';

  return (
    <Flex gap={16} direction={isUser ? 'row-reverse' : 'row'}>
      <Avatar src={isUser ? AVATAR.USER : AVATAR.AI} />
      <Stack maw="75%" gap={4}>
        <Text size="sm" c="gray.6" ta={isUser ? 'right' : 'left'} ff="monospace">
          {isUser ? 'Me' : 'AI Helper'}
        </Text>
        <Paper py={8} px={16} bg={isUser ? 'blue.9' : 'dark.6'}>
          {isUser ? (
            <Text
              style={{
                wordBreak: 'break-all',
              }}
            >
              {message.content}
            </Text>
          ) : (
            <WithMarkdown content={message.content} />
          )}
        </Paper>
        <Text size="xs" c="gray.7" mt={4} ta={isUser ? 'right' : 'left'}>
          {format(message.createdAt as Date, 'p')}
        </Text>
      </Stack>
    </Flex>
  );
};
