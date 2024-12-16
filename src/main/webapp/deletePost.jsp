<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.sql.*" %>
<%
    String userId = (String) session.getAttribute("userID");
    if (userId == null) {
        response.sendRedirect("login.jsp");
        return;
    }

    String postId = request.getParameter("postId");

    if (postId != null) {
        Connection conn = null;
        PreparedStatement pstmt = null;

        try {
            conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/bap", "root", "sarah1112!");
            String deleteSql = "DELETE FROM board WHERE id = ? AND userId = ?";
            pstmt = conn.prepareStatement(deleteSql);
            pstmt.setInt(1, Integer.parseInt(postId));
            pstmt.setString(2, userId);
            pstmt.executeUpdate();
            response.sendRedirect("board.jsp");
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (pstmt != null) pstmt.close();
            if (conn != null) conn.close();
        }
    } else {
        response.sendRedirect("board.jsp");
    }
%>
