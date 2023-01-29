import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common'
import { PostService } from './post.service'
import { CreatePostDto } from './dto/create-post.dto'
import { UpdatePostDto } from './dto/update-post.dto'
import { SearchPostDto } from './dto/search-post-dto'
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard'
import { UserId } from 'src/decorators/user-id.decorator'

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@UserId() userId: number, @Body() dto: CreatePostDto) {
    console.log('post controller create, - userId', userId)

    return this.postService.create(dto, userId)
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/statistics/:id')
  updateStatistics(
    @UserId() userId: number,
    @Param('id') id: number,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    return this.postService.update(id, updatePostDto, userId, true)
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @UserId() userId: number,
    @Param('id') id: number,
    @Body() updatePostDto: UpdatePostDto,
  ) {
    return this.postService.update(id, updatePostDto, userId)
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@UserId() userId: number, @Param('id') id: number) {
    return this.postService.remove(id, userId)
  }

  @Get()
  findAll() {
    return this.postService.findAll()
  }

  @Get('search') //parameters here
  searchPosts(@Query() dto: SearchPostDto) {
    return this.postService.search(dto)
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.postService.findOne(id)
  }
}
