const ARCHIVE = [
    {
    id: 1,
    assetBase: "asset/fake_01",
    title: "무사에움 클라우숨 musaeum clausum",
    description: "토머스 브라운 경이 저술한 소문으로만 전해지거나 사라진 것으로 추정되는 책, 그림, 물건들을 상상하여 목록화한 책이다",
    year: "1684",
    realityMode: "realised_fake",
    presentStatus: "theoretical_model",
    valueType: "conceptual_value"
    },
    {
    id: 2,
    assetBase: "asset/fake_02",
    title: "보이니치 원고 Voynich manuscript",
    description: "보이니치 문자라고 불리는 알려지지 않은 문자와 삽화로 구성된 코덱스이다. 환상적인 삽화와 도표의 일부는 조잡한 색상으로 되어 있으며, 원고의 일부 부분에는 사람, 미확인 식물, 점성술 기호가 나타난다.",
    year: "Unknown(15C)",
    realityMode: "realised_fake",
    presentStatus: "unresolved_mystery",
    valueType: "aesthetic_value"
    },
    {
    id: 3,
    assetBase: "asset/fake_03",
    title: "코덱스 세라피니아누스 Codex Seraphinianus",
    description: "이탈리아 예술가, 건축가 및 산업 디자이너인 Luigi Serafini가 제작한 가상의 세계에 대한 그림 백과사전으로, 기괴하고 환상적인 식물, 동물, 해부학, 패션, 음식에 대한 색연필 삽화로 구성되어 있다. 기존의 서양 문자 체계를 모방했으나 의미가 없는 가상의 문자 체계를 사용한다.",
    year: "1981",
    realityMode: "realised_fake",
    presentStatus: "theoretical_model",
    valueType: "conceptual_value"
    },
    {
    id: 4,
    assetBase: "asset/fake_04",
    title: "천서 A Book from the Sky",
    description: "중국 예술가 쉬빙이 제작한 아티스트 북으로, 송나라와 명나라 시대의 목판화 스타일 및 전통적인 한자를 닮도록 디자인된 의미 없는 상형문자만 사용한다.",
    year: "1988",
    realityMode: "realised_fake",
    presentStatus: "cultual_icon",
    valueType: "aesthetic_value"
    },
    {
    id: 5,
    assetBase: "asset/fake_05",
    title: "오에라 린다 책 Oera Linda Book",
    description: "고대 프리슬란트어를 모방하여 쓰인 필사본으로, 기원전 2194년부터 서기 803년까지의 먼 고대 역사, 신화, 종교적 주제를 다룬다고 주장하고 있다. 그러나 전문가들은 위조 또는 조작된 문서로 간주한다.",
    year: "Unknown",
    realityMode: "realised_fake",
    presentStatus: "unresolved_mystery",
    valueType: "historical_value"
    },
    {
    id: 6,
    assetBase: "asset/fake_06",
    title: "벨레스의 서 Vles Book",
    description: "고대 슬라브 종교와 역사의 텍스트라고 주장하는 문학적 위조물이다. 역사적 기록이라고 주장되는 내용과 종교적 구절들이 섞여 있는데, 그중 일부는 교훈적이고 도덕적인 성격을 띤다.",
    year: "Unknown(19C)",
    realityMode: "spent_fake",
    presentStatus: "cautionary_case",
    valueType: "educational_value"
    },
    {
    id: 7,
    assetBase: "asset/fake_07",
    title: "고대 고지 독일어 자장가 Old High German lullaby",
    description: "비엔나 출신의 중세 문학 수집가이자 사립 학자인 게오르크 자페르트가 발견했다고 발표한 필사본이다. 표면적으로는 기독교 이전 신화가 풍부하게 담긴 10세기 시로 보이지만, 전문가들은 이를 자페르트의 위조 작품으로 간주한다.",
    year: "1859",
    realityMode: "spent_fake",
    presentStatus: "discarded_fake",
    valueType: "educational_value"
    },
    {
    id: 8,
    assetBase: "asset/fake_08",
    title: "로혼츠 코덱스 Rohonc Codex",
    description: "19세기 초 헝가리에서 발견된 필사본으로, 작가 미상의 그림과 함께 알려지지 않은 언어 및 문자 체계로 구성되어 있다. 기원 및 내용과 그림의 의미는 아직 밝혀지지 않았으나, 전문가들은 이를 18세기에 제작된 위조품으로 보고 있다.",
    year: "Unknown(18C)",
    realityMode: "realised_fake",
    presentStatus: "unresolved_mystery",
    valueType: "aesthetic_value"
    },
    {
    id: 9,
    assetBase: "asset/fake_09",
    title: "빈란드 지도 Vinland Map",
    description: "20세기에 제작된 위조품으로, 15세기 세계지도를 표방하며 노르만족의 북아메리카 탐험에 대한 독특한 정보를 담고 있다. 1957년 발견되었으며, 1965년 콜럼버스 이전 시대의 지도로 공개되면서 널리 알려지게 되었다.",
    year: "Unknown(20C)",
    realityMode: "spent_fake",
    presentStatus: "cautionary_case",
    valueType: "historical_value"
    },
    {
    id: 10,
    assetBase: "asset/fake_10",
    title: "보르티건과 로웨나 Vortigern and Rowena",
    description: "1796년 새로 발견된 윌리엄 셰익스피어의 작품으로 선전되었던 희곡이었으나, 이후 유명한 위조범 윌리엄 헨리 아일랜드가 만든 셰익스피어 사기극으로 밝혀졌다.",
    year: "1795",
    realityMode: "spent_fake",
    presentStatus: "discarded_fake",
    valueType: "educational_value"
    },
    {
    id: 11,
    assetBase: "asset/fake_11",
    title: "오시안 Ossian",
    description: "1765년에 스코틀랜드 시인 제임스 맥퍼슨이 출판한 서사시 연작으로, 맥퍼슨은 고대의 게일어 구전 자료를 번역한 것이라고 주장했다. 그러나 현재는 맥퍼슨이 자신이 수집한 전통 게일어 시를 부분적으로 활용하여 시를 대부분 직접 작곡한 것으로 알려져있다. 이 작품은 국제적으로 인기를 얻었고 유럽의 모든 문학 언어로 번역되었으며, 낭만주의 운동과 게일어 부흥 운동의 발전에 매우 큰 영향을 미쳤다.",
    year: "1765",
    realityMode: "realised_fake",
    presentStatus: "cultual_icon",
    valueType: "historical_value",
    link: "https://en.wikipedia.org/wiki/Ossian"
    },
    {
    id: 12,
    assetBase: "asset/fake_12",
    title: "드보르 크랄로베와 젤레나 호라의 원고 Manuscripts of Dvůr Králové and Zelená Hora",
    description: "1817년 발견된 고대 체코어로 작성된 서사시적인 슬라브 사본이라고 주장하는 위조품이다. 발견 당시부터 위조에 대한 논란이 있었으며, 1886년 토마시 마사리크의 아테나움 잡지에 실린 일련의 기사를 통해 그것들이 위조품이라는 것이 결정적으로 입증되었다.",
    year: "1817",
    realityMode: "spent_fake",
    presentStatus: "discarded_fake",
    valueType: "educational_value",
    link: "https://en.wikipedia.org/wiki/Manuscripts_of_Dv%C5%AFr_Kr%C3%A1lov%C3%A9_and_Zelen%C3%A1_Hora"
    },
    {
    id: 13,
    assetBase: "asset/fake_13",
    title: "베스티아리움 스코티쿰 Vestiarium Scoticum",
    description: "1842년 에든버러의 윌리엄 테이트 출판사에서 한정판으로 출간된 책으로, 스코틀랜드 가문의 씨족 타탄에 관한 15세기 원고를 컬러 삽화와 함께 재현한 책으로 알려져 있다. 출판 직후 이 책은 위조품으로 비난받았으며, 이 책을 출판한 '스튜어트' 형제는 사기꾼으로 비난받았다. 그럼에도 불구하고, 이 책은 스코틀랜드 타탄의 역사에서 지대한 역할을 했으며, 책에 담긴 많은 디자인과 패턴들이 공식 씨족 타탄의 영역으로 편입되었다.",
    year: "1842",
    realityMode: "realised_fake",
    presentStatus: "theoretical_model",
    valueType: "aesthetic_value",
    link: "https://en.wikipedia.org/wiki/Vestiarium_Scoticum"
    },
    {
    id: 14,
    assetBase: "asset/fake_14",
    title: "왈람 올룸 Walam Olum",
    description: "1836년에 출판된 레나페 원주민 부족의 역사 기록으로, 식물학자이자 고대 유물 연구가인 콘스탄틴 사무엘 라피네스크가 출판했다. 출판 이후 진위 여부를 두고 논란이 끊이지 않았으며, 1980년대의 민족지학 연구와 1990년대 라피네스크의 원고 분석을 통해 이 문서가 위조되었을 가능성이 높다는 증거가 제시되었다.",
    year: "1836",
    realityMode: "spent_fake",
    presentStatus: "cautionary_case",
    valueType: "historical_value",
    link: "https://en.wikipedia.org/wiki/Walam_Olum"
    },
    {
    id: 15,
    assetBase: "asset/fake_15",
    title: "세 명의 사기꾼에 관한 논문 Treatise of the Three Impostors",
    description: "13세기부터 17세기까지 소문으로 전해진 기독교, 유대교, 이슬람교 등 아브라함 계통 종교 세 가지 모두를 부정하는 책으로, 제목의 '사기꾼'은 예수, 모세, 무함마드이다. 결국 이 책의 위조본이 은밀하게 유통되기 시작했으며, 특히 프랑스의 지하 출판물인 《Traité sur les trois imposteurs》가 1719년에 처음 등장했다.",
    year: "Unknown",
    realityMode: "spent_fake",
    presentStatus: "cautionary_case",
    valueType: "historical_value",
    link: "https://en.wikipedia.org/wiki/Treatise_of_the_Three_Impostors"
    },
    {
    id: 16,
    assetBase: "asset/fake_16",
    title: "시온 의정서 The Protocols of the Elders of Zion",
    description: "유대인의 세계 지배 음모를 상세히 기술한 것으로 보이는 반유대주의적 사기극이자 위조 문서로, 여러 문구를 표절했다. 국제적으로 유대인 음모에 대한 믿음을 대중화하는 데 중요한 역할을 했다.",
    year: "1903",
    realityMode: "spent_fake",
    presentStatus: "cautionary_case",
    valueType: "historical_value",
    link: "https://en.wikipedia.org/wiki/The_Protocols_of_the_Elders_of_Zion"
    },
    {
    id: 17,
    assetBase: "asset/fake_17",
    title: "콘스탄티누스의 기증서 Donation of Constantine",
    description: "4세기 황제 콘스탄티누스 대제가 로마와 로마 제국의 서부 지역에 대한 권한을 교황에게 이양했다고 주장하는 위조된 로마 황제 칙령이다. 주로 13세기에 교황의 정치적 권위 주장을 뒷받침하는 데 사용되었다.",
    year: "Unknown(8C)",
    realityMode: "realised_fake",
    presentStatus: "cultual_icon",
    valueType: "historical_value",
    link: "https://en.wikipedia.org/wiki/Donation_of_Constantine"
    },
    {
    id: 18,
    assetBase: "asset/fake_18",
    title: "예수의 아내의 복음서 Gospel of Jesus' Wife",
    description: "\"예수께서 그들에게 말씀하셨다. '내 아내는…'\"이라는 구절이 포함된 콥트어로 된 위조 파피루스 조각이다. 처음에는 4세기경의 것으로 여겨졌지만, 현재는 현대의 위조품으로 간주된다.",
    year: "2012",
    realityMode: "spent_fake",
    presentStatus: "cautionary_case",
    valueType: "historical_value",
    link: "https://en.wikipedia.org/wiki/Gospel_of_Jesus%27_Wife#Links_to_conspiracy_theories"
    },
    {
    id: 19,
    assetBase: "asset/fake_19",
    title: "히틀러 일기 Hitler Diaries",
    description: "아돌프 히틀러가 썼다고 알려진 60권 분량의 일기 시리즈였으나, 1981년부터 1983년 사이에 콘라트 쿠야우가 위조한 것으로 밝혀졌다.",
    year: "1983",
    realityMode: "spent_fake",
    presentStatus: "cautionary_case",
    valueType: "educational_value",
    link: "https://en.wikipedia.org/wiki/Hitler_Diaries"
    },
    {
    id: 20,
    assetBase: "asset/fake_20",
    title: "애틀랜타의 밤 Atlanta Nights",
    description: "2004년 공상 과학 및 판타지 작가 그룹이 만든 공동 소설로, 수준 높은 원고만 출판한다고 홍보하는 출판사 PublishAmerica가 형편없는 작품을 받아들일지 시험할 목적으로 제작되었다.",
    year: "2004",
    realityMode: "realised_fake",
    presentStatus: "theoretical_model",
    valueType: "conceptual_value",
    link: "https://en.wikipedia.org/wiki/Atlanta_Nights"
    },
    {
    id: 21,
    assetBase: "asset/fake_21",
    title: "낯선 이가 벌거벗은 채 나타났다 Naked Came the Stranger",
    description: "1969년 미국 문학 문화를 풍자하기 위해 쓰인 문학적 사기 소설이다. Newsday 칼럼니스트 Mike McGrady가 이끄는 기자 그룹이 의도적으로 저속하고 형편없는 책을 만들었고, 이 책은 베스트셀러가 되었다.",
    year: "1969",
    realityMode: "realised_fake",
    presentStatus: "theoretical_model",
    valueType: "conceptual_value",
    link: "https://en.wikipedia.org/wiki/Naked_Came_the_Stranger"
    },
    {
    id: 22,
    assetBase: "asset/fake_22",
    title: "토트의 책 Book of Thoth",
    description: "고대 이집트에서 법률, 마법, 자연 및 사후 세계에 대한 모든 지식을 담고 있다고 전해지는 신화 속 책이다. 글쓰기와 지식의 신인 토트에게 귀속되는 여러 고대 이집트 문헌에 붙여진 이름이다.",
    year: "Unknown",
    realityMode: "realised_fake",
    presentStatus: "cultual_icon",
    valueType: "historical_value",
    link: "https://en.wikipedia.org/wiki/Book_of_Thoth"
    },
    {
    id: 23,
    assetBase: "asset/fake_23",
    title: "가짜 룬 문자 Pseudo-runes",
    description: "게르만어 룬 문자와 비슷하게 생긴 글자 또는 룬 문자를 연상시키도록 의도된 현대적 변형을 뜻한다.",
    year: "Unknown",
    realityMode: "realised_fake",
    presentStatus: "cultual_icon",
    valueType: "historical_value",
    link: "https://en.wikipedia.org/wiki/Pseudo-runes"
    },
    {
    id: 24,
    assetBase: "asset/fake_24",
    title: "가짜 히브리어 Pseudo-Hebrew",
    description: "히브리어 문자처럼 보이도록 의도되었지만 실제로는 히브리어 문자가 아닌 기호를 예술적으로 사용하는 것이다. 중세와 르네상스 미술 작품에서 장식 요소로 사용되었다.",
    year: "Unknown",
    realityMode: "realised_fake",
    presentStatus: "cultual_icon",
    valueType: "historical_value",
    link: "https://en.wikipedia.org/wiki/Pseudo-Hebrew"
    },
    {
    id: 25,
    assetBase: "asset/fake_25",
    title: "유사 쿠픽체 Pseudo-Kufic / 쿠페스크체 Kufesque",
    description: "중세와 르네상스 시대에 사용된 장식 양식으로, 아랍어가 아닌 맥락에서 아랍어 서체를 모방한 것이다.",
    year: "Unknown",
    realityMode: "realised_fake",
    presentStatus: "cultual_icon",
    valueType: "historical_value",
    link: "https://en.wikipedia.org/wiki/Pseudo-Kufic"
    },
    {
    id: 26,
    assetBase: "asset/fake_26",
    title: "포베르제 Fauxbergé",
    description: "1885년에서 1917년 사이에 제작된 역사적인 파베르제 제품의 복제품, 모조품 또는 모방품을 뜻하는 단어이다.",
    year: "1885—1917",
    realityMode: "spent_fake",
    presentStatus: "discarded_fake",
    valueType: "educational_value",
    link: "https://en.wikipedia.org/wiki/Fauxberg%C3%A9"
    },
    {
    id: 27,
    assetBase: "asset/fake_27",
    title: "스페인 위조범 세밀화 Spanish Forger Miniatures",
    description: "19세기 말에서 20세기 초에 걸쳐 신원 미상의 인물에 의해 제작된 다수의 중세 세밀화 위조품이다. 진짜 중세 서적의 양피지나 잎을 활용해 위조품을 만들었다.",
    year: "Unknown(19C—20C)",
    realityMode: "spent_fake",
    presentStatus: "discarded_fake",
    valueType: "educational_value",
    link: "https://en.wikipedia.org/wiki/Spanish_Forger"
    },
    {
    id: 28,
    assetBase: "asset/fake_28",
    title: "코팅글리 요정들 Cottingley Fairies",
    description: "1917년 영국 코팅글리에 살았던 사촌 자매 엘시 라이트와 프랜시스 그리피스가 찍은 다섯 장의 사진이다. 요정의 존재를 증명한다고 주장했으나 이후 조작 사진으로 밝혀졌다.",
    year: "1917",
    realityMode: "spent_fake",
    presentStatus: "discarded_fake",
    valueType: "aesthetic_value",
    link: "https://en.wikipedia.org/wiki/Cottingley_Fairies"
    },
    {
    id: 29,
    assetBase: "asset/fake_29",
    title: "분재 새끼 고양이 웹사이트 BonsaiKitten.com",
    description: "2000년에 개설된 사기성 웹사이트로, 새끼 고양이를 병에 넣어 기르면 병 모양대로 변형된다고 주장했다. 많은 항의와 신고가 있었고, 이후 허위임이 밝혀졌다.",
    year: "2000",
    realityMode: "realised_fake",
    presentStatus: "cultual_icon",
    valueType: "folkloric_value",
    link: "https://en.wikipedia.org/wiki/Bonsai_Kitten"
    },
    {
    id: 30,
    assetBase: "asset/fake_30",
    title: "호랑이 구매 웹사이트 BuyTigers.com",
    description: "2006년 온라인으로 호랑이를 판매하고 전 세계로 배송한다고 주장한 풍자적 웹사이트이다. 동물 보호 단체의 항의를 받은 뒤 사기임을 밝혔다.",
    year: "2006",
    realityMode: "realised_fake",
    presentStatus: "theoretical_model",
    valueType: "conceptual_value",
    link: "https://en.wikipedia.org/wiki/BuyTigers.com"
    },
    {
    id: 31,
    assetBase: "asset/fake_31",
    title: "필트다운인 Piltdown Man",
    description: "1912년 발표된 이전에 알려지지 않았던 초기 인류의 화석 유해로, 뼈 조각들을 조합하여 유골을 만든 고고학적 사기극이다. 발표 이후 거의 처음부터 진위성에 대한 의문이 제기되었지만, 유해는 오랫동안 널리 받아들여졌고, 이 사기극의 허위성은 1953년에야 비로소 명확하게 입증되었다. 2016년 광범위한 과학적 검토를 통해 아마추어 고고학자 찰스 도슨이 이 사기극의 배후에 있다는 사실이 밝혀졌다. ",
    year: "1912",
    realityMode: "realised_fake",
    presentStatus: "cultual_icon",
    valueType: "historical_value"
    },
    {
    id: 32,
    assetBase: "asset/fake_32",
    title: "카디프 거인 Cardiff Giant",
    description: "미국 역사상 가장 유명한 고고학적 사기극 중 하나로, 1869년 뉴욕주 카디프에 있는 우물을 파던 인부들이 발견한 거인의 화석이다. 높이 3.0m, 무게 약 3,000파운드에 달하는 석화된 사람으로 알려졌으나, 이후 진화론에 매료된 담배 가게 주인 헐이 제작한 석고 조각으로 밝혀졌다. 헐은 기독교 공동체가 사물을 너무 쉽게 믿는 경향을 드러내고 거인이 한때 지구를 돌아다녔다는 근본주의적 믿음에 맞서기 위해 사기극을 폭로하려 했다고 자랑스럽게 고백했다. ",
    year: "1869",
    realityMode: "realised_fake",
    presentStatus: "cultual_icon",
    valueType: "historical_value"
    },

    {
    id: 33,
    assetBase: "asset/fake_33",
    title: "수정 해골 Crystal skull",
    description: "미첼 헤지스에 의해 발견되었다고 알려진 유백색의 석영으로 만든 인간의 두개골로, 당시에는 고대 마야 문명에서 제작된 오파츠(OOPARTS)로 간주되었다. 특히 13개의 수정 해골이 모이면 '인류의 기원, 목적, 운명에 관한 정보, 그리고 생명과 인류의 수수께끼에 대한 해답'을 알 수 있으며 세계를 구원하게 된다는 아메리카 원주민의 전설 이야기와 함께 알려지면서 화제가 되었으나, 이후 19세기에 정교하게 제작된 예술품으로 알려졌다.",
    year: "1924",
    realityMode: "realised_fake",
    presentStatus: "cultual_icon",
    valueType: "aesthetic_value"
    },

    {
    id: 34,
    assetBase: "asset/fake_34",
    title: "옴팍스 스파툴로이데스 Ompax spatuloides",
    description: "1872년 호주에서 발견된 가짜 물고기로, 독성이 있다고 알려져 있으며 1930년대까지 호주 물고기 목록에서 찾아볼 수 있었습니다. 그러나 이 물고기는 퀸즐랜드 주 게인다 스테이션의 사람들이 숭어의 몸통, 장어의 꼬리, 오리너구리 또는 바늘치의 머리를 조합하여 만든 장난이었다.",
    year: "1827",
    realityMode: "spent_fake",
    presentStatus: "discarded_fake",
    valueType: "historical_value"
    },

    {
    id: 35,
    assetBase: "asset/fake_35",
    title: "거대한 달 사기극 Great Moon Hoax",
    description: "거대한 달 사기극은 1835년 8월 25일부터 뉴욕 신문인 The Sun 에 게재된 6개의 기사 시리즈로, 달에서 생명체와 문명을 발견했다는 주장을 담고 있다. 이후 존 허셜 경과 그의 가상의 동료 앤드류 그랜트의 거짓말로 밝혀졌다. 이 기사들은 들소, 외뿔 염소, 미니 얼룩말, 유니콘, 꼬리 없는 두 발로 걷는 비버, 그리고 사원을 지은 박쥐 와 같은 날개 달린 인간형 생명체인 \"베스페르틸리오-호모\"를 포함하여 달에 있는 동물들을 묘사했으며, 나무와 바다 등 달의 환경도 묘사했다. 이러한 발견은 \"완전히 새로운 원리의 거대한 망원경\"에 의해 이루어졌다고 주장했다.",
    year: "1835",
    realityMode: "spent_fake",
    presentStatus: "discarded_fake",
    valueType: "aesthetic_value"
    },

    {
    id: 36,
    assetBase: "asset/fake_36",
    title: "풍선 사기극 The Balloon-Hoax",
    description: "「풍선 사기극」은 미국 작가 에드거 앨런 포가 1844년 뉴욕의 신문 《더 선》에 처음 발표한 신문 기사를 모아놓은 선집으로, 원래 기사들은 실화로 보도되었던다. 이 기사는 유럽의 풍선 조종사 몽크 메이슨이 75시간 동안 대서양을 가로지르는 가벼운 풍선 여행에 대한 상세하고 매우 그럴듯한 설명을 담고 있었다. 또한 풍선의 도표와 사양도 함께 실렸다. 그러나 나중에 조작으로 밝혀지면서 이틀 만에 기사는 철회되었다.",
    year: "1884",
    realityMode: "realised_fake",
    presentStatus: "cultual_icon",
    valueType: "aesthetic_value"
    },

    {
    id: 37,
    assetBase: "asset/fake_37",
    title: "골프발리아 암부스타 Golfballia ambusta",
    description: "런던 큐 가든 에 표본이 보관되어 있는 것으로 알려진 균류의 한 종류로, 생물이 아니라 불에 탄 골프공이다. 1952년 한 익명의 제보자가 불에 탄 골프공을 균류학자들에게 제출했으며, 학자들은 Scleroderma citrinum 표본이라고 생각하고 런던 큐 가든 의 균류관에 보관했다 . 1962년, 큐 왕립 식물원 의 균류학 책임자 였던 RWG 데니스 는 이를 새로운 균류 종으로 기술했는데, 이는 아마도 당시 균류로 간주될 수 있는 기준에 대한 이의를 제기하기 위함으로 추정된다.",
    year: "1952",
    realityMode: "realised_fake",
    presentStatus: "theoretical_model",
    valueType: "conceptual_value"
    },

    {
    id: 38,
    assetBase: "asset/fake_38",
    title: "털복숭이 송어 furry trout",
    description: "미국과 아이슬란드 민속에 등장하는 전설적인 생물로, 체온을 유지하기 위해 두꺼운 털 가죽을 만들어냈다는 전설이 있다. 털 달린 물고기에 대한 가장 오래된 기록은1929년 미국의 JH 히켄이 몬태나 야생동물 잡지에 기고한 글이다. 로스 C. 조브가 제작한 박제된 털 달린 송어는 스코틀랜드 왕립 박물관에 소장되어 있는데 , 흰 토끼털이 교묘하게 붙어 있는 송어이다.",
    year: "17C",
    realityMode: "spent_fake",
    presentStatus: "discarded_fake",
    valueType: "folkloric_value"
    },

    {
    id: 39,
    assetBase: "asset/fake_39",
    title: "날아다니는 펭귄 사기극 Flying penguin hoax",
    description: "2008년 만우절 장난으로 BBC에서 제작한 가상의 다큐멘터리 \"진화의 기적\" 속 등장하는 날아다니는 펭귄이다. 이 영화는 찰스 다윈의 진화론에 대한 설득력 있는 증거로 광고되었다. ",
    year: "2008",
    realityMode: "spent_fake",
    presentStatus: "discarded_fake",
    valueType: "aesthetic_value"
    },

    {
    id: 40,
    assetBase: "asset/fake_40",
    title: "스파게티 나무 사기극 Spaghetti-tree hoax",
    description: "1957년 만우절에 BBC 시사 프로그램 파노라마에서 방송된 3분짜리 사기극 보도로, 스위스 남부의 한 가족이 \"스파게티 나무\"에서 스파게티를 수확하는 모습을 보여주는 것처럼 꾸민 페이크 다큐멘터리이다. 이 보도가 방송될 당시 스파게티는 영국에서 비교적 생소한 음식이었기 때문에, 방송 후 많은 시청자들이 BBC에 연락하여 스파게티 나무를 직접 키우는 방법에 대한 조언을 구했다. 수십 년 후, CNN은 이 방송을 \"평판 좋은 뉴스 기관이 저지른 가장 큰 사기극\"이라고 불렀다.",
    year: "1957",
    realityMode: "spent_fake",
    presentStatus: "discarded_fake",
    valueType: "aesthetic_value"
    },
    {
    id: 41,
    assetBase: "asset/fake_41",
    title: "레닌은 버섯이었다. Lenin was a mushroom",
    description: "1991년 5월 17일 레닌그라드 텔레비전 에서 처음 방송된, 소련 음악가 세르게이 쿠료킨과 기자 세르게이 숄로 호프가 제작한 영향력 있는 텔레비전 사기극아다. 이 사기극은 텔레비전 프로그램 '피아토예 콜레소(다섯 번째 바퀴)' 의 인터뷰 형식으로 진행되었다. 인터뷰에서 쿠료킨은 역사학자를 사칭하며, 블라디미르 레닌이 환각 버섯을 다량 섭취하여 버섯과 전파로 변신했다는 주장을 펼쳤다 .",
    year: "1991",
    realityMode: "realised_fake",
    presentStatus: "cultual_icon",
    valueType: "aesthetic_value"
    },

    {
    id: 42,
    assetBase: "asset/fake_42",
    title: "태평양 북서부 나무문어 Pacific Northwest tree octopus",
    description: "1998년에 Lyle Zapato라는 필명을 사용하는 유머 작가가 만든 사기 웹사이트이다. 태평양 북서부 나무 문어 웹사이트는 만들어진 이후로 학교의 인터넷 활용 능력 수업에서 흔히 언급되었으며, 온라인 정보 출처에 대한 어린이의 순진함을 보여주는 여러 연구에 사용되었다. 2018년에 미국 의회 도서관의 웹 아카이브의 초기 컬렉션을 구성하는 30개 웹사이트 중 하나로 선정되었다.",
    year: "1998",
    realityMode: "realised_fake",
    presentStatus: "cultual_icon",
    valueType: "educational_value"
    },

    {
    id: 43,
    assetBase: "asset/fake_43",
    title: "드롭 베어 drop bear",
    description: "현대 오스트레일리아 민간전승에 등장하는 허구의 동물로, 코알라의 육식성 포식자 버전이다. 코알라가 일반적으로 온순한 초식 동물인 반면, 드롭 베어는 비정상적으로 크고 사나운 유대류로 묘사되며, 나무 꼭대기에 서식하면서 아래를 지나가는 사람들 또는 다른 먹잇감을 위에서 머리 위로 떨어져 공격한다고 한다. 오스트레일리안 박물관의 웹사이트에는 다른 실제 종들의 항목과 유사한 진지한 어조로 작성된 드롭 베어에 대한 항목이 포함되어 있으며, 박물관 내에 작은 전시물을 설치하여 \"실제 드롭 베어와 관련이 있을 수도, 없을 수도 있는\" 유물들을 전시했다. 원래 사기극으로 시작되었지만 학자들은 후기 플라이스토세의 육식성 유대류인 Thylacoleo와 유사점을 발견했다.",
    year: "Unknown",
    realityMode: "realised_fake",
    presentStatus: "cultual_icon",
    valueType: "folkloric_value"
    },

    {
    id: 44,
    assetBase: "asset/fake_44",
    title: "에니그마렐 Enigmarelle",
    description: "가짜 인간형 자동인형으로, 실제로는 내부에 숨어있는 사람이 조종했다. 그러나 정확한 작동 방식은 알려지지 않았다. 1905년경 미국과 유럽에서 과학 기술적 호기심의 대상으로, 미국에서 처음 선보인 후 유럽 일부 지역의 보드빌 극장과 서커스에서 공연되었습니다. 공연 기획자인 미국인 프레더릭 J. 아일랜드는 자신을 자동인형의 제작자이자 소유자라고 소개했다. 조종자는 두 다리를 절단한 알바 W. 루트라는 예명으로 활동했던 공연가로 추정되며, 의족을 사용하여 자전거 곡예 공연도 했다. ",
    year: "1905",
    realityMode: "spent_fake",
    presentStatus: "discarded_fake",
    valueType: "aesthetic_value"
    },

    {
    id: 45,
    assetBase: "asset/fake_45",
    title: "칼라베라스 해골 Calaveras Skull",
    description: "1866년 캘리포니아주 칼라베라스 카운티에서 광부들이 발견한 인간 두개골로, 플라이오세 시대(최소 200만 년 전)에 인류가 북아메리카에 살았다는 증거로 제시되었으며, 인류, 마스토돈, 매머드가 공존했다는 주장을 뒷받침하는 데 사용되었다. 이 두개골은 나중에 조작 된 것으로 밝혀졌지만, 현재 플라이스토세 시대(최소 1만 2천년 전)에 인류, 마스토돈 , 매머드가 실제로 공존했음이 알려져 있다. 공교롭게도 '칼라베라스'는 스페인어로 두개골을 뜻한다.",
    year: "1866",
    realityMode: "spent_fake",
    presentStatus: "discarded_fake",
    valueType: "historical_value"
    },

    {
    id: 46,
    assetBase: "asset/fake_46",
    title: "튀르크 기계 Mechanical Turk",
    description: "1770년에 처음 공개된 체스 게임 기계로, 마치 스스로 강력한 체스 게임을 두는 것처럼 보이지만 실제로는 기계 하단 내부에 숨어 있는 체스 전문가가 레버와 자석을 이용해 체스 말을 움직이는 장치였다. 이 기계는 84년 동안 순회 전시되었으며, 1854년 화재로 소실될 때까지 간헐적으로 전시를 이어갔다. 1857년 소유자의 아들이 발표한 논문을 통해, 최초로 이 기계의 작동 원리에 대해 완전한 설명이 이루어졌다. 이 기계는 오랫동안 사기극으로 의심받았지만, 기계가 존재했던 당시에는 정확하게 설명된 적이 없었다. ",
    year: "1770",
    realityMode: "realised_fake",
    presentStatus: "cultual_icon",
    valueType: "historical_value"
    },

    {
    id: 47,
    assetBase: "asset/fake_47",
    title: "스크바데르 Skvader",
    description: "1918년 박제사 루돌프 그란베리가 제작한 스웨덴의 가상 생물로, 순스발의 노라 베르게트 박물관에 영구 전시되어 있다. 유럽토끼의 머리, 앞다리, 뒷다리와 암컷 뇌조의 등, 날개, 꼬리를 조합하여 만든 가짜 박제이다. 이후 이 단어는 서로 다른 두 요소가 결합된 것을 의미하는 일반적인 의미를 갖게 되었으며, 종종 그러한 결합이 그다지 바람직하지 못하다는 느낌을 전달한다.",
    year: "1918",
    realityMode: "realised_fake",
    presentStatus: "theoretical_model",
    valueType: "conceptual_value"
    },

    {
    id: 48,
    assetBase: "asset/fake_48",
    title: "빌쥐프 안내 책자 Villejuif leaflet",
    description: "1976년 2월 프랑스에서 처음 발견되었으며, 타자기로 작성된 한 장짜리 전단지 형태였다. 10년 동안 유럽 전역에 걸쳐 전단지나 소책자 형태로 수제 복사본이 퍼졌는데, 이 전단지에는 구연산 외에도 16가지 다른 화학 물질이 위험한 독소 및 발암 물질로 분류되어 목록에 포함되었다. 이 타자기로 작성된 목록의 원작자는 끝내 발견되지 않았으며, 이 전단지는 통제할 수 없는 확산으로 약 700만 명에게 영향을 미쳤다. 전단지의 이름은 빌쥐프의 병원에서 생산되었다는 거짓 주장에서 유래되었다 . ",
    year: "1976",
    realityMode: "spent_fake",
    presentStatus: "cautionary_case",
    valueType: "educational_value"
    },

    {
    id: 49,
    assetBase: "asset/fake_49",
    title: "FDC 윌라드 FDC Willard",
    description: "체스터라는 이름의 샴 고양이가 쓴 필명으로 , 그의 주인인 JH 헤더링턴이 물리학 저널에 발표한 여러 논문에 사용되었다. 체스터가 단독 저자로 등재된 적도 있다. 1975년, 미시간 주립대학교의 미국 물리학자이자 수학자인 JH 헤더링턴은 자신의 논문에서 1인칭 복수형인 \"우리\"를 사용했는데, 동료로부터 저널에서는 단독 저자의 논문 제출 시 이러한 형식이 거부된다는 지적을 받았다. 해더링턴은 논문을 단수형으로 다시 입력하거나 공동 저자를 추가하는 대신 자신의 고양이를 공동 저자로 등록하는 새로운 방식을 고안하기로 결정했다. 집고양이 의 학명인 Felis domesticus 를 기반으로 두 개의 이름을 더 만들고 그에 따라 FDC로 약칭해서 이름을 만들고 공동 저자로 등록했으며, 그의 논문은 Physical Review에 게재 승인을 받아 35호(1975년 11월)에 출판되었다.\n",
    year: "1975",
    realityMode: "realised_fake",
    presentStatus: "theoretical_model",
    valueType: "conceptual_value"
    },

    {
    id: 50,
    assetBase: "asset/fake_50",
    title: "베링거 가짜 화석 Beringer's Lying Stones",
    description: "1725년 뷔르츠부르크 대학교 의과대학 학장이었던 요한 바르톨로메우스 아담 베링거가 발견한 다양한 가상의 동물 모양으로 조각된 석회암 조각으로, 사기꾼들이 베링거의 명예를 실추시키기 위해 의도적으로 제작한 위조 화석이다. 베링거는 이것들이 화석이라고 믿었고, 그중 일부에 히브리어로 신의 이름이 새겨져 있었기 때문에 신성한 기원을 가졌을지도 모른다고 제안했다. 당시 과학계는 화석이 실제로 무엇인지 확신하지 못했고, 화석이 한때 살아있었던 유기체의 석화된 유해라는 개념은 여러 경쟁 가설 중 하나에 불과했다.",
    year: "1725",
    realityMode: "spent_fake",
    presentStatus: "discarded_fake",
    valueType: "educational_value"
    },

    {
    id: 51,
    assetBase: "asset/fake_51",
    title: "클라우드 버스터 Cloudbuster",
    description: "오스트리아 정신분석학자 빌헬름 라이히가 설계한 장치로, 라이히는 대기에 존재하는 \"오르곤 에너지\" 라고 부르는 것을 조작하여 비를 내리게 할 수 있다고 주장했다. 피뢰침과 유사한 방식으로 동작하도록 설계되었으며, 하늘의 특정 위치에 초점을 맞추고 오르곤을 흡수한다고 추정되는 물질에 접지하면 대기에서 오르곤 에너지를 끌어내어 구름과 비를 형성할 수 있다고 믿었다. 따라서 라이히는 클라우드버스터를 사용하여 수십 번의 실험을 수행했으며, 이 연구를 \"우주 오르곤 공학\"이라고 불렀다. 그러나 실제로 기계가 작동하여 비를 내리게 하는 것과 같은 눈에 띄는 날씨 변화를 일으킨다는 것이 확인된 사례는 없다. 최근에는 이를 현대적으로 재해석하여 켐버스터 , 오르곤 캐논 또는 아카샤 필라라는 이름으로 판매하고 있다. ",
    year: "1951",
    realityMode: "realised_fake",
    presentStatus: "theoretical_model",
    valueType: "conceptual_value"
    },

    {
    id: 52,
    assetBase: "asset/fake_52",
    title: "라이프 기계 Rife Machines",
    description: "1922년 미국의 발명가이자 고배율 타임랩스 시네마이크로그래피의 초기 전문가인 로얄 라이프가 개발한 암 치료 장치이다. 라이프는 자신의 기계가 '빔 광선'을 통해 미생물 병원균을 파괴할 수 있다고 주장했으며, 특정 예외를 제외하고 살아있는 조직에서 질병 유기체를 비활성화할 수 있다고 설명했기 때문에 사실상 암을 치료할 수 있다는 것으로 이해되었다. 라이프가 사망한 이후, 라이프의 이름을 딴 다양한 장치들이 암이나 에이즈와 같은 여러 질병의 치료제로 판매되었으며, 미국에서 여러 건의 의료 사기 사건에서 '라이프 기기' 판매업자들이 의료 사기 혐의로 유죄 판결을 받았다. ",
    year: "1922",
    realityMode: "spent_fake",
    presentStatus: "cautionary_case",
    valueType: "educational_value"
    },

    {
    id: 53,
    assetBase: "asset/fake_53",
    title: "에테르 생성기 Etheric generator",
    description: "1874년 공개된 필라델피아 출신의 미국 사기꾼 이자 자칭 발명가인 존 에른스트 워렐 킬리가 발명한 기계로, 킬리는 이 기계가 차가운 물과 공기를 활용해 증기보다 더 강력하고 훨씬 더 경제적인 증기를 만든다고 주장했다. 그러나 1899년 진행된 필라델피아 프레스 조사에서 작업장 바닥과 벽 안에서 숨어있던 소음이 없는 수력 모터에 연결된 기계 벨트와 3톤의 압축 공기 구체가 숨겨진 고압 튜브 등이 발견되면서 사기임이 드러났다. ",
    year: "1874",
    realityMode: "spent_fake",
    presentStatus: "discarded_fake",
    valueType: "historical_value"
    },

    {
    id: 54,
    assetBase: "asset/fake_54",
    title: "포니아토프스키 보석 Poniatowski gems",
    description: "폴란드의 부유한 귀족이었던 스타니 스와프 포니아토프스키가 의뢰하여 제작한 2,600점 이상의 조각 보석으로, 보석들을 진품 고전 예술품으로 위장하기 위해 제작했다. 그러나 1833년 그가 사망할 무렵, 학자들은 이 보석들이 19세기 초 신고전주의 양식의 위조품이라는 사실을 점차 밝혀내고 있었다. 포니아토프스키 컬렉션의 보석들은 1839년 진품 골동품으로 경매에 부쳐졌지만, 경매는 실패로 끝났고, 이 논란은 이후 수년간 조각 보석에 대한 수집가들의 관심을 시들게 했다. 보석들은 흩어졌고, 많은 보석들이 분실되거나 행방불명되었다. 오늘날 이 보석들은 신고전주의 보석 조각의 뛰어난 사례로 높이 평가받고 있다. ",
    year: "19C",
    realityMode: "realised_fake",
    presentStatus: "cultual_icon",
    valueType: "aesthetic_value"
    },

    {
    id: 55,
    assetBase: "asset/fake_55",
    title: "사이타페른의 티아라 Tiara of Saitaferne",
    description: "1896년 루브르 박물관이 입수한 금박 티아라로, 이후 제작자인 이스라엘 루초 모프스키에 의해 가짜임이 밝혀졌다. 당시 이 왕관은 스키타이 왕 사이타파르네스가 소유했던 것으로 여겨졌으며, 왕관에는 그리스어로 \"올비아의 의회와 시민들은 위대하고 무적의 왕 사이타파르네스를 기립니다.\"라는 글귀가 새겨져 있었다. 따라서 루브르 박물관의 전문가들은 이 왕관이 기원전 3세기 말이나 기원전 2세기 초 사이타파르네스가 그리스 식민지 올비아를 포위한 후 값비싼 선물을 받고 나서 도시를 평화롭게 떠났다는 사건을 뒷받침한다고 보았다.",
    year: "1896",
    realityMode: "spent_fake",
    presentStatus: "discarded_fake",
    valueType: "aesthetic_value"
    },

    {
    id: 56,
    assetBase: "asset/fake_56",
    title: "언 말리 사건 Ern Malley affair",
    description: "1943년 보수적인 작가 제임스 맥컬리와 해롤드 스튜어트가 창조한 가상의 모더니즘 시인과 작품으로, 멜버른 하이데 출신의 시인 맥스 해리스와 예술 후원자 존 리드가 공동 편집한 동명의 저널을 중심으로 한 모더니즘 예술 및 문학 운동인 앵그리 펭귄스를 속이기 위해 단 하루 만에 만들어졌다. 그들은 경멸하던 모더니즘 시를 모방하여, 일부러 형편없는 시라고 생각되는 시 16편을 만들어 언 말리의 살아남은 여동생 에델이라는 가명으로 앵그리 펭귄스 측에 보냈다. 그러나 1970년대 이후, 사기극으로 알려졌음에도 불구하고 언 말리의 시는 그 자체로 초현실주의 시의 성공적인 사례로 인정받게 되었고, 존 애쉬베리 , 케네스 코흐 , 로버트 휴즈 와 같은 시인과 비평가들의 찬사를 받았다. 또한 피터 캐리, 시드니 놀란과 같은 호주의 주요 작가와 예술가들의 작품에 영감을 주었으며, 미국의 시인이자 선집 편찬자인 데이비드 레만은 언 말리를 \"20세기 최고의 문학적 사기극\"이라고 불렀다.",
    year: "1943",
    realityMode: "realised_fake",
    presentStatus: "cultual_icon",
    valueType: "aesthetic_value"
    },

    {
    id: 57,
    assetBase: "asset/fake_57",
    title: "애플턴의 미국 인물 백과사전 Appletons' Cyclopædia of American Biography",
    description: "1887년에서 1889년 사이에 출판된 백과사전으로, 신대륙 역사에 관련된 저명한 인물들의 전기를 모아 놓은 6권짜리 책이다. 약 60개의 전면 초상화와 약 1,500개의 작은 삽화 초상화(서명 사본 포함), 그리고 역사적으로 유명한 출생지, 거주지, 기념물, 무덤의 수백 개의 그림으로 구성되어 있다. 수십 년 동안 권위 있는 것으로 널리 받아들여졌으나, 이후 존재하지도 않는 수십 명의 인물에 대한 전기가 포함되어 있다는 사실이 드러났다.",
    year: "1887-1889",
    realityMode: "spent_fake",
    presentStatus: "discarded_fake",
    valueType: "educational_value"
    },

    {
    id: 58,
    assetBase: "asset/fake_58",
    title: "론리걸15 lonelygirl15",
    description: "2006년 6월 16일부터 2008년 8월 1일까지 유튜브에서 공개된 미국의 SF 스릴러 웹 시리즈로, 마일스 베켓, 메쉬 플린더스, 그렉 굿프리드, 아만다 굿프리드가 공동 제작했다. 홈스쿨링을 받는 16세 소녀 브리 에이버리가 부모님의 의문의 종교가 '더 오더(The Order)'라는 혈액 수확 조직이라는 것을 알게 된 후, 친구 다니엘과 함께 도망치는 과정을 담고 있다. 더 오더는 브리의 \"특성 양성\" 혈액을 원하고 있다는 설정으로, 시리즈는 브리의 방에서만 녹화된 비디오 블로그(vlog) 형식으로 진행된다. 2006년 9월에 구독자들에 의해 이 시리즈가 가짜임이 드러났으나, 시청률은 계속 증가하여 2007년에 최고 시청률을 기록했다. 브리는 유튜브 최초의 바이럴 스타로 자주 불리며, 론리걸15는 웹 콘텐츠의 진위성에 의문을 제기하고 브이로그를 개척한 것으로 유명해졌다. 따라서 방영 기간 동안 다양한 어워드 후보에 노미네이트되었다.\n\n",
    year: "2006-2008",
    realityMode: "realised_fake",
    presentStatus: "theoretical_model",
    valueType: "conceptual_value"
    },

    {
    id: 59,
    assetBase: "asset/fake_59",
    title: "국제 우주 정거장 대마초 실험 조작설 International Space Station cannabis experiment hoax",
    description: "캐나다 우주비행사 크리스 해드필드가 국제 우주 정거장에서 대마초를 피워 취하는 실험을 시연하기 위해 대마초가 가득 든 큰 비닐봉지를 들고 있는 사진으로, 부활절 달걀이 들어있는 봉투에 대마초를 합성한 사진이다. ",
    year: "2018",
    realityMode: "spent_fake",
    presentStatus: "discarded_fake",
    valueType: "educational_value"
    },

    {
    id: 60,
    assetBase: "asset/fake_60",
    title: "마리오 파티 DS 불법 복제 방지 화면 Mario Party DS anti-piracy screen",
    description: "2020년 10월 유튜버 Joey Perleoni는 가상의 마리오 파티 DS 불법 복제 방지 화면을 제작하여 업로드했다. 그러나 실제로 마리오 파티 DS에는 특별한 불법 복제 방지 메시지가 없다. 이후 이 영상은 여러 인터넷 밈을 불러일으켰을 뿐만 아니라 다른 사람들이 자신만의 가짜 불법 복제 방지 메시지를 만들어 업로드하는 온라인 트렌드를 만들었다.",
    year: "2020",
    realityMode: "realised_fake",
    presentStatus: "cultual_icon",
    valueType: "aesthetic_value"
    },

    {
    id: 61,
    assetBase: "asset/fake_61",
    title: "꿈 속의 남자 Dream Man",
    description: "2008년 이탈리아 사회학자이자 마케터인 안드레아 나텔라가 만든 개념 예술 프로젝트이자 사기극으로, \"이 남자를 꿈꿔본 적이 있나요?\"라는 웹사이트를 만들어 2006년부터 전 세계 수많은 사람들의 꿈에 나타났다고 알려진 신비로운 인물에 대해 설명했다. 이후 전 세계 여러 도시 에서 8,000명 이상의 사람들 이 잠자는 동안 그 남자를 보았다고 인정했다고 주장했으며, 여러 매체를 통해 소개되었다.",
    year: "2008",
    realityMode: "realised_fake",
    presentStatus: "cultual_icon",
    valueType: "aesthetic_value"
    },

    {
    id: 62,
    assetBase: "asset/fake_62",
    title: "죽은 요정 사기극 Dead fairy hoax",
    description: "2007년 4월 1일 며칠 전, 런던 출신의 마술 소품 디자이너인 댄 베인스는 자신의 웹사이트에 게시한 요정의 유해 이미지로, 실제로는 정교하게 제작한 모형이었다. 만우절이 다가오고 있었음에도 불구하고, 웹사이트는 요정을 믿는 많은 사람들로부터 피드백을 받아 하루 만에 20,000건 이상의 조회수를 기록했다. 4월 1일 베인스는 웹사이트에 글을 추가하여 독자들이 자신의 이야기에 관심을 보여준 것에 감사를 표하고, 요정 시체가 가짜임을 인정했다. 이후 베인스는 미라가 된 요정을 eBay에 올렸고, 이 모형은 거의 40건의 입찰을 받았다. 경매 마감 시 최고가는 미국의 한 개인 미술품 수집가가 제시했으며, 요정은 280파운드에 판매되었다. 베인스는 비슷한 요정의 유해를 발견했다고 주장하는 사람들의 댓글을 포함하여 수백 통의 답장을 받았다. ",
    year: "2007",
    realityMode: "spent_fake",
    presentStatus: "discarded_fake",
    valueType: "aesthetic_value"
    },

    {
    id: 63,
    assetBase: "asset/fake_63",
    title: "스펙트라 Spectra",
    description: "1916년에 미국의 작가 Witter Bynner (필명 \"Emanuel Morgan\")와 Arthur Davison Ficke (필명 \"Anne Knish\")가 이미지즘 시 운동을 풍자하기 위해 만든 시집이다. 스펙트라는 스펙트라라는 학파의 방법론을 간략하게 설명하는 선언문으로 시작하며, 각 시들은 제목보다는 작품 번호로 구분되며 대부분 우스꽝스러운 분위기를 띠고 있다. 처음에는 이 시집이 단순한 농담으로 의도되었기 때문에 작가들은 작품의 우스꽝스러움이 드러날 것이라고 생각했으나, 실제로 2년 동안 합법적인 시 운동으로 받아들여졌다. 두 작가는 모두 당대의 뛰어난 시인이었으나, 스펙트라 시집이 그들의 가장 유명한 작품 중 하나가 되면서 진지한 작품에 역효과를 주었다. 그럼에도 불구하고 Ficke는 Knish라는 필명으로 글을 쓰면서 작문에 대해 많은 것을 배웠다고 말했으며, 실제로 그것이 그의 후기 작품에 영향을 미쳤다고 덧붙였다. ",
    year: "1916",
    realityMode: "realised_fake",
    presentStatus: "theoretical_model",
    valueType: "conceptual_value"
    },

    {
    id: 64,
    assetBase: "asset/fake_64",
    title: "재칼로프 Jackalope",
    description: "북미 민속 설화에 등장하는 신화적인 동물로, 영양의 뿔을 가진 토끼로 묘사된다. 재칼로프라는 단어는 토끼(jackrabbit)와 영양(antelope)을 합성한 것으로, 재칼로프 박제에는 주로 토끼의 머리와 사슴뿔이 사용된다. 최초의 재칼로프 박제는 1932년 더글라스 해릭과 그의 형제에 의해 제작되었다.",
    year: "1932",
    realityMode: "realised_fake",
    presentStatus: "cultual_icon",
    valueType: "folkloric_value"
    },

    {
    id: 65,
    assetBase: "asset/fake_65",
    title: "혼 문서 Horn Papers",
    description: "1765년부터 1795년까지 미국 북동부 지역과 관련된 위조된 역사 기록으로 구성된 계보로, 캔자스주 토피카 출신의 윌리엄 프랭클린 혼이 1933년에서 1936년 사이에 출판했다. 그는 그의 고조할아버지인 제이콥 혼과 혼 가문의 다른 구성원들의 문서를 필사한 것처럼 위장했으며, 1932년 출판사의 편집자들에게 보낸 편지에서 혼 문서를 처음으로 공개했다. 문서의 내용은 일기, 버지니아 법원 기록, 지도 등을 포함하여 일반 사람들의 삶에 대한 세부적인 묘사로 구성되어 있다. 혼 문서는 유명한 역사적 인물에 대한 정보를 제공하고 기존 역사 지식의 공백을 메워주는 것처럼 보였기 때문에, 일부 명백한 모순에도 불구하고 열렬한 환영을 받았다.",
    year: "1932",
    realityMode: "spent_fake",
    presentStatus: "discarded_fake",
    valueType: "educational_value"
    },

    {
    id: 66,
    assetBase: "asset/fake_66",
    title: "미스터리 서클 Mystery Circle",
    description: "일반적으로 밭이나 논의 작물을 일정한 방향으로 눕혀서 생성된 패턴으로, 일부 비주류 이론가들은 미스터리한 자연적 원인이나 외계 기원을 주장하지만, 그러한 설명에 대한 과학적 증거는 없으며 모든 미스터리 서클은 인간의 소행으로 밝혀졌다. 1991년, Doug Bower와 Dave Chorley라는 두 명의 사기꾼은 언론에 널리 보도된 인터뷰에서 영국 전역에 200개 이상의 미스터리 서클을 만들었다고 주장했다.",
    year: "Unknown",
    realityMode: "realised_fake",
    presentStatus: "cultual_icon",
    valueType: "folkloric_value"
    },

    {
    id: 67,
    assetBase: "asset/fake_67",
    title: "집하마 House hippo",
    description: "가상의 하마 종으로, 1999년 5월 Concerned Children's Advertisers(Companies Committed to Kids에서 제작한 가상의 광고업체)에서 제작한 캐나다 텔레비전 공익 광고의 주제이다. 이 광고는 캐나다 전역과 미국 동부에서 발견되는 가상의 동물인 북미 집 하마의 행동을 보여주는 영상과 설명을 담고 있다. 이 동물은 하루에 16시간을 자고 건포도, 감자칩, 토스트에 바른 땅콩버터 부스러기를 즐겨 먹는다고 묘사된다. 광고에서는 하마가 부엌에서 먹이를 찾고, 집고양이와 마주치고, 잃어버린 장갑으로 둥지를 만들어 잠을 자는 모습이 나온다. 이 광고의 제작 의도는 텔레비전 광고에서 보는 내용에 대해 비판적 사고를 하도록 어린이들을 교육해야하며, 텔레비전에서 보고 있는 내용에 대해 생각하고 질문하는 것이 좋다는 것을 상기시키는 것이다.",
    year: "1999",
    realityMode: "spent_fake",
    presentStatus: "discarded_fake",
    valueType: "educational_value"
    },

    {
    id: 68,
    assetBase: "asset/fake_68",
    title: "관광객 남자 Tourist guy",
    description: "2001년 9·11 테러 당시 세계무역센터 전망대에 있는 관광객의 사진을 디지털 방식으로 조작하여 배경에 비행기가 충돌하려는 것처럼 보이게 만든 조작 사진으로, 사진 속 남자는 1997년에 사진을 찍은 헝가리인 페테르 구즐리로 밝혀졌다. 9/11 직후에 이 이미지는 스팸 이메일을 통해 인터넷에 퍼져나갔다. 이메일에서는 이 사진이 세계 무역 센터 잔해에서 수거한 카메라 내부에서 발견되었다고 주장하며, 연방 수사국(FBI)이 증거를 위해 이 사진을 현상하여 최근 온라인에 공개했다고 주장했다. 나중에 구즐리는 친구들을 위해 장난으로 사진을 편집했을 뿐 인터넷에 올릴 의도는 없었다고 말했다. 이후 사람들이 같은 관광객을 다른 사진에 합성하기 시작하며, 대표적인 인터넷 밈이 되었다.",
    year: "2001",
    realityMode: "realised_fake",
    presentStatus: "cultual_icon",
    valueType: "folkloric_value"
    },

    {
    id: 69,
    assetBase: "asset/fake_69",
    title: "네스호 괴물 Loch Ness Monster",
    description: "스코틀랜드 고원의 네스호에 산다고 전해지는 스코틀랜드 민속의 신화적 생물로, 흔히 네시(Nessie)라고도 불린다. 이 생물은 크고 목이 길며 물 위로 하나 이상의 혹이 솟아 있는 것으로 묘사된다. 1933년 전 세계적으로 알려진 이후, 이 생물에 대한 대중의 관심과 믿음은 다양하게 나타났다. 논란이 있는 사진과 음파 탐지기 판독 결과 몇 건이 존재의 증거로 제시되었다.  ",
    year: "1933",
    realityMode: "realised_fake",
    presentStatus: "cultual_icon",
    valueType: "folkloric_value"
    },

    {
    id: 70,
    assetBase: "asset/fake_70",
    title: "빌리티스의 노래 The Songs of Bilitis",
    description: "1894년 피에르 루이스가 파리에서 출판한 고대 그리스의 여성 시인 빌리티스의 자전적 사랑과 애욕을 담은 140여 편의 산문시집이다. 루이스는 자신이 고대 그리스어에서 원작 시를 번역했다고 주장했으나, 시들은 루이스 자신이 지은 허구적인 이야기로 밝혀졌다. 그러나 관능미와 세련된 문체, 특히 레즈비언의 성생활을 공감 어린 시선으로 묘사한 점에서 오늘날에도 중요한 문학 작품으로 여겨진다. ",
    year: "1894",
    realityMode: "realised_fake",
    presentStatus: "cultual_icon",
    valueType: "aesthetic_value"
    },

    {
    id: 71,
    assetBase: "asset/fake_71",
    title: "진짜 맥도날드 Seriously McDonalds",
    description: "2011년 6월 미국에서 소셜 미디어를 통해 빠르게 퍼진 사진의 제목으로, 이 사진은 맥도날드가 아프리카계 미국인에게 더 높은 가격 을 부과하는 새로운 정책을 보험 조치로 시행했다는 내용의 가짜 간판을 보여준다. 이 사진은 이미 오래전부터 존재했지만, 2011년 6월 트위터를 중심으로 사람들의 분노와 웃음을 자아내며 빠르게 확산되었다. 맥도날드는 트위터를 통해 해당 사진이 조작된 사진임을 밝혔다.",
    year: "2011",
    realityMode: "spent_fake",
    presentStatus: "discarded_fake",
    valueType: "educational_value"
    },

    {
    id: 72,
    assetBase: "asset/fake_72",
    title: "가상의 마오리족 악기 Zzxjoanw",
    description: "1903년에 작가 Rupert Hughes는 출판한 고전 음악 백과사전인 The Musical Guide에 수록된 가짜 항목으로, 마오리 족의 북이나 피리를 의미하는 단어였다. 사전의 여러 섹션 중 고전 음악 용어에서 발견되는 독일어 , 이탈리아어 및 기타 비영어 단어의 의미를 설명하고 발음을 제공하는 \"용어, 악기 등의 발음 및 정의 사전\" 섹션의 가장 끝에 등장했다. ",
    year: "1903",
    realityMode: "spent_fake",
    presentStatus: "discarded_fake",
    valueType: "educational_value"
    },

    {
    id: 73,
    assetBase: "asset/fake_73",
    title: "딸기맛 퀵 메스 Strawberry Quik meth",
    description: "2007년에 주로 발생했던 가짜 마약 공포로, 마약 판매상들이 메스암페타민을 딸기맛 퀵처럼 위장하기 위해 색소와 향료를 사용하여 어린이들에게 더 매력적으로 보이게 했다는 주장이었다. 하지만 실제로 어린이들이 향이 첨가된 메스암페타민을 복용한 사례는 확인되지 않았다.",
    year: "2007",
    realityMode: "spent_fake",
    presentStatus: "discarded_fake",
    valueType: "educational_value"
    },

    {
    id: 74,
    assetBase: "asset/fake_74",
    title: "CERN 의식 사기극 CERN ritual hoax",
    description: "세계 최대 입자물리학 연구소를 운영하는 정부간 기구인 CERN 부지에서 가짜 오컬트 의식이 행해지는 모습을 담은 파운드 푸티지 비디오로, 2016년 8월부터 인기를 얻기 시작했다. 영상의 내용은 검은 망토를 입은 여러 사람이 힌두교 신 시바의 조각상을 둘러싸고 인신공양을 하는 것처럼 보이는 장면으로 구성되어 있으며, 촬영자가 비명을 지르며 도망치는 장면으로 끝난다. 이는 CERN이 대형 강입자 가속기를 이용하여 지옥으로 가는 포털을 만들거나, 적그리스도를 소환하거나, 우주를 파괴하려 한다는 기존 음모론을 조롱하는 것처럼 보인다. CERN 대변인은 해당 영상이 장난이었고 실제로 아무도 다치지 않았다고 밝혔다.",
    year: "2016",
    realityMode: "spent_fake",
    presentStatus: "discarded_fake",
    valueType: "folkloric_value"
    },

    {
    id: 75,
    assetBase: "asset/fake_75",
    title: "외계인 부검 : 사실인가 허구인가 Alien Autopsy: Fact or Fiction",
    description: "조작된 외계인 부검 장면을 담은 흐릿한 흑백 영상이 포함된 유사 다큐멘터리로, 1995년 영국의 사업가 레이 산틸리가 공개했다. 이 영상은 전 세계 텔레비전 네트워크에서 방영되었으며, 순식간에 센세이션을 일으켰다. 이후 이 프로그램은 완전히 허위로 판명되었다. 영상은 개리 슈필드와 레이 산틸리가 공동으로 제작했으며, 런던의 거실에 지어진 저렴한 세트에서 촬영했다. 예술가이자 조각가인 존 험프리스가 내장 , 양의 뇌, 라즈베리 잼으로 채워진 속이 빈 석고 모형으로 외계인의 신체와 가짜 유물들을 제작했다. 산틸리와 슈필드는 2006년에 영화가 가짜임을 인정했으나, 분실된 진짜 영상에서 영감을 받았다고 계속 주장했다.",
    year: "1995",
    realityMode: "spent_fake",
    presentStatus: "discarded_fake",
    valueType: "historical_value"
    },

    {
    id: 76,
    assetBase: "asset/fake_76",
    title: "성모 마리아가 메시나 주민들에게 보내는 편지 Lettera di Maria Vergine ai Messinesi",
    description: "성모 마리아가 서기 42년 로마 점령하의 유대에서 보냈다고 전해지는 편지의 채색 필사본으로, 17세기 말에 제작된 사본이다. 이 편지는 사도 바울과 메시나의 명사 네 명으로 구성된 사절단이 성지로 파견된 후, 시칠리아 항구 도시 메시나 시민들에게 축복의 메시지로 보낸 것입니다. 성모 마리아의 편지에 얽힌 구전 전통은 11세기까지 거슬러 올라갈 수 있지만, 교회는 이를 상당히 회의적으로 바라보았다. 그럼에도 불구하고, 17세기 중반에 이르러서는 마리아 전설과 메시나 사람들 사이의 연관성이 대중의 상상 속에 확고히 자리 잡았는데, 특히 도시 대성당의 주 제단과 예배당이 편지의 성모 마리아에게 봉헌된 것이 가장 두드러진 계기였다. 성모 마리아 숭배가 확고히 자리 잡기 시작한 지 거의 반세기 후에 제작된 이 필사본은 서기관이 가끔씩 만들어 순례자들과 신도들에게 판매했던 기념품일 가능성이 높다. ",
    year: "1674-1678",
    realityMode: "spent_fake",
    presentStatus: "discarded_fake",
    valueType: "historical_value"
    },

    {
    id: 77,
    assetBase: "asset/fake_77",
    title: "로울리 시집 The Rowley Poems",
    description: "18세기 영국의 천재 시인 토머스 채터턴이 15세기 가상의 사제 토머스 로울리를 내세워 창작한 위조 시집이다. 채터턴은 자신이 중세 시대의 원고를 발견했다고 주장하며, 고어와 중세 스타일을 모방하여 시를 썼다. 위작으로 밝혀졌음에도 천재성을 인정받아 낭만주의 문학의 선구적인 역할을 했으며, 고딕 부흥 운동에 큰 영향을 미쳤다. 이후 토머스 채터턴은 영국 문학사에 천재 시인으로 남았다. ",
    year: "1752-1770",
    realityMode: "realised_fake",
    presentStatus: "cultual_icon",
    valueType: "aesthetic_value"
    },

    {
    id: 78,
    assetBase: "asset/fake_78",
    title: "포르차스 카탈로그 Fortsas Catalogue",
    description: "1840년 벨기에 빈슈에서 유럽 전역의 서점 주인, 지식인, 사서, 희귀 서적 수집가들에게 발송된 카탈로그로 경매에 부쳐질 희귀 서적 컬렉션을 설명하는 내용이었다. 카탈로그의 내용은 단 한 권만 존재하는 희귀 도서를 수집하는 \"장 네포무센 오귀스트 피쇼, 포르차스 백작\"이 1839년 9월 1일 사망했으며, 당시 소유하고 있던 52권의 소장품을 1840년 8월 10일 경매에 부친다는 내용이었다. 약속된 날짜에 수많은 수집가와 지식인들이 책 경매에 참여하기 위해 빈슈에 모였으나, 경매가 열릴 예정이었던 공증 사무소와 사무소가 있다고 알려진 거리는 존재하지 않았다. 빈슈 곳곳에 붙은 공고문에는 마을 공공 도서관이 책들을 인수했기 때문에 경매는 취소되었다고 적혀 있었으나, 빈슈에는 공공 도서관도 없었다. 애초에 포르차스 백작이라는 인물은 존재하지 않았던 인물로, 지식인들에게 정교한 장난을 치는 것을 즐기는 골동품 수집가이자 퇴역 군인인 Renier Hubert Ghislain Chalon이 계획하고 실행한 것임이 밝혀졌다. 아이러니하게도, 샬론이 피해자들에게 보냈던 허구의 특별한 책 목록 원본은 그 자체로 수집가들이 탐내는 희귀품이 되었으며, 이후 여러 차례 재판되었다.",
    year: "1840",
    realityMode: "realised_fake",
    presentStatus: "cultual_icon",
    valueType: "aesthetic_value"
    },

    {
    id: 79,
    assetBase: "asset/fake_79",
    title: "사크로몬테의 납 책 Lead Books of Sacromonte",
    description: "1595년에서 1606년 사이에 스페인 그라나다 구시가지 외곽의 언덕인 사크로몬테 동굴에서 발견된 납 책으로, 현재는 16세기 위조품으로 알려져있다. 이 책들은 불에 탄 유골과 함께 발견되었는데, 납 명판을 통해 이 유골들이 네로 황제 치하에서 순교한 것으로 추정되는 엘비라의 카에킬리우스와 그의 추종자 11명의 유골임을 확인했다. 책에는 로마 시대에 아랍어를 사용하는 기독교인들이 새겼으며, 순교자들의 유골과 함께 안치했다는 내용이 있었다. 현재 거의 모든 학자들은 이 책들이 스페인 종교재판소와 카스티야 왕국의 적대감이 커지는 상황에서 기독교 모리스코인들의 언어, 복장, 관습에 대한 관용을 증진시키기 위해 위조된 것이라고 믿고 있다. ",
    year: "1595-1606",
    realityMode: "spent_fake",
    presentStatus: "discarded_fake",
    valueType: "historical_value"
    },

    {
    id: 80,
    assetBase: "asset/fake_80",
    title: "라르메니우스 헌장 Larmenius Charter",
    description: "1324년 2월 Johannes Marcus Larmenius가 작성한 것으로 추정되는 암호화된 라틴어 원고로, Jacques de Molay가 사망한 후 템플 기사단 의 지도권이 Larmenius에게 이양된 내용을 상세히 기술하고 있다. 이 문서에는 드 몰레 이후 1804년까지 이어지는 템플 기사단의 역대 대사령관 22명의 목록이 첨부되어 있으며, 베르나르-레이몽 파브레-팔라프라 의 이름이 목록의 마지막에 나타난다. 템플 기사단은 가톨릭 신앙의 군사 기사단으로, 서방 기독교에서 가장 중요한 기사단 중 하나였다. ",
    year: "1804",
    realityMode: "spent_fake",
    presentStatus: "discarded_fake",
    valueType: "educational_value"
    },

    {
    id: 81,
    assetBase: "asset/fake_81",
    title: "바나바 복음서 Gospel of Barnabas",
    description: "정경에 속하지 않는 위경 복음서 로 , 중세 후기에 쓰여졌으며 초기 기독교 제자 바나바가 쓴 것으로 알려져 있다. 정경 복음서 네 권을 합친 것과 맞먹는 길이로, 예수의 십자가 처형을 부인하는 것과 같은 이슬람적 요소와 정경 복음서의 이야기들을 함께 담고 있다.",
    year: "13C-15C",
    realityMode: "spent_fake",
    presentStatus: "discarded_fake",
    valueType: "historical_value"
    },

    {
    id: 82,
    assetBase: "asset/fake_82",
    title: "섀드웰 위조품 Shadwell forgeries",
    description: "19세기 중반에 제작된 중세 납 및 납 합금 유물의 위조품으로, 1857년에서 1870년 사이에 윌리엄 빌리 스미스와 찰스 찰리 이튼이 대량으로 제작했다. 스미스와 이튼의 부족한 금속 가공 기술과 문맹으로 인해, 조잡하게 만들어졌음에도 불구하고 일부 저명한 골동품 수집가들은 이 위조품에 속아 넘어갔다. 오늘날 빌리와 찰리는 때때로 나이브 아트나 아웃사이더 예술의 예로 여겨진다. 일부 박물관은 섀드웰 위조품 컬렉션을 소장하고 있으며, 이는 그 자체로 인기 있는 수집품이 되었다. 현대의 가짜 섀드웰 위조품이 유통되고 있다는 주장이 제기되었지만 이것이 사실인지는 확실하지 않다.",
    year: "19C",
    realityMode: "realised_fake",
    presentStatus: "cultual_icon",
    valueType: "aesthetic_value"
    },


];

