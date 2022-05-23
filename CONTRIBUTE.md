# Contribution rules

## VSCode settings

```json
{
  "[scss]": {
    "editor.formatOnSave": true
  },
  "scss.lint.unknownAtRules": "ignore",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "eslint.workingDirectories": ["packages/frontend", "packages/backend"],
  "eslint.validate": ["javascript", "typescript", "typescriptreact"],
  "javascript.format.enable": true,
  "tailwindCSS.includeLanguages": {
    "typescript": "javascript", // if you are using typescript
    "typescriptreact": "javascript" // if you are using typescript with react
  },
  "tailwindCSS.experimental.configFile": "./packages/frontend/tailwind.config.cjs",
  "editor.quickSuggestions": {
    "strings": true // forces VS Code to trigger completions when editing "string" content
  },
  "tailwindCSS.experimental.classRegex": [
    "tw`([^`]*)", // tw`...`
    "tw\\.[^`]+`([^`]*)`", // tw.xxx<xxx>`...`
    "tw\\(.*?\\).*?`([^`]*)" // tw(Component)<xxx>`...`
  ]
}
```