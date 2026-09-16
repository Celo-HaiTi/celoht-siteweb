# Organization Terminology Audit

## Summary

- Repositories audited: 15 accessible repositories in the Celo-HaiTi organization: CeloHT, `.github`, celoht-docs, celoht-research, celoht-dapp, celoht-smart-contracts, celoht-backend, celoht-indexer, celoht-governance, celoht-supabase, celoht-admin, celoht-siteweb, celoht-brand, celoht-demo, and celoht-investor-book.
- Initial editable matches: 39 source and documentation matches, plus 3 generated dependency-lock references.
- Matches removed or rewritten: 39.
- Files renamed: 0.
- Files deleted: 0.
- Database migrations: 1 compatibility migration added in celoht-supabase to rename an already-deployed profile-role function without data loss.
- Links repaired: none were affected.
- Generated dependency metadata: 4 references remain because they are the published name of a transitive npm package required by the current dependency graph; changing them manually would invalidate the lockfile.

## Change Table

| Repository | File | Line/Section | Previous Usage | New Usage | Reason |
| ---------- | ---- | ------------ | -------------- | --------- | ------ |
| celoht-admin | `lib/security/access.ts`, security test | role aliases | Prior role terminology | Previous role terminology | Preserve role normalization while using neutral internal naming. |
| celoht-admin | `PRODUCTION_MIGRATION_REPORT.md` | migration and risks | Prior public/fixture wording | Previous public/fixture wording | Keep the report factual without prohibited terminology. |
| celoht-brand | favicon and readiness docs | browser icon and scan notes | Prior browser/scanning wording | Previous/obsolete wording | Describe historical browser support and audit scope neutrally. |
| celoht-indexer | `src/indexing/persist.ts` | skipped projection event | Retired event label | Previous projection label | Rename an internal log event with no external call sites. |
| celoht-investor-book | readiness reports | naming and repository history | Prior organization wording | Previous organization wording | Preserve publication history and canonical identity. |
| celoht-research | readiness and reproducibility docs | findings and asset references | Earlier findings/assets | Earlier findings/assets | Keep historical context technically accurate. |
| celoht-siteweb | `src/lib/nav.ts` | documentation description | Prior documentation | Archived documentation | Clarify the destination's status. |
| celoht-smart-contracts | `AUDIT.md` | cleanup report | Self-referential prohibited wording | Prohibited terminology wording | Keep the audit validator/report meaningful without recreating matches. |
| celoht-supabase | migrations and documentation | profile role function and schema notes | Previous function/schema wording | Previous function/schema wording | Preserve deployed compatibility and avoid destructive schema changes. |

## Final Verification

- Retired terminology: FAIL for the siteweb lockfile only; 4 generated dependency references remain under the fixed published name of a transitive npm package. PASS for editable organization source and documentation.
- Retired currency identifier: PASS.
- Retired project spelling: PASS.
- Broken links: PASS for the changes made; no paths or filenames were renamed.
- Tests/build: PASS for executed checks: siteweb tests (8 files, 15 tests), typecheck, lint, diff checks, and Supabase schema validation (21 migrations, 36 tables). Full builds for every organization repository were not run.

The dependency-lock exception is limited to generated metadata for a required third-party package. It is not used by CeloHT application code or documentation and must not be manually rewritten. The repository has no safe dependency substitution that removes this published package name while preserving the current MDX toolchain.
