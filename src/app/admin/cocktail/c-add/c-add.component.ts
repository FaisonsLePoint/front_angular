import { Component, OnInit } from '@angular/core';
import { ICocktail } from 'src/app/_interfaces/cocktail';
import { CocktailService } from 'src/app/_services/cocktail.service';
import { TokenService } from 'src/app/_services/token.service';

@Component({
  selector: 'app-c-add',
  templateUrl: './c-add.component.html',
  styleUrls: ['./c-add.component.css']
})
export class CAddComponent implements OnInit {

  cocktail: ICocktail = {
    user_id: 0,
    nom: '',
    description: '',
    recette: '',
  }

  constructor(
    private cocktailService: CocktailService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    let u = this.tokenService.getPayload()
    this.cocktail.user_id = u.id
    
    this.cocktailService.addCocktail(this.cocktail).subscribe(
      data => console.log(data.message)
    )
  }


}
