"# GodSpeed" 

I have build a Subscription Model for a Saas Company.

How to Run it :

  1. Clone the Repo
  2. Install the dependencies
  3. Configure .env file
  4. Prepare Prisma (DB Schema Sync)
  5. Start the Application

Files I have Created or Updated :
  1. /src/datasources/schema.prisma
  2. /src/events/helloUser.yaml
  3. /src/eventsources/http.yaml
  4. /src/functions/helloUser.ts

API Access
  1. Swagger Docs: http://localhost:3000/api-docs
  2. GitHub OAuth Login: http://localhost:3000/auth/github


Notes & Limitations

  1. Only GitHub OAuth2 is integrated (more providers can be added).
  2. Roles are basic (ADMIN, USER) but extendable.
  3. Ensure response schemas match your function outputs to avoid validation errors.
