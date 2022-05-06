import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { LoginService } from './login/login.service';
import { SignupService } from './signup/signup.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, LoginService, SignupService],
})
export class AppModule {}
