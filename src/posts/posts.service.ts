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
