---
name: submit-doc
description: Finalize and submit one completed JVM Docs KO document by updating its public navigation and roadmap state, validating the Docusaurus site, committing only related files, pushing the docs branch, and opening a ready main-targeted PR. Use when the user asks to upload, submit, commit, push, or open a PR for a finished document. Do not merge or deploy the PR.
---

# Submit a completed document

Turn one finished private draft into a validated, review-ready pull request. Stop before merge.

## Completion checks

- Require a non-`main` document branch and identify the single roadmap item being submitted.
- Preserve unrelated dirty files and exclude them from staging.
- Confirm the document has no scaffold placeholders or unfinished sections that make publication misleading.
- Confirm a real source URL, source label, document type, supported version, and any required unofficial-translation notice.
- Keep personal explanation distinct from translated text; use `TranslatorNote` for additions to a translation.
- Do not claim that source licensing was verified when it was not. Stop for user direction if redistribution rights are materially unclear.

## Finalize the public document

1. Remove `draft: true` only when the document is actually ready.
2. Set `SourceInfo` status to `작성 완료` and set `reviewedAt` to the actual completion date.
3. Change the matching row in `docs/roadmap.mdx` to `작성 완료` and link its title to the document.
4. Add the document to `sidebars.ts` in roadmap order when it is not already reachable through the sidebar.
5. Keep versions, titles, slugs, source information, and terminology consistent across the document, roadmap, and navigation.

## Validate and propose publication

Run fresh checks after the last edit:

```bash
pnpm typecheck
pnpm build
git diff --check
```

If a check fails, stop and report the failure; do not commit or push an unverified document.

Inspect the full diff and present a publication plan containing:

- related files to stage;
- proposed `docs: <간결한 한국어 설명>` commit title;
- head branch and `main` base;
- validation results;
- proposed ready PR title and body.

Wait for explicit approval before staging, committing, pushing, or creating the PR.

## Commit, push, and open the PR

After approval:

1. Stage only the approved explicit paths. Never use broad staging when unrelated changes exist.
2. Commit the approved logical change without amending unrelated history.
3. Push normally with upstream tracking. Never force-push.
4. Check GitHub CLI authentication and whether the current branch already has an open PR.
5. Reuse an existing PR instead of creating a duplicate. Otherwise create a **ready**, not draft, PR targeting `main`. Use a body with `변경 내용`, `작성·선별 기준`, and `검증` sections.
6. Report the branch, commit, PR URL, and validation evidence.

## Boundary

Do not mark a PR ready when the user explicitly requested a draft. Do not merge, delete branches, or wait for a production deployment. Tell the user that `release-doc` owns those actions.
