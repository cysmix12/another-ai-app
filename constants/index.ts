import { ModelProviders } from '@/models';

export const AVATAR = {
  USER: 'https://i.pinimg.com/236x/39/f1/0a/39f10a632a638c5703c00b6b98de7e7a.jpg',
  AI: 'https://thumb.ac-illust.com/d4/d4d8df1645a4f1e243b37cb00b857db4_t.jpeg',
};

export const MODEL_PROVIDERS: ModelProviders[] = [
  {
    label: 'Gemini',
    value: 'gemini',
  },
  {
    label: 'OpenAI',
    value: 'openai',
  },
];
