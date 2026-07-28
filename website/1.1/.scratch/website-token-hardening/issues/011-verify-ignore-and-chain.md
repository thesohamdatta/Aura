## Parent

Closes the verification loop established by #45 (009) and ticket 010. Adds the gating mechanism so future tickets can flip individual rules from report-only to enforced.

## What to build

Two complementary changes:

1. **`.verifyignore` allowlist file at the repo root.** A JSON file with the shape `{ "file": "css/foo.css", "pattern": "shadow-", "reason": "..." }`. The linter reads this file on every run and suppresses FAIL lines whose `file`+`pattern` match. Defaults to an empty array. The allowlist is the only mechanism for intentional exceptions (e.g. legacy gradients, focus ring shadows).

2. **Chain command `scratch/verify.sh` (and `scratch/verify.cmd` for Windows).** A thin wrapper that runs `verify_static_site.js` and `verify_design_system.js` in sequence, prints the combined result, and exits 1 if either fails. The wrapper must be a single, paste-into-CI line.

Additionally, a `combine` mode flag is added to `verify_design_system.js` so it reads the exit code of `verify_static_site.js` when invoked from the chain helper.

## Acceptance criteria

- [ ] `.verifyignore` exists at repo root, parsable, defaults to empty.
- [ ] A test entry in `.verifyignore` suppresses a known-bad pattern in the audit script.
- [ ] `scratch/verify.sh` (or `.cmd`) runs both verifiers and exits 1 if either fails.
- [ ] `scratch/verify.cmd` works on Windows from a PowerShell or `cmd` prompt.
- [ ] `DEVELOPMENT_GUIDE.md` § 4 documents the combined command.
- [ ] `docs/specs/AGENT_RULES.md` references the new chain command.

## Blocked by

- #45 (009: Add scratch/verify_design_system.js skeleton)

## Notes

Do not add `npm` or any package manager. The wrapper is a shell script.
