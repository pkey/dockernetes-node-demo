# Dockernetes demo

[![Greenkeeper badge](https://badges.greenkeeper.io/pkey/dockernetes-node-demo.svg)](https://greenkeeper.io/)

Demo project for showcasing basic docker and kubernetes functionalities

End goal: deploy this application to kubernetes cluster

## Endpoints

- `/` - used to get hello message, which also prints **HOSTNAME**, which is equal to pod's name in a running pod. This way end user can see which pod runs the application at the moment
- `/break` - used to return status code `500` and kill the application. This is used to showace how kubernetes respawns pods
