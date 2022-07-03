export interface TVMaze {
  show: Show;
}

export interface Show {
  id: number;
  name: string;
  url: string;
  type: string;
  language: string;
  status: string;
  runtime: string;
  image: Image;
}

export interface Image {
  medium: string;
  original: string;
}
