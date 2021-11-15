import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedTestingModule } from '@tmo/shared/testing';

import { ReadingListComponent } from './reading-list.component';
import { BooksFeatureModule } from '@tmo/books/feature';

describe('ReadingListComponent', () => {
  let component: ReadingListComponent;
  let fixture: ComponentFixture<ReadingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [BooksFeatureModule, SharedTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  
  it('should render reading list', () => {
    const fixture = TestBed.createComponent(ReadingListComponent);
    const item = {
      bookId: 'sdfdsfsd',
      finished: true,
      finishedDate: '2020-01-01T00:00:00.000Z',
      title: 'sdfdsfds',
      authors: ['sdfdsf'],
      description: 'sfdsdfsdf'
    }
    expect(component.removeFromReadingList(item)).toHaveBeenCalled;
  });

  it('should update funished reading list', () => {
    const fixture = TestBed.createComponent(ReadingListComponent);
    const item = {
      bookId: 'sdfdsfsd',
      finished: true,
      finishedDate: '2020-01-01T00:00:00.000Z',
      title: 'sdfdsfds',
      authors: ['sdfdsf'],
      description: 'sfdsdfsdf'
    }
    expect(component.finishedReadingBook(item)).toHaveBeenCalled;
  });
});