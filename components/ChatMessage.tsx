import { Message } from '@ai-sdk/ui-utils';
import { Paper, Avatar, Flex, TypographyStylesProvider, Transition } from '@mantine/core';
import { useMounted } from '@mantine/hooks';
import Markdown from 'markdown-to-jsx';

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

  const isMounted = useMounted();

  const isUser = message.role === 'user';

  return (
    <Flex gap={16} direction={isUser ? 'row-reverse' : 'row'}>
      <Avatar />
      <Transition
        mounted={isMounted}
        timingFunction="ease"
        duration={400}
        transition={isUser ? 'pop-top-right' : 'pop-top-left'}
      >
        {(styles) => (
          <Paper p={16} maw="80%" withBorder style={styles}>
            {isUser ? message.content : <WithMarkdown content={message.content} />}
          </Paper>
        )}
      </Transition>
    </Flex>
  );
};
