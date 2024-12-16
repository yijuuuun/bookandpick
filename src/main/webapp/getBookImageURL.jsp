<%@ page language="java" contentType="application/json; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ page import="java.net.*" %>
<%@ page import="java.io.*" %>
<%@ page import="java.lang.StringBuilder" %>


<%! 
    public String getBookImageURL(String bookTitle, String bookAuthor) {
        String apiKey = "AIzaSyBPoB0Du6z_Hm06dtbv0tF6DJhnfW1A2vs"; // Google Books API 키
        String imageUrl = "image/default-image.png"; // 기본 이미지 URL

        try {
            String query = URLEncoder.encode(bookTitle + " " + bookAuthor, "UTF-8");
            String apiUrl = "https://www.googleapis.com/books/v1/volumes?q=" + query + "&key=" + apiKey;

            // API 요청
            URL url = new URL(apiUrl);
            HttpURLConnection connection = (HttpURLConnection) url.openConnection();
            connection.setRequestMethod("GET");

            BufferedReader in = new BufferedReader(new InputStreamReader(connection.getInputStream(), "UTF-8"));
            StringBuilder response = new StringBuilder();
            String inputLine;

            while ((inputLine = in.readLine()) != null) {
                response.append(inputLine);
            }
            in.close();

            // 이미지 URL 추출
            String result = response.toString();
            int thumbnailIndex = result.indexOf("\"thumbnail\": \"");
            if (thumbnailIndex != -1) {
                int start = thumbnailIndex + 13;
                int end = result.indexOf("\"", start);
                if (start > 0 && end > start) {
                    imageUrl = result.substring(start, end).replace("\\/", "/");
                }
            }
        } catch (Exception e) {
            System.out.println("Error fetching book image: " + e.getMessage());
            e.printStackTrace();
        }

        return imageUrl;
    }
%>
