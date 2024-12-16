<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>
<%@ page import="java.util.*" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>독서 프로필</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="js/start.js"></script> <!-- JavaScript 파일 추가 -->

    <style>
        <style>
    @import url('https://fonts.googleapis.com/css2?family=Nanum+Gothic:wght@400;700&display=swap');

    body {
        font-family: 'Nanum Gothic', sans-serif;
        background-color: #f4f7f6;
        color: #333;
        line-height: 1.6;
    }

    .profile-container {
        max-width: 900px;
        margin: 50px auto;
        padding: 30px;
        background: #fff;
        border-radius: 10px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .header {
        text-align: center;
        margin-bottom: 40px;
    }

    .header h1 {
        font-size: 2rem;
        font-weight: bold;
        color: #007bff;
    }

    .stats-container {
        background-color: #e9f7fe;
        padding: 20px;
        border-radius: 10px;
        margin-bottom: 30px;
        text-align: center;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .stats-container p {
        margin: 0;
        font-size: 1.2rem;
    }

    .completed-book {
        display: flex;
        align-items: center;
        border: 1px solid #ddd;
        background-color: #fff;
        border-radius: 10px;
        margin-bottom: 20px;
        padding: 20px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s, box-shadow 0.2s;
    }

    .completed-book:hover {
        transform: translateY(-5px);
        box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
    }

    .book-image {
        width: 120px;
        height: auto;
        margin-right: 20px;
        border-radius: 5px;
        object-fit: cover;
        background-color: #f0f0f0;
    }

    .book-info h5 {
        margin: 0;
        font-size: 1.4rem;
        font-weight: bold;
        color: #333;
    }

    .book-info p {
        margin: 5px 0;
        color: #555;
    }

    .btn-primary {
        background-color: #007bff;
        border: none;
        transition: background-color 0.3s ease;
    }

    .btn-primary:hover {
        background-color: #0056b3;
    }

    .btn-outline-success {
        color: #28a745;
        border-color: #28a745;
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    .btn-outline-success:hover {
        background-color: #28a745;
        color: #fff;
    }

    .footer {
        text-align: center;
        margin-top: 30px;
        color: #777;
    }
   .header {
    text-align: center; /* 텍스트 가운데 정렬 */
    margin-bottom: 40px;
}

.header h1 {
    font-size: 2.5rem; /* 제목 크기 */
    font-weight: bold;
    color: #007bff;
    margin: 0; /* 마진 제거 */
}
   
</style>
    </style>

<%
    String userID = (String) session.getAttribute("userID");
    String userName = (String) session.getAttribute("userName");

    if (userID == null) {
        out.println("<script>alert('로그인이 필요합니다.'); location.href = 'login.jsp';</script>");
        return;
    }

    // DB에서 책 데이터 불러오기
    String url = "jdbc:mysql://localhost:3306/bap";
    String dbUser = "root";
    String dbPassword = "sarah1112!";
    Connection conn = null;
    PreparedStatement pstmt = null;
    ResultSet rs = null;
    List<Map<String, String>> completedBooks = new ArrayList<>();

    try {
        Class.forName("com.mysql.cj.jdbc.Driver");
        conn = DriverManager.getConnection(url, dbUser, dbPassword);

        String sql = "SELECT book_title, book_author, completion_date FROM completedbooks WHERE user_id = ? ORDER BY completion_date DESC";
        pstmt = conn.prepareStatement(sql);
        pstmt.setString(1, userID);
        rs = pstmt.executeQuery();

        while (rs.next()) {
            Map<String, String> book = new HashMap<>();
            book.put("title", rs.getString("book_title"));
            book.put("author", rs.getString("book_author"));
            book.put("completionDate", rs.getString("completion_date"));
            completedBooks.add(book);
        }
    } catch (Exception e) {
        e.printStackTrace();
    } finally {
        if (rs != null) try { rs.close(); } catch (Exception e) {}
        if (pstmt != null) try { pstmt.close(); } catch (Exception e) {}
        if (conn != null) try { conn.close(); } catch (Exception e) {}
    }
%>
</head>
<body>
    <div class="profile-container">
        <h1 class="text-center"><%=userID %>님의 독서 프로필</h1>
        <div class="stats-container text-center">
            <p><strong>총 완독한 책:</strong> <%= completedBooks.size() %>권</p>
        </div>

        <% for (Map<String, String> book : completedBooks) { %>
            <div class="completed-book">
                <img src="image/default-image.png" alt="Book Image" class="book-image" id="img-<%= book.get("title").hashCode() %>">
                <div class="book-info">
                    <h5><%= book.get("title") %></h5>
                    <p>저자: <%= book.get("author") %></p>
                    <p>완독 날짜: <%= book.get("completionDate") %></p>
                </div>
            </div>

            <!-- JavaScript로 이미지 URL 가져오기 -->
            <script>
                getBookImageURL('<%= book.get("title") %>', '<%= book.get("author") %>', function(imageUrl) {
                    document.getElementById("img-<%= book.get("title").hashCode() %>").src = imageUrl;
                });
            </script>
        <% } %>
  <!-- 버튼 컨테이너 섹션 수정 -->
<div class="container">
    <section id="main" class="mx-auto my-5 py-5 px-3 text-center">
        <p style="color: #F96791;"></p>

        <button id="randomBtn" type="button" class="btn btn-outline-success mt-3 mx-2" onclick="goToreadbook()">book and pick과 함께 책 읽기</button>
        <button id="boardBtn" type="button" class="btn btn-outline-success mt-3 mx-2" onclick="goToboard()">책 리뷰게시판</button>
        <button id="logoutBtn" type="button" class="btn btn-outline-primary mt-3 mx-2" onclick="logout()">로그아웃</button>
        <button id="goToMain" type="button" class="btn btn-outline-success mt-3 mx-2" onclick="goToMain()">메인페이지로 가기</button>
    </section>

    <!-- 완독한 책 추가하기 버튼 -->
    <div class="text-center mt-3">
        <a href="addCompletedBook.jsp" class="btn btn-primary">완독한 책 추가하기</a>
    </div>
</div>


    
</body>
</html>
