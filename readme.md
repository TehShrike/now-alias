# now-alias

Helps you automate [now](https://zeit.co/now) deployments.

Given an app name and an alias, updates a recent deployment for that app to point to the alias.

It's like [now-realias](https://github.com/remy/now-realias) except you can specify the token and app name on the command-line.

## Install

```sh
npm install now-alias -g
```

## Switch to the most recent deployment:

```sh
now-alias --name=my-sweet-app --alias=www.mysweetapp.com
```

## OH NO QUICK ROLL BACK:

```sh
now-alias --name=my-sweet-app --alias=www.mysweetapp.com --deployment=1
```

## Arguments

Run `now-alias` on the command-line without the necessary arguments and you will see:

```
-t  --token
  (will use your local one like the now cli, if available)

-d  --deployment  Defaults to 0
  (which deployment to alias - 0 is the latest, 1 is the second latest, etc.)

-n  --name        [required]
  (my-sweet-app)

-a  --alias       [required]
  (mysweetapp.com)
```

