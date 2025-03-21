from app import create_app, db  # create_app をインポート
from app.models import User, IdeaPost, Meto, Form
from datetime import datetime, date

def seed_data(app):
    try:
        with app.app_context():  # アプリケーションコンテキストを開始
            db.create_all()

            # Userのシードデータ
            user1 = User(email='msasaki11142@gmail.com', firebase_uid='F3Tpfw7PQJT9fKOu2tIU2laKcS43', first_name='てるちゃん', last_name='ささき')
            user2 = User(email='hinapi1124@gmail.com', firebase_uid='oSpuGGDVoTNQxQpVVK8KAMKunVy2', first_name='ひなた', last_name='ささき')
            user3 = User(email='masasa2419@gmail.com', firebase_uid='vv3uRsN4rWYKlP81MTiP3nJASbn1', first_name='あおと', last_name='佐々木')
            db.session.add_all([user1, user2, user3])
            db.session.commit()

            # IdeaPostのシードデータ
            post1 = IdeaPost(user_id=user1.id, title='ミニトマトの個別売り', message='ミニトマトがばら売りになっててほしい', date=datetime(2023, 10, 26, 10, 0, 0), main_category='テクノロジー', sub_category='AI', kanatta='未達成')
            post2 = IdeaPost(user_id=user2.id, title='自動お風呂掃除機', message='お風呂掃除って意外と重労働なのよ～。腰がね痛くて。。。', date=datetime(2023, 10, 26, 11, 0, 0), main_category='ビジネス', sub_category='マーケティング', kanatta='達成')
            post3 = IdeaPost(user_id=user1.id, title='ベビーフード自販機', message='ベビーフードの自販機があればいいなー。缶ミルクも売っててほしい。', date=datetime(2023, 10, 27, 12, 0, 0), main_category='エンタメ', sub_category='映画', kanatta='進行中')
            post4 = IdeaPost(user_id=user3.id, title='子供乗せ用レンタサイクル', message='電車もバスも車も嫌がる子どもを連れて帰る手立てがありません。', date=datetime(2023, 10, 28, 13, 0, 0), main_category='ライフスタイル', sub_category='旅行', kanatta='未達成')
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

    except Exception as e:
        print(f'シードデータの投入中にエラーが発生しました: {e}')
        db.session.rollback()

if __name__ == '__main__':
    app = create_app()  # アプリケーションをインスタンス化
    seed_data(app)  # シードデータの投入
