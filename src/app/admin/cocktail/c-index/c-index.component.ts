import { Component, OnInit } from '@angular/core';
import { ICocktail } from 'src/app/_interfaces/cocktail';
import { CocktailService } from 'src/app/_services/cocktail.service';

@Component({
  selector: 'app-c-index',
  templateUrl: './c-index.component.html',
  styleUrls: ['./c-index.component.css']
})
export class CIndexComponent implements OnInit {

  cocktailList: ICocktail[] = []

  constructor(private cocktailService: CocktailService) { }

  ngOnInit(): void {
    this.cocktailService.getAllCocktails().subscribe(
      data => {
        console.log(data)
        this.cocktailList = data.data
      }
    )
  }

  trash(id:number | undefined){
    console.log(id)
    this.cocktailService.trashCocktail(id).subscribe(
      data => {
        console.log(data)
        this.ngOnInit()
    })
  }

  untrash(id:number | undefined){
    this.cocktailService.untrashCocktail(id).subscribe(
      data => {
        console.log(data)
        this.ngOnInit()
    })
  }

}
