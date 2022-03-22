import { Component, OnInit } from '@angular/core';
import { ApiErrorService } from './_subjects/api-error.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'cocktail';
  message = ''
  display = false

  constructor(private apiErrorService: ApiErrorService){}

  ngOnInit(){
    this.apiErrorService.apiError.subscribe(
      data => {
        this.message = data
        this.display = true
      }
    )
  }

  clearMessage(){
    this.message = ''
    this.display = false
  }

}
