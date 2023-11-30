// export interface PostType {
//   id: string;
//   title: string;
//   content: string;
//   author: string;
//   created_at: string;
// }
// posts.interface.ts
import { ApiProperty } from '@nestjs/swagger';

export class PostType {
  id: string;
  content: string;
  author: string;
  created_at: string;

  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;
}
