# nginx-unit-dashboard
Dashboard for [NGINX Unit](https://unit.nginx.org/)

[Online demo](http://120.24.208.31:9528/)

## Howto
1. Modify the API address. For example.
```
sed -i 's/http:\/\/1.1.1.1:8080/http:\/\/2.2.2.2:8080/' dist/static/js/app.*.js
```

2. Hosting static website using NGINX.

Please see file `conf/nginx.conf` and copy the `dist` directory to your server.

3. Enable jwt authorization. (optional)

Please install njs module before uncomment these lines related to njs.

## Other
This dash is based on [vue-admin-template](https://github.com/PanJiaChen/vue-admin-template).  
Now, [NGINX](http://nginx.org/) is required as a proxy server to UNIT's configuration.  
Have fun :)
