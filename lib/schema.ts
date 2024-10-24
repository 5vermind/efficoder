import zod from 'zod'

export const aiSchema = zod.object({
  code: zod.string(),
  changes: zod.array(
    zod.object({
      line: zod.string(),
      explanation: zod.string(),
    }),
  ),
  evaluation: zod.object({
    old: zod.string(),
    new: zod.string(),
  }),
})
