import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {
  book: any;

  constructor(private bookService: BookService,
              private activateRouter: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.activateRouter.queryParams.subscribe(params => {
      this.bookService.getOne(params.id).subscribe(
        (res: any) => {
          this.book = res;
        }
      );
    });
  }

  delete(): void {
    this.bookService.delete(this.book.id).subscribe((res: any) => {
      this.router.navigate(['books']);
    });
  }

}
