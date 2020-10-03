# Strapi Gatsby Ecommerce Backend

`Updated for Strapi 3.1.7`

## Quickstart

Clone the app
```
git clone git@github.com:GalloDaSballo/Strapi-Gatsby-Ecommerce-Backend.git
```

Install Dependencies
```
yarn
```

Run
```
yarn develop
```

## Deployment
Set up the following environment variable
### Set up Stripe
```
STRIPE_PK
```

### Configure AWS Plugin by adding
```
AWS_ACCESS_KEY_ID
AWS_ACCESS_SECRET
AWS_REGION //eg. us-west-1
AWS_BUCKET
```

### Configure Database (PG) by adding
```
DATABASE_URL
```
By default this will be automatically added when you provision your first Postgres Database.

Notice that you may have some issues if you use the Paid version of PG. 
You MAY have to add this to the database.js file. 
```
ssl: {'rejectUnauthorized': false}
```
Use the Q&A for more help
