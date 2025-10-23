# Counting Calories AI Project
This project was built as a way to explore angular as a standalone AI endpoint.
While building this project I learned about angular components, microservices, and ai interactions.

## 1. Project Description and Overview

The `README.md` is the first file a visitor sees. It should be inviting, informative, and complete.

### 1.1 Core Information
* Counting Calories AI
* MEAL -> PICTURE -> CALORIES
* Protype complete: v0.9
* This Project was built for people who want quick rough calorie estimations day to day. Since keeping track of calories can be daunting, costly, and time consuming this product offers an easy and efficent alternative.

### 1.2 Tech Stack
* Node.js and these packages
* Gemini
* Angular
* Tailwind
- note - these packages need to be installed in order to run this application locally
  
---

## 2. Developer's Journey & Personal Insights

### 2.1 Technical Decisions & Rationale
* **Core Technology Stack:**
    * Node.js
    * Tailwind
    * Gemini
    * Angular
* **Design Decisions:**
    * I chose to use Tailwind to give me creative control over the style of the project instead of using templated css like Bootstrap or Material.
    * I chose to use gemini as it was the most capable out of the api models to interpret pictures of food into lists of foods and calories.
    * I chose Angular because I am already familar with React. I wanted to learn something new.
* **Architecture/Design:**
    * The architecture for this project is component and service based to really take advantage of Angular's components and utilize javascript using an OOP strategy.
    * I used components and OOP as those are the practices I am most familiar with.

### 2.2 Challenges, Learning, and Triumphs
* **Key Hurdles Encountered:**
    * Setting up an angular application with best practices for seperating components and services
    * Learning the new @if and @for components in angular
    * Learning signal, input, and output when exporting components in angular, as well as how to pass props properly when using these ([]="" vs thing={{}})
    * Publishing to github pages by building the angular application into a single index file
    * Creating and integrating several services into an orchestrated service to implement the flow of the picture to calorie list
    * Using custom interfaces (data objects/types) in the input, output, signal exports.

---

## 3. Helpful Notes and Tips (For Contributors)

This section aims to reduce the friction for new developers or future you.

### 3.1 Development Tips & Best Practices
* **Local Development Flow:** Outline the preferred way to work on the project (e.g., branch naming conventions, pull request process).
* **Debugging:** Share common pitfalls and how to quickly diagnose issues.
    * *Tip:* "If the service doesn't start, check the database connection string in the `.env` file first; it's the most frequent error."
* **Performance Notes:** Document any known performance bottlenecks or optimizations implemented.
    * *Tip:* "Be careful when querying the `Users` table; it's intentionally non-indexed for this prototype."

### 3.2 Future Work and Contribution Guidelines
* **Future Features/Roadmap:** List features you plan to add or would like contributors to tackle.
* **Open Issues:** Clearly link to the GitHub Issues page for bugs and feature requests.
* **How to Contribute:**
    1.  Fork the repository.
    2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
    3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
    4.  Push to the branch (`git push origin feature/AmazingFeature`).
    5.  Open a Pull Request. *(Emphasize the need for clear commit messages and passing tests.)*

---

## 4. Supplementary Documentation

Create separate markdown files for complex topics to keep the `README.md` clean.

* **`CONTRIBUTING.md`**: Detailed contribution rules, code of conduct, and PR templates.
* **`ARCHITECTURE.md` (or `DESIGN.md`)**: Detailed diagrams, data models, and API endpoints for a deep dive.
* **`LICENSE.md`**: Essential for open-source projects. Always include a license.

