import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Book } from '@tmo/shared/models';
import { ReadingListService } from './reading-list.service';

@Controller()
export class ReadingListController {
  constructor(private readonly readingList: ReadingListService) {}

  @Get('/reading-list/')
  async getReadingList() {
    return this.readingList.getList();
  }

  @Post('/reading-list/')
  async addToReadingList(@Body() item: Book) {
    return this.readingList.addBook(item);
  }

  @Delete('/reading-list/:id')
  async removeFromReadingList(@Param() params) {
    return this.readingList.removeBook(params.id);
  }
}
