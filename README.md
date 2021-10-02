# capacitor-plugin-demo

[![GitHub Workflow Status](https://img.shields.io/github/workflow/status/robingenz/capacitor-plugin-demo/CI/main)](https://github.com/robingenz/capacitor-plugin-demo/actions)

<!-- [![GitHub tag (latest SemVer)](https://img.shields.io/github/tag/robingenz/capacitor-plugin-demo?color=brightgreen&label=version)](https://github.com/robingenz/capacitor-plugin-demo/releases) -->

⚡️ Simple Ionic Angular app to demonstrate the use of certain Capacitor plugins.

## Plugins

The following plugins are included:

- [robingenz/capacitor-android-dark-mode-support](https://github.com/robingenz/capacitor-android-dark-mode-support)
- [robingenz/capacitor-app-update](https://github.com/robingenz/capacitor-app-update)
- [robingenz/capacitor-background-task](https://github.com/robingenz/capacitor-background-task)
- [robingenz/capacitor-badge](https://github.com/robingenz/capacitor-badge)
- [robingenz/capacitor-file-picker](https://github.com/robingenz/capacitor-file-picker)
- [robingenz/capacitor-managed-configurations](https://github.com/robingenz/capacitor-managed-configurations)
- [robingenz/capacitor-photo-editor](https://github.com/robingenz/capacitor-photo-editor)
- [robingenz/capacitor-screen-orientation](https://github.com/robingenz/capacitor-screen-orientation)
- [capacitor-community/keep-awake](https://github.com/capacitor-community/keep-awake)
- [capacitor-community/privacy-screen](https://github.com/capacitor-community/privacy-screen)
- [capacitor-community/text-to-speech](https://github.com/capacitor-community/text-to-speech)

## Development Setup 💻

### Prerequisites

- Install [Node.js](https://nodejs.org) which includes [Node Package Manager](https://www.npmjs.com/get-npm)
- Android development: Install [Android Studio](https://developer.android.com/studio)
- iOS development: Install [XCode](https://apps.apple.com/de/app/xcode/id497799835?mt=12)

### Getting Started

Clone this repository:

```
git clone https://github.com/robingenz/capacitor-plugin-demo.git
```

Change to the root directory of the project:

```
cd capacitor-plugin-demo
```

Install all dependencies:

```
npm i
```

Prepare and launch the Android app:

```
npx ionic cap sync android
npx ionic cap run android
```

Prepare and launch the iOS app:

```
npx ionic cap sync ios
npx ionic cap run ios
```

This project uses [Ionic](https://ionicframework.com/) as app development platform and the [Ionic CLI](https://ionicframework.com/docs/cli).

<!-- ## Changelog

See [CHANGELOG.md](https://github.com/robingenz/capacitor-plugin-demo/blob/main/CHANGELOG.md). -->

## License

See [LICENSE](https://github.com/robingenz/capacitor-plugin-demo/blob/main/LICENSE).
