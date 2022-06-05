import { Component, OnInit } from '@angular/core';
import { EpisodeResponse } from '../../models';
import { EpisodeService } from '../../services/episode.service';

@Component({
  selector: 'app-episode-page',
  templateUrl: './episode-page.component.html',
  styleUrls: ['./episode-page.component.scss']
})
export class EpisodePageComponent implements OnInit {
  constructor(
    private episodeService: EpisodeService
  ) { }
  ngOnInit(): void {
    this.getEpisode();
  }

  getEpisode():void {
    this.episodeService.getEpisode().subscribe((res: EpisodeResponse) => {
      console.log('EpisodeS => ',res);
    })
  }

}
