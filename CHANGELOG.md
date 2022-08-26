# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

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
