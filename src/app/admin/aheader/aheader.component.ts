import { Component, OnInit } from '@angular/core';
import { ITokenUser } from 'src/app/_interfaces/user';
import { TokenService } from 'src/app/_services/token.service';

@Component({
  selector: 'app-aheader',
  templateUrl: './aheader.component.html',
  styleUrls: ['./aheader.component.css']
})
export class AheaderComponent implements OnInit {
  user: ITokenUser = {
    id: 0,
    nom: '',
    prenom: '',
    email: ''
  }
  constructor(private tokenService: TokenService) { }

  ngOnInit(): void {
    this.user = this.tokenService.getPayload()
    console.log(this.user)
  }

  logout(): void{
    this.tokenService.clearToken()
  }

}
