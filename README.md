<!-- ## Description -->
# Para crear un recurso

```bash
$ nest g res NOMBRE --no--spec
en este caso use nest g res cats --no--spec
```

# Para el Error de fin de linea

```bash
en el Archivo de .eslintrc.js agregar en rules:

"prettier/prettier": [
      "error",
      {
        "endOfLine": "auto"
      },
    ]
```

# Necesario para las validaciones de los tipos de datos

```bash
$ pnpm i class-validator class-transformer -SE
```

# Configuracion en el main necesario
```bash
app.setGlobalPrefix('api/v1'); --> localhost:300/api/v1 se configura como se quiera

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, --> que los datos esten en la lista blanca datos validos
      forbidNonWhitelisted: true,
      transform: true, --> conf automatica de los datos
    }),
  );
```

```bash
  La conexion a la base de datos se hace en entities
```

# Para Conectar a una base de datos

```bash 
  pnpm install --save @nestjs/typeorm typeorm mysql2 -SE
  
  - La conexion a la db se hace en el app.module
  tan simple como llenar cada espacio con los datos correctos

  @Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', --> base de datos
      host: 'localhost',
      port: 3307, --> Fijarse en puerto correcto
      username: 'user_crud', --> usuario de la db
      password: 'root', --> contraseña del usuario de la db
      database: 'db_crud', --> Nombre de la db
      entities: [],
      synchronize: true, --> No debe usarse en produccion
    }),
    CatsModule,
  ],
  controllers: [],
  providers: [],
})
```
# Crear El Role.guard

```bash
   nest g guard auth/guard/roles --flat
```














<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ pnpm install
```

## Running the app

```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev

# production mode
$ pnpm run start:prod
```

## Test

```bash
# unit tests
$ pnpm run test

# e2e tests
$ pnpm run test:e2e

# test coverage
$ pnpm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
