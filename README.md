# InstreamOpenplayerjs

# CMD used to run

## if ad is not playing then follow below steps
`` generate localhost ket and localhost crt

```openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout localhost.key -out localhost.crt -subj "/CN=localhost"

``Run 

```ng serve --ssl true --ssl-key localhost.key --ssl-cert localhost.crt
