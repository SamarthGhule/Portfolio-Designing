// toggle icon navbar
// This line selects an HTML element with the ID "menu-icon" using the document.querySelector method. 
// It's assumed that there's an HTML element somewhere in the document with the ID "menu-icon". 
// The selected element is stored in the variable menuIcon.
let menuIcon = document.querySelector('#menu-icon');

// This line selects an HTML element with the class "navbar" using the document.querySelector method. 
// Similarly, it's assumed that there's an HTML element with the class "navbar" somewhere in the document. 
// The selected element is stored in the variable navbar.
let navbar = document.querySelector('.navbar');


// This part of the code assigns an event handler to the onclick event of the menuIcon element. 
// When the "menuIcon" element is clicked, the arrow function (() => { ... }) is executed.

// Inside the arrow function:

// menuIcon.classList.toggle('bx-x'); - This line toggles the class "bx-x" on the menuIcon element. 
//                                      If the element doesn't have the "bx-x" class, it will be added; if it already has the class, it will be removed.

// navbar.classList.toggle('active'); - This line toggles the class "active" on the navbar element. 
//                                      Similar to the previous line, if the element doesn't have the "active" class, it will be added; if it already has the class, 
//                                      it will be removed.

// In essence, when the menuIcon element is clicked, this event handler toggles the appearance of the menu icon (by adding or removing the "bx-x" class) and 
// also toggles the visibility of the navigation bar (by adding or removing the "active" class). 
// This is a common technique used for creating interactive menus where clicking an icon opens or closes a navigation menu.

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections

// This line selects all HTML elements with the tag name <section> in the document using the document.querySelectorAll method. 
// It retrieves a NodeList of all these elements and stores them in the variable sections.
let sections = document.querySelectorAll('section');

// This line selects all anchor (<a>) elements within a navigation (<nav>) element within the <header> element of the document. 
// It stores these anchor elements in the variable navLinks.
let navLinks = document.querySelectorAll('header nav a');


// This section of code assigns an event handler to the onscroll event of the window object, which triggers when the user scrolls the page.
// Inside the event handler:

// sections.forEach(sec => { ... }); - This loop iterates through each element in the sections NodeList. 
//                                     For each section (sec), the following calculations and actions are performed:

// let top = window.scrollY; - This line gets the current vertical scroll position of the window.

// let offset = sec.offsetTop - 100; - This line calculates an offset value that is the vertical position of the current section minus 100 pixels. 
//                                     It's often used to create a "buffer" or "trigger point" before a section is considered in the viewport.

// let height = sec.offsetHeight; - This line gets the height of the current section.

// let id = sec.getAttribute('id'); - This line gets the value of the "id" attribute of the current section. 
//                                    This is used to determine the corresponding navigation link for the active section.

// The if statement checks if the scroll position is within a certain range relative to the section's position (offset) and its height. 
// If the scroll position is within this range, it does the following:

// It removes the class "active" from all navigation links using the navLinks.forEach(...) loop.

// It adds the class "active" to the navigation link that matches the current section's "id" attribute. 
// This highlights the navigation link that corresponds to the currently visible section.

// It adds the class "show-animate" to the current section, which likely triggers animations on scroll.

// The else statement removes the "show-animate" class from the section if the scroll position is not within the specified range. 
// This might be used to remove animations when scrolling away from a section.

