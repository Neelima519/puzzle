import { TestBed } from '@angular/core/testing';
import { ReplaySubject } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { HttpTestingController } from '@angular/common/http/testing';

import { SharedTestingModule } from '@tmo/shared/testing';
import { ReadingListEffects } from './reading-list.effects';
import * as ReadingListActions from './reading-list.actions';
import { Book, ReadingListItem } from '@tmo/shared/models';

describe('ToReadEffects', () => {
  let actions: ReplaySubject<any>;
  let effects: ReadingListEffects;
  let httpMock: HttpTestingController;
      httpMock.expectOne('/api/reading-list/dsadsad4324/finished').flush([]);
  const param: ReadingListItem = {
    bookId: 'sdfdsfsd',
    finished: true,
    finishedDate: '2020-01-01T00:00:00.000Z',
    title: 'sdfdsfds',
    authors: ['sdfdsf'],
    description: 'sfdsdfsdf'
  };
  const item: ReadingListItem = {
    bookId: 'sdfdsfsd',
    finished: true,
    finishedDate: '2020-01-01T00:00:00.000Z',
    title: 'sdfdsfds',
    authors: ['sdfdsf'],
    description: 'sfdsdfsdf'
  };
const book : Book = {
  id: 'sdfdsfsd',
  title: 'sdfdsfds',
  authors: ['sdfdsf'],
  description: 'zxcxzcxzc',
  publisher: 'cxzcxzczx',
  publishedDate: 'sdsadsadsd',
  coverUrl: 'sdsadsadsa'
}
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SharedTestingModule],
      providers: [
        ReadingListEffects,
        provideMockActions(() => actions),
        provideMockStore()
      ]
    });

    effects = TestBed.inject(ReadingListEffects);
    httpMock = TestBed.inject(HttpTestingController);
  });

  describe('loadReadingList$', () => {
    it('should work', done => {
      actions = new ReplaySubject();
      actions.next(ReadingListActions.init());

      effects.loadReadingList$.subscribe(action => {
        expect(action).toEqual(
          ReadingListActions.loadReadingListSuccess({ list: [] })
        );
        done();
      });

      httpMock.expectOne('/api/reading-list').flush([]);
    });
  });
  describe('finishReading$', () => {
    it('should work', done => {
      actions = new ReplaySubject();

      actions.next(ReadingListActions.finishedReading({param}));

      effects.finishReading$.subscribe(action => {
        expect(action).toEqual(
          ReadingListActions.loadReadingListSuccess({ list: [] })
        );
        done();
      });

      httpMock.expectOne('/api/reading-list/dsadsad4324/finished').flush([]);
    });
  });
  describe('addBook$', () => {
    it('should work', done => {
      actions = new ReplaySubject();

      actions.next(ReadingListActions.addToReadingList({book}));

      effects.finishReading$.subscribe(action => {
        expect(action).toEqual(
          ReadingListActions.confirmedAddToReadingList({ book: book })
        );
        done();
      });

      httpMock.expectOne('/api/reading-list').flush([]);
    });
  });
  describe('removeBook$', () => {
    it('should work', done => {
      actions = new ReplaySubject();

      actions.next(ReadingListActions.removeFromReadingList({item}));

      effects.finishReading$.subscribe(action => {
        expect(action).toEqual(
          ReadingListActions.confirmedRemoveFromReadingList({ item })
        );
        done();
      });

      httpMock.expectOne('/api/reading-list/dfdfdsfd').flush([]);
    });
  });
});
