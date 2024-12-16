// 초기 설정과 변수 정의
const main = document.querySelector("#main");
const qna = document.querySelector("#qna");
const result = document.querySelector("#result");
const select = Array(qnaList.length).fill(-1); // 선택 데이터 초기화 (-1로 설정하여 선택 안 된 상태)
let selectedCount = 0;

const answerHistory = []; // 이전 선택 저장용

// 결과 계산 함수
function calResult() {
    console.log(select);
    // 마지막으로 선택된 인덱스를 찾음
    const lastIndex = select.reduce((acc, val, idx) => (val > -1 ? idx : acc), -1);

    // 선택된 값이 없으면 빈 문자열 반환
    if (lastIndex === -1) return "";

    const lastSelection = select[lastIndex]; // 마지막 선택된 값

    // 선택된 답변이 있으면 반환, 없으면 빈 문자열 반환
    if (qnaList[lastIndex] && qnaList[lastIndex].a[lastSelection]) {
        let answer = qnaList[lastIndex].a[lastSelection].answer;

        // 앞부분의 순서 매기기 제거
        answer = answer.replace(/^[a-zA-Z]\.\s*/, ""); 

        return answer; // 수정된 검색어 반환
    }

    return ""; // 없으면 빈 문자열 반환
}


// 결과 설정 함수
function setResult() {
    const resultString = calResult(); // 마지막 선택된 문자열
    const queryParams = new URLSearchParams();
    queryParams.set("selection", JSON.stringify(select)); // 선택 데이터 저장
    queryParams.set("query", resultString); // API 검색에 사용할 문자열 저장
    location.href = `./result.jsp?${queryParams.toString()}`;
}

// 질문 진행 함수
function goNext(qIdx) {
    if (!qnaList[qIdx]) {
        setResult(); // 질문이 끝났으면 결과 설정
        return;
    }

    // 질문 텍스트 설정
    document.querySelector('.qBox').innerHTML = qnaList[qIdx].q; 

    const answerBox = document.querySelector('.answerBox');
    answerBox.innerHTML = ''; // 이전 답변 초기화

    qnaList[qIdx].a.forEach((answer, idx) => {
        addAnswer(answer.answer, qIdx, idx);
    });
   
   // 진행 바 업데이트
   updateProgressBar();


    // 버튼 컨테이너 초기화 및 뒤로 가기, 중단 버튼
    const buttonContainer = document.querySelector('.buttonContainer');
    buttonContainer.innerHTML = '';
    addBackButton(qIdx);
    addStopButton();
}

// 진행 바 업데이트 함수
function updateProgressBar() {
    // 선택된 답변의 개수를 기반으로 진행 바 업데이트
    const selectedAnswers = select.filter(answer => answer > -1).length; // 선택된 답변 개수
    const progress = (selectedAnswers / 3) * 100; // 선택된 답변에 따른 비율로 진행 바의 너비 계산
    document.querySelector('.statusBar').style.width = `${progress}%`;
}

// 답변 추가 함수
function addAnswer(answerText, qIdx, idx) {
    const answerBox = document.querySelector('.answerBox');
    const button = document.createElement('button');
    button.classList.add('answerList', 'my-3', 'py-3', 'mx-auto', 'fadeIn');
    button.innerHTML = answerText;

    button.addEventListener("click", () => {
        document.querySelectorAll('.answerList').forEach(child => child.disabled = true); // 선택 비활성화
        select[qIdx] = idx; // 선택 데이터 저장
        answerHistory.push({ qIdx, answerText }); // 선택 히스토리 저장
      
      selectedCount++; // 선택된 답변 개수 증가
      updateProgressBar(); // 진행 바 업데이트
        
        // 다음 질문으로 이동
        setTimeout(() => {
            const nextQuestion = (qnaList[qIdx].a[idx] && qnaList[qIdx].a[idx].nextQuestion) || (qIdx + 1);
            goNext(nextQuestion);
        }, 450); 
    });

    answerBox.appendChild(button);
}


// 뒤로 가기 버튼 추가 함수
function addBackButton(qIdx) {
    const backButton = document.createElement('button');
    backButton.classList.add('backButton');
    backButton.innerText = "뒤로";

    backButton.addEventListener("click", () => {
        if (answerHistory.length > 0) {
            const lastHistory = answerHistory.pop(); // 이전 히스토리 가져오기
            select[lastHistory.qIdx] = -1; // 이전 선택 초기화
            goNext(lastHistory.qIdx); // 이전 질문으로 이동

            // 진행 바 업데이트
            updateProgressBar(); // 뒤로가기 후 진행 바를 갱신
        }
    });

    document.querySelector('.buttonContainer').appendChild(backButton);
}


