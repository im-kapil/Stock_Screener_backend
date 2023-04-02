import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';


const port = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('Screener Backend APIs')
  .setDescription('List of all the backend apis for stock market screener')
  .setVersion('1.0')
  .addTag('screener')
  .build();
  
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);



  await app.listen(port);
  console.log(`Application started at::: http://localhost:${port}`)
}
bootstrap();
