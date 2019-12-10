export class User {
  constructor(
    public id?: number,
    public name?: string,
    public username?: string,
    public email?: string,
    public address?: Address,
    public phone?: string,
    public website?: string,
    public company?: Company
  ) { }
}

export class Address {
  constructor(
    public street?: string,
    public suite?: string,
    public city?: string,
    public zipcode?: number,
    public geo?: Geo
  ) { }
}

export class Geo {
  constructor(
    public lat?: number,
    public lng?: number
  ) { }
}

export class Company {
  constructor(
    public name?: string,
    public catchPhrase?: string,
    public bs?: string
  ) { }
}