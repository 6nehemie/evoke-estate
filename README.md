# Evoke Estate

Evoke Estate is a portfolio project, showcasing a social media platform designed specifically for architectural enthusiasts. It serves as a demonstration of skills in web development and user interface design.

## Project Description

Evoke Estate is a social media platform concept inspired by websites like Behance and Dribbble, tailored to the architectural design niche. It allows users to share their architectural projects, including exterior and interior designs, architectural sketches, 3D models, and more. Users can interact with each other by liking, commenting, and sharing designs, fostering a vibrant community of architects, designers, and enthusiasts.

### Purpose

The primary purpose of Evoke Estate is to showcase various skills in web development and design:

- **Frontend UI Design**: Designed using Figma, the frontend user interface demonstrates proficiency in creating visually appealing and user-friendly designs.

- **Frontend Development**: Developed using Next.js and React, showcasing skills in frontend development and component-based architecture.

- **Backend Development**: Built with Java Spring Boot, demonstrating backend development skills and RESTful API design.

- **Database Management**: Utilizes AWS services, including a PostgreSQL database, highlighting skills in database management and cloud infrastructure.

- **Authentication**: Implements JWT authentication for secure user authentication and authorization.

## Frontend Preview

Here's a preview of the frontend interface:

![Frontend Preview](figma-design/Home%20Page.png)
![Frontend Preview](figma-design/User%20Profile.png)
![Frontend Preview](figma-design/User%20Dashboard.png)

For additional design resources and mockups, please explore the `figma-design` folder or visit my [Figma project](https://www.figma.com/file/AOlNtIWl5P0ZvTz0rtsyIw/Evoke-Estate?type=design&node-id=0%3A1&mode=design&t=hZsSXsy1Wv60cCLI-1) for a more comprehensive view.

## Features

- **User Authentication**: Secure user authentication system allowing users to register, log in, and manage their accounts securely.

- **Design Sharing**: Users can upload and share their architectural designs, including exterior and interior designs,inspiration, and more.

- **Community Interaction**: Engage with other users by liking, commenting, and sharing designs, fostering a vibrant community of architects, designers, and enthusiasts.

- **Follow and Discover**: Follow your favorite designers and discover new talent through personalized recommendations based on your interests and preferences.

- **Responsive Design**: Fully responsive web design ensuring compatibility across a range of devices, from desktops to smartphones.

## Technologies Used

- Frontend: Next.js, React, Tailwind CSS
- Backend: Java, Spring Boot
- Database: PostgreSQL
- Authentication: JSON Web Tokens (JWT)
- File Storage: AWS S3

## Getting Started

To explore the Evoke Estate project, follow these steps:

### 1 - Frontend Setup

- Clone the repository to your local machine.

```shell
git clone https://github.com/NehemieMbg/evoke-estate.git
```

- Navigate to the `evoke-client` directory:

```shell
cd evoke-client
```

- Set up the environment variable for the frontend. Create a `.env` file in the root of the `evoke-client` directory and specify the API URL:

```makefile
EVOKE_URL=<API_URL>
```

Replace <API_URL> with the URL of your backend API (e.g., http://localhost:8080).

- After installation is complete, start the development server:

```shell
npm start
```

- Open your web browser and navigate to the specified localhost port to view the frontend application.

### 2 - Backend Setup

- Ensure you have Apache Maven installed on your system. If not, you can download it from [Maven's official](https://maven.apache.org/download.cgi) website and follow the installation instructions.
- Set up a PostgreSQL database on AWS, Railway or locally.
- Configure the necessary environment variables for the backend server. These variables may include database connection details and other sensitive information. Ensure you have a `dev` profile with appropriate configurations for development.
- Compile the backend application using Maven:

```bash
mvn compile
```

- After the compilation is complete, run the backend server:

```shell
mvn spring-boot:run -Dspring-boot.run.profiles=dev
```

- The backend server should now be running in development mode, logging information and errors as specified in the `dev` profile configuration.
- With both the frontend and backend servers running, you can now interact with the Evoke Estate application by navigating to the specified localhost ports in your web browser.

## Design Files

- All design files are available in the `figma-design` folder. You can also access them online through the [Figma Design](https://www.figma.com/file/AOlNtIWl5P0ZvTz0rtsyIw/Evoke-Estate?type=design&node-id=0-1&mode=design) link.

## Contributing

This project is currently not open for contributions as it serves as a personal portfolio project. However, feedback and suggestions are always welcome!

## Contact

For questions or inquiries about this project, feel free to contact the project owner:

- Name: Nehemie Mombanga
- Email: nehemie.mbg@gmail.com
- LinkedIn: [https://www.linkedin.com/in/nehemie-mombanga/](https://www.linkedin.com/in/nehemie-mombanga/)
