import type {ReactNode} from 'react';
import {useState} from 'react';
import Layout from '@theme/Layout';
import WritingLayout from './_WritingLayout';
import styles from './interview.module.css';

type Lang = 'ua' | 'en';

const content = {
  ua: {
    title: "Сергій Зарудняк",
    byline: "Розмова про життя і мистецтво",
    intro: [
      "Сергій Зарудняк, вочевидь, один із найцікавіших художників міста Запоріжжя. Він брав участь в експозиціях «Образ 90‑х», а також у виставках карикатур, публікувався в місцевій пресі як карикатурист. Потяг до гротеску і водночас ощадливість художніх засобів – формальний мінімалізм – дають йому змогу досягати змістовної багатозначності творів. Таким чином, його картини інколи постають для глядача – принаймні на перший погляд – як нерозв'язна загадка. Вони вимагають уважного, вдумливого й неквапливого сприйняття. Нині Сергій працює в найрізноманітніших техніках – це й барельєф, і графіка, і акварель, і сграфіто. Остання техніка така ж химерна й вигадлива, як і її назва: на залитому рівномірним шаром чорного воску білому аркуші картону чи пластику продряпуються, немов проступають із пітьми, загадкові потойбічні фігури.",
      "Сергій відомий у нашому місті також як композитор, засновник музичного гурту «Школа танців», що активно концертував на початку дев'яностих, а у 2003 році вже в оновленому складі посів перше місце на фестивалі авторської пісні «Байда». Ми мали з ним дуже змістовну розмову про життя і про мистецтво, яку й подано нижче.",
    ],
    qa: [
      {
        q: "У дитинстві малюють усі без винятку: олівець – одна з найголовніших дитячих забавок. Чи пам'ятаєш момент, коли він став для тебе чимось більшим? Як це сталося?",
        a: "Коли мені було п'ять років, мати подарувала десяток п'ятикопійчаних альбомів. Не пам'ятаю, коли вони закінчилися. У мене таке відчуття, що я досі в них малюю. Тобто хочу сказати, що ігровий елемент у малюванні далеко не останній. Щоб займатися ним, треба бути трохи дитиною. Дорослішаючи, багато людей, на жаль, назавжди втрачають цю здатність.",
      },
      {
        q: "Тобі як художникові притаманні карикатурність, гротеск, це особливо помітно в графічних роботах. Ексцентричні образи допомагають глибше осягнути суть довколишнього, чи причина інша?",
        a: "Трагікомедія – взагалі мій улюблений жанр у мистецтві. А оскільки ексцентрика, на мій погляд, є різновидом трагікомедії, то причина зрозуміла. Хочу сказати, що ексцентричне, хоча й часто викликає усмішку, за своєю суттю завжди трагічне. Ось Чарлі Чаплін – чудовий приклад такого ексцентрика! Коли він в одному з фільмів їсть власний черевик, ми сміємося, але в душі розуміємо, що це зовсім не смішно. І цього досить, щоб повністю окреслити ситуацію. Трагікомедія – найефективніший жанр для розв'язання будь‑яких художніх завдань, тому що й у житті все так перемішано: немає нічого однозначно й для всіх сумного або смішного.",
      },
      {
        q: "Більшість твоїх барельєфів зображують безлюдні міські пейзажі. Будівлі, як частина природи, живуть власним незалежним життям, наче виросли, як гриби. Це суто художнє рішення чи метафора поглинання людини міськими джунглями?",
        a: "Барельєфи виконано в жанрі міського пейзажу. Але це загальне визначення, яке ні про що не говорить. А от їхній образ – занедбаність, ветхість і запустіння. Такий образний лад продиктований матеріалом, з якого вони зроблені: гіпс, водяні фарби. Я хотів досягти справжнього ефекту дикої природи, майже на межі наскельного живопису або навіть скульптур, утворених унаслідок природного вивітрювання скельної породи. Матеріал у цьому дуже допомагає. Адже гіпс – це рештки організмів, що загинули мільйони років тому, це їхні скелети. Сам задум використання скелетів у створенні картини надає їй відчуття ветхості, самотності, чогось схожого на декоративний посуд із розкопок скіфських курганів.",
      },
      {
        q: "У твоїх піснях відчувається фольклорна традиція давніх слов'ян і греків, деякі художні роботи також побудовані на відомих сюжетах, наприклад, барельєф «Корабель дурнів» або сграфіто «Інженер Гарін». Якщо нинішня ситуація постмодерну, за загальною думкою, призвела до вичерпаності культури, то якою є роль традиції, і зокрема фольклорної, у творчості сучасного художника?",
        a: "Нині фольклорна традиція – останній ковток свіжого повітря в мистецтві. Адже постмодернізм справді довів усе до повного виснаження: куди не глянь – усюди колаж, пародія. Скасування заборон спровокувало падіння останніх бастіонів, куди художникам раніше був заборонений вхід. Коли нікуди йти, нічим дихати, єдиний вихід – використовувати традиційні мотиви, збагачуючи їх сучасним змістом. Це єдиний, як на мене, спосіб не стояти на місці, рухатися вперед.",
      },
      {
        q: "За віросповіданням ти православний. Свого часу ця візантійська гілка християнства дала найпотужніший поштовх розвитку культурного життя у Владимирській Русі: згадаймо хоча б ікони й розписи Андрія Рубльова. Як впливає релігійність на творчість? Чи може художник бути атеїстом?",
        a: "Звісно, художник може бути атеїстом. Атеїзм – теж своєрідна релігія. Якщо людина повністю відкидає містичний досвід, вона тут же знаходить йому відповідну заміну. Досить згадати, що коли комуністи «скасували» Бога, відразу ж вишикувалася нескінченна черга до мавзолею Леніна. Та й вавилонська вежа Палацу з'їздів на місці знесеного Храму Христа Спасителя проектувалася, певно, не дарма. Художник, який усвідомлює недостатність діалектичного матеріалізму для зображення картини реального світу, завжди має на увазі трансцендентний план. Утім, це трохи не до мене: адже моє завдання передусім – створити правдивий образ. Трансцендентне надає додаткового об'єму дво‑ чи тривимірному зображенню, але, оскільки межа між віруючим і атеїстом дуже хитка, змагатися тут недоречно. Атеїст може створити цілком містичний твір навіть всупереч власній волі. Ви, наприклад, бачили панно у фойє Палацу культури «Дніпроспецсталь»? Там Ленін просто якийсь деміург, а червоноармійці нагадують язичницьких божків. Я не можу повірити, що цей твір створено невіруючою людиною!",
      },
      {
        q: "Твої роботи висять у квартирах та офісах найрізноманітніших людей в Україні, у Росії та за кордоном. Чи змінило що‑небудь у твоєму житті участь у регіональному творчому об'єднанні «Самоцветы»? Легше стало виставлятися? З'явилися нові поціновувачі творчості й покупці?",
        a: "Я регулярно беру участь у їхніх виставках, а також включений до нещодавно виданого каталогу запорізьких художників. Каталог являє собою перелік учасників об'єднання з фотографією кожного, невеликою статтею й кількома репродукціями картин. Усього там близько п'ятдесяти осіб – як живих, так і мертвих. «Самоцветы» – це взагалі об'єднання художників, що займаються народною творчістю, а гіпс, як я вважаю, цілком народний матеріал, тож тут немає жодної суперечності. Що ж до покупців, то це процес непередбачуваний. Усе дуже випадково.",
      },
      {
        q: "Запоріжжя – індустріальний Вавилон: як відомо, на будівництво промислових гігантів з'їхалися з усього Союзу тисячі людей, тому здавна наша доля – космополітизм. Чи відчуваєш ти себе в цих умовах інтегрованим у національну культуру?",
        a: "На моє глибоке переконання, національна культура в усьому світі, а в Україні особливо, перебуває в повному занепаді. Винна в цьому не лише урбанізація й глобальне поширення поп‑сурогату мистецтва, а й регіональні особливості. Українська нація протягом багатьох сотень років ставилася під сумнів сусіднім «братнім» народом. І асиміляція, і заборона спілкуватися рідною мовою – це ще не найстрашніше, що з нею відбувалося. Найгірше – геноцид, учинений у минулому столітті за вказівкою російської компартії. Мільйони селян, загиблих від голоду, тисячі знищених найкращих представників національної інтелігенції й сотні розстріляних українських письменників. Усе просто вирубали під корінь! Ми живемо на згарищі, тож це питання не має під собою жодного підґрунтя. Але відчай все одно недоречний. Можливо, саме сьогодні ми стоїмо на порозі творення нової культури, вільної від будь‑яких табу. А період анархії, неминуче спровокованої раптовим визволенням, здається, вже минув.",
      },
    ],
    footer: "Олег Шинкаренко, спеціально для газети «Істеблішмент». 2006",
  },
  en: {
    title: "Serhiy Zarudnyak",
    byline: "Conversation about life and art",
    intro: [
      "Serhiy Zarudnyak is obviously one of the most interesting artists in the city of Zaporizhzhia. He participated in the \"Image of the 90s\" exhibitions, as well as in cartoon exhibitions, and was published in the local press as a cartoonist. A penchant for the grotesque combined with an economy of artistic means—formal minimalism—allows him to achieve a polysemy of meaning in his works. Thus, his paintings sometimes appear to the viewer—at least at first glance—as an unsolvable riddle. They require attentive, thoughtful, and unhurried perception. Currently, Serhiy works in a wide variety of techniques, including bas-relief, graphics, watercolor, and sgraffito. The latter technique is as whimsical and elaborate as its name: on a white sheet of cardboard or plastic covered with an even layer of black wax, mysterious otherworldly figures are scratched out, as if emerging from the darkness.",
      "Serhiy is also known in our city as a composer and the founder of the musical group \"Shkola Tantsiv\" (Dance School), which performed actively in the early nineties, and in 2003, with a renewed lineup, won first place at the \"Bayda\" author song festival. We had a very meaningful conversation with him about life and art, which is presented below.",
    ],
    qa: [
      {
        q: "In childhood, everyone draws without exception: a pencil is one of the most important children's toys. Do you remember the moment when it became something more for you? How did it happen?",
        a: "When I was five years old, my mother gave me a dozen five-kopeck albums. I don't remember when they ended. I have the feeling that I am still drawing in them. That is to say, I want to say that the play element in drawing is far from the last. To engage in it, one must be a bit of a child. Growing up, many people, unfortunately, lose this ability forever.",
      },
      {
        q: "As an artist, you are characterized by caricature and grotesque; this is especially noticeable in your graphic works. Do eccentric images help to deeper understand the essence of your surroundings, or is there another reason?",
        a: "Tragicomedy is generally my favorite genre in art. And since eccentricity, in my opinion, is a type of tragicomedy, the reason is clear. I want to say that the eccentric, although it often causes a smile, is always tragic in its essence. Charlie Chaplin is a wonderful example of such an eccentric! When he eats his own shoe in one of his films, we laugh, but in our souls, we understand that it is not funny at all. And this is enough to completely outline the situation. Tragicomedy is the most effective genre for solving any artistic tasks because in life everything is also mixed: there is nothing unequivocally and for everyone sad or funny.",
      },
      {
        q: "Most of your bas-reliefs depict deserted cityscapes. Buildings, as part of nature, live their own independent lives, as if they grew like mushrooms. Is this a purely artistic decision or a metaphor for the absorption of humans by the urban jungle?",
        a: "The bas-reliefs are executed in the genre of urban landscape. But that is a general definition that says nothing. Rather, their image is one of neglect, decrepitude, and desolation. Such an emotional tone is dictated by the material from which they are made: gypsum and water-based paints. I wanted to achieve the true effect of wild nature, almost on the verge of cave painting or even sculptures formed as a result of natural weathering of rock. The material helps a lot in this. After all, gypsum is the remains of organisms that died millions of years ago; it is their skeletons. The very idea of using skeletons in the creation of a painting gives it a sense of antiquity, loneliness, something similar to decorative pottery from the excavations of Scythian mounds.",
      },
      {
        q: "In your songs, one feels the folklore tradition of the ancient Slavs and Greeks; some of your artistic works are also built on famous plots, for example, the bas-relief \"Ship of Fools\" or the sgraffito \"Engineer Garin.\" If the current situation of postmodernism has, according to general opinion, led to the exhaustion of culture, what is the role of tradition, and specifically folklore, in the work of a modern artist?",
        a: "Nowadays, the folklore tradition is the last breath of fresh air in art. After all, postmodernism really brought everything to complete exhaustion: everywhere you look, there is collage and parody. The abolition of prohibitions provoked the fall of the last bastions where artists were previously forbidden to enter. When there is nowhere to go and nothing to breathe, the only way out is to use traditional motifs, enriching them with modern content. This is the only way, in my opinion, not to stand still but to move forward.",
      },
      {
        q: "By faith, you are Orthodox. At one time, this Byzantine branch of Christianity gave the most powerful impetus to the development of cultural life in Vladimir Rus: let us recall at least the icons and paintings of Andrei Rublev. How does religiosity affect creativity? Can an artist be an atheist?",
        a: "Of course, an artist can be an atheist. Atheism is also a kind of religion. If a person completely rejects mystical experience, they immediately find a suitable replacement for it. It is enough to remember that when the communists \"abolished\" God, an endless queue immediately lined up for Lenin's mausoleum. And the Babylonian tower of the Palace of Congresses on the site of the demolished Cathedral of Christ the Savior was probably designed for a reason. An artist who realizes the insufficiency of dialectical materialism for depicting a picture of the real world always has a transcendent plane in mind. However, this is not quite about me: after all, my task above all is to create a true image. The transcendent provides additional volume to a two- or three-dimensional image, but since the line between a believer and an atheist is very shaky, it is inappropriate to compete here. An atheist can create a completely mystical work even against their own will. Have you, for example, seen the mural in the foyer of the \"Dniprospecstal\" Palace of Culture? There, Lenin is simply some kind of demiurge, and the Red Army soldiers resemble pagan idols. I cannot believe that this work was created by a non-believing person!",
      },
      {
        q: "Your works hang in the apartments and offices of a wide variety of people in Ukraine, Russia, and abroad. Did participating in the regional creative association \"Samotsvety\" (Gems) change anything in your life? Did it become easier to exhibit? Did new fans of your work and buyers appear?",
        a: "I regularly participate in their exhibitions and am also included in the recently published catalog of Zaporizhzhia artists. The catalog is a list of members of the association with a photograph of each, a short article, and several reproductions of paintings. In total, there are about fifty people there—both living and dead. \"Samotsvety\" is generally an association of artists engaged in folk art, and gypsum, as I believe, is a completely folk material, so there is no contradiction here. As for buyers, this is an unpredictable process. Everything is very accidental.",
      },
      {
        q: "Zaporizhzhia is an industrial Babylon: as is known, thousands of people from all over the Union gathered to build industrial giants, so cosmopolitanism has long been our destiny. Do you feel integrated into national culture under these conditions?",
        a: "In my conviction, national culture all over the world, and in Ukraine especially, is in complete decline. The blame for this lies not only in urbanization and the global spread of pop-surrogate art but also in regional peculiarities. The Ukrainian nation was called into question by its neighboring \"brotherly\" people for many hundreds of years. Both assimilation and the ban on communicating in the native language are not yet the most terrible things that happened to it. The worst is the genocide committed in the last century at the direction of the Russian Communist Party. Millions of peasants who died of hunger, thousands of the best representatives of the national intelligentsia destroyed, and hundreds of shot Ukrainian writers. Everything was simply cut down at the root! We live on ashes, so this question has no basis under it. But despair is still inappropriate. Perhaps it is today that we stand on the threshold of creating a new culture, free from any taboos. And the period of anarchy, inevitably provoked by sudden liberation, seems to have already passed.",
      },
    ],
    footer: "Oleh Shynkarenko, specifically for the newspaper \"Establishment.\" 2006",
  },
};

