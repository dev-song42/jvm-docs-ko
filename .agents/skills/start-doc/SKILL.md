---
name: start-doc
description: Start one JVM Docs KO roadmap document by updating local main, creating a dedicated docs branch, and initializing the correct private MDX draft. Use when the user asks to begin, scaffold, or create a Java, Spring Framework, or Spring Boot study document. Do not use for committing, pushing, opening a PR, merging, or deploying.
---

# Start a document

Create one safe workspace for one roadmap item. Stop after the branch and private draft exist.

## Repository conventions

- Treat `docs/roadmap.mdx` as the topic number, order, and status source of truth.
- Use `templates/study-note.mdx` for Java personal study notes.
- Use `templates/translation.mdx` for Spring Framework and Spring Boot translations.
- Use `main` as the base branch.
- Name branches `docs/<area>/<roadmap-number>-<slug>`, using `java`, `spring`, or `boot` for `<area>` and a short English kebab-case slug.
- Keep the new document at `draft: true` with `SourceInfo` status `작성 중`.
- Do not publish `작성 중` on the public roadmap unless the user explicitly asks for that separate public update.

## Workflow

1. Inspect the current branch and `git status --short`. If the worktree is dirty, do not stash, discard, or absorb the changes; report them and stop.
2. Resolve exactly one requested item in `docs/roadmap.mdx`. Ask for the item when the request does not identify it reliably.
3. Update the base without creating a merge commit:

   ```bash
   git switch main
   git fetch origin
   git merge --ff-only origin/main
   ```

   Stop on failure. Do not rebase, reset, or force synchronization.
4. Derive the branch name, destination MDX path, template, title, version, and primary source. Preserve the existing directory style; use lowercase kebab-case paths.
5. Show the full plan and wait for explicit approval before creating the branch or document.
6. Confirm that the approved branch is absent locally and remotely:

   ```bash
   git rev-parse --verify --quiet <branch>
   git ls-remote --heads origin <branch>
   ```

7. Create the approved branch and initialize the document from the selected template. Replace every scaffold placeholder that can already be determined, but leave the body headings ready for study and writing.
8. Confirm the new branch, document path, `draft: true`, `작성 중`, and clean separation from unrelated files.

## Boundary

Do not run `git add`, `git commit`, `git push`, create a PR, merge, or deploy. Finish by telling the user that `submit-doc` owns the next publishing stage.
