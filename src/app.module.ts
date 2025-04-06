import { Module } from '@nestjs/common';
import { ProjectsModule } from './projects/projects.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { TasksModule } from './tasks/tasks.module';

@Module({
  imports: [ProjectsModule, AuthModule, UsersModule, TasksModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
