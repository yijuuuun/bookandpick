<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>

<%
    request.setCharacterEncoding("UTF-8");

    // 사용자 입력 데이터 가져오기
    String userId = (String) session.getAttribute("userID"); // 세션에서 사용자 ID 가져오기
    String title = request.getParameter("title");
    String author = request.getParameter("author");


    // 예외 처리
    if (userId == null || userId.isEmpty()) {
        out.println("<script>");
        out.println("alert('로그인이 필요한 서비스입니다.');");
        out.println("location.href = 'login.jsp';");
        out.println("</script>");
        return;
    }

    String url = "jdbc:mysql://localhost:3306/bap";
    String user = "root";
    String password = "sarah1112!";

    Connection conn = null;
    PreparedStatement pstmt = null;

    try {
        Class.forName("com.mysql.cj.jdbc.Driver");
        conn = DriverManager.getConnection(url, user, password);

        String sql = "INSERT INTO completedbooks (user_id, book_title, book_author) VALUES (?, ?, ?)";
        pstmt = conn.prepareStatement(sql);
        pstmt.setString(1, userId);
        pstmt.setString(2, title);
        pstmt.setString(3, author);

        int result = pstmt.executeUpdate();

        if (result > 0) {
            out.println("<script>");
            out.println("alert('완독한 책이 성공적으로 저장되었습니다!');");
            out.println("location.href = 'profile.jsp';"); // 저장 후 프로필 페이지로 이동
            out.println("</script>");
        } else {
            out.println("<script>");
            out.println("alert('책 저장에 실패했습니다. 다시 시도해주세요.');");
            out.println("history.back();");
            out.println("</script>");
        }
    } catch (Exception e) {
        e.printStackTrace();
        out.println("<script>");
        out.println("alert('오류가 발생했습니다: " + e.getMessage() + "');");
        out.println("history.back();");
        out.println("</script>");
    } finally {
        if (pstmt != null) pstmt.close();
        if (conn != null) conn.close();
    }
%>
