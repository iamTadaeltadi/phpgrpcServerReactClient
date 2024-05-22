
Project Setup Instructions
Build Docker Image :
Navigate to the envoy directory:
```bash
cd envoy
```
Building the Docker Image
```bash
docker build -t my-envoy
```
Run the Docker image:
```bash
docker run --rm -v $(pwd)/envoy.yaml:/etc/envoy/envoy.yaml -p 9901:9901 -p 8000:8000 my-envoy
```

Running the Frontend
Navigate to the src/frontend directory:
```bash
cd src/frontendd
```
Start the frontend server:
```bash
npm start
```
Navigate to the src/php directory:

```bash
cd src/php
```
Running the Backend
```bash
./rr-grpc serve -d -v
```
After setting up the frontend and backend, you can send messages to the gRPC server from the frontend. Enjoy coding! 😊
