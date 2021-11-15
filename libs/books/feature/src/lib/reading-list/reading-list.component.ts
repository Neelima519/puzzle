import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { finishedReading, getReadingList, removeFromReadingList } from '@tmo/books/data-access';
import { ReadingListItem } from '@tmo/shared/models';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);
  finishReadingSuccess: any;
  constructor(private readonly store: Store) {}

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
  }

  
  finishedReadingBook(item) {
    const param: ReadingListItem = {
      bookId: item.bookId,
      finished : true,
      finishedDate: new Date().toString(),
      title: item.title,
      authors:item.authors,
      description: item.description
    }
    this.store.dispatch(finishedReading({ param }));
  }
}
