# Spec: Asset Repository Migration

**Date:** 2026-05-28
**Topic:** Asset Migration

## Context
The project currently contains a cluttered `Assets/` directory with various subfolders (`3D PARTS`, `chat gpt image`, `MAIN`, etc.). These need to be replaced by a clean, professional set of assets located on the user's desktop.

## Requirements
1. **Full Cleanup:** Remove all existing content in `D:\projects\2026\Aura-Wearable-AI\Assets`.
2. **Bulk Migration:** Copy all files and folders from `C:\Users\Soham\Desktop\AURA IMAGES\Github readme` to `D:\projects\2026\Aura-Wearable-AI\Assets`.
3. **Tracking:** Ensure the new assets are ready to be tracked by Git.

## Approach
- Use PowerShell commands via `run_shell_command` to perform the file operations.
- `Remove-Item` with `-Recurse -Force` for the cleanup.
- `Copy-Item` with `-Recurse -Force` for the migration.

## Verification
- List the `Assets/` directory after migration to confirm the new structure matches the source.
- Check `git status` to see the staged/unstaged changes.
