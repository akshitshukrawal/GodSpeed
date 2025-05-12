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
  5. /src/functions/addProduct.ts
  6. /src/functions/addPackage.ts
  7. /src/functions/addSubscription.ts

How to test:
    1. You can create user by going to POST /schema/user/ with content
        {
          "name": "YOUR_NAME",
          "company": "YOUR_COMPANY_ID",
          "email": "YOUR_GMAIL",
          "role": "ROLE"
        }
    
    2.Only ADMIN could add Product,Package and Subscrition
     by goint to 
      POST /addProduct 
           {
            "userId": "USER_ID",
            "companyId": "  ",
            "name": "  ",
            "description": "  "
          }
      POST /addPackage
            {
              "userId": "  ",
              "productId": "  ",
              "name": "  "
            }
      POST /addsubscription
            {
              "userId": "  ",
              "packageId": "  ",
              "targetId": " user whom you want to subscribe to the package "
            }
    3. authenticate using Github
      go to  /auth/github  
      after successful authentication it will redirect you to /verify/user

  
API Access
  1. Swagger Docs: http://localhost:3000/api-docs
  2. create user : http://localhost:3000/schema/user
  3. GitHub OAuth Login: http://localhost:3000/auth/github
  4. add Product : http://localhost:3000/addProduct
  5. add Package : http://localhost:3000/addPackage
  6. add Subscription : http://localhost:3000/addSubscription

Notes & Limitations

  1. Only GitHub OAuth2 is integrated (more providers can be added).
  2. Roles are basic (ADMIN, USER) but extendable.
  3. Ensure response schemas match your function outputs to avoid validation errors.
