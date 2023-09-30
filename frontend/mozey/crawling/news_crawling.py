import requests
from bs4 import BeautifulSoup
import mysql.connector

url = "https://kr.investing.com/news/most-popular-news"
response = requests.get(url)
soup = BeautifulSoup(response.text, "html.parser")
top_news = soup.find("div", {"class": "largeTitle"})
title = top_news.find('div', class_='textDiv').find('a', class_='title')['title']
company = top_news.find('span', class_='articleDetails').get_text().split(' ')[1].split('\xa0')[0]

article = top_news.find('article', class_='js-article-item articleItem')
top_news_id = article.get('data-id')
top_news_url = f"https://kr.investing.com/news/stock-market-news/article-{top_news_id}"
response = requests.get(top_news_url)
soup = BeautifulSoup(response.text, "html.parser")
article_content = soup.find("div", {"class": "WYSIWYG articlePage"})

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

# 데이터 저장 쿼리
query = "INSERT INTO news (title, company, image_url, content, date) VALUES (%s, %s, %s, %s, CURDATE())"
cursor.execute(query, (title, company, image_url, content))

conn.commit()
cursor.close()
conn.close()

print('완료')
