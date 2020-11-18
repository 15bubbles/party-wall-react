export interface RegistrationFormData {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
}

export interface RegistrationFormErrors {
  email?: string;
  password?: string;
  confirmPassword?: string;
  name?: string;
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface LoginFormErrors {
  email?: string;
  password?: string;
}

export interface User {
  email: string;
  name: string;
}