// 중단 버튼 추가 함수
function addStopButton() {
    const stopButton = document.createElement('button');
    stopButton.classList.add('stopButton');
    stopButton.innerText = "중단하고 결과보기";
    stopButton.addEventListener("click", setResult); // 결과 바로 보기
    document.querySelector('.buttonContainer').appendChild(stopButton);
}

// 시작 함수
function begin() {
    sessionStorage.clear(); // 이전 세션 데이터 초기화
    main.style.animation = "fadeOut 1s";
    setTimeout(() => {
        main.style.display = "none";
        qna.style.display = "block";
        goNext(0); // 첫 질문으로 이동
    }, 450);
}

function checkLoginStatus() {
    const loginStatus = sessionStorage.getItem("loginStatus");
    if (loginStatus === "true") {
        document.getElementById("loginBtn").style.display = "none";
		document.getElementById("joinBtn").style.display = "none";
        document.getElementById("logoutBtn").style.display = "block";
        document.getElementById("startBtn").style.display = "block";
        document.getElementById("randomBtn").style.display = "block"; 
		 document.getElementById("boardBtn").style.display = "block";
		 document.getElementById("profileBtn").style.display = "block";
		 // 랜덤 추천 버튼 표시
    } else {
        document.getElementById("loginBtn").style.display = "block";
		document.getElementById("joinBtn").style.display = "block";
        document.getElementById("logoutBtn").style.display = "none";
        document.getElementById("startBtn").style.display = "none";
        document.getElementById("randomBtn").style.display = "none";
		document.getElementById("boardBtn").style.display = "none";
		document.getElementById("profileBtn").style.display = "none"; // 랜덤 추천 버튼 숨김
    }
}

// 페이지 로딩 시 로그인 상태 확인
window.onload = function () {
    checkLoginStatus();
};

function goToMain() {
    // 로그인 상태를 sessionStorage에 저장
    sessionStorage.setItem('loginStatus', 'true'); 
    window.location.href = "./main.jsp"; // 로그인 상태에서 메인 페이지로 이동
}

// 로그인 버튼 클릭 시
function login() {
   sessionStorage.setItem('loginStatus', 'true');
    checkLoginStatus();  // 로그인 상태 체크
    window.location.href = "./login.jsp";  // 로그인 처리 페이지로 이동
}


// 로그아웃 버튼 클릭 시
function logout() {
    sessionStorage.removeItem('loginStatus');
    sessionStorage.removeItem('userID');
    window.location.href = "./logout.jsp";  // 로그아웃 처리 페이지로 이동
}
function goToreadbook() {
         
           window.location.href = "readbook.html"; // JSP 파일 경로
       }
	   
function goToboard(){
	window.location.href="board.jsp";
}

	   
function goToprofile(){
	window.location.href="./profile.jsp";
}
function join(){
	window.location.href="./join.jsp";
}


function getBookImageURL(bookTitle, bookAuthor, callback) {
    const apiKey = "AIzaSyBPoB0Du6z_Hm06dtbv0tF6DJhnfW1A2vs";
    const query = `${bookTitle} ${bookAuthor}`;
    const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            let imageUrl = "image/default-image.png"; // 기본 이미지 설정

            if (data.items && data.items.length > 0) {
                const volumeInfo = data.items[0].volumeInfo;
                if (volumeInfo && volumeInfo.imageLinks && volumeInfo.imageLinks.thumbnail) {
                    imageUrl = volumeInfo.imageLinks.thumbnail;
                }
            }
            callback(imageUrl); // 이미지 URL을 콜백 함수로 전달
        })
        .catch(error => {
            console.error("Error fetching book image:", error);
            callback("image/default-image.png");
        });
}

function fetchBookImage(bookTitle, bookAuthor, callback) {
    // AJAX를 통해 서버에 이미지 URL 요청
    fetch(`getBookImageURL.jsp?title=${encodeURIComponent(bookTitle)}&author=${encodeURIComponent(bookAuthor)}`)
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.imageUrl || "image/default-image.png"; // 기본 이미지 설정
            callback(imageUrl);
        })
        .catch(error => {
            console.error("Error fetching book image:", error);
            callback("image/default-image.png"); // 오류 시 기본 이미지 반환
        });
}
