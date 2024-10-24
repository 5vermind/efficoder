import { streamObject } from 'ai'

import openai from '@/lib/openai'
import { MODES_DESCRIPTION } from '@/constant/MODES'
import { aiSchema } from '@/lib/schema'

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  const { code, mode }: { code: string; mode: string } = await req.json()

  const result = await streamObject({
    model: openai('gpt-4-turbo'),
    schema: aiSchema,
    prompt: `
You are a code evaluation assistant. The user will provide you with a code snippet, and your task is to analyze the code based on ${MODES_DESCRIPTION[mode][1]}. 

Your goal is to:
${MODES_DESCRIPTION[mode][2]}

The output should be formatted as a JSON object with the following structure:
{
    "code": <new-code>,
    "changes": [
      {
        "line": <from>-<to>,
        "explanation": <explanation>
      },
      ...
    ],
}

Please provide both the improved code and detailed information for each change.

**Note**: If no improvements are necessary, clearly mention why the existing code is already optimal. Explanations should be clear and concise and written in a professional tone. explanations should be korean.


here is the code snippet:
${code}
    `,
  })

  return result.toTextStreamResponse()
}
