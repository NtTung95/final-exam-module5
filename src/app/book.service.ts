import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private URL = 'http://localhost:3000/books';

  constructor(private http: HttpClient) {
  }

  getAll(): any {
    return this.http.get(this.URL);
  }

  getOne(id: number): any {
    return this.http.get(this.URL + '/' + id);
  }

  create(book: any): any {
    return this.http.post(this.URL, book);
  }

  delete(id: number): any {
    return this.http.delete(this.URL + '/' + id);
  }

  update(id: number, book: any): any {
    // @ts-ignore
    return this.http.put(this.URL + '/' + id, book);
  }

}
