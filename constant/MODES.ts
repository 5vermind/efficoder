export const MODES = [
  'performance',
  'security',
  'readability',
  'maintainability',
]

export const MODES_DESCRIPTION: {
  [mode: (typeof MODES)[number]]: {
    1: string
    2: string
  }
} = {
  performance: {
    1: '**Performance**. If the time complexity is worse than **O(n log n)**, replace the algorithm with a more efficient one like **Merge Sort** or **Quick Sort**. Focus on improving both time and space complexity.',
    2: 'The new code must include comments explaining the improvements, including algorithm changes.',
  },
  security: {
    1: '**Security**. Identify any potential security vulnerabilities, such as improper input validation, insecure algorithms, or unsafe handling of sensitive data.',
    2: 'Clear comments in the new code explaining the security improvements and why they are necessary.',
  },
  readability: {
    1: 'Readability and maintainability. improve code readability and maintainability',
    2: 'Comments explaining what was changed, such as improving naming conventions, adding meaningful comments, or refactoring for simplicity.',
  },
  maintainability: {
    1: '**Maintainability**. Focus on improving the modularity and abstraction to make the code more maintainable. For example, if there are repeated mathematical operations like multiplication, consider abstracting them into reusable functions.',
    2: 'Comments explaining how these changes improve maintainability, such as making future modifications easier or reducing code duplication.',
  },
}
