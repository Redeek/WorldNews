export interface NewsInterface {
    id: number;
    title: string;
    text: string;
    url: string;
    source_country: string;
    image: string | undefined;
    language: string;
    publish_date: string;
  }