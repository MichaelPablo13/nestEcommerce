import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import session from 'express-session';
import * as hbs from 'hbs';
import * as hbsUtils from 'hbs-utils';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  hbs.registerPartials(join(__dirname, '..', 'views/layouts'));
  hbsUtils(hbs).registerWatchedPartials(join(__dirname, '..', 'views/layouts'));
  app.setViewEngine('hbs');
  app.use(
    session({
      secret: 'nest-book',
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use((req, res, next) => {
    res.local.session = req.session;
    next();
  })

  await app.listen(3000);
}
bootstrap();
