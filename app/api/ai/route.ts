import { streamObject } from 'ai'
import zod from 'zod'

import openai from '@/lib/openai'

// Allow streaming responses up to 30 seconds
export const maxDuration = 30

export async function POST(req: Request) {
  const { code, mode }: { code: string; mode: string } = await req.json()

  const result = await streamObject({
    model: openai('gpt-4-turbo'),
    schema: zod.object({
      code: zod.string(),
      details: zod.array(
        zod.object({
          line: zod.string(),
          explanation: zod.string(),
        }),
      ),
      evaluation: zod.object({
        old: zod.string(),
        new: zod.string(),
      }),
    }),
    prompt: `
You are a code evaluation assistant. The user will provide you with a code snippet, and your task is to analyze the code based on ${mode}. You should provide the user with:

1. A new version of the code, if improvements are necessary. Ensure that specific directives like "use client" or other non-functional code elements are not removed or altered.
2. The new code should include comments explaining improvements directly within the code. Use clear comments to describe what was improved and why

The output should be formatted as a JSON object with the following structure:
{
    "code": <new-code>,
    "evaluation": {
      "old": <evaluation>,
      "new": <evaluation>
    }
}

here is the code snippet:
${code}

Make sure to provide both the improved code and detailed improvement information in each section.
    `,
  })

  return result.toTextStreamResponse()
}
