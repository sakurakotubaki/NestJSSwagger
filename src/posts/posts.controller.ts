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
