# Swaggerを使ってみる

[公式からインストールしてください](https://docs.nestjs.com/openapi/introduction)


Swaggerをインストールする
```bash
npm install --save @nestjs/swagger
```

## POSTとGETをするAPIを構築する
taskというダミーのデータを入れる機能を作成する

1. moduleを作成
```bash
nest g module tasks
```
2. serviceを作成
```bash
nest g service tasks
```
3. controllerを作成
```bash
nest g controller tasks
```

## ダミーの配列にPOSTとGETをするのに必要なプログラムを作成する
```typescript
import { Injectable } from '@nestjs/common';
import { Tasks } from './entities/tasks.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Tasks)
    private tasksRepository: Repository<Tasks>,
  ) {}

  findAll(): Promise<Tasks[]> {
    return this.tasksRepository.find();
  }

  create(task: Tasks): Promise<Tasks> {
    return this.tasksRepository.save(task);
  }
}
```


```typescript
import { Controller, Get, Post, Body } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  @Get()
  getAllTasks() {
    return this.tasksService.getAllTasks();
  }

  @Post()
  createTask(@Body() body) {
    return this.tasksService.createTask(body);
  }
}
```
