# Autosense API

Instruction to run locally:

- Make sure you have Postgres last version installed
- Make sure you have Node last version installed
- Clone the repo
- Copy and paste the ".env.example" as ".env" and set the DATABASE_URL according to the DB table you created
- then run the following commands (inside the repo):
  - npm install
  - npm run prisma:push
  - npm run prisma:seed
  - npm run dev
