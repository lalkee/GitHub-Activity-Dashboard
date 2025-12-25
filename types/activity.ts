export type Activity = {
  id: string;
  type: string;
  actor: {
    login: string;
    avatar_url: string;
  };
  payload: any;
  created_at: string;
};