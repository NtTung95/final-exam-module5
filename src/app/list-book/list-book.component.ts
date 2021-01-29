import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  books: any;

  constructor(private bookService: BookService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.bookService.getAll().subscribe((res: any) => {
      this.books = res;
    });
  }

  detail(id: number): void {
    this.router.navigate(['/detail-book'], {queryParams: {id}});
  }

  editB(id: any): void {
    this.router.navigate(['/edit-book'], {queryParams: {id}});
  }

  deleteB(id: number): void {
    this.router.navigate(['/delete-book'], {queryParams: {id}});
  }
}
