import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';
import { HelloController } from './hello/hello.controller';

@Module({
  imports: [ProjectsModule, AuthModule, UsersModule, TasksModule],
  controllers: [HelloController],
  providers: [],
})
export class AppModule {}
