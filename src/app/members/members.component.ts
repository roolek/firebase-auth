import { Component, HostBinding, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';

@Component({
  selector: 'app-other',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
})
export class MembersComponent implements OnInit {
  @HostBinding('@moveIn') get moveIn() {
    return null;
  }

  user: any;
  state = '';

  constructor(public af: AngularFireAuth, private router: Router) {



  }

  logout() {
    this.af.auth.signOut();
    console.log('logged out');
    this.router.navigateByUrl('/login');
  }


  ngOnInit() {
    this.af.authState.subscribe(auth => {
      if (auth) {
        this.user = auth;

      }
    });
  }


}
