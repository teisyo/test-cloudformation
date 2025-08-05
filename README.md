# ECS Test Application

ECSで動作するシンプルなWebアプリケーションです。

## 構成
- HTML/CSS/JavaScript のシンプルなフロントエンド
- Nginx を使用した静的ファイル配信
- Docker コンテナ化対応

## ローカルでのテスト

```bash
# Dockerイメージをビルド
docker build -t ecs-test-app .

# コンテナを起動
docker run -p 8080:80 ecs-test-app
```

ブラウザで http://localhost:8080 にアクセスしてテストできます。

## CodeBuild での使用

buildspec.yml が含まれているため、AWS CodeBuild で自動的にビルドできます。

必要な環境変数:
- AWS_DEFAULT_REGION
- AWS_ACCOUNT_ID  
- IMAGE_REPO_NAME
- IMAGE_TAG