let remainingItems = [...ARCHIVE];
const stage = document.getElementById("stage");
const hint = document.getElementById("hint");
const panel = document.getElementById("panel");
const closeBtn = document.getElementById("closeBtn");
const STAGE_WIDTH = 10000;
const STAGE_HEIGHT = 7000;

const initialViewport = {
    x: Math.round((window.innerWidth - STAGE_WIDTH) / 2),
    y: Math.round((window.innerHeight - STAGE_HEIGHT) / 2)
};

let zCounter = 20;
const viewport = {
    x: initialViewport.x,
    y: initialViewport.y
};

document.getElementById("centerBtn").addEventListener("click", e => {
    e.stopPropagation();

    viewport.x = initialViewport.x;
    viewport.y = initialViewport.y;

    applyViewport();
    closePanel();
});

function applyViewport() {
    stage.style.transform = `translate(${viewport.x}px, ${viewport.y}px)`;
}

function screenToWorld(clientX, clientY) {
    return {
    x: clientX - viewport.x,
    y: clientY - viewport.y
    };
}

function clampViewport() {
    const minX = window.innerWidth - STAGE_WIDTH;
    const maxX = 0;

    const minY = window.innerHeight - STAGE_HEIGHT;
    const maxY = 0;

    viewport.x = Math.min(maxX, Math.max(minX, viewport.x));
    viewport.y = Math.min(maxY, Math.max(minY, viewport.y));
}

