export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  allergies: string[];
}

export interface UserFormData {
  name: string;
  email: string;
  phone: string;
  allergies: string[];
}