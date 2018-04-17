export interface IUser {
  id: number,
  name: string,
  username: string,
  email: string,
  adress?: IAddress
}

export interface IAddress {
  street: string,
  suite: string,
  city: string,
  zipode: string
}
