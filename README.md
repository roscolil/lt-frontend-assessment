### Linktree Frontend assessment

#### By Ross Lillis

#### Sumbitted to Rory Mulherin on 28th May 2021

---

### Description

A small single page app displayed in a mobile format as per designs provided.

---

## Environment & Technologies Used

- **Language used:**
  - Javascript/React
- **Local Environment:**

  - Macbook Pro with MacOS Catalina (Version 10.15.7).
  - Visual Studio Code
  - CLI - iTerm with zsh

- **Dependencies/Node modules**
  - `node-sass` library for styling

---

### Assumptions/Tradeoffs

- Used `create-react-app` to bootstrap the application
- Couldn't get assets from Zeplin so either used my own or placeholders
- Component link names taken from design labels
- Used TODO's to comment on thoughts/future changes
- Used `scss` and `flexbox` where appropriate
- A bit loose with the class names. Would ordinarily use css modules or sass with BEM
- Pulled profile image directly from asset folder
- Not built to be responsive
- Set overflow on wrapper to 'auto' for ease of review. This would ordinarily be set to 'hidden;
- Made notes on where the API requests would be made to link to show/music selection and open music player

**Data**

Created a local json file with some seed data to pull into app

---

## How to use

1. Run `npm install` to install any dependencies
2. Run `yarn start` to run the app in the development mode.
3. Goto the localhost displayed in the terminal

---

### Tools

- Used commitizen for code commits

### Version 2.0

- Include tests
- Use Typescript
