<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>

<html lang="ko">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>추천 결과</title>
    <link rel="stylesheet" href="css/result.css">

<%
    String userID = (String) session.getAttribute("userID");
    String userName = (String) session.getAttribute("userName");
    
    boolean isLoggedIn = userID != null;
 	// 로그인 상태를 데이터로 전달
    String loginStatus = isLoggedIn ? "true" : "false";
    
    // 로그인 체크
    if (userID == null) {
        out.println("<script>");
        out.println("alert('로그인이 필요한 서비스입니다.');");
        out.println("location.href = 'login.jsp';");
        out.println("</script>");
    }
%>

<header>
    <h1><%=userID %>님을 위한 책 추천</h1>
</header>
    
</head>

<body>
	<!-- 로그인 상태 전달 -->
    <div id="loginStatus" data-logged-in="<%= loginStatus %>"></div>

	<div id="resultContent">
        <jsp:include page="result.html" />
    </div>
    <!-- JavaScript 파일 연결 -->
    <script src="js/start.js"></script>
</body>

</html>


