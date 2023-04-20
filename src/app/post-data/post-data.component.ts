import { Component, OnInit } from '@angular/core';
import { HttpServerService } from '../Services/http-server.service';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.scss'],
})
export class PostDataComponent implements OnInit {
  constructor(private httpServeService: HttpServerService) {}

  ngOnInit(): void {
    const payload = { body: 'Day la message so 5', postId: 5 };
    this.httpServeService.postComment(payload).subscribe((data) => {
      console.log('Post Comment', data);
    });
  }
}
