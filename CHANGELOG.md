# Change Log

## [Unreleased]

---

## [1.1.15] - 2020-12-16 13:52:43

### Added

- Partial `TypeScript` support

> semanticTokenColors

- `class`
- `type`
- `interface`
- `property`
- `comment`
- `number`
- `variable`

> tokenColors

- `keyword.operator`
- `punctuation.separator`
- `template-expression`
- `storage.type`
- `meta.block`
- `punctuation.terminator`
- `typeparameters`
- `string.template`

### Changed

> semanticTokenColors

- `member` -> `method`

### Fixed

> Js

- `function` colors

---

## [1.1.8] - 2020-09-16 17:43:28

### Changed

> Vue

- Vue `variable.other.readwrite` - syntax highlighting

> Editor

- `editorSuggestWidget` - better `highlightForeground` color

### Fixed

- fixed minor bugs

---

## [1.1.3] - 2020-08-30 08:30:26

- added automatic versioning of updates

### Added

- `variable.defaultLibrary` - syntax highlighting
- `new.expr` - syntax highlighting
- `punctuation.definition.string` - syntax highlighting

### Fixed

- `console.*` - changed to a softer color
- `string.template` - fixed variables
- `list.inactiveSelectionBackground` - changed to normal color display

---

## [1.0.10] - 2020-08-21 02:28:35

### Fixed

- fixed minor bugs

---

## [1.0.9] - 2020-08-21 02:18:50

### Added

- `readme` gallery
- `vue` -`variable.other.readwrite.js` syntax highlighting
- `vue` -`meta.object-literal.key` syntax highlighting
- `JavaScript` -`punctuation.definition.template-expression` syntax highlighting
- `JavaScript` -`punctuation.definition.string.template` syntax highlighting
- `JavaScript` -`meta.template.expression` syntax highlighting

### Changed

- `dropBackground` - changed to a softer color

### Fixed

- `focusBorder` - changed to a softer color

### Removed

- `gitDecoration` - removed highlighting exceptions, so as not to lose focus on the content

---

## [1.0.8] - 2020-08-20 23:52:08

### Added

- screenshots of the project
- project color scheme
- new theme icon
- new topic description
- added scripts for auto-save edits

### Changed

- improved display of `list`
- improved `#red` for errors and important notifications

### Fixed

- fixed side border for `activityBar`
- correct display of `scrollbarSlider`
- fixed bug with overlapping color scheme `editor`

---

## [Hint]

| type       | description                            |
| ---------- | -------------------------------------- |
| Added      | for new features.                      |
| Changed    | for changes in existing functionality. |
| Deprecated | for soon-to-be removed features.       |
| Removed    | for now removed features.              |
| Fixed      | for any bug fixes.                     |
| Security   | in case of vulnerabilities.            |