export default function InterviewPage(): ReactNode {
  const [lang, setLang] = useState<Lang>('ua');
  const c = content[lang];

  return (
    <Layout title="Interview — Serhiy Zarudnyak" description="Interview with Serhiy Zarudnyak">
      <WritingLayout>
        <div className={styles.lead}>
          <div className={styles.portrait}>
            <img
              src="/images/photos/6.jpg"
              alt="Serhiy Zarudnyak"
              className={styles.portraitImg}
            />
          </div>

          <div className={styles.leadText}>
            <header className={styles.header}>
              <div className={styles.titleRow}>
                <h1 className={styles.title}>{c.title}</h1>
                <div className={styles.switcher}>
                  <button
                    className={`${styles.switchBtn} ${lang === 'ua' ? styles.switchBtnActive : ''}`}
                    onClick={() => setLang('ua')}
                  >UA</button>
                  <span className={styles.switchDivider}>|</span>
                  <button
                    className={`${styles.switchBtn} ${lang === 'en' ? styles.switchBtnActive : ''}`}
                    onClick={() => setLang('en')}
                  >EN</button>
                </div>
              </div>
              <p className={styles.byline}>{c.byline}</p>
            </header>

            <div className={styles.intro}>
              {c.intro.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>
        </div>

        <div className={styles.body}>
          {c.qa.map((item, i) => (
            <div key={i} className={styles.qa}>
              <p className={styles.question}>{item.q}</p>
              <p className={styles.answer}>{item.a}</p>
            </div>
          ))}
        </div>

        <footer className={styles.footer}>
          <p>{c.footer}</p>
        </footer>
      </WritingLayout>
    </Layout>
  );
}
