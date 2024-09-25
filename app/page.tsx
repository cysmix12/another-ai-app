'use client';

import { useChat } from 'ai/react';
import { Input, Button } from '@mantine/core';

const InputArea = (props) => {
  const { value, onChange, onSubmit } = props;

  const handleChange = (e) => {
    const value = e.target.value;
    onChange && onChange(value);
  };

  const handleSubmit = () => {
    onSubmit && onSubmit();
  };

  return (
    <>
      <Input value={value} onChange={handleChange} />
      <Button onClick={handleSubmit}>Submit</Button>
    </>
  );
};

const Home = () => {
  const { input, setInput, append } = useChat({
    api: '/api/ai',
  });

  return (
    <>
      <InputArea
        value={input}
        onChange={(newValue) => setInput(newValue)}
        onSubmit={() =>
          append({
            role: 'user',
            content: input,
          })
        }
      />
    </>
  );
};

export default Home;
