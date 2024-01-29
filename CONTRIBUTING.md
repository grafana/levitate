# Contributing

## How do I... <a name="toc" id="toc"></a>

- [Use This Guide](#introduction)?
- Ask or Say Something? 🤔🐛😱
  - [Request Support](#request-support)
  - [Report an Error or Bug](#report-an-error-or-bug)
  - [Request a Feature](#request-a-feature)
- Make Something? 🤓👩🏽‍💻📜🍳
  - [Project Setup](#project-setup)
  - [Contribute Documentation](#contribute-documentation)
  - [Contribute Code](#contribute-code)
- Manage Something ✅🙆🏼💃👔
  - [Create a Release](#create-a-release)

## Introduction

Thank you so much for your interest in contributing!. All types of contributions are encouraged and valued. See the [table of contents](#toc) for different ways to help and details about how this project handles them!📝

Please make sure to read the relevant section before making your contribution! It will make it a lot easier for us maintainers to make the most of it and smooth out the experience for all involved. 💚

The Project Team looks forward to your contributions. 🙌🏾✨

## Request Support

If you have a question about this project, how to use it, or just need clarification about something:

- Open an Issue at https://github.com/grafana/levitate/issues
- Provide as much context as you can about what you're running into.
- Provide project and platform versions (nodejs, npm, etc), depending on what seems relevant. If not, please be ready to provide that information if maintainers ask for it.

Once it's filed:

- The project team will [label the issue](#label-issues).
- Someone will try to have a response soon.
- If you or the maintainers don't respond to an issue for 30 days, the issue will be closed. If you want to come back to it, reply (once, please), and we'll reopen the existing issue. Please avoid filing new issues as extensions of one you already made.

## Report an Error or Bug

If you run into an error or bug with the project:

- Open an Issue at https://github.com/grafana/levitate/issues
- Include _reproduction steps_ that someone else can follow to recreate the bug or error on their own.
- Provide project and platform versions (nodejs, npm, etc), depending on what seems relevant. If not, please be ready to provide that information if maintainers ask for it.

Once it's filed:

- The project team will [label the issue](#label-issues).
- A team member will try to reproduce the issue with your provided steps. If there are no repro steps or no obvious way to reproduce the issue, the team will ask you for those steps and mark the issue as `needs-repro`. Bugs with the `needs-repro` tag will not be addressed until they are reproduced.
- If the team is able to reproduce the issue, it will be marked `needs-fix`, as well as possibly other tags (such as `critical`), and the issue will be left to be [implemented by someone](#contribute-code).
- If you or the maintainers don't respond to an issue for 30 days, the issue will be closed. If you want to come back to it, reply (once, please), and we'll reopen the existing issue. Please avoid filing new issues as extensions of one you already made.
- `critical` issues may be left open, depending on perceived immediacy and severity, even past the 30 day deadline.

## Request a Feature

If the project doesn't do something you need or want it to do:

- Open an Issue at https://github.com/grafana/levitate/issues
- Provide as much context as you can about what you're running into.
- Please try and be clear about why existing features and alternatives would not work for you.

Once it's filed:

- The project team will [label the issue](#label-issues).
- The project team will evaluate the feature request, possibly asking you more questions to understand its purpose and any relevant requirements. If the issue is closed, the team will convey their reasoning and suggest an alternative path forward.
- If the feature request is accepted, it will be marked for implementation with `feature-accepted`, which can then be done by either by a core team member or by anyone in the community who wants to [contribute code](#contribute-code).

Note: The team is unlikely to be able to accept every single feature request that is filed. Please understand if they need to say no.

## Project Setup

So you wanna contribute some code! That's great! This project uses GitHub Pull Requests to manage contributions, so [read up on how to fork a GitHub project and file a PR](https://guides.github.com/activities/forking) if you've never done it before.

If this seems like a lot or you aren't able to do all this setup, you might also be able to [edit the files directly](https://help.github.com/articles/editing-files-in-another-user-s-repository/) without having to do any of this setup. Yes, [even code](#contribute-code).

If you want to go the usual route and run the project locally, though:

- [Install Node.js](https://nodejs.org/en/download/)
- [Fork the project](https://guides.github.com/activities/forking/#fork)

Then in your terminal:

- `cd path/to/your/clone`
- `yarn install`
- `yarn test && yarn build`

And you should be ready to go!

### Commands

Levitate consists of two commands _compare_ and _list-imports_. Developing against these commands can be done individually by running `yarn dev-compare` or `yarn dev-imports`. These scripts will build the project, execute the command against the fixtures, then watch for changes before rerunning build and command execution.

### Environment variables

- Use `DEBUG=*` to display debugging messages
- Use `LEVITATE_CACHE=1` to re-use downloaded npm packages.

### Run with swc-node for faster iteration

You can run directly from the source with `swc-node`. e.g:

`node -r @swc-node/register src/bin.ts --inspect ./src/bin.ts compare --prev @grafana/schema@9.0.7 --current @grafana/schema@latest`

### Fixtures for common development cases and test

The `./fixtures/` directory contains several fixtures examples of common and edge cases we want to cover in levitate. Some of these fixtures are also used in unit tests.

List of available fixtures:

#### compare

Files to test the compare command. e.g.: `node ./dist/bin.js compare --prev ./fixtures/compare/bundle-old.ts --current ./fixtures/compare/bundle-new.ts`

#### exports

Files to test the list-exports command e.g.: `node ./dist/bin.js list-exports ./fixtures/exports/package1/index.ts`

#### imports

Files to test the list-imports command: e.g.: `node ./dist/bin.js list-imports --path ./fixtures/imports/package/src/module.ts --filters "@grafana/data"`

#### usage

Files to test the `getUsageInfo` API. These files are used inside the unit tests and are also usefult to develop levitate commands in general, specially `is-compatible`.

You can run, for example, `is-compatible` in the `grafana-plugin` fixture and modify it at will to test more use cases.

## Contribute Documentation

Documentation is a super important, critical part of this project. Docs are how we keep track of what we're doing, how, and why. It's how we stay on the same page about our policies. And it's how we tell others everything they need in order to be able to use this project -- or contribute to it. So thank you in advance.

Documentation contributions of any size are welcome! Feel free to file a PR even if you're just rewording a sentence to be more clear, or fixing a spelling mistake!

To contribute documentation:

- [Set up the project](#project-setup).
- Edit or add any relevant documentation.
- Make sure your changes are formatted correctly and consistently with the rest of the documentation.
- Re-read what you wrote, and run a spellchecker on it to make sure you didn't miss anything.
- Go to https://github.com/grafana/levitate/pulls and open a new pull request with your changes.
- Please make use of the Pull Request Template. If your PR is connected to an open issue, add a line in your PR's description that says `Fixes: #123`, where `#123` is the number of the issue you're fixing.

Once you've filed the PR:

- One or more maintainers will use GitHub's review feature to review your PR.
- If the maintainer asks for any changes, edit your changes, push, and ask for another review.
- If the maintainer decides to pass on your PR, they will thank you for the contribution and explain why they won't be accepting the changes. That's ok! We still really appreciate you taking the time to do it, and we don't take that lightly. 💚
- If your PR gets accepted, it will be marked as such, and merged into the `latest` branch soon after. Your contribution will be distributed to the masses next time the maintainers [create a release](#create-a-release)

## Contribute Code

We like code commits a lot! They're super handy, and they keep the project going and doing the work it needs to do to be useful to others.

Code contributions of just about any size are acceptable!

The main difference between code contributions and documentation contributions is that contributing code requires inclusion of relevant tests for the code being added or changed. Contributions without accompanying tests will be held off until a test is added, unless the maintainers consider the specific tests to be either impossible, or way too much of a burden for such a contribution.

To contribute code:

- [Set up the project](#project-setup).
- Make any necessary changes to the source code.
- Include any [additional documentation](#contribute-documentation) the changes might need.
- Write tests that verify that your contribution works as expected.
- Go to https://github.com/grafana/levitate/pulls and open a new pull request with your changes.
- Please make use of the Pull Request Template. If your PR is connected to an open issue, add a line in your PR's description that says `Fixes: #123`, where `#123` is the number of the issue you're fixing.

Once you've filed the PR:

- Barring special circumstances, maintainers will not review PRs until all checks pass.
- One or more maintainers will use GitHub's review feature to review your PR.
- If the maintainer asks for any changes, edit your changes, push, and ask for another review. Additional tags (such as `needs-tests`) will be added depending on the review.
- If the maintainer decides to pass on your PR, they will thank you for the contribution and explain why they won't be accepting the changes. That's ok! We still really appreciate you taking the time to do it, and we don't take that lightly. 💚
- If your PR gets accepted, it will be marked as such, and merged into the `latest` branch soon after. Your contribution will be distributed to the masses next time the maintainers [create a release](#create-a-release)

## Create A Release

Creating a new release requires running the [NPM bump version action](https://github.com/grafana/levitate/actions/workflows/npm-bump-version.yml). Click the trigger workflow and specify the type of release (patch, minor, or major). The workflow will update package.json, commit and push which will trigger the publish to npm and create a github release.