function panBy(dx, dy) {
    viewport.x -= dx;
    viewport.y -= dy;

    clampViewport();
    applyViewport();
    closePanel();
}

applyViewport();

function imageWithFallback(img, base) {
    const exts = [".jpg", ".png", ".jpeg", ".webp"];
    let index = 0;

    function tryNext() {
    if (index >= exts.length) return;
    img.src = base + exts[index];
    index++;
    }

    img.onerror = tryNext;
    tryNext();
}

function randomItem() {
    if (remainingItems.length === 0) {
    remainingItems = [...ARCHIVE];
    }

    const index = Math.floor(Math.random() * remainingItems.length);

    return remainingItems.splice(index, 1)[0];
}

function createArtifact(item = randomItem(), x = null, y = null) {
    hint.classList.add("hidden");

    const el = document.createElement("article");
    el.className = "artifact";

    const size = 200 + Math.random() * 50;
    el.style.setProperty("--size", size + "px");

    const visibleTopLeft = screenToWorld(0, 0);
    const visibleBottomRight = screenToWorld(window.innerWidth, window.innerHeight);

    const px = x ?? Math.floor(
    visibleTopLeft.x + 120 + Math.random() * Math.max(240, visibleBottomRight.x - visibleTopLeft.x - 280)
    );

    const py = y ?? Math.floor(
    visibleTopLeft.y + 120 + Math.random() * Math.max(220, visibleBottomRight.y - visibleTopLeft.y - 260)
    );

    el.style.setProperty("--x", px + "px");
    el.style.setProperty("--y", py + "px");
    el.style.setProperty("--z", ++zCounter);
    el.dataset.id = item.id;

    el.innerHTML = `
    <button class="delete" type="button" aria-label="remove artifact">×</button>
    <figure>
        <img alt="${escapeHtml(item.title)}" draggable="false" />
        <figcaption></figcaption>
    </figure>
    `;

    const img = el.querySelector("img");

    imageWithFallback(img, item.assetBase);

    el.querySelector(".delete").addEventListener("click", e => {
    e.stopPropagation();
    el.remove();

    if (!stage.querySelector(".artifact")) {
        hint.classList.remove("hidden");
    }
    });

    img.addEventListener("mouseenter", () => {
    if (el.dataset.dragged === "true") return;
    openPanel(item, img.currentSrc || img.src, img);
    });

    img.addEventListener("mouseleave", () => {
    closePanel();
    });

    img.addEventListener("click", e => {
    e.stopPropagation();

    if (window.matchMedia("(hover: none)").matches) {
        if (panel.classList.contains("open") && panel.dataset.id === String(item.id)) {
        closePanel();
        } else {
        openPanel(item, img.currentSrc || img.src, img);
        }

        panel.dataset.id = String(item.id);
    }
    });

    makeDraggable(el);
    stage.appendChild(el);

    return el;
}

