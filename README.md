# nginx-unit-dashboard
Dashboard for [NGINX Unit](https://unit.nginx.org/)

[Online demo](http://120.24.208.31:9528/)

## Howto
1. Modify the API address. For example.
```
sed -i 's/http:\/\/1.1.1.1:8080/http:\/\/2.2.2.2:8080/' dist/static/js/app.*.js
```
2. Hosting static website using NGINX.

Please see the `nginx.conf` file and move the `dist` directory to your server.

## Other
This dash is based on [vue-admin-template](https://github.com/PanJiaChen/vue-admin-template).  
Now, [NGINX](http://nginx.org/) is required as a proxy server to UNIT's configuration.  
Login is now simulated. We plan to implement it with [njs](https://nginx.org/en/docs/njs/) in the future.  
Enjoy it :)
