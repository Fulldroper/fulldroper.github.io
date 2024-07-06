---
title: "UUC Community Website"
description: "Website for the Ukrainian Speaking Community created with Astro.js, inspired by Discord"
publishDate: "26 Feb 2023"
updatedDate: "26 Feb 2023"
tags: ["Node.js", "Astro.js", "routing"]
---
The purpose of this project is to create a website for the "Єдина Україномовна Спільнота" (United Ukrainian Speaking Community) using Astro.js, with a design inspired by Discord.

### Project Benefits
This project provides a dedicated platform for the Ukrainian speaking community, facilitating communication and collaboration.

### How the Project Works
The project sets up a web server using Astro.js to deliver a user-friendly interface that mimics the look and feel of Discord, enabling users to interact seamlessly.

### Repository and Installation
[GitHub Repository](https://github.com/Fulldroper/uuc-games)
![example](./example.png)
To install and run the project:

1. Clone the repository:
    ```bash
    git clone https://github.com/Fulldroper/uuc-games
    cd uuc-games-src
    ```

2. Install dependencies and start the server:
    ```bash
    npm install
    npm start
    ```

### Project Workflow
1. **Setup Astro.js Project:** Initialize a new Astro.js project.
    ```javascript
    // Example of Astro.js project setup
    npm init astro
    ```

2. **Create Pages and Components:** Develop the main pages and components of the website.
    ```javascript
    // Example of creating a page in Astro.js
    ---
    import Layout from '../layouts/Layout.astro';
    ---
    <Layout>
        <h1>Welcome to UUC Community</h1>
    </Layout>
    ```

3. **Style and Design:** Apply styles to mimic Discord's design.
    ```css
    /* Example CSS for styling */
    body {
        font-family: Arial, sans-serif;
        background-color: #2c2f33;
        color: #ffffff;
    }
    ```

### Skills Gained
- Using Astro.js for web development
- Implementing design inspired by popular platforms (Discord)
- Managing community-oriented web projects
