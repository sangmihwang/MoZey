import requests
import datetime
import mysql.connector

current_date = datetime.date.today().strftime('%Y-%m-%d')

conn = mysql.connector.connect(
    host='j9a510.p.ssafy.io',
    user='A510',
    password='3jbhrVyqstWs9ud',
    database='test'
)
cursor = conn.cursor()

# 오늘 날짜 quiz 조회
quiz_query = "SELECT * FROM quiz WHERE date = %s"
cursor.execute(quiz_query, (current_date,))
quiz_data = cursor.fetchone()

# 오늘 날짜에 해당하는 quiz가 없을때만 만들기
if not quiz_data:
    news_query = "SELECT news_id, content FROM news WHERE date = %s LIMIT 1"
    cursor.execute(news_query, (current_date,))
    news_data = cursor.fetchone()

    # 조회된 뉴스데이터가 있을 경우 문제 생성 API로 문제만들기
    if news_data:
        news_id, news_content = news_data

        # API endpoint 설정
        url = "https://api.opexams.com/questions-generator"

        # 헤더 설정
        headers = {
            "api-key": "794ZcZGtmZnzMADT0SPu1JaeZSH4qwU",
        }

        # 요청 본문 설정
        data = {
            "type": "contextBased",
            "context": news_content,
            "questionType": "MCQ",
            "difficulty": "medium",
            "language": 'Korean'
        }

        response = requests.post(url, headers=headers, json=data)

        # 응답을 데이터베이스에 저장
        if response.status_code == 200:
            print("Quiz for today has been created successfully.")
            quiz_data = response.json()["data"]
            inserted_count = 0

            for q in quiz_data:
                try:
                    insert_query = """
                    INSERT INTO quiz (question, answer, date, news_id, option1, option2, option3, option4, option5)
                    VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)
                    """
                    values = (
                        q['question'],
                        q['answer'],
                        current_date,
                        news_id,
                        q['options'][0],
                        q['options'][1],
                        q['options'][2],
                        q['options'][3],
                        q['options'][4]
                    )
                    cursor.execute(insert_query, values)
                    conn.commit()
                    inserted_count += 1
                except IndexError:
                    continue

            print(f"Inserted {inserted_count} questions into the database.")

        else:
            print(f"Error occurred: {response.text}")

    else:
        print("No news data for today.")
else:
    print("Quiz for today already exists.")

cursor.close()
conn.close()
