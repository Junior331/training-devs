export interface GuestI {
  id: string;
  name: string;
  email: string;
  confirmed: boolean;
  hasAccompaniments: boolean;
  accompanimentsQuantity: number;
}
export interface EventI {
  id: string;
  data: Date;
  name: string;
  image: string;
  guests: GuestI[];
  password: string;
  location: string;
  eventSlug: string;
  description: string;
  imageBackground: string;
  expectedAudience: number;
}