<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Join</title>
    <!-- Bootstrap 및 Google Fonts -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
<style>@import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap');

body {
    font-family: 'Nanum Gothic', sans-serif;
    background-color: #f4f7f6;
    color: #333;
    margin: 0;
    padding: 0;
}

h1 {
    font-size: 2.5rem;
    color: #007bff;
    font-weight: bold;
}

p {
    font-size: 1.1rem;
    color: #F96791;
    margin-bottom: 20px;
}

.container {
    margin-top: 50px;
    max-width: 500px;
    padding: 20px;
    background: #ffffff;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

form {
    margin-top: 20px;
}

.form-label {
    font-weight: bold;
    color: #555;
}

.form-control {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    font-size: 1rem;
    transition: all 0.3s ease-in-out;
}

.form-control:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

button[type="submit"] {
    font-size: 1rem;
    padding: 10px;
    border-radius: 5px;
    background-color: #007bff;
    border: none;
    color: white;
    transition: all 0.3s ease-in-out;
}

button[type="submit"]:hover {
    background-color: #0056b3;
    color: #fff;
}
</style>
</head>
<body>
    <div class="container">
        <!-- 헤더 -->
        <header class="text-center my-5">
            <h1>Book and Pick</h1>
            <p style="color: #F96791;">도서 추천 서비스</p>
        </header>
        <!-- 회원가입 섹션 -->
        <section id="join" class="mx-auto my-5 py-5 px-3">
            <form method="POST" action="joinAction.jsp" class="mx-auto" style="max-width: 400px;">
                <div class="mb-3">
                    <label for="userID" class="form-label">아이디 </label>
                    <input type="text" id="userID" name="userID" class="form-control" placeholder="아이디를 입력하세요" required>
                </div>
                <div class="mb-3">
                    <label for="userPassword" class="form-label">비밀번호 </label>
                    <input type="text" id="userPassword" name="userPassword" class="form-control" placeholder="비밀번호를 입력하세요" required>
                </div>
                <div class="mb-3">
                    <label for="userName" class="form-label">이름 </label>
                    <input type="text" id="userName" name="userName" class="form-control" placeholder="이름을 입력하세요" required>
                </div>
                <div class="mb-3">
                    <label for="userEmail" class="form-label">이메일 </label>
                    <input type="text" id="userEmail" name="userEmail" class="form-control" placeholder="이메일을 입력하세요" required>
                </div>
                <button type="submit" class="btn btn-primary w-100">회원가입</button>
            </form>
        </section>
</body>
</html>