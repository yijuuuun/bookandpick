<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<%
    session.invalidate();  // 세션 무효화
    response.sendRedirect("main.jsp");  // 로그인 페이지로 리디렉션
%>
</body>
</html>