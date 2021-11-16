import { Test, TestingModule } from '@nestjs/testing';
import { ReadingListController } from '../../../../libs/api/books/src/lib/reading-list.controller';
describe('ReadingListController', () => {
  let app: TestingModule;
  beforeEach(async () => {
    app = await Test.createTestingModule({
      imports: [],
      controllers: [ReadingListController]
    }).compile();
  });

  describe('getReadingList', () => {
    it('should see my reading list', () => {
      const readingListController = app.get<ReadingListController>(ReadingListController);
      expect(readingListController.getReadingList()).equal([]);
    });
  });

  describe('addToReadingList', () => {
    it('should add my reading list', () => {
      const book = { id: 'ffdfdsf',
        title: 'afsadfdssdf',
        authors: ['fsdfds', 'adfdsfds', 'afdafdsf'],
        description: 'dsfdsfdsfs'}
      const readingListController = app.get<ReadingListController>(ReadingListController);
      expect(readingListController.addToReadingList(book)).equal(book);
    });
  });

  describe('removeFromReadingList', () => {
    it('should remove my reading list', () => {
     
      const readingListController = app.get<ReadingListController>(ReadingListController);
      expect(readingListController.removeFromReadingList('fdsfds')).equal('adasdsa');
    });
  });
});

