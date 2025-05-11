"# GodSpeed" 

I have build a Subscription Model for a Saas Company.

How to Run it :

  1. Clone the Repo
  2. Install the dependencies
  3. Configure .env file
  4. Prepare Prisma (DB Schema Sync)
  5. Start the Application


API Access
  Swagger Docs: http://localhost:3000/api-docs
  GitHub OAuth Login: http://localhost:3000/auth/github


Notes & Limitations
  1.Only GitHub OAuth2 is integrated (more providers can be added).
  2.Roles are basic (ADMIN, USER) but extendable.
  3.Ensure response schemas match your function outputs to avoid validation errors.
