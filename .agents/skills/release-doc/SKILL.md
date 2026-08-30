---
name: release-doc
description: Release a validated JVM Docs KO document PR by confirming its exact head commit and checks, obtaining final merge approval, merging it into main with a merge commit, waiting for GitHub Pages, and verifying the public URLs. Use when the user asks to merge, publish, release, or deploy an existing document PR. Do not edit content or create new commits.
---

# Release a document

Merge one already-submitted document PR and prove that GitHub Pages serves it. Do not change document content in this stage.

## Inspect the release candidate

Resolve the exact repository and PR, then confirm:

- the PR is open and targets `main`;
- its current head SHA and included commits;
- required checks have completed successfully;
- GitHub reports no merge conflict and the PR is mergeable;
- the PR content is the document the user intends to publish.

If checks are pending, wait only when the user asked to finish the release. If a check fails, the head changes unexpectedly, or the PR is blocked, stop and report the evidence. Do not bypass protections or use administrator overrides.

## Approval gate

Show the PR URL, title, head SHA, merge method, checks, and expected public route. Obtain explicit final approval immediately before changing PR state or merging.

## Merge and verify deployment

After approval:

1. If the approved PR is still draft, mark it ready for review.
2. Merge with a merge commit and an expected-head guard. Do not squash, rebase, enable auto-merge, or force the operation unless the user changes the decision.
3. Capture the resulting `main` merge SHA.
4. Find the `Deploy to GitHub Pages` workflow run for that SHA and wait for both build and deploy jobs to complete successfully.
5. Derive the production base URL from `docusaurus.config.ts`. Verify the site landing page and released document route return HTTP 200.
6. Report the PR, merge SHA, workflow URL, and public document URL.

## Boundary

Do not edit files, create commits, delete local or remote branches, or repair failing CI in this skill. Leave branches intact unless the user explicitly asks to remove them.
