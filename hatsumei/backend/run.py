from app import create_app

# アプリケーションのインスタンスを作成して実行
app = create_app()

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)
