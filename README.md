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
    - `config`
    - `i18n`
    - `layouts`
    - `navigation`
    - `providers`
    - `store`
  - `components`
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

## DBStructure
See relationship between entities of db: [dbdiagram](https://dbdiagram.io/d/64ca041702bd1c4a5e192886)

## Documentation
Main documentation of project: [Link](https://docs.google.com/spreadsheets/d/1bEgjMwZJkJobGGWi1EZnFu5k1PQ2FiLptJAAX-J4s_A/edit?usp=sharing)

## Designs
Christina`s: [figma](https://www.figma.com/file/0BUH6xUUJe7dUfz1aV0yqD/GiftHub-online-shop)

Ilona`s: [figma](https://www.figma.com/file/zDc7MmRInCyP0iNORar5Xk/Untitled)

## BackendApi
Django REST API: [link](https://alex-online-store.fly.dev/api/v1/accounts/)
Postman: [link](https://app.getpostman.com/join-team?invite_code=0c32f0b68818814f27012c8899cba06f&target_code=6f7cd67875a00cc6eefe3381c0610770)
<!-- TODO: add link on swagger -->

## Survey
Result of survey: [Link](https://docs.google.com/forms/d/e/1FAIpQLSd90hd9qvWqWTkMjjnyS4xLyUXHLuJSq_iJln3pB1YmtYGjew/viewform?usp=sharing  )

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

  #### Styles
  - scss
  - tailwindcss
  - framer-motion
  - react-slider

  #### State management
  - @reduxjs/toolkit

  #### Package manager
   - yarn


## License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
