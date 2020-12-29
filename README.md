# Quiz Website

![alt text](https://github.com/yipmunallen/First-Milestone-Project/blob/master/assets/images/websitescreenshot.png "Website Screenshot")

This is an interactive (front-end) quiz site, built using HTML, CSS and Javascript. 

The live project can be viewed [here](https://yipmunallen.github.io/first-milestone-project/).

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
   1. [User stories](#testing-user-stories)
   1. [Functionality](#functionality)
   1. [Compatibility](#compatibility)
   1. [Bugs](#bugs)
   1. [Validation](#validation)
1. [Deployment](#deployment)
1. [Credits](#credits)

## UX

The primary target audience is recruiters who will use the site to find out more information about the website owner and potentially contact them with a job opportunity. The website was created to be intuitive and provide easy access to any information the recruiters may be looking for.

 ### Users Stories
As a recruiter I want to:

1. Get all of the information I'm looking for quickly and easily as there will be lots of potential applicants.
1. Find out more about the creator's work experience and education history to see if they have relevant experience and qualifications for the role.
1. Clearly see what the creator's skills are in order to match them to a suitable role.
1. Have access to a CV that can be saved offline.
1. Be able to contact the creator with potential opportunities.

### Design

- #### Wireframes

  - [Hero Image/About](https://github.com/yipmunallen/First-Milestone-Project/blob/master/assets/images/heroabout.png)
  - [Education](https://github.com/yipmunallen/First-Milestone-Project/blob/master/assets/images/experience.png)
  - [Skills/Projects](https://github.com/yipmunallen/First-Milestone-Project/blob/master/assets/images/skillsprojects.png)
  - [Contact](https://github.com/yipmunallen/First-Milestone-Project/blob/master/assets/images/contact.png)

- #### Final Sections 

  -  [About](https://github.com/yipmunallen/First-Milestone-Project/blob/master/assets/images/heroaboutfinal.png) -
Provides some basic information about the site owner along with a summary written to introduce them.

  - [Experience](https://github.com/yipmunallen/First-Milestone-Project/blob/master/assets/images/experiencefinal.png) -
Gives an overview of the owner's work experience and education history.

  - [Skills](https://github.com/yipmunallen/First-Milestone-Project/blob/master/assets/images/skillsprojectsfinal.png) -
Highlights some of the core skills of the site owner that recruiters may be looking out for.

  - [Projects](https://github.com/yipmunallen/First-Milestone-Project/blob/master/assets/images/skillsprojectsfinal.png) -
Designed to show certain projects that the website owner has worked on. Text giving a summary of the project is paired with an image / screenshot of the project. 
Both the image and text are links to the website/project that is being described. 

  - [Contact](https://github.com/yipmunallen/First-Milestone-Project/blob/master/assets/images/contactfinal.png) -
Contains a form that allows users to quickly and easily contact the site owner without having to navigate away from the page.

-   #### Colour Scheme
    -   The two main colours used are white and turquoise. This scheme complements the colours within the hero image and is used to differentiate between the sections, making them easy to identify as you scroll down the page.

 -   #### Typography
      -   The main font used throughout the site is "Noto San JP". "Roboto" is also used for the section headings and the name in the hero section as well as the menu bar. Sans-serif has been used as the fallback font throughout. These fonts are chosen as they are easy to read and appropriate for a professional look.

## Technologies Used

### Languages

- [__HTML5__](https://en.wikipedia.org/wiki/HTML5) - Used to structure and present the website.
- [__CSS__](https://en.wikipedia.org/wiki/CSS) - Used to style the website.
- [__JavaScript__](https://en.wikipedia.org/wiki/JavaScript) - Used for the menu bar so that when a link is selected, or the user clicks outside the menu, the menu bar will collapse again.

### Frameworks, Libraries & Programs

- [__Mockflow__](https://www.mockflow.com/) - Used to create the wireframes during the planning stage of the project.

- [__Bootstrap Framework__](https://getbootstrap.com/docs/4.5/getting-started/introduction/) - Used for certain features such as the menu bar and project cards. The grid design was also used throughout the sections in order to facilitate the responsive design.

- [__JQuery__](https://jquery.com/) - Added with Bootstrap in order to make the menu bar responsive.

- [__Google Fonts__](https://fonts.google.com/) - Used to import the "Noto San JP" and "Roboto" fonts used throughout the site.

- [__Font Awesome__](https://fontawesome.com/) - Used to import the LinkedIn icon used in the About section, and the circles in the Skills section.

- [__Git__](https://git-scm.com/) - Used for version control.

- [__Github__](https://github.com/) - Used to store all website code once pushed from Git.

### Testing

#### User Stories

1. As a recruiter I want to get all of the information I'm looking for quickly and easily as there will be lots of potential applicants.
    1. The menu bar at the top of the page makes it easy for users to quickly jump to the sections of the page that they are interested in. The bar has been made "sticky" so it is accessible wherever the user is on the page.
    2. The alternating colours between the sections as well as large section titles mean that information is easily found when scrolling down the page.
2. As a recruiter I want to find out more about the creator's work experience and education history to see if they have relevant experience and qualifications for the role.
   1. The Experience section is accessible from the menu bar.
   2. The section is clearly divided into "Work" and "Education".
   3. The design of this section provides a clear timeline to all prospective users, with additional information available for wider screen sizes.
1. As a recruiter I want to clearly see what the creator's skills are in order to match them to a suitable role.
   1. The Skills section is accessible from the menu bar.
   2. The Skills section of the site uses coloured circles to clearly indicate skill level.
1. As a recruiter I want to have access to a CV that can be saved offline.
   1. A "Download CV" button is available wherever the user is on the site via the menu bar. It opens in another page so the original site is not lost.
   2. A "Download CV" button is also available in the About section.
1. As a recruiter I want to be able to contact the creator with potential opportunities.
   1. The Contact section is accessible from the menu bar.
   2. The form in the Contact section means that the user does not have to leave the site in order to contact the site owner. 
   3. A link to the site owner's LinkedIn profile is in the About section which provides another means of contact.

#### Functionality

  - __Contact Form__ - This has been tested to ensure that if the "submit" button is selected with some fields left unfilled, an error will appear asking the user to complete the unfilled fields. Similarly, if an email address is inputted without an "@" sign, an error will also appear, stating that this is not a valid email.

  - __Links__ - The "Download CV" button, LinkedIn icon, and Project cards have been tested to ensure they open in new windows to valid pages.


  - __Menu Bar__ - The menu bar has been tested to ensure that it collapses and takes users to the correct sections on the page once a link is clicked. Users can also close the menu bar by clicking out of the menu.

#### Compatibility

  - __Devices__ - The website has been viewed and tested on a range of devices including Desktop, Laptop, Iphone 6/7/8/X, Ipad and Samsumg Galaxy Tab, retaining structure and functionality.

  - __Browsers__ - The website has been viewed and tested on a range of browsers including Google Chrome, Internet Explorer and Firefox, retaining structure and functionality.

#### Bugs

  - __Iphone 5__ - When emulating using the website on an Iphone 5, a white strip appears down the right side of the screen. However, this could be due to the browser's emulation of the device. Structure and functionality remain the same. 

  - __Menu Bar__ - The menu bar did not collapse once a link was clicked, this was resolved using the JavaScript at the end of the HTML file. Whilst the menu bar collapses once a link or somewhere outside the bar is clicked, clicking on the hamburger icon once inside the menu still does not collapse it again. 


#### Validation

  - __CSS__ - Validated using [Jigsaw](https://jigsaw.w3.org/css-validator/#validate_by_input) with no errors found.

  - __HTML__ - Validated using [W3C](https://validator.w3.org/#validate_by_input) with no errors found.

## Deployment

### Github Pages

This project has been deployed to Github Pages using the following steps:

1. Log in to Github and find the Github Repository.
1. Locate the repository settings.
1. Locate the GitHub Pages Section.
1. Below "Source", click the dropdown headed "None" and select the "Master Branch" and then "Save".
1. Once the page refreshes, scroll back down to the same section, and the site link is now available.

## Credits

### Media

The hero image was downloaded from [Pixabay](https://pixabay.com/photos/desktop-tidy-clean-mockup-white-2325627).

The second screenshot in the projects is taken from [CloudTrade](https://cloudtrade.com), and the website was not actually built by the website owner as stated in the summary.

The third screenshot in the projects is taken from [The Wellesly](https://www.marriott.co.uk/hotels/travel/lonwb-the-wellesley-knightsbridge-a-luxury-collection-hotel-london/) , and the website was not actually built by the website owner as stated in the summary.

### Code

- [Code Institute](https://www.codeinstitute.net/) - Code learnt during the Full Stack Web Developer course has be implemented in this project.

- [Stack Overflow](https://stackoverflow.com/questions/21203111/bootstrap-3-collapsed-menu-doesnt-close-on-click) - Used to help menu bar not collapsing.

### Acknowledgements
- Spencer Barriball - Mentor 
- [Pascal Van Gemert](http://www.pascalvangemert.nl/) - His resume provided the inspiration behind the design of the website.
