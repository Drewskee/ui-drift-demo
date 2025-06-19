# 📸 Percy + Storybook Demo (in GitHub Codespaces)

Welcome! This repo showcases a visual regression testing workflow using **Storybook** and **Percy**, running inside GitHub **Codespaces** and **GitHub Actions**.

You'll explore how subtle UI changes can be caught early using automated visual testing.

---

## 🚀 Getting Started in Codespaces

1. **Open this repo in GitHub Codespaces**

bash
```
npm install
npm run storybook
```

## View Visual Regression In Percy
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/8d28d3d2/web/drift-ui-demo-41436cdb)


### 🔁 To test locally:
1. **Need Percy Token Added to Local**.

bash
```
export PERCY_TOKEN=web_8335f5a3128b8a8f2d9db5617a7177f4102b8ff50adc1aca516e1685dd46e640

```

```
npm run build-storybook
npx percy storybook ./storybook-static
```

## AVAILBLE COMMANDS
```
| Command                   | Description                                             |
| ------------------------- | ------------------------------------------------------- |
| `npm run storybook`       | Start the Storybook dev server on port `6006`           |
| `npm run build-storybook` | Build static version of Storybook (`/storybook-static`) |
| `npm run percy:storybook` | Run Percy snapshot tests against the built Storybook    |
```


## Architecture

A complete DevOps pipeline for automated visual regression testing using Percy, Storybook, and GitHub Actions. This project demonstrates how to catch visual changes in your UI components automatically, ensuring consistent user experiences across all deployments.
🎯 What This Project Does

Automatically detects visual changes in UI components on every pull request
Tags PRs with visual changes for review (doesn't block development)
Blocks PRs only when actual errors occur (broken tests, configuration issues)
Provides clear feedback via automated comments and labels
Integrates seamlessly with your existing GitHub workflow

```
    A[Developer Creates PR] --> B[GitHub Action Triggers]
    B --> C[Build Storybook]
    C --> D[Run Percy Visual Tests]
    D --> E{Percy Results}
    E -->|Visual Changes| F[Add 'percy-tested' Label]
    E -->|No Changes| G[Add 'percy-tested' Label]
    E -->|Error| H[Fail Workflow]
    F --> I[Comment with Percy Dashboard Link]
    G --> J[Comment with Success Message]
    H --> K[Comment with Error Details]
```

## How It Works
PR Workflow

```
Trigger: Percy runs automatically on pull requests
Build: Storybook generates static component files
Capture: Percy takes screenshots of all components
Compare: New screenshots compared against baseline
Report: Automated feedback via comments and labels
```

### Outcomes
✅ Visual Changes Detected

PR tagged with percy-tested (not blocked)
Comment with Percy dashboard link
Workflow passes

✅ No Visual Changes

PR tagged with percy-tested
Success confirmation comment
Workflow passes

❌ Percy Errors

Workflow fails (blocks PR)
Error details in comments
Requires fix before merge


### What Percy Considers "Success" vs "Failure":
✅ Passes (Exit 0):
* No visual differences detected
* Small, acceptable differences (Percy's AI auto-approves minor changes)
* All differences have been manually approved in the Percy dashboard
❌ Fails (Exit 1):
* Significant visual differences detected that need human review
* New snapshots that need baseline establishment
* Any diff marked as "needs review" in Percy dashboard


## Stack

- Next.js
- Storybook
- Percy
- TailwindCSS
- GitHub Actions
- GitHub Codespaces



Related Links
https://www.browserstack.com/docs/percy/integrate/storybook
https://storybook.js.org/addons/@percy/storybook

Link To Percy Build
https://percy.io/8d28d3d2/web/drift-ui-demo-41436cdb




# and Many Thanks to the Browserstack Team!!!