function makeDraggable(el) {
    let startX;
    let startY;
    let baseX;
    let baseY;

    el.addEventListener("pointerdown", e => {
    if (e.target.closest("button")) return;

    el.setPointerCapture(e.pointerId);
    el.style.setProperty("--z", ++zCounter);
    el.dataset.dragged = "false";

    startX = e.clientX;
    startY = e.clientY;

    const style = getComputedStyle(el);

    baseX = parseFloat(style.getPropertyValue("--x")) || 0;
    baseY = parseFloat(style.getPropertyValue("--y")) || 0;
    });

    el.addEventListener("pointermove", e => {
    if (startX === undefined) return;

    const dx = e.clientX - startX;
    const dy = e.clientY - startY;

    if (Math.abs(dx) + Math.abs(dy) > 4) {
        el.dataset.dragged = "true";
    }

    el.style.setProperty("--x", baseX + dx + "px");
    el.style.setProperty("--y", baseY + dy + "px");
    });

    el.addEventListener("pointerup", e => {
    try {
        el.releasePointerCapture(e.pointerId);
    } catch (err) { }

    startX = undefined;
    startY = undefined;

    setTimeout(() => {
        el.dataset.dragged = "false";
    }, 80);
    });
}

function openPanel(item, imgSrc, anchor) {
    document.getElementById("panelImg").src = imgSrc;
    document.getElementById("panelTitle").textContent = item.title || "Untitled object";
    document.getElementById("panelId").textContent = "FAKE_" + String(item.id).padStart(2, "0");
    document.getElementById("panelYear").textContent = item.year || "unknown";
    document.getElementById("panelMode").textContent = item.realityMode || "uncertain";
    document.getElementById("panelStatus").textContent = item.presentStatus || "unverified";
    document.getElementById("panelValue").textContent = item.valueType || "ambiguous";
    document.getElementById("panelDesc").textContent = item.description || "No stable caption exists for this object.";

    panel.classList.add("open");
    panel.setAttribute("aria-hidden", "false");

    positionPanel(anchor);
    requestAnimationFrame(fitCaptionToPanel);
}

