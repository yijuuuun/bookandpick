<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.sql.*, java.util.*" %>
<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>게시판</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body { font-family: Arial, sans-serif; background-color: #f8f9fa; padding: 20px; }
        .container { margin-top: 50px; }
        th, td { text-align: center; }
        th { background-color: #007bff; color: black; }

        .stars { display: flex; justify-content: center; align-items: center; }
        .star { font-size: 1.5rem; color: #ddd; margin: 0 2px; cursor: pointer; transition: color 0.3s; }
        .star.filled { color: #ffc107; } /* 채워진 별의 색상 */
        input[type="radio"] { display: none; } /* 라디오 버튼 숨기기 */
    </style>
</head>
<body>
<%
    request.setCharacterEncoding("UTF-8");
    String userId = (String) session.getAttribute("userID");
    if (userId == null) {
        response.sendRedirect("login.jsp");
        return;
    }

    Connection conn = null;
    PreparedStatement pstmt = null;
    ResultSet rs = null;

    // 게시글 추가
    if (request.getParameter("title") != null) {
        String title = request.getParameter("title");
        String content = request.getParameter("content");
        int rating = Integer.parseInt(request.getParameter("rating"));

        try {
            conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/bap", "root", "sarah1112!");
            String insertSql = "INSERT INTO board (title, content, rating, userId) VALUES (?, ?, ?, ?)";
            pstmt = conn.prepareStatement(insertSql);
            pstmt.setString(1, title);
            pstmt.setString(2, content);
            pstmt.setInt(3, rating);
            pstmt.setString(4, userId);
            pstmt.executeUpdate();
            response.sendRedirect("board.jsp");
            return;
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            if (pstmt != null) pstmt.close();
            if (conn != null) conn.close();
        }
    }
%>

<div class="container">
    <h1>📋 책 리뷰 게시판</h1>

    <!-- 게시글 작성 -->
    <form method="post" action="board.jsp" class="mt-3">
        <input type="text" name="title" placeholder="책 제목" class="form-control mb-2" required>
        <textarea name="content" placeholder="리뷰 내용" class="form-control mb-2" rows="5" required></textarea>

        <!-- 별점 선택 -->
        <div class="stars mb-3">
            <label>
                <input type="radio" name="rating" value="1" required>
                <span class="star">★</span>
            </label>
            <label>
                <input type="radio" name="rating" value="2">
                <span class="star">★</span>
            </label>
            <label>
                <input type="radio" name="rating" value="3">
                <span class="star">★</span>
            </label>
            <label>
                <input type="radio" name="rating" value="4">
                <span class="star">★</span>
            </label>
            <label>
                <input type="radio" name="rating" value="5">
                <span class="star">★</span>
            </label>
        </div>

        <button type="submit" class="btn btn-primary">작성하기</button>
    </form>

    <!-- 게시글 목록 출력 -->
    <table class="table table-bordered mt-4">
        <thead>
            <tr>
                <th>순서</th>
                <th>책 제목</th>
                <th>리뷰 내용</th>
                <th>책 별점</th>
                <th>작성자</th>
                <th>작성일</th>
                <th>관리</th>
            </tr>
        </thead>
        <tbody>
        
            <%
                try {
                    conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/bap", "root", "sarah1112!");
                    String selectSql = "SELECT * FROM board ORDER BY created_at DESC";
                    pstmt = conn.prepareStatement(selectSql);
                    rs = pstmt.executeQuery();

                    int index = 1;
                    while (rs.next()) {
                        int postId = rs.getInt("id");
                        String title = rs.getString("title");
                        String content = rs.getString("content");
                        int rating = rs.getInt("rating");
                        String author = rs.getString("userId");
                        String date = rs.getTimestamp("created_at").toString();
            %>
            <tr>
                <td><%= index++ %></td>
                <td><%= title %></td>
                <td><%= content %></td>
                <td>
                    <div class="stars">
                        <% for (int i = 1; i <= 5; i++) { %>
                            <span class="star <%= (i <= rating ? "filled" : "") %>">★</span>
                        <% } %>
                    </div>
                </td>
                <td><%= author %></td>
                <td><%= date %></td>
                <td>
                    <% if (userId.equals(author)) { %>
                        <!-- 삭제 버튼: 작성자만 볼 수 있음 -->
                        <form method="post" action="deletePost.jsp" style="display:inline;">
                            <input type="hidden" name="postId" value="<%= postId %>">
                            <button type="submit" class="btn btn-danger btn-sm">삭제</button>
                        </form>
                    <% } %>
                </td>
            </tr>
            <%
                    }
                } catch (Exception e) {
                    e.printStackTrace();
                } finally {
                    if (rs != null) rs.close();
                    if (pstmt != null) pstmt.close();
                    if (conn != null) conn.close();
                }
            %>
        </tbody>
    </table>
</div>
<div class="container">
        <section id="main" class="mx-auto my-5 py-5 px-3">
            <p style="color: #F96791;">
            </p>

            <!-- 버튼 영역 -->
             
            <button id="randomBtn" type="button" class="btn btn-outline-success mt-3" onclick="goToreadbook()"  ">book and pick과 함께 책 읽기</button>
           <button id="boardBtn" type="button" class="btn btn-outline-success mt-3" onclick="goToboard()"  ">책 리뷰게시판 </button>
             <button id="profileBtn" type="button" class="btn btn-outline-success mt-3" onclick="goToprofile()"  ">내 프로필 보러가기 </button> 
             <button id="logoutBtn" type="button" class="btn btn-outline-primary mt-3" onclick="logout()">로그아웃</button>
            <button id="goToMain" type="button" class="btn btn-outline-success mt-3" onclick="goToMain()"> 메인페이지로 가기</button>
          
        </section>
    </div>
<script>
    // 별점 선택 시 별 채우기
    document.querySelectorAll('.stars input').forEach((radio) => {
        radio.addEventListener('change', (event) => {
            const selectedValue = parseInt(event.target.value);
            const stars = event.target.closest('.stars').querySelectorAll('.star');
            stars.forEach((star, index) => {
                star.classList.toggle('filled', index < selectedValue);
            });
        });
    });
</script>
</body>
</html>

   <script src="js/start.js"></script>