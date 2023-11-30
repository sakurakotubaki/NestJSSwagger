# Swaggerを使ってみる

[公式からインストールしてください](https://docs.nestjs.com/openapi/introduction)


Swaggerをインストールする
```bash
npm install --save @nestjs/swagger
```

## NestJSの使い方

1. 新しい`module`の作成を行う。

postsというディレクトリを作成してその中に、雛形のファイルを自動生成する。
```bash
nest generate module posts
```

2. `Controller`を作成する。
```bash
nest generate controller posts
```

3. `service`という別のモジュールを作成して、Textはそこに配置する。APIのデータと思われる。
```bash
nest generate service posts
```

**posts.module.ts**
こちらは、コマンドを打つと自動生成される

```ts
import { Module } from '@nestjs/common';
import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
})
export class PostsModule {}
```

**posts.controller.ts**
APIを操作するコントローラーを作成する

```ts
import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostType } from './posts.interface';
import { ApiBody } from '@nestjs/swagger';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Post()
  @ApiBody({ type: PostType })
  create(@Body() post: PostType): void {
    this.postsService.create(post);
  }
}
```

**posts.service.ts**
ダミーの配列と、データを入れるメソッドを作成する

```ts
import { Injectable } from '@nestjs/common';
import { PostType } from './posts.interface';

// 全てのブログメッセージを返す
@Injectable()
export class PostsService {
  // このクラス内でのみアクセス可能なプロパティ
  private readonly posts: PostType[] = [];

  findAll() {
    return this.posts;
  }

  create(post: PostType) {
    this.posts.push(post);
  }
}
```
