# Cultural Food Passport (Frontend)

A full-stack web application where users can share and explore traditional dishes from around the world.  
Users can log in, add, edit, and delete dishes, and view dishes added by others.  
This project connects people through food and showcases cultural diversity in a digital format.

---

## Project Overview

**Cultural Food Passport** is a capstone project built during the SDA-Siraj Bootcamp.  
It uses **React** for the frontend and **Django REST Framework** for the backend, with **PostgreSQL** as the database.  
The app implements **JWT authentication** and **CRUD functionality**, allowing users to manage their own dishes.

---

## Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend | React, JavaScript, React Router |
| Backend | Django REST Framework |
| Database | PostgreSQL |
| Auth | JSON Web Token (JWT) |
| Version Control | Git & GitHub |

---

## User Stories

1. I can sign up and create an account.  
2. I can log in to my account.  
3. I can add a new dish with a name, photo, description, and location.  
4. I can view all dishes shared by users.  
5. I can view detailed information about a dish, including its tags and origin.  
6. I can edit or delete my own dishes.  
7. I can create, edit, and delete tags to describe dishes.  
8. I can filter dishes by tags such as spicy, sweet, or traditional.  
9. I can view dishes even if I’m not logged in.

---

## Entity Relationship Diagram (ERD)

![ERD Diagram](./src/assets/images/Untitled%20(1).jpg)

**Models:**
- **User** → owns the dishes they create  
- **Dish** → includes name, origin, description, photo, user, tags  
- **Tag** → describes dishes (e.g., spicy, sweet, traditional)  
- **Location** → represents country or city  

**Relationships:**
- User → Dish = One-to-Many  
- Dish → Location = Many-to-One  
- Dish ↔ Tag = Many-to-Many  


---

## RESTful Routing Table — Backend (Django REST Framework)

| HTTP Method | Endpoint | Description |
|--------------|-----------|--------------|
| **GET** | `//` | Welcome message |
| **GET** | `/dishes/` | List all dishes for logged-in user |
| **POST** | `/dishes/` | Create a new dish |
| **GET** | `/dishes/:dish_id/` | Retrieve details for a specific dish |
| **PUT** | `/dishes/:dish_id/` | Update a dish |
| **DELETE** | `/dishes/:dish_id/` | Delete a dish |
| **GET** | `/locations/` | List all locations |
| **POST** | `/locations/` | Create a location |
| **GET** | `/locations/:location_id/dishes/` | Filter dishes by location |
| **GET** | `/tags/` | List all tags |
| **POST** | `/tags/` | Create a tag |
| **GET** | `/tags/:tag_id/` | Retrieve a specific tag |
| **PUT** | `/tags/:tag_id/` | Update a tag |
| **DELETE** | `/tags/:tag_id/` | Delete a tag |
| **GET** | `/tags/:tag_name/dishes/` | Filter dishes by tag |
| **POST** | `/user/signup/` | Register a new user |
| **POST** | `/user/login/` | Login user and return JWT token |
| **GET** | `/user/verify/` | Verify JWT token and return user data |



---

## RESTful Routing Table — Frontend (React)

| Route | Component | Description |
|--------|------------|-------------|
| `/` | **HomePage** | Main page with introduction and list of dishes |
| `/about` | **AboutPage** | About the project |
| `/login` | **LoginPage** | Login form for existing users |
| `/signup` | **SignupPage** | Signup form for new users |
| `/dishes` | **DishIndexPage** | Show all dishes |
| `/dishes/:id` | **DishDetailPage** | Show details for a specific dish |
| `/add-dish` | **AddDishPage** | Add a new dish |
| `/dishes/filter/:tag` | **FilteredDishesPage** | Show dishes filtered by selected tag |
| `/edit-dish/:id` | **EditDishPage** | Edit a dish |
| `/delete-dish/:id` | **DeleteDishPage** | Delete a dish |


---

### Clone Repositories
**Backend Repository:** [https://github.com/amwaj299/backend-culturalfood](https://github.com/amwaj299/backend-culturalfood)
=[http://localhost:5173/]

### Installation & Setup
cd frontend-culturalfood
npm install
npm run dev
docker compose up -d
docker compose up --build


### Future Improvements / Icebox Features
Add a commenting system where users can interact with dishes posted by others — similar to comment sections on social platforms or Google Maps.

Add likes and reactions for each dish to increase community engagement.

Integrate geo-location features to detect the user’s location and show nearby restaurants offering similar dishes from different countries.

Create a social feed where users can explore and discuss international cuisines shared by the community.

Add AI-based recommendations suggesting dishes or restaurants based on user interests and location.



# <!-- # React + Vite

# This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

# Currently, two official plugins are available:

# - [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
# - [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# ## React Compiler

# The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

# ## Expanding the ESLint configuration

# If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->
