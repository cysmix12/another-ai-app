import { Box, Flex, Input, Button } from '@mantine/core';

interface InputAreaProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit: () => void;
}

export const InputArea = (props: InputAreaProps) => {
  const { value, onChange, onSubmit } = props;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onChange && onChange(value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLDivElement>) => {
    e.preventDefault();
    value && onSubmit && onSubmit();
  };

  return (
    <Flex component="form" gap={16} onSubmit={handleSubmit}>
      <Box w="100%">
        <Input variant="filled" placeholder="Type a message..." value={value} onChange={handleChange} />
      </Box>
      <Box>
        <Button type="submit" ff="monospace" disabled={!value}>
          Send
        </Button>
      </Box>
    </Flex>
  );
};
