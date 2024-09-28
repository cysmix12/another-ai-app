import { Group, Stack, SegmentedControl, Text } from '@mantine/core';

import { MODEL_PROVIDERS } from '@/constants';

interface ModelProviderPickerProps {
  value: string;
  onChange: (value: string) => void;
}

export const ModelProviderPicker = (props: ModelProviderPickerProps) => {
  const { value, onChange } = props;

  return (
    <Group w="100%">
      <Stack gap={4}>
        <Text size="sm" fw={500} ff="monospace">
          AI Engine
        </Text>
        <SegmentedControl value={value} onChange={onChange} data={MODEL_PROVIDERS} />
      </Stack>
    </Group>
  );
};