function positionPanel(anchor) {
    const gap = 12;
    const rect = anchor.getBoundingClientRect();
    const pw = Math.min(360, window.innerWidth - 32);

    panel.style.width = pw + "px";

    let left = rect.right + gap;
    let top = rect.top;

    if (left + pw + 16 > window.innerWidth) {
    left = rect.left - pw - gap;
    }

    if (left < 16) {
    left = 16;
    }

    panel.style.left = left + "px";
    panel.style.top = Math.max(16, top) + "px";
}

function fitCaptionToPanel() {
    const desc = document.getElementById("panelDesc");

    if (!desc || !panel.classList.contains("open")) return;

    let size = window.innerWidth < 760 ? 10.5 : 11;

    desc.style.setProperty("--caption-size", size + "px");
    panel.style.maxHeight = "none";

    const maxH = window.innerHeight - 32;

    let guard = 0;

    while (panel.offsetHeight > maxH && size > 7.5 && guard < 24) {
    size -= 0.35;
    desc.style.setProperty("--caption-size", size + "px");
    guard++;
    }

    const h = panel.offsetHeight;
    const currentTop = parseFloat(panel.style.top) || 16;

    if (currentTop + h + 16 > window.innerHeight) {
    panel.style.top = Math.max(16, window.innerHeight - h - 16) + "px";
    }
}

