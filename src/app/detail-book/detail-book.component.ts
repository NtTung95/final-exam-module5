import {Component, OnInit} from '@angular/core';
import {BookService} from '../book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.css']
})
export class DetailBookComponent implements OnInit {
  book: any;

  constructor(private bookService: BookService,
              private activateRouter: ActivatedRoute) {
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
}
