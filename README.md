Before:

1. create postgres db with name specified in `ormconfig.json`

```sh
$ createdb jwt-auth-example
```

---

Getting started:

1. install dependencies

```sh
$ yarn dev:install
```

2. create `.env` with token secrets

```sh
echo "ACCESS_TOKEN_SECRET=somesecretstring" >> server/.env
echo "REFRESH_TOKEN_SECRET=somesecretstring" >> server/.env
```

3. run server and client

```sh
$ yarn dev
```
