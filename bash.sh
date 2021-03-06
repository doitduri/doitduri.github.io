# build.sh
echo "Starting build"
cd notion

echo "Get posts"
pipenv run python get_blog_posts.py
cd ..

echo "Build frontend site"
npm install
npm run build
