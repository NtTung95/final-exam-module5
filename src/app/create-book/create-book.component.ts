import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {

  book: any;
  createForm: FormGroup = new FormGroup({
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  constructor(private bookService: BookService, private router: Router) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  createNew() {
    console.log(this.createForm.value);
    this.bookService.create(this.createForm.value).subscribe((res: any) => {
      this.router.navigate(['books']);
    });
  }
}
