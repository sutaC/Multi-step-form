export interface Option {
	description: String;
	price: number;
}

export type ChangePageEvent = CustomEvent<{ page: number }>;
