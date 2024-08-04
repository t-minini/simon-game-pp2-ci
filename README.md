# Simon Game <img src="./assets/images/readme-img.webp" alt="simon game icon" height="30">

## Description

Simon Game is a classic memory game where players need to repeat a sequence of colors and sounds in the correct order. The sequence gets progressively longer and more complex, challenging the player's memory and attention.

![iphone mockup](./assets/images/mockuuups-iphone-mockup.webp)
![ipad mockup](./assets/images/mockuuups-ipad-mockup.webp)
![macbook mockup](./assets/images/mockuuups-macbook-mockup.webp)

You can visit the live website [here!](website_link)

## User Experience

### Project Goals

- Provide an engaging and interactive game that challenges the memory of the player.
- Offer a visually appealing and responsive design suitable for both desktop and mobile users.
- Ensure a seamless and intuitive user interface.

### Target Audience

- Casual gamers looking for a fun and simple game to play.
- Individuals seeking to improve their memory and cognitive skills.
- Fans of classic electronic games.

## **Design**

### **Colours**

![Coolors Palette](./assets/images/code-institute-pp2-color-buttons-1.webp)
![Coolors Palette](./assets/images/code-institute-pp2-color-buttons-2.webp)
![Coolors Palette](./assets/images/code-institute-pp2.webp)

### **Typography**

