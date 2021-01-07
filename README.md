# Quiz Website

![alt text](https://github.com/yipmunallen/Second-Milestone-Project/blob/master/assets/images/quizscreenshot.png "Quiz Screenshot")

This is an interactive (front-end) quiz site, built using HTML, CSS and Javascript. It allows users to test their knowledge across various categories and with a range of difficulties.

The live project can be viewed [here](https://yipmunallen.github.io/second-milestone-project/).

## Table of Contents
1. [Ux](#ux)
   1. [Users stories](#users-stories)
   1. [Design](#design)
      1. [Wireframes](#design)
      1. [Final Sections](#final-sections)
      1. [Colour Scheme](#colour-scheme)
      1. [Typography](#typography)
1. [Technologies](#technologies-used)
   1. [Languages](#languages)
   1. [Frameworks, Libraries & Programs](#frameworks-libraries-programs)
1. [Testing](#testing)
    1. [Site Goals](#site-goals)
   1. [User stories](#testing-user-stories)
   1. [Functionality](#functionality)
   1. [Compatibility](#compatibility)
   1. [Bugs](#bugs)
   1. [Validation](#validation)
1. [Deployment](#deployment)
1. [Credits](#credits)

## UX

### Site Goals

1. Create a site that is simple but eye-catching
1. Provide intuitive navigation at each step to improve user experience
1. Give the user the ability to customise each game with a range of categories and difficulties, so that they are more likely to play multiple times and return to the site
1. Provide a means of user feedback to enable user-driven development

### Users Stories
As a user I want to:

1. Easily understand the rules of the quiz
1. Be able to customise my experience, by choosing the category and difficulty of each round
1. Know whether I got the question correct or incorrect
1. Learn the correct answer if I got a question wrong so that I can learn
1. See my score at the end of each game
1. Be able to give feedback on my experience

### Design

- #### Wireframes

  - [Home](https://github.com/yipmunallen/Second-Milestone-Project/blob/master/assets/images/homewireframe.png)
  - [Rules](https://github.com/yipmunallen/Second-Milestone-Project/blob/master/assets/images/ruleswireframe.png)
  - [Settings](https://github.com/yipmunallen/Second-Milestone-Project/blob/master/assets/images/settingswireframe.png)
  - [Quiz](https://github.com/yipmunallen/Second-Milestone-Project/blob/master/assets/images/quizwireframe.png)
  - [Score](https://github.com/yipmunallen/Second-Milestone-Project/blob/master/assets/images/scorewireframe.png)

- #### Final Pages 

  -  [Home](https://github.com/yipmunallen/Second-Milestone-Project/blob/master/assets/images/homepage.png) -
Provides some basic information about the site owner along with a summary written to introduce them.

  - [Rules](https://github.com/yipmunallen/Second-Milestone-Project/blob/master/assets/images/rulespage.png) -
Gives an overview of the owner's work experience and education history.

  - [Settings](https://github.com/yipmunallen/Second-Milestone-Project/blob/master/assets/images/settingspage.png) -
Highlights some of the core skills of the site owner that recruiters may be looking out for.

  - [Quiz](https://github.com/yipmunallen/Second-Milestone-Project/blob/master/assets/images/quizpage.png) -
Designed to show certain projects that the website owner has worked on. Text giving a summary of the project is paired with an image / screenshot of the project. 
Both the image and text are links to the website/project that is being described. 

  - [Score](https://github.com/yipmunallen/Second-Milestone-Project/blob/master/assets/images/scorepage.png) -
Contains a form that allows users to quickly and easily contact the site owner without having to navigate away from the page.

  - [Feedback](https://github.com/yipmunallen/Second-Milestone-Project/blob/master/assets/images/feedbackpage.png) -
Contains a form that allows users to quickly and easily contact the site owner without having to navigate away from the page.

-   #### Colour Scheme
    -   A dark grey background is contrasted with a range of brightly coloured buttons across the site. The same colours are used for buttons that perform similar actions (i.e "Start" , "Quiz Me" , "Play Again") in order to guide the user. The text is white is order to make it easy to read against the background.

 -   #### Typography
      -   The font used for headings throughout the site is "Staatliches". "Fredoka One" is used for the questions and buttons in order to make them stand out. The remainder of the text uses "Open Sans". Sans-serif has been used as the fallback font throughout. These fonts are chosen as they are easy to read but also provide a fun look for the quiz.

## Technologies Used

### Languages

- [__HTML5__](https://en.wikipedia.org/wiki/HTML5) - Used to structure and present the website.
- [__CSS__](https://en.wikipedia.org/wiki/CSS) - Used to style the website.
- [__JavaScript__](https://en.wikipedia.org/wiki/JavaScript) - Used to provide functionality across the site, including on click button fuctions, applying settings, populating the quiz data using the [__Trivia DB__](https://opentdb.com/) API and enabling feedback via the [__EmailJS__](https://www.emailjs.com//) API.

### Frameworks, Libraries & Programs

- [__Mockflow__](https://www.mockflow.com/) - Used to create the wireframes during the planning stage of the project.

- [__Bootstrap Framework__](https://getbootstrap.com/docs/4.5/getting-started/introduction/) - Used for the form on the feedback page.

- [__JQuery__](https://jquery.com/) - Used to manipulate HTML and CSS properties.

- [__Google Fonts__](https://fonts.google.com/) - Used to import the "Staatliches","Fredoka One" and "Open Sans" fonts used throughout the site.

- [__Font Awesome__](https://fontawesome.com/) - Used to import the icons used on the buttons throughout.

- [__Git__](https://git-scm.com/) - Used for version control.

- [__Github__](https://github.com/) - Used to store all website code once pushed from Git.

- [__Google Chrome Developer Tools__](https://developers.google.com/web/tools/chrome-devtools) - Used to inspect page elements, test different CSS styles and debug site issues using the console.

### Testing

#### User Stories

1. Easily understand the rules of the quiz
    1. A rules page containing a list of rules for the quiz has been added to the site
    2. This page is easily accesible from the homepage using a button
2. Be able to customise my experience, by choosing the category and difficulty of each round
   1. The "Settings" page gives the user the option to choose from a range of categories, or to select "No Category" whereby they will be given a random selection
   2. The "Settings" page allows the user to choose from three difficulties: Easy, Medium and Hard.
1. Know whether I got the question correct or incorrect
   1. Once an answer is selected, the answer will turn green if correct, and red if incorrect. 
1. Learn the correct answer if I got a question wrong so that I can learn
   1. If the user selects the incorrect answer, their chosen answer will turn red, but the correct answer will turn green
1. See my score at the end of each game
   1. The score is tallied up during the quiz and shown to the user at the end of each game on the "Score" page
1. Be able to give feedback on my experience
   1. The user can click on the "Submit Feedback" button at the end of each game to redirect to the "Feedback" page
   1. From the "Feedback" page, the user can input their Name, Email and Message to be submitted using the EmailJS API

#### Functionality

  - __Settings Page__ - This has been tested to ensure that if a difficulty is not selected, an error will appear asking the user to select one.

  - __Feedback Form__ - This has been tested to ensure that if the "submit" button is selected with some fields left unfilled, an error will appear asking the user to complete the unfilled fields. Similarly, if an email address is inputted without an "@" sign, an error will also appear, stating that this is not a valid email.

#### Compatibility

  - __Devices__ - The website has been viewed and tested on a range of devices including Desktop, Laptop, Iphone 6/7/8/X, Ipad and Samsumg Galaxy Tab, retaining structure and functionality.

  - __Browsers__ - The website has been viewed and tested on a range of browsers including Google Chrome, Internet Explorer and Firefox, retaining structure and functionality.

#### Bugs

  - __Unable To Get Category From API__ - There was a "Musicals and Theatres" category, but the category value was returning an error from the API so it has been removed.

  - __Incorrect Answer Colour Not Clearing__ - If an incorrect answer was selected, the colour stayed red. This was fixed by moving the "selectedAnswer.classList.remove("incorrect_answer/correct_answer")" outside the "goToNextQuestion" function in the quiz.js file;


#### Validation

  - __CSS__ - Validated using [Jigsaw](https://jigsaw.w3.org/css-validator/#validate_by_input) with no errors found.

  - __HTML__ - Validated using [W3C](https://validator.w3.org/#validate_by_input) with no errors found.

  - __Javascript__ - Validated using [JSHint Validator](https://jshint.com/). 
  
  1. Moved goToNextQuestion function outside if statement to fix errors.
  1. Remaining warnings regarding the use of cont as available in ES6

## Deployment

### Github Pages

This project has been deployed to Github Pages using the following steps:

1. Log in to Github and find the Github Repository.
1. Locate the repository settings.
1. Locate the GitHub Pages Section.
1. Below "Source", click the dropdown headed "None" and select the "Master Branch" and then "Save".
1. Once the page refreshes, scroll back down to the same section, and the site link is now available.

## Credits

### Code

- [Code Institute](https://www.codeinstitute.net/) - Code learnt during the Full Stack Web Developer course has been implemented in this project.

- [JakobKit](https://github.com/JakobKIT/vanilla-quiz) - Used code from his Quiz App as reference when building settings javascript (referenced in settings.js).

- [JamesQQuick](https://github.com/jamesqquick/Build-A-Quiz-App-With-HTML-CSS-and-JavaScript/tree/master/11.%20Fetch%20API%20Questions%20from%20Open%20Trivia%20API) - Used code from his Quiz App in building quiz javscript (referenced in quiz.js).

### Acknowledgements
- Spencer Barriball - Mentor at Code Institute

