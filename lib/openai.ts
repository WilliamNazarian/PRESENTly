type ChatGPTAgent = "user" | "system";

interface Messages {
  role: ChatGPTAgent  ;
  content: string;
}
export interface PromptPayload {
  model: string;
  messages: Messages[];
  temperature: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
  stream: boolean;
}
