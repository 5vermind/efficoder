import zod from 'zod'

export const aiSchema = zod.object({
  code: zod.string(),
  changes: zod.array(
    zod.object({
      line: zod.string(),
      explanation: zod.string(),
    }),
  ),
})

const changesSchema = aiSchema.shape.changes

export type changesSchema = zod.infer<typeof changesSchema>
