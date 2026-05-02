export type User = {
  id: string;
  name: string;
  email: string;
};

export type LoginDTO = {
  email: string;
  password: string;
};

export type RegisterDTO = {
  name: string;
  email: string;
  password: string;
};
