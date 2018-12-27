import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(
    private route: ActivatedRoute, 
    private service: GithubFollowersService) { }

  ngOnInit() {

    // Observable.combineLatest([
    //   this.route.paramMap,
    //   this.route.queryParamMap
    // ])
    // //use SwitchMap to overcome subs inside subs 
    // .subscribe(combined => {
    //   let id = combined[0].get('id');
    //   let page = combined[1].get('page');

    //   // this.service.getAll({id:id, page:page})
    //   this.service.getAll()
    //   .subscribe(followers => this.followers = followers);
    // });

    this.route.paramMap.subscribe();
    let id = this.route.snapshot.paramMap.get('id');
    
    this.route.queryParamMap.subscribe();
    let page = this.route.snapshot.queryParamMap.get('page');

   
  }
}
