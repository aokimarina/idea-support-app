# app/schemas/form_schema.py

from app.models.form import Form  # Formモデルをインポート
from marshmallow_sqlalchemy import SQLAlchemyAutoSchema  # marshmallow_sqlalchemyをインポート

class FormSchema(SQLAlchemyAutoSchema):
    class Meta:
        model = Form  # モデルとしてFormを指定
        load_instance = True  # インスタンスをロード可能にする
