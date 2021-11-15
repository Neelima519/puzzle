Code Smells:
-  Variable, property and parameter names should comply with a naming convention:

1.  export const READING_LIST_FEATURE_KEY = 'readingList'
READING_LIST_FEATURE_KEY - is not the right way of naming convention.

2. export const getBooksState = createFeatureSelector<BooksPartialState, State>(
  BOOKS_FEATURE_KEY
);
BOOKS_FEATURE_KEY - is not the right way of naming convention.

3. export const BOOKS_FEATURE_KEY = 'books';
BOOKS_FEATURE_KEY - is not the right way of naming convention.

4. export const environment = {
  production: true
}; 
Trailing comma should be used , last item in a multiline construct (array or object literal, import or export statement, function declaration or call) should end with a trailing comma

5. export const environment = {
  production: false
};
Trailing comma should be used , last item in a multiline construct (array or object literal, import or export statement, function declaration or call) should end with a trailing comma

6. export const environment = {
  production: false
};
Trailing comma should be used , last item in a multiline construct (array or object literal, import or export statement, function declaration or call) should end with a trailing comma

7.   let actions: ReplaySubject<any>;
Type assertions should use "as"

8. export class StorageService<T extends object = any>
any should not be used

9.  xit('Then: I should see search results as I am typing', () => {
    // TODO: Implement this test!
  });
  presence of TODO tags
  xit is invalid 

10. return await this.books.search(term);
  "await" should not be used redundantly

11. return await this.readingList.getList();
  "await" should not be used redundantly

12. return await this.readingList.addBook(item);
  "await" should not be used redundantly

13. return await this.readingList.removeBook(params.id);
  "await" should not be used redundantly



--------------------------------------------------

Code Improvements:

1. Implementing OnDestroy() function for component class to reduce memory leakage.


