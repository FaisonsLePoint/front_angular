import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/app/_interfaces/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-u-edit',
  templateUrl: './u-edit.component.html',
  styleUrls: ['./u-edit.component.css']
})
export class UEditComponent implements OnInit {

  user: IUser = {
    id: 0,
    nom: '',
    prenom: '',
    email: '',
    password: '',
    updatedAt: '',
    createdAt: '',
    deletedAt: null,
  }

  constructor(
    private activated: ActivatedRoute,
    private userService: UserService
  ) { }

  ngOnInit(): void {
    let uid = this.activated.snapshot.paramMap.get('uid')
    console.log(uid)

    this.userService.getUser(uid).subscribe(
      data => {
        console.log(data)
        this.user = data.data
      })
  }

  onSubmit(): void {
    console.log(this.user)
  }

}
