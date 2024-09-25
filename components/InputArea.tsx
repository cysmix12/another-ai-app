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
    onSubmit && onSubmit();
  };

  return (
    <Flex component="form" gap={16} onSubmit={handleSubmit}>
      <Box w="100%">
        <Input value={value} onChange={handleChange} />
      </Box>
      <Button type="submit">Send</Button>
    </Flex>
  );
};
