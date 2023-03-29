import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  questions: {
    test: {
      "easy": {
        "Кому выгоден кэшбек?": { answers: { "Продавцам": 0, "Покупателям": 0, "Банкам": 0, "Кэшбэк одинаково удобен и продавцам, и покупателям": 1 }, explanation: "Магазин делает скидку в виде кэшбэка не всем, кто зашёл в магазин и прошёл мимо товара, а только тем, кто точно его купил. Вы же покупаете на 5-10% дешевле, а ваш кэшбэк-сервис заранее предупреждает, какая сумма вернётся с покупки." },
        "Спрос – это …": { answers: { "Доход, связанный со сбережениями": 0, "Потребности, подкрепленные платежеспособностью покупателей": 1, "Желание людей обладать теми или иными благами": 0, "Потребности в данном благе": 0 }, explanation: "Спрос – это экономическая категория, отражающая желание и возможность потребителей купить какое-либо количество товара по определенной цене в определенное время. При этом если величина спроса рассматривается в рамках макроэкономики, то речь идет о совокупном спросе во всей экономической системе государства." },
        "Основной экономический закон?": { answers: { "Спрос рождает предложение": 1, "Предложение рождает спрос": 0, "Деньги должны делать деньги": 0, "Инфляция - это зло": 0 }, explanation: "Закон спроса и предложения — экономический закон, объединяющий в себе закон спроса и закон предложения. Обычно цена устанавливается в точке равновесия между предложением и спросом. При прочих равных условиях, снижение цены на товар увеличивает спрос (готовность покупать) и уменьшает предложение (готовность продавать)." },
        "К прямым налогам не относятся…": { answers: { "Акцизы": 1, "Земельный налог": 0, "Налог на прибыль предприятий": 0, "Подоходный налог с физических лиц": 0 }, explanation: "Акциз — косвенный налог, налагаемый в момент производства на товары массового потребления (табак, вино и так далее) внутри страны (в отличие от таможенных платежей, несущих ту же функцию, но на товары, доставляемые из-за границы, то есть из других стран). Включается в цену товаров или тариф за услуги и тем самым фактически уплачивается потребителем. При реализации подакцизных товаров в розницу сумма акциза не выделяется. Акциз служит важным источником доходов государственного бюджета современных стран. Размер акциза по многим товарам достигает половины, а иногда 2/3 их цены." },
        "Результат деятельности многих отраслей экономики…": { answers: { "Конечный товар": 1, "Валовой продукт": 0, "Валовой внутренний продукт": 0, "Предложение": 0 }, explanation: "Результат деятельности многих отраслей экономики конечный товар. Конечные товары в экономике - это потребительские товары, которые после обработки не требуют последующей переработки для потребления. Их конечная цель - удовлетворить потребности потребителей." },
        "Понятие «экономика как наука» предполагает изучение…": { answers: { "Способов распределение материальных благ": 1, "Объективных законов развития природы": 0, "Системы признаков, определяющих структуру общества": 0, "Принципов и норм осуществления государственной власти": 0 }, explanation: "Экономика как наука — наука, изучающая пути удовлетворения постоянно растущих потребностей общества в условиях ограниченности ресурсов. Иначе говоря, она изучает производство, распределение и потребление различных товаров и услуг. Экономика — это совокупность конкретных (более узких и специализированных) экономических дисциплин: экономическая статистика, экономика труда и пр." },
        "Вид инфляции, особенно опасный для экономики…": { answers: { "Гиперинфляция": 1, "Текущая ": 0, "Растущая ": 0, "Инфляция Спроса ": 0 }, explanation: "Гиперинфляция – это ситуация в экономике, при которой цены на товары и услуги растут очень высокими темпами. Термин был введен в 1956 г. Ф. Кейганом. Единого критерия, на сколько должна вырасти инфляция, чтобы стать гипер, в настоящее время в финансовой науке не выделено." },
        "Стоимость денег определяется…": { answers: { "Количеством товаров и услуг, которые можно приобрести на эти деньги": 1, "Количеством драгоценных металлов, обеспечивающих валюту": 0, "Правительством, устанавливающим номинал бумажных денег": 0, "Банками, устанавливающими процент дохода с капитала": 0 }, explanation: "Стоимость денег определяется спросом на них, так же, как и стоимость товаров и услуг. Ценность денег можно определить по тому, что люди готовы обменять на них, и по их количеству. Основные моменты. Стоимость денег можно определить по тому, сколько их можно купить в иностранной валюте, по спросу на казначейские билеты и по тому, сколько денег хранится в валютных резервах." },
        "Бюджет в экономической системе это…": { answers: { "Совокупность всех денег, которые имеют в государстве и расписанных на год ": 1, "Доходы государства": 0, "Доходы частных лиц и выплаченные ими налоги": 0, "Доход государства от внешней торговли": 0 }, explanation: "Бюджет-это сумма финансов, выделенных на определенную цель, и краткое изложение предполагаемых расходов вместе с предложениями о том, как их выполнить. Это может быть профицит бюджета, обеспечивающий использование денег в будущем, или дефицит, при котором расходы превышают доходы." },
        "Бюджет, где объём расходов превышает поступления, является…": { answers: { "Дефицитным ": 1, "Сбалансированным": 0, "Профицитным": 0, "Обычным": 0 }, explanation: "Бюджетный дефицит — превышение расходов бюджета над его доходами. В случае превышения доходов над расходами возникает бюджетный профицит." },
        "Большинство стран мира сегодня имеет одну из четырех экономических систем…": { answers: { "Рыночную ": 1, "Традиционную": 0, "Командно-административную": 0, "Смешанную": 0 }, explanation: "Большинство стран мира сегодня имеют рыночную экономическую систему. Рыночная экономика — экономическая система, основанная на принципах предпринимательства, многообразия форм собственности на средства производства, свободного рыночного ценообразования, договорных отношений между хозяйствующими субъектами при минимальном экономическом вмешательстве государства в хозяйственную деятельность и государственном регулировании экономики." },
        "Какова главная цель экономики?": { answers: { "Производить материальные блага": 1, "Печатать деньги": 0, "Собирать налоги": 0, "Следить за бюджетом страны": 0 }, explanation: "Главная цель экономики – это производить материальные блага. Материальные блага (экономические блага) - это продукты питания, предметы, товары и услуги, удовлетворяющие потребности человека, то есть доступный объём которых меньше потребности в них. А есть свободные блага - это блага, доступный объём которых больше потребности в них, например, солнечный свет, воздух, вода. Материальные блага — это, например, вещи, телевизор, телефон." },
        "Как называют тех, кто использует товары и услуги…": { answers: { "Потребители": 1, "Производители": 0, "Купцы": 0, "Пользователи": 0 }, explanation: "Потребитель — это гражданин, имеющий намерение заказать или приобрести либо заказывающий, приобретающий или использующий товары (работы, услуги) исключительно для личных, семейных, домашних и иных нужд, не связанных с осуществлением предпринимательской деятельности." },
        "Плата за использование земли называется…": { answers: { "Рента": 1, "Предпринимательский доход": 0, "Цена земли": 0, "Прибыль": 0 }, explanation: "В классической экономике экономическая рента-это любая произведенная оплата (включая вмененную стоимость) или выгода, полученная за непроизводственные ресурсы, такие как местоположение (земля), и за активы, сформированные путем создания официальной привилегии над природными возможностями (например, патенты)." },
        "Акция – это ценная бумага…": { answers: { "На которую выплачивается часть прибыли": 1, "Выдаваемая в качестве поощрения за доблестный труд": 0, "Являющаяся одной из форм заработной платы": 0, "Удостоверяющая личность владельца предприятия": 0 }, explanation: "Акция — это ценная бумага, которая закрепляет за ее владельцем долю компании. Когда инвестор покупает акции, он становится совладельцем бизнеса и получает право на часть прибыли компании в виде дивидендов. А при пакете акций от 10% стоимости уставного капитала инвестор может влиять на принятие решений в компании." },
        "Деньги появились…": { answers: { "Для облегчения процесса обмена": 1, "Из-за особых свойств золота и серебра": 0, "С целью накопления сокровищ": 0, "Для облегчения торговли между государствами": 0 }, explanation: "Деньги – универсальный эквивалент стоимости товаров и услуг. Человеку исторически важно было решить определенную проблему. Проблему создания определенного эквивалента для обмена на любые товары и услуги. Например, у человека был молоток, но нужна была ваза. У другого человека была ваза, но ему не требовался молоток. В таком случае нужен был третий товар-посредник. Так возник некоторый эквивалент, который сейчас называется деньгами." },
        "Ценные бумаги можно приобрести на рынке…": { answers: { "Фондовом": 1, "Финансовом": 0, "Средств производства": 0, "Товаров и услуг": 0 }, explanation: "Фондовый рынок — это место, где происходит торговля акциями, облигациями, валютами и прочими активами. Понятие рынка затрагивает не только функцию передачи ценных бумаг, но и другие операции с ними, такие, как выпуск и налогообложение. Кроме того, он позволяет устанавливать справедливое ценообразование." },
        "Если спрос на товар выше предложения, то цена товара…": { answers: { "Повысится": 1, "Будет колебаться": 0, "Снизиться": 0, "Останется без изменения": 0 }, explanation: "Инфляция спроса — это превышение совокупного спроса над совокупным предложением. Например, если спрос на популярный продукт выше, чем его предложение, то цена на него вырастет." },
        "Цель конкуренции…": { answers: { "Получение большей прибыли": 1, "Повышение качества продукции": 0, "Рост потребительского спроса": 0, "Увеличение поступлений от налогов": 0 }, explanation: "Конкуренция - правомерная деятельность хозяйствующих субъектов на рынке, целью которой является получение наиболее выгодных условий производства и сбыта товаров законными средствами. Цель конкуренции – это борьба за получение большей прибыли. В ходе конкуренции происходит массовое разорение мелких и средних товаропроизводителей, банкротство предприятий." },
        "Количество товара, которое производитель готов вынести на рынок в определенный момент времени по определенной цене – это…": { answers: { "Предложение": 1, "Дивиденд": 0, "Спрос": 0, "Потребность": 0 }, explanation: "Предложение — это желание производителя произвести и предложить к продаже на рынке свои товары по конкретным ценам из ряда возможных цен в течение определённого периода времени. Величина предложения — это объём (количество) товара определенного вида, который производители готовы (хотят и могут) предложить в течение определённого периода при определённом уровне цены на этот товар." },
      },
      "medium": {
        "Под ликвидностью денег понимается…": { answers: { "Способность приносить процент": 0, "Способность накапливаться": 0, "Способность обмениваться на любые товары": 1, "Способность сохранить ценность при хранении": 0 }, explanation: "Ликвидность в экономике – это способность актива превращаться в деньги без потери своей стоимости. Чем быстрее скорость реализации актива, тем более высокую ликвидность он имеет и наоборот. Деньги – это товар обладающий абсолютной ликвидностью. Ликвидность — свойство активов быть быстро проданными по цене, близкой к рыночной. Ликвидный — обращаемый в деньги. Бывают высоколиквидные, низколиквидные и неликвидные ценности (активы). Чем легче и быстрее можно обменять актив с учётом его полной стоимости, тем более ликвидным он является. Для товара ликвидность будет соответствовать скорости его реализации по номинальной цене, без дополнительных скидок." },
        "Рыночными субъектами не являются…": { answers: { "Домохозяйства": 0, "Фирмы": 0, "Деньги": 1, "Государство": 0 }, explanation: "Субъекты рынка это домашние хозяйства, предприятия, финансово-кредитные организации и государство. А остальные соответственно нет. Предприятия производят товары и услуги, домохозяйства их потребляют, а государство следит за процессом. Чем сильнее развита рыночная экономика, тем меньшее вмешательство правительства требуется для поддержания равновесия." },
        "Рынок товаров и услуг находиться в равновесном состоянии, если…": { answers: { "цена равна издержкам плюс прибыль": 0, "уровень технологии меняется постепенно": 0, "величина спроса равна величине предложения": 1, "величина предложения не равна спросу": 0 }, explanation: "Рынок товаров и услуг находиться в равновесном состоянии, если величина спроса равна величине предложения" },
        "При совершенной конкуренции…": { answers: { "существует чистая монополия": 0, "ограничен вход на рынок": 0, "на рынке действует ограниченное число фирм": 0, "товары, выпускаемые большинством фирм, однородны и стандартизированы": 1 }, explanation: "При совершенной конкуренции фирмы не могут влиять на индивидуальные и рыночные цены, то есть не обладают рыночной властью. Это значит, что равновесие на совершенно конкурентных рынках устанавливается исключительно под действием рыночных сил. При совершенной конкуренции товары, выпускаемые большинством фирм, однородны и стандартизированы." },
        "В основе распределения национального дохода лежит цена на факторы …": { answers: { "Производства": 1, "Спроса": 0, "Предложения": 0, "Рынка": 0 }, explanation: "В основе распределения национального дохода лежит цена на факторы производства. Предприниматели, организуя производство, должны приобрести различные факторы производства. Для этого им необходимо оплатить эти факторы. Это означает, что наемные работники получат за свой труд заработную плату; собственники капитала — процент; собственники земли и другой недвижимости — ренту." },
        "К основным чертам традиционной экономики можно отнести…": { answers: { "Широкое распространение ручного труда": 1, "Частную собственность на экономические ресурсы": 0, "Непосредственное управление всеми предприятиями из единого центра": 0, "Рыночный механизм регулирования экономики без вмешательства государства": 0 }, explanation: "К основным чертам традиционной экономики можно отнести широкое распространение ручного труда. Традиционная экономика — экономическая система, при которой традиции и обычаи определяют практику использования ограниченных ресурсов. Традиционная экономика является самой древней. При традиционной экономике земля и капитал находятся в общем владении, а основные экономические проблемы общества — что, как и для кого производить — решаются, главным образом, на основе традиционных родоплеменных или полуфеодальных иерархических связей между людьми." },
        "Косвенным налогом является налог…": { answers: { "На добавленную стоимость ": 1, "Подоходный": 0, "Пенсионный": 0, "На прибыль": 0 }, explanation: "НДС — это косвенный налог. Исчисление производится продавцом при реализации товаров (работ, услуг, имущественных прав) покупателю. Продавец дополнительно к цене реализуемых товаров (работ, услуг, имущественных прав) предъявляет к оплате покупателю сумму НДС, исчисленную по установленной налоговой ставке." },
        "Признаком плановой экономической системы не является…": { answers: { "Свободное ценообразование": 1, "Государственная собственность на средства производства": 0, "Централизованное управление экономикой": 0, "Нормированное распределение": 0 }, explanation: "Особенности (признаки, свойства) плановой экономики: директивное ценообразование (цены устанавливает государство), земля и капитал полностью находятся в собственности государства... Свободное ценообразование – это признак рыночной экономики" },
        "Модель современного рынка товаров и услуг – это…": { answers: { "Олигополия": 1, "Совершенная конкуренция": 0, "Монополия": 0, "Конкуренция": 0 }, explanation: "Олигополия - рыночная структура, в которой на рынке или в отрасли доминирует небольшое количество крупных продавцов или производителей. Олигополии часто возникают в результате стремления максимизировать прибыль, что приводит к сговору между компаниями." },
        "К ценным бумагам не относится…": { answers: { "Налоговая декларация": 1, "Облигация ": 0, "Вексель": 0, "Акция": 0 }, explanation: "Налоговая декларация — это официальное заявление налогоплательщика, которое содержит сведения об объектах налогообложения, о полученных доходах и произведенных расходах, об источниках доходов, о налоговой базе, налоговых льготах, о сумме налога подлежащего уплате и о других данных, служащих основанием для исчисления налога. (ст. 80 НК РФ). Не относиться к ценным бумагам." },
        "Исполнение бюджета в нашей стране обеспечивается…": { answers: { "Правительством ": 1, "Судебными органами": 0, "Парламентом": 0, "Президентом": 0 }, explanation: "В соответствии со ст. 215.1 Бюджетного кодекса Российской Федерации исполнение федерального бюджета обеспечивается Правительством Российской Федерации. Согласно ст. 11 БК РФ федеральный бюджет Российской Федерации разрабатывается и утверждается в форме Федерального закона." },
        "Часть прибыли, которая ежегодно распределяется между акционерами, – это…": { answers: { "Дивиденды": 1, "Проценты": 0, "Профит": 0, "Вклады": 0 }, explanation: "Дивиденды — это доля от прибыли, которую компания распределяет среди своих акционеров. Если вы владеете акциями компании, которая выплачивает дивиденды, то автоматически получаете право на их долю — пока эти акции находятся в вашем портфеле. Размер выплат на каждую акцию прописывается в дивидендной политике и утверждается на общем собрании акционеров." },
        "В экономике под рынком понимается?": { answers: { "Отношения по поводу купли-продажи товаров": 1, "Место продажи товаров": 0, "Конкуренцию между производителями": 0, "Конкуренция между потребителями": 0 }, explanation: "Рынок — категория товарного хозяйства, совокупность экономических отношений, базирующихся на регулярных обменных операциях между производителями товаров (услуг) и потребителями. Обмен обычно происходит на добровольной основе в форме эквивалентного обмена товара на деньги (торговля) или товара на товар (бартер). При свободном доступе на рынок, как производителей, так и потребителей, обмен происходит в условиях конкуренции." },
        "В рыночной экономике продукт труда называется?": { answers: { "Товаром": 1, "Простым продуктом": 0, "Прибавочной стоимостью": 0, "Изделием": 0 }, explanation: "Продукт труда результат целесообразной деятельности человека, предназначенный для удовлетворения его потребностей. В рыночной экономике, когда П. т. предназначен для продажи, он принимает форму товара. Продукт труда вещество природы, приспособленное трудом человека с помощью орудий производства к человеческим потребностям. Общественная форма продукта труда — товар." },
        "Рынок, на котором господствуют несколько крупных компаний, называется?": { answers: { "Олигополистическим рынком": 1, "Регулируемым рынком": 0, "Рынком свободной конкуренции": 0, "Монополистическим рынком ": 0 }, explanation: "Олигополия — тип рынка, при котором в отрасли хозяйства господствует не одна, а несколько фирм. Иными словами, в олигополистической отрасли производителей больше, чем в условиях монополии, но значительно меньше, чем в условиях совершенной конкуренции. Как правило, насчитывается от 3 и более участников. Частным случаем олигополии выступает дуополия." },
        "К фазам экономического цикла относится…": { answers: { "Депрессия": 1, "Дефляция": 0, "Девальвация": 0, "Дефолт": 0 }, explanation: "Экономический цикл представляет собой периодические колебания уровня деловой активности. В соответствии с классической моделью цикл состоит из четырех фаз: кризис, следующие за ним депрессия, оживление и подъем. У каждой из этих фаз есть свои характеристики и функции." },
        "Прямые налоги характеризуются тем, что они…": { answers: { "Являются обязательным сбором в пользу государства": 1, "Взимаются только с предприятий - монополистов": 0, "Не взимаются с граждан": 0, "Используются только для сокращения государственного долга": 0 }, explanation: "Прямые налоги характеризуются тем, что они являются обязательным сбором в пользу государства. Для прямых налогов характерно то, что они обременяют самого налогоплательщика и не могут быть переложены на иных лиц, в то время как бремя уплаты косвенных налогов несут реальные потребители услуг или продавцы." },
        "Производительность труда – это...": { answers: { "Количество продукции в единицу времени": 1, "Скорость выполнения работы": 0, "Качество произведенной продукции": 0, "Уровень развития технологии": 0 }, explanation: "Производительность труда измеряется количеством продукции, выпущенной работником за единицу времени. Обратная величина — трудоёмкость — измеряется количеством времени, затрачиваемым на единицу продукции. Обычно под производительностью труда в экономической статистике разумеется фактическая производительность труда, однако в экономической кибернетике, в частности, в модели жизнеспособных систем Стаффорда Бира, вводятся понятия наличной и потенциальной производительности труда." },
        "К чертам классического рынка относится...": { answers: { "Самостоятельность товаропроизводителей": 1, "Плановое ведение хозяйства": 0, "Распределение по трудовой норме": 0, "Государственное регулирование рыночных отношений": 0 }, explanation: "К чертам классического рынка относится самостоятельность товаропроизводителей. Самостоятельность производителей проявляется в свободе выбора создания того или иного экономического блага или услуги, принятия основных экономических решений." },
        "Валовой внутренний продукт – это…": { answers: { "Общая стоимость всех товаров и услуг, которые производятся в государстве за год": 1, "Общая денежная стоимость того, что было произведено внутри страны": 0, "Использования принадлежащих государству ресурсов внутри страны": 0, "Очередь, определяемая потребляемыми ресурсами рабочего времени": 0 }, explanation: "Ключевой показатель для экономики каждой страны — валовой внутренний продукт (ВВП). Это общая стоимость всех товаров и услуг, которые производятся в государстве за год. Обязательное условие — производство должно находиться внутри страны. Если гражданин занимается бизнесом в другом государстве, его товары и услуги не увеличивают отечественный ВВП и поэтому не учитываются в нем." },
      },
      "hard": {
        "Термин «политическая экономика» впервые ввел…": { answers: { "Адам Смит": 0, "Карл Маркс": 0, "Ксенофонт": 0, "Монкретьен": 1 }, explanation: "Особую популярность среди меркантилистов имели Томас Мен и Антуан де Монкретьен. Последний обессмертил свое имя тем, что ввел в научный оборот термин «политическая экономия». С выходом в свет его книги «Трактат пополитической экономии» (1615 г.) экономическая теория более 300 лет развивалась и до сих пор развивается как политическая экономия. Этот тракта был написан для короля Людовика XIII и королевы-матери. Так как домашним хозяйством короля было государство, то к сочетанию «oikonomia» прибавилось древнегреческое «politikos» – государственный, общественный." },
        "Позитивная экономическая теория изучает…": { answers: { "Положительные тенденции развития экономики": 0, "Что есть": 1, "Оценочные суждения": 0, "Что должно быть": 0 }, explanation: "Итак, экономическая теория объясняет, описывает, как функционирует экономика.Такой подход называется позитивным, а экономическая теория в данном случае становится позитивной экономической наукой и отвечает на вопросы «Что есть?», или «Что может быть?».Позитивная экономика стремится выявить отношения между экономическими переменными и предсказать, что произойдет, если та или иная переменная изменится.Например, существует связь между ставкой налога и деловой активность(кривая Лаффера).При нулевой и 100% -ной ставках налога государство ничего не получает.Задача позитивного анализа - выявить при какой ставке налога поступления налогов в казну будут максимальными" },
        "Автором уравнения M*V = P*Q является…": { answers: { "М. Фридман": 0, "К. Менгер": 0, "Дж. М. Кейнс": 0, "И. Фишер": 1 }, explanation: "УРАВНЕНИЕ ОБМЕНА - уравнение, имеющее вид MV=PQ, где М - количество денег в обращении, V - скорость обращения денег, Р - цена, Q - объем продаж товаров и услуг. Представляет собой макроэкономическое соотношение, именуемое уравнением Фишера; служит одним из важных инструментов монетаристской доктрины." },
        "Абстрактный труд характеризуется…": { answers: { "Профессиональной подготовкой работника и свершаемыми им операциями": 0, "Использование конкретных предметов труда": 0, "Затраты рабочей силы, с физической точки зрения": 1, "Определённой технологией производства": 0 }, explanation: "В абстрактном труде имеют значения затраты рабочей силы, с физической точки зрения (мышц, мозга, нервов). Поэтому труд товаропроизводителя, который характеризуется затратой рабочей силы вообще независимо от конкретной формы, создает стоимость" },
        "Эластичность спроса характеризуется отношением…": { answers: { "Процентного изменения величины спроса к процентному изменению цены товара": 1, "Изменения цены товара к изменению спроса на него": 0, "Изменения спроса к изменению предложения": 0, "Процентного изменения предложения к процентному изменению величины спроса": 0 }, explanation: "Эластичность спроса или предложения вычисляется как отношение процентного изменения величины спроса (предложения) к процентному изменению какой-либо детерминанты." },
        "Меновая стоимость товара характеризуется…": { answers: { "Обменом благ в определенной пропорции": 1, "Затратами труда на производство конкретного блага": 0, "Способность вещи удовлетворять ту или иную потребность": 0, "Полезность блага": 0 }, explanation: "Меновая стоимость предполагает наличие пользы товара как ценности, которую он предоставляет для обмена. Сам факт полезности товаров делает их взаимозаменяемыми — это главное, что определяет связь товаров в обмене, пока они находятся на рынке." },
        "Постоянные издержки фирмы – это…": { answers: { "Издержки, которые несет фирма даже в том случае, если продукция не производится": 1, "Неявные издержки": 0, " Затраты на сырье при выпуске дополнительной единицы продукции": 0, "Минимальные издержки производства любого объема продукции при наиболее благоприятных условиях производства": 0 }, explanation: "Постоянные издержки – все затраты компании, которые не связаны с объемом производства. Сумма постоянных издержек неизменна независимо от объема продаж. Переменные издержки – это затраты, которые прямо связаны с объемом производства. Чем больше произведено, тем выше будут переменные расходы." },
        "Предварительные издержки представляют собой…": { answers: { "Затраты, связанные с выпуском дополнительной единицы продукции": 1, "Минимальные затраты на выпуск продукта": 0, "Средние затраты на производство продукта": 0, "Максимальные затраты на производство продукции": 0 }, explanation: "Предельные издержки (англ. marginal cost) — дополнительные, добавочные издержки на производство дополнительной единицы продукта, равные изменению общих издержек, делённому на изменение объёма продукции (а в краткосрочном периоде — изменению полных переменных издержек, делённому на изменение продукции)." },
        "При монополистической конкуренции…": { answers: { "Фирмы, действующие на рынке, выпускают дифференцированную продукцию": 1, "Существует серьезные ограничения по вхождению на рынок": 0, "Продукцию предлагает одна фирма": 0, "На рынке действует ограниченное число фирм": 0 }, explanation: "При монополистической конкуренции продавцы реализуют взаимозаменяемые товары. В условиях монополистической конкуренции решающее значение при выборе товаров имеют ценовые факторы. Для монополистической конкуренции характерно большое число продавцов на рынке. Дифференцированная продукция – это изделия, которые отличаются не только позиционированием и внешним видом, но и ценообразованием. Производитель также может использовать такие инструменты как распродажи или скидки, на постоянной основе, чтобы создавать устойчивую привязанность к марке. При монополистической конкуренции фирмы, действующие на рынке, выпускают дифференцированную продукцию." },
        "Объединение независимых предприятий, которые проводят единую ценовую политику и договариваться о разделе рынков сбыта, представляет собой…": { answers: { "Картель": 1, "Концерн": 0, "Конгломерат": 0, "Трест": 0 }, explanation: "Картель - форма монополистического объединения или соглашения, в котором каждое предприятие, вошедшее в состав картеля, сохраняет финансовую и производственную самостоятельность. Объектами соглашения могут быть: ценообразование, сферы влияния, условия продаж, использование патентов, регулирование объёмов производства, согласование условий сбыта продукции, наём рабочих. Действует, как правило, в рамках одной отрасли. Затрудняет функционирование рыночных механизмов. В ряде стран (где картели запрещены) попадает под действие антимонопольного законодательства; в других странах, напротив, создание картелей поощряется в целях реструктуризации промышленности, стандартизации материалов и комплектующих, ограничения конкуренции между мелкими фирмами. Объединение независимых предприятий, которые проводят единую ценовую политику и договариваться о разделе рынков сбыта, представляет собой картель." },
        "Общая сумма доходов, приходящихся на факторы производства в экономике - это…": { answers: { "Национальный доход": 1, "Чистый национальный доход": 0, "Реальный валовый национальный продукт": 0, "Личный доход": 0 }, explanation: "Общая сумма доходов, приходящихся на факторы производства в экономике – это национальный доход. Национальный доход - обобщающий показатель экономического развития страны; вновь созданная в материальном производстве стоимость. Национальный доход складывается из: заработной платы рабочих и жалования служащих; дополнительных выплат; рентных доходов владельцев собственности; чистого процента по потребительским кредитам; прибылей корпораций; доходов собственников." },
        "Номинальный ВНП измеряется…": { answers: { "В рыночных текущих ценах": 1, "В эскортных ценах": 0, "В мировых ценах": 0, "В базовых ценах": 0 }, explanation: "Номинальный валовой национальный продукт - объем товаров и услуг, производимых в стране за определенный период времени, исчисленный в денежном выражении в текущих рыночных ценах. Номинальный валовой национальный продукт численно равен произведению реального валового национального продукта и дефлятора ВНП. Номинальный ВНП измеряется в рыночных текущих ценах." },
        "Как рассчитывается чистый национальный продукт (ЧНП)?": { answers: { "Из ВНП вычитается стоимость износа основных фондов": 1, "Из ВНП вычитаются косвенные налоги": 0, "Из ВНП вычитаются инвестиции": 0, "К национальному доходу прибавляется амортизация": 0 }, explanation: "Чистый национальный продукт (ЧНП) можно получить, вычитая из ВНП величину стоимости износа основных фондов: ЧНП = ВНП – С. Чистый национальный продукт (ЧНП) — общий объём товаров и услуг, которые страна за определённый промежуток времени произвела и потребила во всех секторах своего национального хозяйства. Если из ЧНП вычесть сумму косвенных налогов, можно получить значение национального дохода (НД). НД — это вновь созданная за год стоимость, характеризующая, что прибавило производство в данном году к благосостоянию общества." },
        "Увеличение инвестиционных расходов при прочих равных условиях приведет к…": { answers: { "Росту объемов национального производства": 1, "Сокращению объемов национального производства": 0, "Увеличению налоговых ставок": 0, "Сокращению уровня занятости в экономике": 0 }, explanation: "Увеличение инвестиционных расходов, т.е. закупок средств производства, при данном общем уровне цен приводит к смещению кривой совокупного спроса вправо, что приводит к росту объемов национального производства. И наоборот, сокращение закупок дополнительных средств производства при постоянном общем уровне цен смещает кривую совокупного спроса влево." },
        "Затраты на прирост средств производства называются…": { answers: { "Чистыми частными инвестициями": 1, "Финансовыми инвестициями": 0, "Портфельными инвестициями": 0, "Валовыми частными инвестициями": 0 }, explanation: "Чистые инвестиции – основная часть валовых вложений без учета амортизационных расходов. Эти средства всегда направляют на развитие предприятия или государственной экономики. Затраты на прирост средств производства называются чистыми частными инвестициями." },
        "Внешние факторы экономического цикла – это…": { answers: { "Изменения в численности населения": 1, "Изменения сбережений населения": 0, "Изменения потребления домохозяйства": 0, "Изменения инверсионных расходов": 0 }, explanation: "Различают внешние и внутренние факторы цикличности развития экономических систем. Внешние факторы – это факторы, находящиеся за пределами данной экономической системы. К ним относятся: динамика населения, миграция населения, открытия науки и техники, войны и другие политические события, изменения цен на нефть, открытие месторождений золота, открытие новых земель и природных ресурсов, пятна на Солнце, погода." },
        "Какие процессы характерны для периода экспансии?": { answers: { "Увеличение налоговых поступлений в государственный бюджет": 1, "Появление дефицита государственного бюджета": 0, "Падение спроса на рабочую силу": 0, "Сокращение заработной платы": 0 }, explanation: "Экономическая экспансия — правительственная политика в области государственного бюджета и налогообложения, направленная на преодоление циклического спада в экономике страны, предполагает увеличение государственных расходов, снижение налогов или комбинирование этих мер. Характерными чертами современной экспансии являются увеличение налоговых поступлений в государственный бюджет." },
        "Фрикционная безработица – это…": { answers: { "Текучесть кадров в связи с переменой рабочего места, места жительства": 1, "Потеря работы в связи с изменением в структуре производства": 0, "Невозможность найти работу в связи с общим спадом в экономике": 0, "Необходимость освоения новой профессии": 0 }, explanation: "Фрикционная безработица — это безработица, связанная с затратами времени на поиск работы. Фрикционная безработица возникает при поиске работы после увольнения, при добровольной смене работы, при временной потере сезонной работы и при первом поиске работы молодежью. В периоды фактически полной занятости именно на фрикционную безработицу приходится значительная часть общей безработицы. В условиях высокой безработицы доля фрикционной безработицы крайне незначительна, за исключением тех секторов экономики, в которых наблюдается дефицит рабочей силы." },
        "Социальная функция налогов состоит в…": { answers: { "Перераспределение общественного продукта между группами людей с разыми доходами": 1, "Формирование ресурсов государственного бюджета": 0, "Активизации хозяйственной деятельности": 0, "Ускорении технического обновления производства": 0 }, explanation: "Социальная функция налогов направлена на решение социальных задач путем перераспределения национального дохода с целью поддержания в обществе благоприятного климата. Выполнение налогом социальной функции является обязательным условием, без выполнения которого «современное общество не может существовать»." },
        "К встроенным или автоматическим стабилизаторам относятся…": { answers: { "Социальные выплаты по безработице": 1, "Расходы на организацию общественных работ": 0, "Расходы на образование": 0, "Повышение налоговых ставок в законодательном порядке": 0 }, explanation: "Автоматические стабилизаторы - элементы автоматической фискальной политики, двигающие бюджет в сторону дефицита в период спада и в сторону увеличения его доходности в период подъема. К основным стабилизаторам относятся прогрессивный подоходный налог и пособия по безработице." },
      }
    },

    quiz: {
      "Какой-то вопрос?": { answers: { "Первый": 1, "Второй": 0, "Третий": 0, "Четвертый": 0 }, type: "default"},
      "Верю/не верю": { answers: { "Верю": 1, "Не верю": 0 }, type: "believe"},
      "Кто на фото?": { rightAnswer: "что-то", type: "guess"},
    }
  },
  questionsQuantityByExplanation: {
    test: {
      "easy": 20,
      "medium": 20,
      "hard": 20
    },
    quiz: 20
  },
  counter: 0,
  rightAnswers: 0,
  quizIsDone: false,
  reactions: ['Надо подучить!', 'Неплохо!', 'Отличнооо!'],
  currentDifficulty: null,
  explanationIsNeeded: false,
  explanationIsShowed: false,
  username: '',
  userscores: { "easy": 0, "medium": 0, "hard": 0 },
  userID: null,
  userToken: null,
  gameType: null
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    nextQuestion: (state, { payload }) => {
      const currQuestions = state.gameType === "test" ? state.questions.test[state.currentDifficulty] : state.questions.quiz;
      if (state.counter + 1 === Object.keys(currQuestions).length) {
        state.quizIsDone = true;
      }
      

      if (payload === 1) {
        state.rightAnswers += 1;
      }

      state.counter += 1;
    },

    finishQuiz: (state) => {
      state.quizIsDone = true;
    },

    rightAnswer: (state) => {
      state.rightAnswers += 1;
    },

    resetQuiz: (state) => {
      state.quizIsDone = false;
      state.counter = 0;
      state.rightAnswers = 0;
      state.currentDifficulty = null;
      state.explanationIsNeeded = false;
    },

    setDifficulty: (state, { payload }) => {
      state.currentDifficulty = payload;
    },

    setExplanationIsNeeded: (state) => {
      state.explanationIsNeeded = !state.explanationIsNeeded;
    },

    setExplanationIsShowed: (state) => {
      state.explanationIsShowed = !state.explanationIsShowed;
    },

    setUsername: (state, { payload }) => {
      state.username = payload;
    },

    setUserData: (state, { payload }) => {
      state.userID = payload.id;
      state.userscores = { "easy": payload.scores.easy, "medium": payload.scores.medium, "hard": payload.scores.hard };
      state.userToken = payload.token;
    },

    updateUserScore: (state, { payload }) => {
      state.userscores[payload.currentDifficulty] = payload.score;
    },

    setGameType: (state, { payload }) => {
      state.gameType = payload;
    }
  }
})

export default quizSlice.reducer;