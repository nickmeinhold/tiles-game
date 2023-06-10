# Tiles Game

Walk over tiles to increase the count.

## Run Deno app locally

You can either add env vars to the environment manually:

```sh
export SPACE_ID="..." && export API_KEY="..."
deno run --allow-net --allow-env server.ts
```

or put add a `.env` file with:

```.env
SPACE_ID="..."
API_KEY="..."
```

and use the "Debug" launch config, which adds the env vars from the `.env` file to the environment as it runs.

## Build and deploy container

Assuming Google Artifact Registry:

```bash
docker build -t LOCATION-docker.pkg.dev/PROJECT/REPO/IMAGE:TAG --platform=linux/amd64 .
docker push LOCATION-docker.pkg.dev/PROJECT/REPO/IMAGE:TAG
```

## gather-game-client code

The [gather-game-client-code](https://github.com/enspyrco/gather-game-client-code) repo has the contents of the `gather-game-client` npm package and instructions on how to:

- check the latest version
- pull down and save the code of a new version