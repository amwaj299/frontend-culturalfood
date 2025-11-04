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

## RESTful Routing Table — Backend API

| Method | Endpoint | Description |
|--------|-----------|-------------|
| GET | `/dishes/` | View all dishes |
| POST | `/dishes/` | Create a new dish |
| GET | `/dishes/:id/` | Get dish details |
| PUT | `/dishes/:id/` | Edit a dish |
| DELETE | `/dishes/:id/` | Delete a dish |
| GET | `/tags/` | View all tags |
| POST | `/tags/` | Add a tag |
| GET | `/locations/` | View all locations |
| POST | `/locations/` | Add a location |
| POST | `/user/signup/` | Create user |
| POST | `/user/login/` | Login user |

---

## Routing Table — Frontend (React Router)

| Path | Component | Description |
|------|------------|-------------|
| `/home` | HomePage | Main landing page |
| `/about` | AboutPage | About the project |
| `/signup` | SignupPage | Create new account |
| `/dishes` | DishIndexPage | List all dishes |
| `/dishes/new` | DishFormPage | Create new dish |
| `/dishes/edit/:id` | DishFormPage | Edit dish |
| `/dishes/delete/:id` | DishFormPage | Delete dish |
| `/dishes/filter/:tag` | FilteredDishesPage | Filter by tag |
| `/dishes/:id` | DishDetailPage | Dish details |
| `/*` | Navigate | Redirect to `/home` |

---

### Clone Repositories
git clone https://github.com/amwaj299/frontend-culturalfood
git clone https://github.com/amwaj299/backend-culturalfood
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
