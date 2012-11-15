#!/bin/sh
#This script initializes the LTH DB with the data of each shop.



# Rm the previous ones
mongo asiance_LTH --eval 'db.shops.remove({})'

# Init
mongo asiance_LTH --eval 'db.shops.save({
name: "Korea",
cities: [{
          name: "대구시",
          shops: [{
		name: "라이브 대구",
		latitude: 35.86741934017295,
		longitude: 128.59544396018063,
		schedule: "10:30~22:00",
		address: "대구 중구 삼덕동1가 9-3번지 1F 라코스테 ,2층 라이브<br>대구시",
		phone: "053-424-0747",
		mission: ""}]},
          {
           name: "대전시",
           shops:[{
		name: "라이브 대전",
		latitude: 36.32932551789929,
		longitude: 127.42873502583919,
		schedule: "10:30~22:00",
		address: "대전시 중구 은행동 52-1<br>대전시",
		phone: "042-221-6951 ",
		mission: ""}]},
          {
           name: "부산시",
           shops: [{
		name: "부산광복점 라이브",
		latitude: 35.09915995340438,
		longitude: 129.03103866574043,
		schedule: "10:00 ~ 22:00",
		address: "중구 창선동 1가 37-2<br>부산시",
		phone: "051 247 2336",
		mission: ""}]},
          {
           name: "부천시",
           shops: [{
		name: "중동 유플렉스 라이브",
		latitude: 37.504225729697275,
		longitude: 126.76203446509996,
		schedule: "10:30 ~ 20:00",
		address: "원미구 중동 1164번지 1층<br>부천시",
		phone: "032 623 1163",
		mission: ""}]},
          {
           name: "서울시",
           shops: [{
		name: "명동 라이브",
		latitude: 37.56260725815746,
		longitude: 126.98461748242191,
		schedule: "10:30-21:00",
		address: "중구 명동2가 51-5<br>서울시",
		phone: "02 3789 4668",
		mission: ""},{

		name: "영등포롯데 라이브",
		latitude: 37.51540530491637,
		longitude: 126.90774980621485,
		schedule: "10:30 ~ 20:00",
		address: "영등포구 영등포동 618-496 영등포롯데백화점 8층<br>서울시",
		phone: "02 2630 6895",
		mission: ""},{

		name: "왕십리 엔터식스 라이브",
		latitude: 37.561527164085206,
		longitude: 127.037408496219,
		schedule: "11:00 ~ 22:00",
		address: "성동구 행당동 168-1번지 비트플렉스 지하 1층<br>서울시",
		phone: "02 2200 6230",
		mission: ""},{

		name: "타임스퀘어 라이브",
		latitude: 37.51696091697719,
		longitude: 126.90322056927874,
		schedule: "10:30 ~ 22:00",
		address: "영등포구 영등포동 4가 442번지 (주) 경방 타임스퀘어 (2F)<br>서울시",
		phone: "02 2069 2852",
		mission: ""},{

		name: "무역현대 라이브",
		latitude: 37.50839954290128,
		longitude: 127.05979931149508,
		schedule: "10:30 ~ 20:00",
		address: "강남구 삼성동 159-7 무역현대백화점 5층<br>서울시",
		phone: "02 3467 8485",
		mission: ""},{

		name: "라이브 디큐브",
		latitude: 37.50859018453681,
		longitude: 126.888827777347,
		schedule: "10:30 ~ 22:00",
		address: "구로구 신도림동 360-51번지 (지하1층)<br>서울시",
		phone: "02 2211 0340",
		mission: ""},{
		
		name: "라이브 홍대",
		latitude: 37.55387250545642,
		longitude: 126.92276192108154,
		schedule: "10:30~22:00",
		address: "서울시 마포구 서교동 358-104<br>서울시",
		phone: "02-3144-2512",
		mission: ""},{
		
		name: "라코스테 가로수길(멀티샾)",
		latitude: 37.5211101918867,
		longitude: 127.02297997871399,
		schedule: "10:30	~21:00",
		address: "서울시 강남구 신사동 545-24 1F 라코스테 2F 라이브<br>서울시",
		phone: "02-542-9101",
		mission: ""},{
		
		name: "여의도 IFC몰(멀티샵)",
		latitude: 37.52562681861596,
		longitude: 126.92564679272459,
		schedule: "10:00~22:00",
		address: "서울 영등포구 여의도동 국제금융로 10 IFC MALL 204호 지하2층<br>서울시",
		phone: "02-6137-5910",
		mission: ""}]},
	   {
            name: "전주시",
            shops: [{
		name: "라이브 전주",
		latitude: 35.821412725780135,
		longitude: 127.14517955332641,
		schedule: "10:30~22:00",
		address: "전주시 완산구 고사동 213-3<br>전주시",
		phone: "063-286-8334 ",
		mission: ""}]},
           {
            name: "제주시",
            shops: [{
		name: "라이브 제주",
		latitude: 33.51474918720605,
		longitude: 126.52564659525753,
		schedule: "10:30~22:00",
		address: "제주시 일도1동 1300-23<br>제주시",
		phone: "064-723-1374 ",
		mission: ""}]}]})'