import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../book.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  book: any;

  // @ts-ignore
  editForm = new FormGroup({
    title: new FormControl(),
    author: new FormControl(),
    description: new FormControl(),
  });

  constructor(private bookService: BookService, private router: Router,
              private activateRouter: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.activateRouter.queryParams.subscribe(params => {
      this.bookService.getOne(params.id).subscribe(
        (res: any) => {
          this.book = res;
          this.editForm = new FormGroup({
            title: new FormControl(this.book.title, Validators.required),
            author: new FormControl(this.book.author, Validators.required),
            description: new FormControl(this.book.description, Validators.required),
          });
        }
      );
    });
  }

  edit(): void {
    this.bookService.update(this.book.id, this.editForm.value).subscribe((res: any) => {
      console.log(res);
      this.router.navigate(['books']);
    });
  }
}
