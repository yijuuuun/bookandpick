<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>완독한 책 추가</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container mt-5">
        <h1>완독한 책 추가</h1>
        <form method="post" action="saveCompletedBook.jsp">
            <div class="mb-3">
                <label for="title" class="form-label">책 제목</label>
                <input type="text" id="title" name="title" class="form-control" required>
            </div>
            <div class="mb-3">
                <label for="author" class="form-label">저자</label>
                <input type="text" id="author" name="author" class="form-control" required>
            </div>
            <button type="submit" class="btn btn-success">책 저장</button>
        </form>
    </div>
</body>
</html>
