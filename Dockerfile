FROM denoland/deno

WORKDIR /app
ADD ./app /app
RUN deno cache main.ts
CMD ["run", "--allow-net", "--allow-env", "main.ts"]
