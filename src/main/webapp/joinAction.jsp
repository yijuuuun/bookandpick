<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Join Action</title>
    <!-- Bootstrap 및 Google Fonts -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    

    <!-- CSS 파일 -->
    <link rel="stylesheet" href="css/default.css">
    <link rel="stylesheet" href="css/main.css">
    <link rel="stylesheet" href="css/qna.css">
    <link rel="stylesheet" href="css/animation.css">
    <link rel="stylesheet" href="css/result.css">
</head>
<body>
<div class="container text-center mt-5">
    <%
        String userID = request.getParameter("userID");
        String userPassword = request.getParameter("userPassword");
        String userName = request.getParameter("userName");
        String userEmail = request.getParameter("userEmail");

        String dbURL = "jdbc:mysql://localhost:3306/bap";
        String dbUser = "root";
        String dbPassword = "sarah1112!";

        Connection conn = null;
        PreparedStatement pstmt = null;

        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection(dbURL, dbUser, dbPassword);

            String sql = "INSERT INTO bap.user (userID, userPassword, userName, userEmail) VALUES (?, ?, ?, ?)";
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, userID);
            pstmt.setString(2, userPassword);
            pstmt.setString(3, userName);
            pstmt.setString(4, userEmail);
            pstmt.executeUpdate();

            out.println("<script>alert('회원가입이 완료되었습니다. 메인페이지로 이동합니다.'); location.href='./main.html';</script>");
        } catch (Exception e) {
            e.printStackTrace();
            out.println("<script>alert('이미 가입된 정보입니다. 메인페이지로 이동합니다.'); location.href='./main.html';</script>");
        } finally {
            if (pstmt != null) {
                try {
                    pstmt.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
            if (conn != null) {
                try {
                    conn.close();
                } catch (SQLException e) {
                    e.printStackTrace();
                }
            }
        }
    %>
    </div>
    
</body>
</html>