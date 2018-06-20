# candidateXYZ
[Trello Board](https://trello.com/b/aEgnhyZh)

## Local development
Environment
```
AWS_REGION
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
```

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

## Running
`bundle exec rails s -b 127.0.0.1 -p 3001`
