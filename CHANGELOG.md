# Changelog

All notable changes to this project will be documented in this file.

## [0.18.0](https://github.com/grafana/levitate/compare/v0.17.3...v0.18.0) (2026-08-27)


### Features

* **dependencies:** drop debug, tty-table; use util.debuglog, cli-table3 ([#1040](https://github.com/grafana/levitate/issues/1040)) ([25b96d0](https://github.com/grafana/levitate/commit/25b96d09d3685e50bb36467c97307207a73c397c))
* **dependencies:** drop node-fetch, execa, ora; misplaced [@stylistic](https://github.com/stylistic) ([#1038](https://github.com/grafana/levitate/issues/1038)) ([cfd4041](https://github.com/grafana/levitate/commit/cfd4041c0167753909b936b57aa36e3a31b7a15f))


### Bug Fixes

* **compare:** ignore cosmetic `.d.ts` emit differences in parameter type diffing ([#1052](https://github.com/grafana/levitate/issues/1052)) ([876206c](https://github.com/grafana/levitate/commit/876206c1794cd5cafad06959f9ddaf5a5d290df6))
* **fixtures:** rename package.json/yarn.lock to avoid security scan false positives ([#1026](https://github.com/grafana/levitate/issues/1026)) ([8ef9cfb](https://github.com/grafana/levitate/commit/8ef9cfb7bfcf34cddc6817f21e66879a5297e505)), closes [#594](https://github.com/grafana/levitate/issues/594)
* **security/critical/:** update dependency tar to v7.5.21 [security] ([#1043](https://github.com/grafana/levitate/issues/1043)) ([32e83cf](https://github.com/grafana/levitate/commit/32e83cf7af40c5473c0b46f51dad5e49aea417f6))

## [0.17.3](https://github.com/grafana/levitate/compare/v0.17.2...v0.17.3) (2026-05-26)


### Bug Fixes

* adds changes even when detail is empty ([#1021](https://github.com/grafana/levitate/issues/1021)) ([42a5b5d](https://github.com/grafana/levitate/commit/42a5b5d73fa115a145b944320561412dd3dcd7e9))
* **deps:** update dependency tty-table to v5 ([#1003](https://github.com/grafana/levitate/issues/1003)) ([de249ed](https://github.com/grafana/levitate/commit/de249edb6edf58803a29fc036537d855125ae800))
* **deps:** update mature, high-confidence npm dependencies ([#1025](https://github.com/grafana/levitate/issues/1025)) ([17e9768](https://github.com/grafana/levitate/commit/17e9768e437759d4667a82cc33fa875f64c92f25))
* flush stdout/stderr before exit in CI to prevent lost output ([#1022](https://github.com/grafana/levitate/issues/1022)) ([1a88dc2](https://github.com/grafana/levitate/commit/1a88dc21c889ad9b344363c96dc51f440014d9ca))
* **release-please:** drop component prefix from tag name ([#1034](https://github.com/grafana/levitate/issues/1034)) ([544cb69](https://github.com/grafana/levitate/commit/544cb69d37f8d597c092564813a441b7e4b6ae43))

## [0.4.4] - 2022-08-25

- Detect changes in function parameters direct dependencies. Note: this won't work with more parameter types. [137](https://github.com/grafana/levitate/pull/137)

## [0.4.3] - 2022-08-22

- Fixes an issue where re-exported types from files with a dot in the the filename were not read [131](https://github.com/grafana/levitate/pull/131)

## [0.4.2] - 2022-08-10

- Resolve type declaration file from package.json property [#122](https://github.com/grafana/levitate/pull/122)

## [0.4.1] - 2022-08-08

- Improve CLI exit code [#118](https://github.com/grafana/levitate/pull/118)
- Upgrade yargs [#118](https://github.com/grafana/levitate/pull/118)
- Improve help messages on CLI [#118](https://github.com/grafana/levitate/pull/118)

## [0.4.0] - 2022-08-04

- Add `is-compatible` command [#108](https://github.com/grafana/levitate/pull/108)
- Upgrade dependencies [#103](https://github.com/grafana/levitate/pull/103)
- Fixes the `list-exports` command not working with node packages [#99](https://github.com/grafana/levitate/pull/99)

## [0.3.0] - 2022-01-24

### Added

- Expose code and TypeScript types from the package [#32](https://github.com/grafana/levitate/pull/32)
- Add exposed utility functions for working with Git repositories and NPM packages [#32](https://github.com/grafana/levitate/pull/32)

### Removed

- Remove the `levitate gobble` command as it was Grafana specific [#33](https://github.com/grafana/levitate/pull/33)

## [0.2.1] - 2022-01-20

### Added

- `levitate compare` now works on single files as well [#17](https://github.com/grafana/levitate/pull/17)

## [0.2.0] - 2022-01-19

### Added

- Added better comparison support for classes ([#14](https://github.com/grafana/levitate/pull/14))
- Added better comparison support for interfaces ([#14](https://github.com/grafana/levitate/pull/14))
