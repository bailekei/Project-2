type RandomUser = {
  results: Array<User>;
};

type RandomShows = {
  results: Array<Shows>;
  info: any;
};


// Define the type User to match the JSON structure from https://api.tvmaze.com/shows/:id
type Shows= {
  name: string;
  genres: Array<string>;
  rating: {
    average: number;
  };
  network: {
    name: string;
  };
  image: {
    medium: string;
    original: string;
  };
 };
// Define the type User to match the JSON structure from https://randomuser.me/api
type User = {
  name: {
    first: string;
    last: string;
  };
  location: {
    coordinates: {
      latitude: number;
      longitude: number;
    };
  };
  dob: {
    date: string;
    age: number;
  };
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
};

export { User, RandomUser, Shows, RandomShows };