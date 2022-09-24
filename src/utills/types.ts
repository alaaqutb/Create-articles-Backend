export type CreateUserParams = {
  username: string;
  password: string;
  email: string;
};
export type UpdateUserParams = {
  username: string;
  password: string;
  email: string;
};

export type CreateArticleParams = {
  articleName: string;
  authorName: string;
};

export type UpdateArticleParams = {
  articleName: string;
  authorName: string;
};
