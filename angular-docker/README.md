# Angular Crash Course 2021 (Task Tracker App)

This is the project from the [YouTube crash course](https://youtu.be/3dHNOWTI7H8 "Angular Crash Course 2021"). It includes the Angular ui as well as JSON-server for our mock backend

## Usage

### Install dependencies

```
npm install
```

### Run Angular server (http://localhost:4200)

```
ng serve
```

### Run the JSON server (http://localhost:5000)

```
npm run server
```

### To build for production

```
ng build
```

### Run frontend from docker image

```
docker run --rm -p 4200:4200 $(docker build -q -f Dockerfile.dev .)
```

### Run backend from docker image

```
docker run --rm -p 5000:5000 $(docker build -q .)
```

### Run docker-compose

```
docker-compose -f docker-compose.prod.yml up
```
