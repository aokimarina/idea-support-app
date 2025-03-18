// ユーザー情報の型定義
export type User = {
  id: string;
  email: string;
  firebase_uid: string;
  first_name: string;
  last_name: string;
  nickname: string;
};

// アイデア投稿の型定義
export type IdeaPost = {
  id: string;
  user_id: string;
  title: string;
  message: string;
  date: string;
  main_category: string;
  sub_category: string;
};

export type Form = {
  id: string;
  user_id: string;
  date: string;
  text: string;
  title: string;
};
