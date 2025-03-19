from app import app, db
from hatsumei.backend.app.models import User, IdeaPost, Meto, Form
from datetime import datetime, date

with app.app_context():
    # Userのシードデータ
    user1 = User(email='user1@example.com', firebase_uid='firebase1', first_name='太郎', last_name='山田')
    user2 = User(email='user2@example.com', firebase_uid='firebase2', first_name='花子', last_name='佐藤')
    user3 = User(email='user3@example.com', firebase_uid='firebase3', first_name='健太', last_name='田中')
    db.session.add_all([user1, user2, user3])
    db.session.commit()

    # IdeaPostのシードデータ
    post1 = IdeaPost(user_id=user1.id, title='アイデア1', message='アイデア1の内容', date=datetime(2023, 10, 26, 10, 0, 0), main_category='テクノロジー', sub_category='AI', kanatta='未達成')
    post2 = IdeaPost(user_id=user2.id, title='アイデア2', message='アイデア2の内容', date=datetime(2023, 10, 26, 11, 0, 0), main_category='ビジネス', sub_category='マーケティング', kanatta='達成')
    post3 = IdeaPost(user_id=user1.id, title='アイデア3', message='アイデア3の内容', date=datetime(2023, 10, 27, 12, 0, 0), main_category='エンタメ', sub_category='映画', kanatta='進行中')
    post4 = IdeaPost(user_id=user3.id, title='アイデア4', message='アイデア4の内容', date=datetime(2023, 10, 28, 13, 0, 0), main_category='ライフスタイル', sub_category='旅行', kanatta='未達成')
    db.session.add_all([post1, post2, post3, post4])
    db.session.commit()

    # Metoのシードデータ
    meto1 = Meto(user_id=user1.id, idea_post_id=post1.id)
    meto2 = Meto(user_id=user2.id, idea_post_id=post2.id)
    meto3 = Meto(user_id=user1.id, idea_post_id=post3.id)
    meto4 = Meto(user_id=user3.id, idea_post_id=post4.id)
    db.session.add_all([meto1, meto2, meto3, meto4])
    db.session.commit()

    # Formのシードデータ
    form1 = Form(user_id=user1.id, date=date(2023, 10, 26), text='フォーム1の内容', title='フォーム1のタイトル')
    form2 = Form(user_id=user2.id, date=date(2023, 10, 27), text='フォーム2の内容', title='フォーム2のタイトル')
    form3 = Form(user_id=user3.id, date=date(2023, 10, 28), text='フォーム3の内容', title='フォーム3のタイトル')
    db.session.add_all([form1, form2, form3])
    db.session.commit()

print('シードデータの投入が完了しました。')