export interface Guest {
  id: string;
  name: string;
  email: string;
  confirmed: boolean;
  hasAccompaniments: boolean;
  accompanimentsQuantity: number;
}
export interface Event {
  id: string;
  data: Date;
  name: string;
  image: string;
  guests: Guest[];
  password: string;
  location: string;
  eventSlug: string;
  description: string;
  imageBackground: string;
  expectedAudience: number;
}