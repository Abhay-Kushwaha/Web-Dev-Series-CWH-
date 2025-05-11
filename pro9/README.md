This is the NextAuth.js backend route that initializes authentication.
You register GitHub as a provider with your clientId and clientSecret.
You pass a secret for token encryption (NEXTAUTH_SECRET).
This route acts as both GET and POST endpoints — for login, logout, session fetching, etc.