function closePanel() {
    panel.classList.remove("open");
    panel.setAttribute("aria-hidden", "true");
}

function escapeHtml(str) {
    return String(str).replace(/[&<>'"]/g, c => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    "'": "&#39;",
    '"': "&quot;"
    }[c]));
}

async function saveCurrentView() {
    closePanel();

    const exportScale = Math.min(2, window.devicePixelRatio || 1);

    const canvas = document.createElement("canvas");

    canvas.width = Math.round(window.innerWidth * exportScale);
    canvas.height = Math.round(window.innerHeight * exportScale);

    const ctx = canvas.getContext("2d");

    ctx.scale(exportScale, exportScale);

    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

    ctx.fillStyle = "rgba(0,0,0,.3)";

    const grid = 36;
    const dotSize = 0.8;

    const startX = ((viewport.x % grid) + grid) % grid;
    const startY = ((viewport.y % grid) + grid) % grid;

    for (let x = startX; x < window.innerWidth; x += grid) {
    for (let y = startY; y < window.innerHeight; y += grid) {
        ctx.beginPath();
        ctx.arc(x, y, dotSize, 0, Math.PI * 2);
        ctx.fill();
    }
    }

    ctx.save();

    ctx.font = "16px acid-green, sans-serif";
    ctx.fillStyle = "rgba(255,0,255,0.1)";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.rotate(-Math.PI / 10);

    const gapX = 150;
    const gapY = 70;

    let row = 0;

    for (let y = -window.innerHeight; y < window.innerHeight * 2; y += gapY) {
    const offsetX = row % 2 === 0 ? 0 : gapX / 2;

    for (let x = -window.innerWidth; x < window.innerWidth * 2; x += gapX) {
        ctx.fillText("Fakekammer", x + offsetX, y);
    }

    row++;
    }

    ctx.restore();

    const artifacts = [...document.querySelectorAll(".artifact")].sort((a, b) => {
    const za = Number(getComputedStyle(a).getPropertyValue("--z")) || 0;
    const zb = Number(getComputedStyle(b).getPropertyValue("--z")) || 0;

    return za - zb;
    });

    for (const el of artifacts) {
    const img = el.querySelector("img");

    if (!img || !img.complete || img.naturalWidth === 0) continue;

    const rect = img.getBoundingClientRect();

    if (
        rect.right < 0 ||
        rect.bottom < 0 ||
        rect.left > window.innerWidth ||
        rect.top > window.innerHeight
    ) {
        continue;
    }

    try {
        ctx.drawImage(img, rect.left, rect.top, rect.width, rect.height);
    } catch (err) {
        ctx.fillStyle = "#ffffff";
        ctx.fillRect(0, 0, rect.width, rect.height);
        ctx.strokeStyle = "rgba(0,0,0,.3)";
        ctx.strokeRect(rect.left, rect.top, rect.width, rect.height);
    }
    }

    /* ctx.font = "10px ABCsolar, sans-serif";
    ctx.fillStyle = "rgba(0,0,0,0.5)";
    ctx.fillText("generated by fakekammer", 24, window.innerHeight - 24); */

    const link = document.createElement("a");

    link.download = "fakekammer-view.png";
    link.href = canvas.toDataURL("image/png");
    link.click(); 
}

document.getElementById("saveBtn").addEventListener("click", e => {
    e.stopPropagation();
    saveCurrentView();
});

document.getElementById("clearBtn").addEventListener("click", e => {
    e.stopPropagation();

    document.querySelectorAll(".artifact").forEach(a => a.remove());

    hint.classList.remove("hidden");
});

closeBtn.addEventListener("click", closePanel);

panel.addEventListener("click", e => {
    if (e.target === panel) closePanel();
});

document.addEventListener("keydown", e => {
    if (e.key === "Escape") closePanel();
});

window.addEventListener("resize", () => {
    fitCaptionToPanel();
    applyViewport();
});

stage.addEventListener("click", e => {
    if (e.target !== stage && e.target !== hint) return;

    const p = screenToWorld(e.clientX, e.clientY);

    createArtifact(randomItem(), p.x - 50, p.y - 50);
});

window.addEventListener("wheel", e => {
    e.preventDefault();

    panBy(e.deltaX, e.deltaY);
}, { passive: false });

stage.addEventListener("click", () => {
    console.log("stage click");
});

window.addEventListener("load", () => {
    document.body.classList.add("ready");
});
