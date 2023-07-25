# GiftHub

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description

Online shop description.

## Table of Contents

- [Setup](#setup)
- [Usage](#usage)
- [Structure](#structure)
- [License](#license)
- [.env](#env)
- [Contact](#contact)

## Setup

```bash
# clone project by https
git clone https://github.com/Vladyslav-Samokryk/gift-hub-frontend.git
```

<details>
<summary>Download project zip:</summary>
    <a href="https://github.com/Vladyslav-Samokryk/gift-hub-frontend/archive/refs/heads/master.zip">
        GiftHub.zip
    </a>
</details>

<br>

```bash
# open folder with project
cd gift-hub-frontend

# install
$ yarn
```

## Usage

```bash
# run application in development mode
$ npm run dev

# run application in production watch mode
$ npm run preview

# build application
$ npm run build

# analyzing code for potential errors, bugs, and style issues
$ npm run lint

# automatically fixing some of the linting issues
$ npm run lint-fix
```

## Structure

Here's the directory structure of the project:<br>

- `dist`
- `public`
- `src`
  - `app`
  - `pages`
  - `shared`

<br>

| Folder   | Description                                     |
| -------- | ----------------------------------------------- |
| `dist`   | Contain all code of application for production. |
| `public` | Contain all static assets.                      |
| `src`    | Contains all the source code of application.    |

## .env

The project utilizes a `.env` file to manage configuration settings.
<br/>
To configure all variables for the application, create a `.env` file in the root directory of the project.

Add the following variables and replace `###` with the desired values:

```bash
# Application Configuration
VITE_APP_API_URL=###
VITE_NODE_ENV=###
```

> Look at `.env.example` file in the root of the project for example.

## Contact

If you have any questions or feedback regarding the project, feel free to contact:

- Email: gift.hub@gmail.com
- GitHub: [GiftHub](https://github.com/Vladyslav-Samokryk/gift-hub-frontend)

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
