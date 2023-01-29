import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards} from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { CommentService } from './comment.service';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { UserId } from "../decorators/user-id.decorator";

@Controller('comment')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@UserId() userId: number, @Body() createCommentDto: CreateCommentDto) {
    return this.commentService.create(createCommentDto, userId);
  }

  @Get()
  findAll() {
    return this.commentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.commentService.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/statistics/:id')
  updateStatistics(@Param('id') id: number, @Body() updateCommentDto: UpdateCommentDto, @UserId() userId: number) {
    return this.commentService.update(id, updateCommentDto, userId, true);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCommentDto: UpdateCommentDto, @UserId() userId: number) {
    return this.commentService.update(id, updateCommentDto, userId)
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: number, @UserId() userId: number) {
    return this.commentService.remove(id, userId);
  }
}