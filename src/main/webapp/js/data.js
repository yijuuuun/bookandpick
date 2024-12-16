const qnaList = [
    {
        "q": "1. 어떤 분야에 관심이 있으신가요?",
        "a": [
            {
                "answer": "a. 건강취미",
                "type": [0],
                "nextQuestion": 1
            },
            {
                "answer": "b. 경제경영",
                "type": [1],
                "nextQuestion": 7
            },
            {
                "answer": "c. 소설/시/희곡",
                "type": [2],
                "nextQuestion": 13
            },
            {
                "answer": "d. 에세이",
                "type": [3],
                "nextQuestion": 19
            },
            {
                "answer": "e. 자기계발",
                "type": [4],
                "nextQuestion": 25
            },
            {
                "answer": "f. 과학기술",
                "type": [5],
                "nextQuestion": 31
            },
            {
                "answer": "g. 예술",
                "type": [6],
                "nextQuestion": 37
            },
            {
                "answer": "h. IT계열",
                "type": [7],
                "nextQuestion": 43
            }
        ]
    },

    {
        "q": "2. 건강취미 분야에서 어떤 주제를 선호하시나요?",
        "a": [
            {
                "answer": "a. 질병과 치료법",
                "type": [0],
                "nextQuestion": 2
            },
            {
                "answer": "b. 운동/스포츠",
                "type": [0],
                "nextQuestion": 3
            },
            {
                "answer": "c. 한의학",
                "type": [0],
                "nextQuestion": 4
            },
            {
                "answer": "d. 의학/약학",
                "type": [0],
                "nextQuestion": 5
            },
            {
                "answer": "e. 패션/수공예",
                "type": [0],
                "nextQuestion": 6
            }
        ]
    },
    {
        "q": "3. '질병과 치료법'에 대해 어떤 세부 주제를 선호하시나요?",
        "a": [
            {
                "answer": "a. 면역력 강화",
                "type": [0],
                "nextQuestion": 60
            },
            {
                "answer": "b. 자연 치료법",
                "type": [1],
                "nextQuestion": 60
            },
            {
                "answer": "c. 현대 의학",
                "type": [2],
                "nextQuestion": 60
            }
        ]
    },
    {
        "q": "3. '운동/스포츠'에 대해 어떤 세부 주제를 선호하시나요?",
        "a": [
            {
                "answer": "a. 유산소 운동",
                "type": [0],
                "nextQuestion":60
            },
            {
                "answer": "b. 웨이트 트레이닝",
                "type": [1],
                "nextQuestion": 60
            },
            {
                "answer": "c. 요가와 명상",
                "type": [2],
                "nextQuestion":60
            }
        ]
    },
    {
        "q": "3. '한의학'에 대해 어떤 세부 주제를 선호하시나요?",
        "a": [
            {
                "answer": "a. 침술",
                "type": [0],
                "nextQuestion": 60
            },
            {
                "answer": "b. 한방약",
                "type": [1],
                "nextQuestion": 60
            },
            {
                "answer": "c. 기와 혈 관리",
                "type": [2],
                "nextQuestion": 60
            }
        ]
    },
    {
        "q": "3. '의학/약학'에 대해 어떤 세부 주제를 선호하시나요?",
        "a": [
            {
                "answer": "a. 약물 치료",
                "type": [0],
                "nextQuestion":60
            },
            {
                "answer": "b. 의학 혁신",
                "type": [1],
                "nextQuestion": 60
            },
            {
                "answer": "c. 진단 기술",
                "type": [2],
                "nextQuestion": 60
            }
        ]
    },
    {
        "q": "3. '패션/수공예'에 대해 어떤 세부 주제를 선호하시나요?",
        "a": [
            {
                "answer": "a. 의류 디자인",
                "type": [0],
                "nextQuestion": 60
            },
            {
                "answer": "b. DIY 수공예",
                "type": [1],
                "nextQuestion": 60
            },
            {
                "answer": "c. 가드닝과 원예",
                "type": [2],
                "nextQuestion": 60
            }
        ]
    },      // 경제경영 (8-13)
      {
          "q": "2. 경제경영 분야에서 어떤 주제를 선호하시나요?",
          "a": [
              {
                  "answer": "a. 경제",
                  "type": [0],
                  "nextQuestion": 8
              },
              {
                  "answer": "b. 경영",
                  "type": [1],
                  "nextQuestion": 9
              },
              {
                  "answer": "c. 투자/재테크",
                  "type": [2],
                  "nextQuestion": 10
              },
              {
                  "answer": "d. 마케팅/세일즈",
                  "type": [3],
                  "nextQuestion": 11
              },
              {
                  "answer": "e. CEO/비즈니스맨",
                  "type": [4],
                  "nextQuestion": 12
              }
          ]
      },
      {
          "q": "3. '경제'에 대해 어떤 세부 주제를 선호하시나요?",
          "a": [
              {
                  "answer": "a. 세계 경제 동향",
                  "type": [0],
                  "nextQuestion":60
              },
              {
                  "answer": "b. 경제 지표 분석",
                  "type": [1],
                  "nextQuestion": 60
              },
              {
                  "answer": "c. 금리와 환율",
                  "type": [2],
                  "nextQuestion":60
              }
          ]
      },
      {
          "q": "3. '경영'에 대해 어떤 세부 주제를 선호하시나요?",
          "a": [
              {
                  "answer": "a. 경영 전략",
                  "type": [0],
                  "nextQuestion": 60
              },
              {
                  "answer": "b. 조직 관리",
                  "type": [1],
                  "nextQuestion": 60
              },
              {
                  "answer": "c. 스타트업 성공 사례",
                  "type": [2],
                  "nextQuestion": 60
              }
          ]
      },
      {
          "q": "3. '투자/재테크'에 대해 어떤 세부 주제를 선호하시나요?",
          "a": [
              {
                  "answer": "a. 주식 투자",
                  "type": [0],
                  "nextQuestion": 60
              },
              {
                  "answer": "b. 부동산 투자",
                  "type": [1],
                  "nextQuestion":60
              },
              {
                  "answer": "c. 재테크 전략",
                  "type": [2],
                  "nextQuestion": 60
              }
          ]
      },
      {
          "q": "3. '마케팅/세일즈'에 대해 어떤 세부 주제를 선호하시나요?",
          "a": [
              {
                  "answer": "a. 디지털 마케팅",
                  "type": [0],
                  "nextQuestion":60
              },
              {
                  "answer": "b. 브랜드 전략",
                  "type": [1],
                  "nextQuestion": 60
              },
              {
                  "answer": "c. 고객 관리",
                  "type": [2],
                  "nextQuestion": 60
              }
          ]
      },
      {
          "q": "3. 'CEO/비즈니스맨'에 대해 어떤 세부 주제를 선호하시나요?",
          "a": [
              {
                  "answer": "a. CEO 성공 사례",
                  "type": [0],
                  "nextQuestion": 60
              },
              {
                  "answer": "b. 비즈니스 리더십",
                  "type": [1],
                  "nextQuestion": 60
              },
              {
                  "answer": "c. 네트워킹 기술",
                  "type": [2],
                  "nextQuestion": 60
              }
          ]
      },
      // 소설/시/희곡 (14-19)
      {
          "q": "2. 소설/시/희곡 분야에서 어떤 주제를 선호하시나요?",
          "a": [
              {
                  "answer": "a. 장르소설",
                  "type": [0],
                  "nextQuestion": 14
              },
              {
                  "answer": "b. 테마소설",
                  "type": [1],
                  "nextQuestion": 15
              },
              {
                  "answer": "c. 고전문학",
                  "type": [2],
                  "nextQuestion": 16
              },
              {
                  "answer": "d. 시/희곡",
                  "type": [3],
                  "nextQuestion": 17
              },
              {
                  "answer": "e. 비평/창작/이론",
                  "type": [4],
                  "nextQuestion": 18
              }
          ]
      },      {
          "q": "3. '장르소설'에 대해 어떤 세부 주제를 선호하시나요?",
          "a": [
              {
                  "answer": "a. 추리 소설",
                  "type": [0],
                  "nextQuestion": 60
              },
              {
                  "answer": "b. 판타지 소설",
                  "type": [1],
                  "nextQuestion": 60
              },
              {
                  "answer": "c. SF 소설",
                  "type": [2],
                  "nextQuestion": 60
              }
          ]
      },
      {
          "q": "3. '테마소설'에 대해 어떤 세부 주제를 선호하시나요?",
          "a": [
              {
                  "answer": "a. 역사 소설",
                  "type": [0],
                  "nextQuestion": 60
              },
              {
                  "answer": "b. 사회적 주제 소설",
                  "type": [1],
                  "nextQuestion": 60
              },
              {
                  "answer": "c. 철학적 소설",
                  "type": [2],
                  "nextQuestion": 60
              }
          ]
      },
      {
          "q": "3. '고전문학'에 대해 어떤 세부 주제를 선호하시나요?",
          "a": [
              {
                  "answer": "a. 세계 문학 고전",
                  "type": [0],
                  "nextQuestion":60
              },
              {
                  "answer": "b. 한국 문학 고전",
                  "type": [1],
                  "nextQuestion": 60
              },
              {
                  "answer": "c. 영미 문학",
                  "type": [2],
                  "nextQuestion": 60
              }
          ]
      },
      {
          "q": "3. '시/희곡'에 대해 어떤 세부 주제를 선호하시나요?",
          "a": [
              {
                  "answer": "a. 현대 시",
                  "type": [0],
                  "nextQuestion": 60
              },
              {
                  "answer": "b. 고전 시",
                  "type": [1],
                  "nextQuestion": 60
              },
              {
                  "answer": "c. 희곡 작품",
                  "type": [2],
               "nextQuestion": 60
              }
          ]
      },
      {
          "q": "3. '비평/창작/이론'에 대해 어떤 세부 주제를 선호하시나요?",
          "a": [
              {
                  "answer": "a. 문학 비평",
                  "type": [0],
                  "nextQuestion": 60
              },
              {
                  "answer": "b. 창작 기법",
                  "type": [1],
                  "nextQuestion": 60
              },
              {
                  "answer": "c. 문학 이론",
                  "type": [2],
                  "nextQuestion": 60
              }
          ]
      },
      // 에세이 (20-25)
      {
          "q": "2. 에세이 분야에서 어떤 주제를 선호하시나요?",
          "a": [
              {
                  "answer": "a. 감성/가족 에세이",
                  "type": [0],
                  "nextQuestion": 20
              },
              {
                  "answer": "b. 일기/편지글",
                  "type": [1],
                  "nextQuestion": 21
              },
              {
                  "answer": "c. 독서 에세이",
                  "type": [2],
                  "nextQuestion": 22
              },
              {
                  "answer": "d. 동물 에세이",
                  "type": [3],
                  "nextQuestion": 23
              },
              {
                  "answer": "e. 사랑 에세이",
                  "type": [4],
                  "nextQuestion": 24
              }
          ]
      },
      {
          "q": "3. '감성/가족 에세이'에 대해 어떤 세부 주제를 선호하시나요?",
          "a": [
              {
                  "answer": "a. 가족 이야기",
                  "type": [0],
                  "nextQuestion": 60
              },
              {
                  "answer": "b. 감성적인 추억",
                  "type": [1],
                  "nextQuestion": 60
              },
              {
                  "answer": "c. 삶과 사랑",
                  "type": [2],
                  "nextQuestion": 60
              }
          ]
      },      {
          "q": "3. '일기/편지글'에 대해 어떤 세부 주제를 선호하시나요?",
          "a": [
              {
                  "answer": "a. 일상 일기",
                  "type": [0],
                  "nextQuestion": 60
              },
              {
                  "answer": "b. 편지 형식 글",
                  "type": [1],
                  "nextQuestion": 60
              },
              {
                  "answer": "c. 자전적 이야기",
                  "type": [2],
                  "nextQuestion": 60
              }
          ]
      },
      {
          "q": "3. '독서 에세이'에 대해 어떤 세부 주제를 선호하시나요?",
          "a": [
              {
                  "answer": "a. 책과 삶",
                  "type": [0],
                  "nextQuestion": 60
              },
              {
                  "answer": "b. 독서의 즐거움",
                  "type": [1],
                  "nextQuestion": 60
              },
              {
                  "answer": "c. 독서 습관",
                  "type": [2],
                  "nextQuestion": 60
              }
          ]
      },
      {
          "q": "3. '동물 에세이'에 대해 어떤 세부 주제를 선호하시나요?",
          "a": [
              {
                  "answer": "a. 동물과 교감",
                  "type": [0],
                  "nextQuestion": 60
              },
              {
                  "answer": "b. 반려동물 이야기",
                  "type": [1],
                  "nextQuestion": 60
              },
              {
                  "answer": "c. 동물 보호",
                  "type": [2],
                  "nextQuestion": 60
              }
          ]
      },
      {
          "q": "3. '사랑 에세이'에 대해 어떤 세부 주제를 선호하시나요?",
          "a": [
              {
                  "answer": "a. 사랑의 시작",
                  "type": [0],
                  "nextQuestion": 60
              },
              {
                  "answer": "b. 연애 이야기",
                  "type": [1],
                  "nextQuestion": 60
              },
              {
                  "answer": "c. 삶 속의 사랑",
                  "type": [2],
                  "nextQuestion": 60
              }
          ]
      },
      // 자기계발 (26-31)
      {
          "q": "2. 자기계발 분야에서 어떤 주제를 선호하시나요?",
          "a": [
              {
                  "answer": "a. 삶의 자세",
                  "type": [0],
                  "nextQuestion": 26
              },
              {
                  "answer": "b. 인간관계",
                  "type": [1],
                  "nextQuestion": 27
              },
              {
                  "answer": "c. 성공학/경력관리",
                  "type": [2],
                  "nextQuestion": 28
              },
              {
                  "answer": "d. 화술/협상",
                  "type": [3],
                  "nextQuestion": 29
              },
              {
                  "answer": "e. 정보/시간관리",
                  "type": [4],
                  "nextQuestion": 30
              }
          ]
      },
      {
          "q": "3. '삶의 자세'에 대해 어떤 세부 주제를 선호하시나요?",
          "a": [
              {
                  "answer": "a. 긍정적 태도",
                  "type": [0],
                  "nextQuestion": 60
              },
              {
                  "answer": "b. 삶의 철학",
                  "type": [1],
                  "nextQuestion": 60
              },
              {
                  "answer": "c. 감사하는 마음",
                  "type": [2],
                  "nextQuestion": 60
              }
          ]
      },          {
              "q": "3. '인간관계'에 대해 어떤 세부 주제를 선호하시나요?",
              "a": [
                  {
                      "answer": "a. 소통 기술",
                      "type": [0],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "b. 대인 관계",
                      "type": [1],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "c. 신뢰 구축",
                      "type": [2],
                      "nextQuestion": 60
                  }
              ]
          },
          {
              "q": "3. '성공학/경력관리'에 대해 어떤 세부 주제를 선호하시나요?",
              "a": [
                  {
                      "answer": "a. 목표 설정",
                      "type": [0],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "b. 커리어 개발",
                      "type": [1],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "c. 성공 사례",
                      "type": [2],
                      "nextQuestion": 60
                  }
              ]
          },
          {
              "q": "3. '화술/협상'에 대해 어떤 세부 주제를 선호하시나요?",
              "a": [
                  {
                      "answer": "a. 설득 기술",
                      "type": [0],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "b. 협상 전략",
                      "type": [1],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "c. 공감 대화",
                      "type": [2],
                      "nextQuestion": 60
                  }
              ]
          },
          {
              "q": "3. '정보/시간관리'에 대해 어떤 세부 주제를 선호하시나요?",
              "a": [
                  {
                      "answer": "a. 효율적인 시간 관리",
                      "type": [0],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "b. 정보 활용",
                      "type": [1],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "c. 우선순위 설정",
                      "type": [2],
                      "nextQuestion": 60
                  }
              ]
          },
          // 과학기술 (32-37)
          {
              "q": "2. 과학기술 분야에서 어떤 주제를 선호하시나요?",
              "a": [
                  {
                      "answer": "a. 공학",
                      "type": [0],
                      "nextQuestion": 32
                  },
                  {
                      "answer": "b. 과학",
                      "type": [1],
                      "nextQuestion": 33
                  },
                  {
                      "answer": "c. 나노과학",
                      "type": [2],
                      "nextQuestion": 34
                  },
                  {
                      "answer": "d. 농/축/수산학",
                      "type": [3],
                      "nextQuestion": 35
                  },
                  {
                      "answer": "e. 뇌과학",
                      "type": [4],
                      "nextQuestion": 36
                  }
              ]
          },
          {
              "q": "3. '공학'에 대해 어떤 세부 주제를 선호하시나요?",
              "a": [
                  {
                      "answer": "a. 기계 공학",
                      "type": [0],
                      "nextQuestion":60
                  },
                  {
                      "answer": "b. 전기 공학",
                      "type": [1],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "c. 건축 공학",
                      "type": [2],
                      "nextQuestion": 60
                  }
              ]
          },
          {
              "q": "3. '과학'에 대해 어떤 세부 주제를 선호하시나요?",
              "a": [
                  {
                      "answer": "a. 물리학",
                      "type": [0],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "b. 화학",
                      "type": [1],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "c. 생물학",
                      "type": [2],
                      "nextQuestion": 60
                  }
              ]
          },
          {
              "q": "3. '나노과학'에 대해 어떤 세부 주제를 선호하시나요?",
              "a": [
                  {
                      "answer": "a. 나노 기술",
                      "type": [0],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "b. 재료 과학",
                      "type": [1],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "c. 미세 공학",
                      "type": [2],
                      "nextQuestion": 60
                  }
              ]
          },
          {
              "q": "3. '농/축/수산학'에 대해 어떤 세부 주제를 선호하시나요?",
              "a": [
                  {
                      "answer": "a. 농업 기술",
                      "type": [0],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "b. 축산학",
                      "type": [1],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "c. 수산 자원",
                      "type": [2],
                      "nextQuestion": 60
                  }
              ]
          },
          {
              "q": "3. '뇌과학'에 대해 어떤 세부 주제를 선호하시나요?",
              "a": [
                  {
                      "answer": "a. 뇌와 신경",
                      "type": [0],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "b. 인지 과학",
                      "type": [1],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "c. 심리학",
                      "type": [2],
                      "nextQuestion": 60
                  }
              ]
          },
          // 예술 (38-43)
          {
              "q": "2. 예술 분야에서 어떤 주제를 선호하시나요?",
              "a": [
                  {
                      "answer": "a. 건축",
                      "type": [0],
                      "nextQuestion": 38
                  },
                  {
                      "answer": "b. 대중문화론",
                      "type": [1],
                      "nextQuestion": 39
                  },
                  {
                      "answer": "c. 대중음악",
                      "type": [2],
                      "nextQuestion": 40
                  },
                  {
                      "answer": "d. 무용",
                      "type": [3],
                      "nextQuestion": 41
                  },
                  {
                      "answer": "e. 미술",
                      "type": [4],
                      "nextQuestion": 42
                  }
              ]
          },
          {
              "q": "3. '건축'에 대해 어떤 세부 주제를 선호하시나요?",
              "a": [
                  {
                      "answer": "a. 현대 건축",
                      "type": [0],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "b. 고전 건축",
                      "type": [1],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "c. 친환경 건축",
                      "type": [2],
                      "nextQuestion": 60
                  }
              ]
          },
          {
              "q": "3. '대중문화론'에 대해 어떤 세부 주제를 선호하시나요?",
              "a": [
                  {
                      "answer": "a. 미디어와 대중",
                      "type": [0],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "b. 음악 문화",
                      "type": [1],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "c. 영화 산업",
                      "type": [2],
                      "nextQuestion": 60
                  }
              ]
          },
          {
              "q": "3. '대중음악'에 대해 어떤 세부 주제를 선호하시나요?",
              "a": [
                  {
                      "answer": "a. 팝 음악",
                      "type": [0],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "b. 록 음악",
                      "type": [1],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "c. 클래식 크로스오버",
                      "type": [2],
                      "nextQuestion": 60
                  }
              ]
          },
          {
              "q": "3. '무용'에 대해 어떤 세부 주제를 선호하시나요?",
              "a": [
                  {
                      "answer": "a. 발레",
                      "type": [0],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "b. 현대 무용",
                      "type": [1],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "c. 민속 무용",
                      "type": [2],
                      "nextQuestion": 60
                  }
              ]
          },
          {
              "q": "3. '미술'에 대해 어떤 세부 주제를 선호하시나요?",
              "a": [
                  {
                      "answer": "a. 회화",
                      "type": [0],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "b. 조각",
                      "type": [1],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "c. 현대 미술",
                      "type": [2],
                      "nextQuestion": 60
                  }
              ]
          },
          // IT계열 (44-49)
          {
              "q": "2. IT계열 분야에서 어떤 주제를 선호하시나요?",
              "a": [
                  {
                      "answer": "a. 게임",
                      "type": [0],
                      "nextQuestion": 44
                  },
                  {
                      "answer": "b. 그래픽/디자인/멀티미디어",
                      "type": [1],
                      "nextQuestion": 45
                  },
                  {
                      "answer": "c. 네트워크/해킹/보안",
                      "type": [2],
                      "nextQuestion": 46
                  },
                  {
                      "answer": "d. 오피스 활용",
                      "type": [3],
                      "nextQuestion": 47
                  },
                  {
                      "answer": "e. 모바일/태블릿/SNS",
                      "type": [4],
                      "nextQuestion": 48
                  }
              ]
          },
          {
              "q": "3. '게임'에 대해 어떤 세부 주제를 선호하시나요?",
              "a": [
                  {
                      "answer": "a. 게임 개발",
                      "type": [0],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "b. 게임 디자인",
                      "type": [1],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "c. e스포츠",
                      "type": [2],
                      "nextQuestion": 60
                  }
              ]
          },
          {
              "q": "3. '그래픽/디자인/멀티미디어'에 대해 어떤 세부 주제를 선호하시나요?",
              "a": [
                  {
                      "answer": "a. 디지털 그래픽",
                      "type": [0],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "b. 애니메이션",
                      "type": [1],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "c. UX/UI 디자인",
                      "type": [2],
                      "nextQuestion": 60
                  }
              ]
          },
          {
              "q": "3. '네트워크/해킹/보안'에 대해 어떤 세부 주제를 선호하시나요?",
              "a": [
                  {
                      "answer": "a. 네트워크 관리",
                      "type": [0],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "b. 보안 시스템",
                      "type": [1],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "c. 해킹과 방어",
                      "type": [2],
                      "nextQuestion": 60
                  }
              ]
          },
          {
              "q": "3. '오피스 활용'에 대해 어떤 세부 주제를 선호하시나요?",
              "a": [
                  {
                      "answer": "a. 문서 작업",
                      "type": [0],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "b. 엑셀 활용",
                      "type": [1],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "c. 프레젠테이션 기술",
                      "type": [2],
                      "nextQuestion": 60
                  }
              ]
          },
          {
              "q": "3. '모바일/태블릿/SNS'에 대해 어떤 세부 주제를 선호하시나요?",
              "a": [
                  {
                      "answer": "a. 앱 개발",
                      "type": [0],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "b. 모바일 기술",
                      "type": [1],
                      "nextQuestion": 60
                  },
                  {
                      "answer": "c. SNS 마케팅",
                      "type": [2],
                      "nextQuestion": 60
                  }
              ]
          }
      ]
 