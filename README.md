# candidateXYZ

The first MVP version of [candidateXYZ](https://candidatexyz.com). A basic template for campaign websites based off of Congressman Seth Moulton's website. Fully themeable and customizable based on user input.

## Local development

Environment Variables

```
AWS_REGION
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
```

## Running

`bundle exec rails s -b 127.0.0.1 -p 3001`

## Deployment instructions

`bundle exec rake assets:precompile RAILS_ENV=production`
`./deploy/deploy`

secrets.env

```
SECRET_KEY_BASE={GENERATED_SECRET_KEY}
PGUSER={DATABASE_USERNAME}
PGPASSWORD={DATABASE_PASSWORD}
PGHOST={DATABASE_ADDRESS}
PGPORT=5432
AWS_REGION={AWS_REGION}
PROJECT_NAME={TERRAFORM_NAME}
USERNAME=demo
```
