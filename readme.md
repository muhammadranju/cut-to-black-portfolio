# Cut to Black - Portfolio Website

This project is a multi-page portfolio website named "Cut to Black", designed to showcase services related to video post-production, editorial, and other creative services.

## Features

- **Responsive Design**: The website is built with a responsive layout, adapting to various screen sizes, including mobile devices.
- **Interactive Video Hero Section**: The homepage features a prominent video hero section with custom play/pause controls and a loading spinner, providing an engaging introduction to the content.
- **Service Showcase**: Dedicated sections highlight services such as "Post Supervision" and "Editorial" with descriptive icons.
- **Navigation**: A clear and intuitive navigation bar with SVG icons for Home, Portfolio, Services, and About pages.
- **PDF Upload Functionality**: The backend includes a Google Apps Script (`app.script.js`) that handles form submissions, allowing users to upload PDF files to Google Drive and link them in a Google Sheet along with their contact details (username, email, phone).
- **"Back to Top" Button**: A convenient "Back to Top" button is implemented for improved user experience on longer pages.

## Technologies Used

- **HTML5**: For structuring the web content.
- **CSS3**: For styling, including:
    - `main.css`: Global styles, font imports (Roboto, Montserrat), and basic resets.
    - `components/`: Modular CSS files for various sections like header, footer, home, services, portfolio, and responsive adjustments.
- **JavaScript**: For interactive elements and dynamic content, including:
    - Vimeo player initialization and controls.
    - "Back to Top" button functionality.
    - Google Apps Script for backend PDF upload and data management.

## Project Structure

```
.vscode/
assets/
├── development/ (icons, favicons, control buttons)
└── images/ (backgrounds, other images)
css/
├── components/ (modular CSS files for different sections)
└── main.css (global styles)
data/ (JSON data for content)
js/
├── components/ (modular JavaScript files)
├── modules/ (API related JavaScript)
└── app.script.js (Google Apps Script for backend)
index.html
about.html
portfolio.html
services.html
upload-pdf.html
readme.md
```

## Setup and Usage

To run this project locally, simply open `index.html` in your web browser. For the PDF upload functionality, you would need to deploy the `app.script.js` as a web app in Google Apps Script and configure the frontend to interact with it.