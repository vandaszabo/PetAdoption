## About the Project
<h2>Welcome to the Pet Adoption Management System!</h2>
<h3>It is designed to facilitate the pet adoption process by allowing users to register, log in, and eventually browse available pets and submit adoption requests.</h3>

## Features
### User Registration and Login:
- Users can register for an account.
- Registered users can log in to their accounts.
- Login functionality includes login with Google.

## Accessing the Website
The Pet Adoption Management System can be accessed at the following URL:
https://pet-adoption-dt9kh4jzp-vanda-reszketo-szabos-projects.vercel.app

## Getting Started
Simply visit the provided URL and register for an account. Once registered, log in to your account. 
Functionalities will be added soon.

<img src="https://github.com/vandaszabo/PetAdoption/blob/main/website.png?raw=true" alt="Website Preview" width="400" height="auto">

## Installation Instructions
### Install Dependencies
Navigate to the project directory and install the required dependencies:
```
npm install
```

### Configuration
Create a .env.local file:
Make sure to replace placeholders like yourGoogleClientId, yourGoogleClientSecret, yourNextAuthSecret, and yourDatabaseConnectionString with your actual credentials and connection strings.
```
# Providers
GOOGLE_CLIENT_ID=yourGoogleClientId
GOOGLE_CLIENT_SECRET=yourGoogleClientSecret

# Auth Config
NEXTAUTH_SECRET=yourNextAuthSecret
NEXTAUTH_URL=http://localhost:3000

# PostgreSQL Database
DATABASE_URL=yourDatabaseConnectionString

# Environment
NODE_ENV=development
NEXT_PUBLIC_API_URL=https://api.example.com
```

1. Obtain OAuth 2.0 credentials from the Google API Console:
* Visit the Google API Console.
* Create a new project or select an existing project.
* Navigate to the "Credentials" section.
* Create OAuth 2.0 credentials to obtain a client ID and client secret.

2. Add your own NextAuth secret and your localhost URL.

3. Create a PostgreSQL database:
* You can create it on a cloud platform like Vercel or any other cloud service provider.
* Obtain the database connection string.

### Start the Development Server
Once the dependencies are installed and all environment variables are added, you can start the development server:
```
npm run dev
```

## Future Updates
1. Pet Browsing:
Viewing adoptable pets will be available without logging in.
Each pet listing will include details such as name, breed, gender and age.

3. Adoption Requests:
Logged-in users will be able to submit adoption requests for pets they are interested in.

## Technologies Used
- Next.js
- Vercel
- Postgres
- Prisma
- CSS
- Zod
- TypeScript