// This code effectively handles the scrolling behavior by highlighting active navigation links corresponding to the visible sections on the page and potentially 
// triggering animations as the user scrolls.

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            //active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            //active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        //If you want to use animation that repeats on scroll, then try this
        else {
            sec.classList.remove('show-animate');
        }
    });

    //sticky header

    // This line selects the first HTML element with the tag name <header> in the document using the document.querySelector method. 
    // It retrieves the header element and stores it in the variable header.
    let header = document.querySelector('header');



    // This line toggles the class "sticky" on the header element based on a condition involving the window's scroll position.

    // header.classList.toggle('sticky', ...); - This uses the toggle method of the classList property of the header element. 
    //                                       It toggles the presence of the class "sticky" on the header element based on the following condition.

    // window.scrollY > 100 - This condition checks if the vertical scroll position of the window (window.scrollY) is greater than 100 pixels.

    // If the condition is true (meaning the user has scrolled down more than 100 pixels), the "sticky" class will be added to the header element. 
    // If the condition is false (meaning the user hasn't scrolled down more than 100 pixels), the "sticky" class will be removed from the header element.

    // In the context of a website, applying the "sticky" class to the header likely involves CSS styles that keep the header fixed at the top of the viewport 
    // as the user scrolls down. 

    // This creates a common effect where the navigation or header area remains visible even when other content is scrolled past, 
    // enhancing user experience and ease of navigation.

    header.classList.toggle('sticky', window.scrollY > 100);

    //remove toggle icon and navbar when click navbar links (scroll)


    // This line removes the class "bx-x" from the menuIcon element's class list. 
    // It's assumed that the menuIcon element is an HTML element that represents a toggle icon for a navigation menu. The "bx-x" class might be used to change 
    // the icon appearance, potentially from a menu icon (e.g., "bx-menu") to a close icon (e.g., "bx-x") when the menu is open.

    menuIcon.classList.remove('bx-x');


    // This line removes the class "active" from the navbar element's class list. 
    // The navbar element likely represents the navigation bar or menu container. 
    // Adding the "active" class to this element might trigger CSS styles that display the navigation menu, and removing it would hide the menu when it's not in use.

    // Combined, these two lines work together to ensure that when a navigation link within the menu is clicked, any special appearance (icon change) 
    // or state (menu open) is reverted. This helps ensure that the visual and interactive states of the menu are consistent when a user interacts with it.

    navbar.classList.remove('active');



    //animation footer on scroll

    // This line selects the first HTML element with the tag name <footer> in the document using the document.querySelector method. 
    // It retrieves the footer element and stores it in the variable footer.

    let footer = document.querySelector('footer');



    // This line toggles the class "show-animate" on the footer element based on a condition related to the user's scroll position.

    // footer.classList.toggle('show-animate', ...); - This uses the toggle method of the classList property of the footer element. 
    //                                                 It toggles the presence of the class "show-animate" on the footer element based on the following condition.

    // this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight - This condition checks if the sum of the current inner height of 
    //                                                                             the viewport (this.innerHeight) and the current vertical scroll position 
    //                                                                             of the window (this.scrollY) is greater than or equal to 
    //                                                                             the total height of the entire scrollable content of 
    //                                                                             the document (document.scrollingElement.scrollHeight).

    // If the condition is true (meaning the user has scrolled close to or reached the bottom of the page), the "show-animate" class will be added to 
    // the footer element. 
    // This class might be used to trigger animations that become visible as the user scrolls to the end of the content. 
    // If the condition is false (meaning the user is not near the bottom of the page), the "show-animate" class will be removed.

    // This kind of effect is commonly used to introduce animations when certain elements, like the footer, come into view as the user scrolls through 
    // the content of a webpage.

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);
}



// This line declares a constant variable scriptURL and assigns it a string value. 
// This URL points to a Google Apps Script endpoint, which is likely used to handle form submissions.

const scriptURL =
    'https://script.google.com/macros/s/AKfycby091bHPbgoCULh4tjwRrqRr_T3TJ33oF8HrI5CAKLVAbCXoPR10JyxAS4VPKSPFxdm/exec'

// This line selects a <form> element with the name attribute set to "submit-to-google-sheet" using the document.forms property. 
// The selected form element is stored in the constant variable form.

const form = document.forms["submit-to-google-sheet"]
// const msg = document.getElementById("msg"); 



// This section sets up an event listener for the "submit" event on the form element:

// form.addEventListener("submit", e => { ... }); - This adds a "submit" event listener to the form. 
//                                                  When the form is submitted (usually by clicking a submit button inside the form), the arrow function is executed.

// e.preventDefault(); - This prevents the default form submission behavior. By default, when a form is submitted, the page can refresh. 
//                       This line prevents that behavior, allowing the JavaScript code to handle the submission.

// fetch(scriptURL, { method: "POST", body: new FormData(form) }) - This line initiates a network request to the scriptURL using the fetch API. 
//                                                                  It sends a POST request to the Google Apps Script URL, passing the form data as the request body. 
//                                                                  The form data is collected using new FormData(form).

// .then(response => alert("Thanks for contacting us..! We will contact you soon...")) - If the fetch request is successful, it triggers a popup alert with a thank-you
//                                                                                       message, indicating that the form submission was successful.

// .catch(error => console.error('Error!', error.message)); - If an error occurs during the fetch request (for example, if the submission fails), an error message is 
//                                                            logged to the console.

// Overall, this code snippet sets up a form submission handler. 
// When the form is submitted, it prevents the default behavior, sends the form data to the specified Google Apps Script URL, and provides feedback to the user through
// an alert.

form.addEventListener("submit", e => {
    e.preventDefault()
    fetch(scriptURL, {
            method: "POST",
            body: new FormData(form)
        })
        .then(response => alert("Thanks for contacting us..! We will contact you soon..."))
        .catch(error => console.error('Error!', error.message))
})