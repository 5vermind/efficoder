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
    1: '**Performance**. Specifically, focus on improving both **time complexity** and **space complexity**.',
    2: `
1. Identify the current time and space complexity of the provided code and mention it in your feedback.
2. If the time complexity is worse than **O(n log n)** or if the space complexity can be improved, replace the algorithm with a more efficient one like **Merge Sort** or **Quick Sort** (for sorting) or other more efficient algorithms for non-sorting tasks.
3. Clearly explain the improvements, especially algorithmic changes, and how they impact performance (in terms of Big-O notation).
4. Ensure that the improved code includes comments detailing the improvements.
5. Ensure your output is concise and readable.
    `,
  },
  security: {
    1: '**Security**. Specifically, focus on identifying and mitigating any potential security vulnerabilities.',
    2: `
1. Identify common security vulnerabilities, such as:
  - **Injection attacks** (e.g., SQL injection, command injection)
  - **Cross-site scripting (XSS)**
  - **Insecure data handling** (e.g., hard-coded secrets, sensitive data exposure)
  - **Improper validation or sanitization of user inputs**
  - **Insecure authentication/authorization practices**
  - **Race conditions**
2. Suggest improvements or mitigation strategies for each identified vulnerability.
3. Ensure that the improved code includes comments explaining the security changes and why they were necessary.
4. If no security improvements are necessary, clearly explain why the existing code is secure.

    `,
  },
  maintainability: {
    1: '**Maintainability**. Specifically, focus on improving the readability, structure, and ease of modification or extension.',
    2: `
1. Identify areas where the code could be improved for better maintainability, such as:
  - **Complex or deeply nested logic** (refactor to improve clarity)
  - **Repetitive code** (suggest reusability improvements through functions or modules)
  - **Unclear variable or function names** (suggest more descriptive names)
  - **Lack of comments or documentation** (add comments explaining complex logic)
  - **Inconsistent coding styles** (recommend a consistent style or conventions)
  - **Long functions** (suggest splitting them into smaller, more focused functions)
2. Provide a new version of the code, applying any necessary changes to improve maintainability.
3. Ensure that the improved code includes comments explaining the changes and why they enhance maintainability.
4. If no maintainability improvements are necessary, clearly explain why the code is already maintainable.
`,
  },
}
