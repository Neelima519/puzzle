import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Store } from '@ngrx/store';
import { addToReadingList, getReadingList, removeFromReadingList } from '@tmo/books/data-access';
import { Book } from '@tmo/shared/models';

@Component({
  selector: 'tmo-reading-list',
  templateUrl: './reading-list.component.html',
  styleUrls: ['./reading-list.component.scss']
})
export class ReadingListComponent {
  readingList$ = this.store.select(getReadingList);

  constructor(private readonly store: Store,
    public snackBar: MatSnackBar) { }

  removeFromReadingList(item) {
    this.store.dispatch(removeFromReadingList({ item }));
    const msg = 'Removing book to the reading list';
    let snackBarRef = this.snackBar.open(msg, 'Undo', {
      duration: 2000
    });
    snackBarRef.onAction().subscribe(() => {
      const book: Book = {
        id: item.bookId,
        title: item.title,
        authors: item.authors,
        description: item.description
      };
      this.store.dispatch(addToReadingList({ book }));
    });
  }
}
