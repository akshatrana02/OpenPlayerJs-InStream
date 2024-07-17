# InstreamOpenplayerjs

## Running the Project

If you encounter issues with ads not playing, you might need to run the project with SSL enabled. Follow the steps below to generate SSL certificates and run the project.

### Generate localhost Key and Certificate

Use the following command to generate a self-signed SSL certificate for localhost:

```bash
openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout localhost.key -out localhost.crt -subj "/CN=localhost"
```

Use the following command to RUN:

```bash
ng serve --ssl true --ssl-key localhost.key --ssl-cert localhost.crt
```

