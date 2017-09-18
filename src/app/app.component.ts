import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Movie Lists';
  selectedList;
  isCreateList = false;
  listForm;



  mockLists = {
    "Example List": [
      {
        name: "The Dark Knight",
        rating: 4
      },
      {
        name: "Citizen Kane",
        rating: 3
      },
      {
        name: "The Godfather",
        rating: 3
      }
    ]
  };
  count = Object.keys(this.mockLists).length;

  /*ngOnInit() {
    let mockList = new List();
    mockList.title = "Example List";
    let mockMovie = new Movie();
    mockMovie.name = "movie name";
    mockMovie.rating = 2;
    mockList.movies.push(mockMovie);
    console.log(mockList);
  }*/

  showList(list) {
    this.selectedList = list;
  }

  averageRating(list) {
    let movies = this.mockLists[list];
    let totalRatings = 0;

    for (let i of movies) {
      totalRatings = totalRatings + i.rating;
    }

    return totalRatings / movies.length || 0;
  }

  objectKeys(obj) {
    return Object.keys(obj);
  }

  createList() {
    this.isCreateList = true;
    this.selectedList = "";
  }

  addMovie() {
    console.log(this.listForm);
  }

  listSubmit(list) {
    console.log(list);
    let title = list.listTitle;
    if (title != undefined) {
      let movie = new Movie();

      if (list.movieTitle != undefined) {
        movie.name = list.movieTitle;
        console.log("movie", list.movieTitle, list);
      }
      if (list.movieRating != undefined) {
        movie.rating = list.movieRating;
      }
      this.mockLists[title]= [movie];
    }

    this.isCreateList = false;
  }
}

export class Movie {
  name: string;
  rating: number;
}

export class List {
  title: string;
  movies: Array<Movie>
}

