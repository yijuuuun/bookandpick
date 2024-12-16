<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>Login Action</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
<div class="container text-center mt-5">
    <%
        // 사용자 입력 값 가져오기
        String userID = request.getParameter("userID");
        String userPassword = request.getParameter("userPassword");

        // 데이터베이스 연결 정보
        String dbURL = "jdbc:mysql://localhost:3306/bap";
        String dbUser = "root";
        String dbPassword = "sarah1112!";

        Connection conn = null;
        PreparedStatement pstmt = null;
        ResultSet rs = null;

        try {
            // JDBC 드라이버 로드
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection(dbURL, dbUser, dbPassword);

            // 사용자 인증 쿼리
            String sql = "SELECT * FROM user WHERE userID = ? AND userPassword = ?";
            pstmt = conn.prepareStatement(sql);
            pstmt.setString(1, userID);
            pstmt.setString(2, userPassword);
            rs = pstmt.executeQuery();

            if (rs.next()) {
                // 로그인 성공
                session.setAttribute("userID", rs.getString("userID")); // 세션에 userID 저장
                session.setAttribute("userName", rs.getString("userName")); // 세션에 userName 저장
                response.sendRedirect("main.jsp"); // 메인 페이지로 이동
            } else {
                // 로그인 실패
                out.println("<script>alert('로그인 실패! 아이디 또는 비밀번호를 확인해주세요.');history.back();</script>");
            }
        } catch (Exception e) {
            e.printStackTrace();
            out.println("<script>alert('서버 오류가 발생했습니다. 나중에 다시 시도해주세요.');history.back();</script>");
        } finally {
            // 자원 해제
            if (rs != null) try { rs.close(); } catch (SQLException e) { e.printStackTrace(); }
            if (pstmt != null) try { pstmt.close(); } catch (SQLException e) { e.printStackTrace(); }
            if (conn != null) try { conn.close(); } catch (SQLException e) { e.printStackTrace(); }
        }
    %>
</div>
</body>
</html>
