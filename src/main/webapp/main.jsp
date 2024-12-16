<%@ page contentType="text/html; charset=UTF-8" %>
<%@ page import="java.util.*" %>
<%@ page import="javax.servlet.http.*" %>
<%@ page import="javax.servlet.*" %>
<%
    // 세션에서 로그인 상태 확인
    String userID = (String) session.getAttribute("userID");
	String userName = (String) session.getAttribute("userName");
    boolean isLoggedIn = userID != null;

    // 로그인 상태를 데이터로 전달
    String loginStatus = isLoggedIn ? "true" : "false";
%>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Book and Pick</title>
    
</header>
</head>
<body>
	<!-- 로그인 상태 전달 -->
    <div id="loginStatus" data-logged-in="<%= loginStatus %>"></div>
    
    <!-- main.html 포함 -->
    <div id="mainContent">
        <jsp:include page="main.html" />
    </div>
    
    <!-- JavaScript 파일 연결 -->
    <script src="js/start.js"></script>
    
</body>
</html>

