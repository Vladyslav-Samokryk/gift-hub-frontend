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
- [DBStructure](#dbstructure)
- [Documentation](#documentation)
- [Designs](#designs)
- [BackendApi](#backendapi)
- [Survey](#survey)
- [Contact](#contact)
- [Technologies](#technologies)

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
    - `api`
      -- `config`
    - `context`
    - `i18n`
    - `layouts`
    - `navigation`
    - `providers`
    - `store`
    - `styles`
  - `components`
  - `mock`
  - `pages`
  - `shared`
    - `assets`
    - `constants`
    - `helpers`
    - `hooks`
    - `types`
    - `UI`

<br>

## Project Structure

| Folder       | Description                                                 |
| ------------ | ----------------------------------------------------------- |
| `dist`       | Code of application for production.                         |
| `public`     | Static assets.                                              |
| `src`        | Source code of application.                                 |
|  `app`      | Main logic of application.                                  |
|  `api`      | Working with our backend (all request logic).               |
|  `config`   | .env logic.                                                 |
|  `context`  | React context for components.                               |
|  `i18n`     | All locals for translation UA/EN.                           |
|  `layouts`  | Main layouts for application.                               |
| `navigation` | Routers for different roles.                              |
| `providers` | Providers for modals, router, and Redux store.             |
| `store`    | Redux store folder.                                         |
| `styles`   | Global styles and custom classes for tailwind.              |
| `components` | Smart components, blocks, etc.                             |
| `mock`     | Mock data for testing without backend.                      |
| `pages`    | Pages of application.                                       |
| `shared`   | All assets, constants, helpers, hooks, types, UI that can be used in application. |

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

## Dev workflow

```bash
# Before work
git checkout development
git pull
git checkout -b піб-task-name   # (for example cve-create-not-found-page)

# After changes and commits 
git push development піб-task-name

# Create pull request and notify another dev team members about it.
# After review and approve branch can be merged and deleted 
```

## DBStructure

See relationship between entities of db: [dbdiagram](https://dbdiagram.io/d/64ca041702bd1c4a5e192886)

## Documentation

Main documentation of project: [Link](https://docs.google.com/spreadsheets/d/1bEgjMwZJkJobGGWi1EZnFu5k1PQ2FiLptJAAX-J4s_A/edit?usp=sharing)

## Designs

[figma](https://www.figma.com/file/1w6GqTuER8ORKXhooggrHx/Online-shop-%22GiftHub%22?type=design&mode=design&t=IrdoJtjClHUYbYxg-0)

## BackendApi

Django REST API: [link](https://alex-online-store.fly.dev/api/v1/accounts/)
Postman: [link](https://app.getpostman.com/join-team?invite_code=0c32f0b68818814f27012c8899cba06f&target_code=6f7cd67875a00cc6eefe3381c0610770)
Swagger: [link](https://alex-online-store.fly.dev/)

## Survey

Result of survey: [Link](https://docs.google.com/forms/d/e/1FAIpQLSd90hd9qvWqWTkMjjnyS4xLyUXHLuJSq_iJln3pB1YmtYGjew/viewform?usp=sharing)

## Contact

If you have any questions or feedback regarding the project, feel free to contact:

- Email: gift.hub@gmail.com
- GitHub: [GiftHub](https://github.com/Vladyslav-Samokryk/gift-hub-frontend)

## Technologies:

#### Root

- vite
- react
- typescript
- i18next
- eslint

#### Tools

- classnames
- react-slider
- react-select
- pure-react-carousel
- framer-motion

#### Styles

- scss
- tailwindcss

#### State management

- @reduxjs/toolkit

#### Package manager

- yarn

## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
