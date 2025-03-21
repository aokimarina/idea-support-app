#!/bin/bash

# 作業ディレクトリを /backend に設定
cd /backend

# PYTHONPATH を設定して backend を認識させる
export PYTHONPATH=/backend  # PYTHONPATH を /backend に設定
export DATABASE_URL="postgresql://sasao_user:sasao_pass@postgres:5432/postgres_hatsumei"

echo "現在の環境変数:"
env  # 全ての環境変数を表示

# 初回起動時に alembic のマイグレーションを実行
if [ ! -d "./migrations" ]; then
  echo "マイグレーションディレクトリを初期化しています..."
  flask db init
  flask db migrate
  flask db upgrade
fi

# シードデータの投入
echo "シードデータの投入を開始します..."
python /backend/app/seed.py  # seed.py のパスを修正

# Flask アプリケーションを起動
exec python /backend/run.py  # run.py のパスを修正
