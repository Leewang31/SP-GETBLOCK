# Node.js 18 버전을 베이스로 사용하는 이미지
FROM node:18 AS build 

RUN npm install -g pnpm

# 작업 디렉토리 설정
WORKDIR /usr/src/app

# package.json
COPY package*.json ./

# 의존성 설치
RUN pnpm install

# 소스 코드 복사
COPY . .

# 빌드
RUN pnpm build

# Step 2: Nginx를 이용한 리버스 프록시 설정
FROM nginx:alpine

# Nginx 설정 파일 복사
COPY nginx.conf /etc/nginx/nginx.conf

# 빌드된 Node.js 애플리케이션을 Nginx의 기본 웹 폴더로 복사
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# 포트 설정
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]