- All fonts were sourced through [Google Fonts](https://fonts.google.com/)
- [Roboto](https://fonts.google.com/specimen/Roboto)
- [Orbitron](https://fonts.google.com/specimen/Orbitronr)

![roboto google fonts](./assets/images/roboto-google-fonts.webp)
![orbitron google fonts](./assets/images/orbitron-google-fonts.webp)

### **Wireframe and Prototype**

### [Balsamiq](https://balsamiq.com/) wireframe:

<details>
<summary> Open for desktop wireframe </summary>

<img src="./assets/images/balsamic-wireframe-desktop.webp" alt="balsamiq wireframe" style="width: 100%; max-width: 500px;" />

</details>

<details>
<summary> Open for mobile wireframe </summary>

<img src="./assets/images/balsamic-wireframe-mobile.webp" alt="balsamiq wireframe" style="width: 100%; max-width: 600px;" />

</details>

### [Figma](https://www.figma.com/) prototype:

<details>
<summary> Open for desktop prototype </summary>

<img src="./assets/images/figma-prototype.webp" alt="figma prototype" style="width: 100%; max-width: 300px;" />

</details>

## Features

### **Meta Tags and Optimization**

The <head> section of the Simon Game website includes essential meta tags for SEO and social media sharing. The meta description provides a summary for search engines, while the keywords tag helps search engines understand the site content. The Open Graph URL tag defines the canonical URL for social media, and the author tag credits Tulio Minini. The Open Graph title and image tags set the title and image for social media sharing, ensuring the content is attractive and informative when shared on platforms like Facebook and Twitter.

### **Home Screen**

The Home Screen serves as the main entry point for the application. It features a "Play" button to navigate users to the Game screen and a "Rules" button that navigates users to the Rules Screen. The layout includes introductory elements and the game title, providing users with an engaging and accessible start to their experience.

| Desktop                                                                           | Mobile                                                                          |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| <img src="./assets/images/home-screen-desktop.webp" alt="desktop project image"/> | <img src="./assets/images/home-screen-mobile.webp" alt="mobile desktop image"/> |

### **Rules Screen**

The Rules Screen offers clear instructions and guidelines for playing the game. It provides detailed explanations of the game rules and objectives, ensuring users understand how to play. The screen includes a "Close" button for easy navigation back to the Home Screen, and the layout is designed for readability and straightforward understanding.

| Desktop                                                                            | Mobile                                                                           |
| ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| <img src="./assets/images/rules-screen-desktop.webp" alt="desktop project image"/> | <img src="./assets/images/rules-screen-mobile.webp" alt="mobile desktop image"/> |

### **Game Screen**

The Game Screen is where the actual gameplay takes place. It includes interactive color buttons (green, red, yellow, blue) that players use to engage with the game. The screen displays the current game status and level, features a "Start" button to start, and "Reset" button for restarting the game, and includes sound controls to toggle game sounds on or off. Visual feedback is provided for user actions, including animations for correct and incorrect inputs, enhancing the overall gaming experience.

| Desktop                                                                           | Mobile                                                                          |
| --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| <img src="./assets/images/game-screen-desktop.webp" alt="desktop project image"/> | <img src="./assets/images/game-screen-mobile.webp" alt="mobile desktop image"/> |

## BEM Methodology

BEM (Block, Element, Modifier) is a popular naming convention for classes in HTML and CSS, originally developed by Yandex. It is designed to create reusable, modular, and maintainable code.

### BEM Structure

BEM divides the user interface into independent blocks, which can be reused across different parts of the application. The naming convention follows a specific structure:

- **Block**: The top-level component or a standalone entity that is meaningful on its own.
  - Example: `header`, `container`, `menu`
- **Element**: A part of a block that performs a certain function and has no standalone meaning.
  - Example: `header__title`, `menu__item`
- **Modifier**: A flag on a block or an element that changes its appearance or behavior.
  - Example: `menu__item--active`, `header--large`

### Naming Convention

The BEM naming convention uses a double underscore (`__`) to separate elements from their block and a double hyphen (`--`) to separate modifiers from blocks or elements.

- **Block**: `block-name`
- **Element**: `block-name__element-name`
- **Modifier**: `block-name--modifier-name` or `block-name__element-name--modifier-name`

### Example

```html
<div class="menu">
  <ul class="menu__list">
    <li class="menu__item menu__item--active">Home</li>
    <li class="menu__item">About</li>
    <li class="menu__item">Contact</li>
  </ul>
</div>
```

In this example:

- `menu` is the block.
- `menu__list` and `menu__item` are elements of the menu block.
- `menu__item--active` is a modifier that changes the appearance of the `menu__item` element.

### Benefits of BEM

1. **Clarity and Readability:** BEM makes it clear what each class refers to by looking at its name. It is easy to identify whether a class represents a block, an element, or a modifier.

2. **Modularity:** BEM promotes the creation of independent components. Each block is standalone, making it easier to reuse and maintain.

3. **Avoids Naming Conflicts:** The structured naming convention helps avoid class name conflicts, which are common in larger projects with many contributors.

4. **Improved Maintainability:** With BEM, the CSS and HTML structure is more organized, making it easier to understand, debug, and modify the code.

5. **Enhanced Scalability**: BEM's approach is particularly useful for large projects as it provides a consistent methodology for naming and structuring classes.

6. **Better Collaboration:** The clarity and structure provided by BEM make it easier for multiple developers to work on the same project without confusion.

## Sass

Sass (Syntactically Awesome Style Sheets) is a CSS pre-processor that adds power and elegance to the basic language. It allows for variables, nested rules, mixins, functions, and more, helping to keep large stylesheets well-organized and easier to maintain.

### Benefits of Sass

1. **Variables:** Store colors, fonts, or any CSS value in variables for easy reuse and management.
2. **Nesting:** Allows for a cleaner and more readable hierarchy of styles.
3. **Partials:** Break down CSS into smaller, reusable files.
4. **Mixins:** Create reusable chunks of code to avoid redundancy.
5. **Inheritance:** Share a set of CSS properties from one selector to another.
6. **Built-in Functions:** Provides functions for manipulating colors, math operations, and more.

### Reasons for Choosing Sass for this Project

In my current internship, I am learning to use Sass as part of my development toolkit. Recognizing the value of this pre-processor in professional projects, I decided to incorporate Sass into my code institute project to practice and reinforce my skills. By applying Sass in this project, I am gaining hands-on experience with its features and best practices, which not only enhances the maintainability and scalability of my code but also aligns with industry standards. This approach allows me to leverage my learning from the internship and integrate it into practical applications, ultimately improving both my technical proficiency and the quality of my project.

## Testing

Responsiveness has been checked and adjusted in Chrome Dev Tools and the site has been viewed on mobiles and desktop without issues and the following browsers:

- Chrome

- Safari

- Firefox

### **HTML Validation**

All HTML code has been run through the [W3C - HTML](https://validator.w3.org/) validator. Results can be found below.
![w3c html validation](./assets/images/html-validation.webp)

### **CSS Validation**

All CSS code has been run through the [W3C - CSS](https://jigsaw.w3.org/css-validator/) validator. Results can be found below.
![w3c css validation](./assets/images/css-validation.webp)

### **Google Lighthouse**

The lighthouse score results can be found below.

![google lighthouse](./assets/images/google-lighthouse.webp)

### **WAVE Accessibility Evaluation**

The WAVE accessibility evaluation tool results can be found below.

![wave accessibility evaluation](./assets/images/WAVE.webp)

### **Manual Testing**

| Features   | Expected Outcome                                               | Test Performed                    | Results                                 | Pass/Fail |
| ---------- | -------------------------------------------------------------- | --------------------------------- | --------------------------------------- | --------- |
| **Navbar** |
| Devon Rex  | When clicked, the page should scroll up to the top of the page | Clicked "Devon Rex" in the Navbar | Page scrolled up to the top of the page | Pass      |

### **Bugs**

### 1. Sound not working

**Description:**  
after the first round, if a color button is clicked multiple times, the game goes to "game over" and resets automatically.

<details>
<summary> Click to see images </summary>

![bug two](image path)
![bug one](image path)

</details>

**Steps to Reproduce:**

1. Deploy the project to a web server.
2. Attempt to load the web page.
3. Notice that the CSS styles and images do not load.

**Expected Behavior:**  
to be developed

**Actual Behavior:**  
to be developed
**Cause:**  
to be developed

**Solution:**  
to be developed

**Example:**

Before:

```html
<link rel="stylesheet" href="/assets/css/style.css" />
<img src="/assets/images/cat-hero.webp" alt="yellow devon rex cat sitting" />
```

After:

```html
<link rel="stylesheet" href="assets/css/style.css" />
<img src="assets/images/cat-hero.webp" alt="yellow devon rex cat sitting" />
```

```javascript
// If the player clicks more buttons than the length of the computer sequence, ignore the click
if (playerSequence.length >= computerSequence.length) return;
```

### **Test Final Review**

The testing procedures have been executed, meeting all specified criteria. Results have been thoroughly documented, and any identified issues have been addressed. Post-testing, the website has been confirmed to be fully functional and accessible.

## Tech Stack

This website is developed using the following technologies:

**HTML**: For structuring the content and layout of the web pages.

**CSS**: For styling the website and making it visually appealing.

**SASS**: A CSS pre-processor for writing more maintainable and scalable stylesheets.

**JavaScript**: For adding interactivity and dynamic features to the website.

## Tools Used

This website is developed using the following tools:

**GitHub**: Used for version control and code storage. GitHub allows for collaborative development, issue tracking, and code review, ensuring a smooth workflow and version management.

**Netlify**: Used to deploy the website. Netlify offers seamless continuous deployment and provides a range of features such as form handling, serverless functions, and a global CDN for fast content delivery.

**VS Code**: Integrated Development Environment (IDE) used to write, edit, and debug code. VS Code supports numerous extensions that enhance productivity, such as Git integration, syntax highlighting, and linting tools.

**Google DevTools**: A set of web developer tools built directly into the Google Chrome browser. Google DevTools provides features for debugging, editing CSS and HTML on the fly, and analyzing website performance.

**Google Fonts**: A library of over a thousand free and open-source font families. Google Fonts ensures consistent and aesthetically pleasing typography across different browsers and devices.

**Figma**: A web-based design tool used for creating user interfaces and prototyping. Figma enables real-time collaboration, making it easy to gather feedback and iterate on design ideas.

**Balsamiq**: A wireframing tool used to create low-fidelity mockups. Balsamiq helps in quickly visualizing the structure and layout of web pages before moving on to high-fidelity design.

**W3C Markup Validation Service**: A tool provided by the World Wide Web Consortium (W3C) to validate HTML and XHTML documents. This service checks for errors in the markup to ensure compliance with web standards.

**W3C CSS Validation Service**: A tool provided by W3C to validate CSS code. It helps in identifying errors and potential issues in the stylesheet, ensuring it adheres to CSS standards.

**WAVE Accessibility**: A web accessibility evaluation tool. WAVE helps in identifying accessibility issues on web pages, ensuring they are accessible to users with disabilities.

**Google Lighthouse**: An open-source, automated tool for improving the quality of web pages. Lighthouse audits performance, accessibility, SEO, and other best practices, providing insights and recommendations for improvement.

**Prettier**: A code formatter that enforces a consistent style by parsing your code and re-printing it with its rules. Prettier helps maintain clean and readable code throughout the project.

**Birme**: An online bulk image resizing tool. Birme is used to resize images quickly and efficiently, ensuring that they are optimized for the web without compromising on quality.

**LinkedIn Post Inspector**: Post Inspector can help you identify the data missing on your page, and what you need to add for your content to have better previews in posts.

**Favicon.io**: A tool that simplifies the creation of website favicons, allowing users to easily generate icons that represent their brand across different platforms and devices.

**pixabay.com/**: to be developed

Each of these tools plays a crucial role in the development, deployment, and maintenance of the website, contributing to its overall quality and user experience.

## Deployment

This website is deployed using Netlify.

### Deployment Steps

1. **Log in to Netlify:** Navigate to the [Netlify website](https://www.netlify.com/) and log in to your account.

2. **Create New Site:** Once logged in, click on the "New site from Git" button.

3. **Connect to GitHub:** Choose GitHub as your Git provider and authorize Netlify to access your repositories.

4. **Select Repository:** Select the repository for your website, in this case, "The Force Awaken."

5. **Configure Settings:** Netlify will automatically detect your build settings, but you may need to adjust them if necessary.

6. **Deploy Site:** Once configured, click on the "Deploy site" button. Netlify will start building and deploying your site automatically.

7. **Live Site:** After the deployment process is complete, Netlify will provide you with a unique URL for your live site. You can access your live site by visiting this URL.

## How to Clone the Repository and Install Packages

1. **Clone the Repository:**

   ```sh
   git clone https://github.com/yourusername/your-repository.git
   cd your-repository
   ```

2. **Install Dependencies:**

   ```sh
   npm install
   ```

## Credits

No external code sources were used to develop this website.

## Acknowledgements

A special thank you to my mentor [Harry Dhillon](https://www.linkedin.com/in/harry-dhillon-299b321b3/) from [Code Institute](https://codeinstitute.net/ie/), for your advice, feedback and reviewing my work!
