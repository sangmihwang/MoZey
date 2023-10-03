import requests
from bs4 import BeautifulSoup
import mysql.connector

url = "https://kr.investing.com/news/most-popular-news"
headers = {"User-Agent": "Mozilla/5.0"}
response = requests.get(url, headers=headers)
soup = BeautifulSoup(response.text, "html.parser")


news_items = soup.find_all("article", {"class": "js-article-item"})

for news in news_items:
    date_span = news.find('span', class_='date')

    if date_span and "시간 전" in date_span.get_text():
        title = news.find('a', class_='title')['title']

        # If the title is empty, skip the current loop iteration
        if not title.strip():
            continue

        company = news.find('span', class_='articleDetails').get_text().split(' ')[1].split('\xa0')[0]
        top_news_id = news.get('data-id')
        top_news_url = f"https://kr.investing.com/news/stock-market-news/article-{top_news_id}"
        article_response = requests.get(top_news_url, headers=headers)
        article_soup = BeautifulSoup(article_response.text, "html.parser")
        article_content = article_soup.find("div", {"class": "WYSIWYG articlePage"})
        image_url = article_content.find('div', id='imgCarousel').find('img')['src']

        content_list = []
        for paragraph in article_content.find_all("p"):
            text = paragraph.get_text().strip()
            if any(excluded_word in text for excluded_word in ["포지션", "기자", "@", "에서 읽기"]):
                continue
            content_list.append(text)

        content = "\n".join(content_list)

        # MySQL 연결 및 데이터 저장 부분
        conn = mysql.connector.connect(
            host='j9a510.p.ssafy.io',
            user='A510',
            password='3jbhrVyqstWs9ud',
            database='test'
        )
        cursor = conn.cursor()
        query = "INSERT INTO news (title, company, image_url, content, date) VALUES (%s, %s, %s, %s, CURDATE())"
        cursor.execute(query, (title, company, image_url, content))
        conn.commit()
        cursor.close()
        conn.close()

        print('완료')
        break

