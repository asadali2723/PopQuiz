    React Native Movie App - Pop Quiz Assignment
This repository contains my submission for the Software Engineer (React Native) position at ReGov Technologies. The project demonstrates my React Native development skills, focusing on modular structure, state management, and API handling.

Project Overview
This app allows users to browse movies, manage a watchlist, and provide ratings. Key functionalities include:

    Movie Listings: Display a dynamic list of movies on the dashboard.
Local Search: Users can search for movies directly on the dashboard.
Watchlist Management: Users can add movies to a watchlist, view the list on a dedicated screen, and remove or re-rate movies.
Movie Details: Each movie has a detailed screen with options to add it to the watchlist, rate, or modify existing ratings.
User Profile: A dynamic profile screen with logout functionality and API integration.
Features Implemented
React Native 0.76: Leveraged the latest React Native version for modern features and performance.
Redux Saga: Used Redux-Saga for efficient state management and handling side effects.
AsyncStorage: For persistent storage to manage user data, including the watchlist and ratings.
Axios: Integrated Axios for API requests to ensure seamless network communication.
Context API: Demonstrated proficiency by using Context API in addition to Redux for certain UI contexts.
TypeScript: Ensured type safety and code quality with TypeScript across all components and screens.
Project Structure
The codebase follows a clean and modular structure:

APIs: All API calls are organized in utils/api.ts.
Screens: Each screen is located in src/screens.
Components: Reusable UI components are in src/components.
Constants: Constants and configurations are stored in src/constants.
Network Service: Additional network service utilities are managed in src/service.
Getting Started
Install dependencies:
npm install
Run the app:
npm run android   # For Android
npm run ios       # For iOS (requires a Mac)
Features Overview
Dashboard Screen: Lists movies with a search feature for local filtering.
Watchlist Screen: Shows movies added to the watchlist.
Movie Detail Screen: Provides movie information with options to add or remove ratings.
Dynamic Profile Screen: Includes logout functionality and additional profile information.
Demonstration
Here are some screenshots of the app in action:
This is a screenshot of the app:
![App Screenshot](https://drive.google.com/uc?export=view&id=18TKw_1dGvS718mmCWDXyIO89OLedBn3X)
![App Screenshot](https://drive.google.com/uc?export=view&id=1ZbxNPbiwAra1a19TLZJOnrH52pNYzz2Z)
![App Screenshot](https://drive.google.com/uc?export=view&id=1lQipaaRupMZCUQPv9jlQ2_PzyT3TAhSf)
![App Screenshot](https://drive.google.com/uc?export=view&id=1YfGFyw0SzV8cFa5knS_sqp3yEuBVzfcE)
![App Screenshot](https://drive.google.com/uc?export=view&id=1_uviMHKmAmaiAZt2fN3WsTIseAR1N-Ex)


Watch the demo video:
[Watch Video](https://drive.google.com/file/d/1LYUvM_TC0AujgOrNS9q2yK49F7i8uu7A/view?usp=drive_link)


Future Improvements
Unit Testing: Add comprehensive unit tests for core components and services.
Error Handling: Enhance error handling to provide better user feedback during network issues.
Performance Optimization: Optimize state and component re-renders for larger data handling.

Author
Asad
React Native Developer
