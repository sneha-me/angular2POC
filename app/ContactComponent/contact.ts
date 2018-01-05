export class IContact {
	Id: number;
	Name: string;
	Email: string;
	Country: string;
	Query: string;
}

export class Contact implements IContact{
	Id: number = 0;
	Name: string = "";
	Email: string = "";
	Country: string = "";
	Query: string = "";
}