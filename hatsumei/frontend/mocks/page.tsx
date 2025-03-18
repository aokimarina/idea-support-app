const users = [
  {
    id: 1,
    email: "user1@example.com",
    firebase_uid: "uid_abc123",
    first_name: "太郎",
    last_name: "山田",
    nickname: "たろぴ",
  },
  {
    id: 2,
    email: "user2@example.com",
    firebase_uid: "uid_def456",
    first_name: "花子",
    last_name: "佐藤",
    nickname: "はな",
  },
  {
    id: 3,
    email: "user3@example.com",
    firebase_uid: "uid_ghi789",
    first_name: "健一",
    last_name: "高橋",
    nickname: "けんけん",
  },
  {
    id: 4,
    email: "user4@example.com",
    firebase_uid: "uid_jkl012",
    first_name: "美咲",
    last_name: "田中",
    nickname: "みさ",
  },
];

const ideaPosts = [
  {
    id: 1,
    user_id: 1,
    title: "音声で買い物リストを作成",
    message:
      "音声で買い物リストを作成してくれるアプリが欲しいです。いつも行くイオンについたらお知らせが来てほしいです。買い忘れ防止になります",
    date: "2025-03-18T10:00:00",
    main_category: "便利グッズ",
    sub_category: "アプリ",
  },
  {
    id: 2,
    user_id: 2,
    title: "ミニトマトを1個売り",
    message: "ミニトマトを1個から買えるようにしてほしい",
    date: "2025-03-18T11:00:00",
    main_category: "食",
    sub_category: "野菜",
  },
  {
    id: 3,
    user_id: 3,
    title: "ベビーフードの販売機",
    message:
      "ベビーフードの販売機が欲しいです。ミルクが売っていてもいてもいいな～と思ったりします。",
    date: "2025-03-18T12:00:00",
    main_category: "育児",
    sub_category: "食事",
  },
  {
    id: 4,
    user_id: 4,
    title: "子供用レンタサイクル",
    message: "子供を乗せられるレンタサイクルが欲しいです。",
    date: "2025-03-18T13:00:00",
    main_category: "育児",
    sub_category: "交通",
  },
  {
    id: 5,
    user_id: 1,
    title: "遮音性イヤホン",
    message:
      "遮音性って言っても遮音できないものが多いので室内用でいいから凄く遮音してくれるものが欲しい。",
    date: "2025-03-18T13:00:00",
    main_category: "育児",
    sub_category: "交通",
  },
  {
    id: 6,
    user_id: 2,
    title: "歌がうまくなるマイク",
    message: "---------------------",
    date: "2025-03-18T13:00:00",
    main_category: "育児",
    sub_category: "交通",
  },
  {
    id: 7,
    user_id: 3,
    title: "自動計算買い物かご",
    message: "---------------------",
    date: "2025-03-18T13:00:00",
    main_category: "育児",
    sub_category: "交通",
  },
  {
    id: 8,
    user_id: 1,
    title: "傷み具合判定機能",
    message: "------------------",
    date: "2025-03-18T13:00:00",
    main_category: "育児",
    sub_category: "交通",
  },
];

const meto = [
  { id: 1, user_id: 1, idea_post_id: 2 }, // user1 が投稿2（ミニトマト）をお気に入り
  { id: 2, user_id: 2, idea_post_id: 3 }, // user2 が投稿3（ベビーフード）をお気に入り
  { id: 3, user_id: 3, idea_post_id: 4 }, // user3 が投稿4（レンタサイクル）をお気に入り
  { id: 4, user_id: 4, idea_post_id: 1 }, // user4 が投稿1（音声アプリ）をお気に入り
];

export { users, ideaPosts, meto };
