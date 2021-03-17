<template>
  <div>
    <section :style="imageVar" id="header">
      <div class="header-container">
        <div style="position: relative; z-index = 2">
          <h1 class="article-title"> {{ article.title }} </h1>
          <p class="article-info"> {{ article.author_name }} | 2021-03-13 | Historia </p>
        </div>
      </div>
    </section>
    <img class="article-wave" src="../../assets/wave-white.svg" alt="">
    <section id="article-text">
      <div v-html="article.article_text"></div>
    </section>
    <section id="sources">
      <Sources />
    </section>
    <section id="author-profile">
      <ProfileCard :role="article.skribent" :author_name="article.author_name" :author_img="article.author_img" />
    </section>
  </div>
</template>

<script>
import Sources from '@/components/ArticleSources.vue'
import ProfileCard from '@/components/ProfileCard.vue'

export default{
  scrollToTop: true,
  components: {
    Sources,
    ProfileCard
  },
  beforeMount() {
    this.article = this.articles.find(articles => articles.title.replace(/[?]/g, "") === this.$route.params.id )
    console.log(this.article)
  },
  computed: {
    parseText() {
      var i = 0;
      var blockList = this.article.article_text

    },
    imageVar() {
      return {
        '--article-bg': 'url("' + this.article.img + '")'
      }
    }
  },
  //Temporary
  data() {
    return {
      article: {},
      articles: [
        {
          "id": 1,
          "title": "Det viktigaste slaget i Englands historia",
          "preview": "England, idag en del av Storbritannien, är ett land med imponerande historia som går tillbaka tusentals år...",
          "img": "https://i.imgur.com/fqyuZhN.jpg",
          "author_name": "Ludvig Wallman",
          "author_img": "https://scontent.fmmx3-1.fna.fbcdn.net/v/t1.0-1/p100x100/75478423_1211110389075690_287639689299492864_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=7206a8&_nc_ohc=ucbzWn7z_t0AX8cDlp9&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmmx3-1.fna&tp=6&oh=2ba248b9e2b6a41dbfa7b4062d6cf23e&oe=60766E2F",
          "category": "Historia",
          "publish_date": "2021-03-16",
          "role": "Skribent",
          "article_text":  '<p class="paragraph"><b>England, idag en del av Storbritannien, &auml;r ett land med imponerande historia som g&aring;r tillbaka tusentals &aring;r. De brittiska &ouml;arna har varit bebodda sedan brons&aring;ldern och har st&aring;tt inf&ouml;r st&auml;ndiga f&ouml;r&auml;ndringar. Den h&auml;r artikeln behandlar slaget vid Hastings 1066, n&auml;r Harold Godwinson, den siste anglosaxiske kungen av England stupar mot Vilhelm Er&ouml;vraren.F&ouml;r att f&ouml;rst&aring; inneb&ouml;rden av &auml;mnet kr&auml;vs lite bakgrundsinformation:</b></p><p class="paragraph"><img src=\"https://lh3.googleusercontent.com/ybJAfkC8g1vID-O6Dv4C7hLNRJCsjybZCkfYcSe-CnFQRoF9fJdISDXc_kAQO2OlOPKH9Ol5CXjGDg74hvS33JDA-RzX1heA39krxiZyjoM2WCqEO15y9XoaDLufCE4X1hfJQ4Tn\" style=\"height:261px; width:464px\" /></p><p class="paragraph">Anglosaxarna, de styrande i England (och dessf&ouml;rinnan de olika mindre rikena, bl.a Northumbria, Mercia och Wessex) hade varit vid makten sedan Romarrikets fall ~450 e.Kr. De hade, genom sin bas i Wessex, lyckats driva ut vikingarna fr&aring;n mellersta och norra England. D&auml;rmed enade de England under b&ouml;rjan av 900-talet och skapade en gemensam kultur. De talade en tidig form av engelska. Dock b&ouml;r det p&aring;pekas att vikingarna under kortare perioder lyckades &aring;terta delar av England.&nbsp;</p><p class="paragraph">Den barnl&ouml;se anglosaxiske kungen Edvard Bek&auml;nnaren avled den 5 januari 1066 utan att officiellt utn&auml;mna sin tronf&ouml;ljare. Tre m&auml;n gjorde anspr&aring;k p&aring; tronen och f&ouml;rklarade d&auml;rmed sig kung av England:&nbsp;</p><ul><li><span><span><span class="paragraph">Harold Godwinson, jarl av Wessex</span></span></span></li><li><span><span><span  class="paragraph">Vilhelm Er&ouml;vraren, hertig av Normandie</span></span></span></li><li><span><span><span class="paragraph">Harald H&aring;rdr&aring;de, kung av Norge</span></span></span></li></ul><p class="paragraph"><span><span><span  class="paragraph">Enligt den anglosaxiska kr&ouml;nikan uts&aring;g Edvard Harold som sin eftertr&auml;dare p&aring; hans d&ouml;dsb&auml;dd. Dagen d&auml;rp&aring; m&ouml;ttes det kungliga r&aring;det, &ldquo;The Witan&rdquo; som f&ouml;rklarade Godwinson kung. En engelsk kung hade utropats av r&aring;det - detta gav Godwinson det enda anspr&aring;ket p&aring; tronen med laglig fordran. Han kr&ouml;ntes kung samma dag, den 6 januari 1066.&nbsp;</span></span></span></p><p class="paragraph"><span><span><span class="paragraph">Vilhelm baserade sitt anspr&aring;k p&aring; tronen p&aring; att Edvard utlovat honom tronen 15 &aring;r tidigare, 1051, som st&ouml;ds av de normandiska kr&ouml;nikorna. Det finns inga tunga bel&auml;gg f&ouml;r att Edvard skulle ha utlovat tronen till Vilhelm, inte f&ouml;r att det spelade s&aring; stor roll i hans fall, d&aring; hans anspr&aring;k inte ifr&aring;gasattes. Bayeuxtapeten, som skapades efter slaget, utm&aring;lar att Godwinson ska ha svurit en ed av trohet (n&aring;got som togs v&auml;ldigt seri&ouml;st under medeltida Europa) till Vilhelm under en f&auml;rd till Normandie. Vissa k&auml;llor menar att Vilhelm &auml;ven hade f&aring;tt p&aring;ve Alexander IIs v&auml;lsignelse, ett betydande st&ouml;d under medeltiden.&nbsp;</span></span></span></p><p class="paragraph"><span><span><span>Harald H&aring;rdr&aring;de, en k&auml;nd vikingakrigare och skicklig bef&auml;lhavare, baserade sitt anspr&aring;k p&aring; att hans f&ouml;rfader Cnut den store var kung av England 1016-1035. Harold Godwinsons halvbror, Tostig Godwinson, uppmanade H&aring;rdr&aring;de att g&ouml;ra uppror tillsammans med honom mot den nykr&ouml;nte kungen och p&aring; s&aring; s&auml;tt erh&aring;lla tronen. Tostig hade blivit avsatt som jarl av Northumbria av Godwinson, en position han ville &aring;terta. Genom att st&ouml;tta H&aring;rdr&aring;de till tronen kunde han &aring;stadkomma sin ambition.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span></span></span></p><p class="paragraph"><span><span><span>Harold Godwinson b&ouml;rjade redan under v&aring;ren 1066 frambringa en arm&eacute; efter rykten av att Vilhelm p&aring;b&ouml;rjat bygget av en flotta. Vilhelm ans&aring;gs vara det st&ouml;rre hotet. M&aring;naderna gick, och h&ouml;sten b&ouml;rjade krypa in utan n&aring;gon syn p&aring; Vilhelms h&auml;r. Att uppr&auml;tth&aring;lla en hel arm&eacute; &auml;r kostsamt och n&auml;r sk&ouml;rdes&auml;songen anl&auml;nde uppl&ouml;ste Godwinson sin arm&eacute;. Under medeltiden bestod arm&eacute;er fr&auml;mst av b&ouml;nder som i fredstid sk&ouml;tte om sina g&aring;rdar. Agrikultur var ryggraden i alla medeltida ekonomier, Englands likas&aring;.&nbsp;</span></span></span></p><p class="paragraph"><span><span><span>Godwinson drabbades av enorm otur. Endast en vecka efter uppl&ouml;sningen av hans arm&eacute; anl&auml;nde Harald H&aring;rdr&aring;de i Northumbria och lyckades ta kontroll &ouml;ver York, en viktig och strategisk stad. Godwinson marscherade norrut direkt och rekryterade m&auml;n p&aring; v&auml;gen dit. Han lyckades f&aring; ihop en arm&eacute; p&aring; omkring 12000 man. H&aring;rdr&aring;de antog att det skulle dr&ouml;ja innan Godwinsons h&auml;r anl&auml;nde f&ouml;r att m&ouml;ta honom, dels d&aring; Godwinsons arm&eacute; nyligen uppl&ouml;sts och pga det normandiska hotet.</span></span></span></p><p class="paragraph"><span><span><span><img src=\"https://lh3.googleusercontent.com/KLm7gzNU2jj78JUVsK_XES-s66ApJT7sYOTON3rxfU-JDYKA4w72i387YdZYUW_3X14MnFRnwGVC1kwBIcrNJqcemWsCPFHG2LtuLbC80lX4HjZ57x0E8cokSWKW0eKN5uaW5c84\" style=\"height:180px; width:325px\" /></span></span></span><span><span><span><img src=\"https://lh4.googleusercontent.com/TVs0xZSwe7OR_MnSXpQidfZi0X0zi6vLrBi2BEXstz5Rglswt8nRdCPRvQvN6lBSnspDVZdtypceBBYNIFtAvr-N9SkbTgNA3JQ14Wr9_GKojm8k_K15yZgiElOV1qlYB_N_vN9S\" style=\"height:137px; width:267px\" /></span></span></span></p><p class="paragraph"><span><span><span>Godwinson (r&ouml;d) &ouml;verraskade H&aring;rdr&aring;de (bl&aring;) totalt, som hade l&auml;mnat ⅕ av sin arm&eacute; vid b&aring;tarna n&aring;gra kilometer bort. Med dem fanns allas rustningar, d&aring; det var en v&auml;ldigt varm dag. H&aring;rdr&aring;de slogs s&aring;ledes mot en st&ouml;rre arm&eacute; utan rustning, och dog sedermera sj&auml;lv under slaget, som kom att kallas f&ouml;r slaget vid Stamford Bridge. Utav de fr&aring;n b&ouml;rjan 300 l&aring;ngskeppen beh&ouml;vdes bara 24 f&ouml;r hemf&auml;rden till Norge. S&aring; stort var H&aring;rdr&aring;des nederlag, den 25:e september 1066.</span></span></span></p><p class="paragraph"><span><span><span><img src=\"https://lh3.googleusercontent.com/mcPBABhsPbov5_JqlE601zwZxounab_jvMqGAFsSjYwiqmlxWb_JSc9qMIeXiI7chHFFygqFnyPJmcgxRkqUZAzDcYkMRDNcK0Ypesm-gjoC41l3f5_KxcrLKxUlb4LphhEPIOMQ\" style=\"height:204px; width:233px\" /></span></span></span><span><span><span><img src=\"https://lh4.googleusercontent.com/GKSE5zoIAdWRhospcSkKNo5yMQNFg_4a51GQToq3UgQFXEllEouGmJ7_YxiIBtoMU-2Mdpn5_SpekeExrZrfPhwkzVYEHU91LLnwdsfWWJdXCet1b8yZ6OsULja4xKu7tBfxtzNY\" style=\"height:206px; width:307px\" /></span></span></span></p><p class="paragraph"><span><span><span>Vilhelm &aring; andra sidan var samtidigt fast p&aring; kontinenten. Hans arm&eacute;, mellan 8000-13000 m&auml;n och 800 skepp, stod klara f&ouml;r havsf&auml;rden till England redan tidigt i augusti men kunde inte segla pga of&ouml;rdelaktiga norra vindar. Till sist, efter n&auml;stan 2 m&aring;naders v&auml;ntan, v&auml;nde vindarna. Vilhelm och hans h&auml;r n&aring;dde den engelska kusten den 29:e september, ynka 4 dagar efter Godwinsons avg&ouml;rande seger mot vikingarna. Godwinson, kung Harald II av England, var &auml;nnu kvar vid York, 44 mil bort. Snacka om otur f&ouml;r Godwinson! Vilhelm l&auml;grade vid kusten i Sussex och byggde d&auml;r en provisorisk f&auml;stning.&nbsp;</span></span></span></p><p class="paragraph"><span><span><span>Godwinson marscherade i en rasande takt s&ouml;derut, med knappt n&aring;gon &aring;terh&auml;mtning efter det tidigare slaget. Han tvingades &ouml;verge m&aring;nga fotsoldater under marschen och de kvarvarande anl&auml;nde utmattade. Godwinson n&aring;dde Sussex efter tv&aring; veckor med en f&ouml;rst&auml;rkt arm&eacute;.&nbsp;</span></span></span></p><p class="paragraph"><span><span><span><img src=\"https://lh5.googleusercontent.com/mYh-DBSJIxdZu1Mxdni1rS_MCIjLhY6MzNaRz987sMY71Q4TCJ6ioIKBRX2oyPnWTYDZRFDy3AyJPYORHfuj8T07ysxNVnfQ-UFLhPdAgs-1lWlp-c8oYROjhZpZT2FquD8nlIN8\" style=\"height:237px; width:306px\" /></span></span></span></p><p class="paragraph"><span><span><span>De tv&aring; arm&eacute;erna m&ouml;ttes d&auml;refter 10km utanf&ouml;r Hastings. Godwinson (r&ouml;d) best&auml;mde sig f&ouml;r att inta en defensiv position p&aring; en kulle. Att ha h&ouml;jd-f&ouml;rdel var ofta avg&ouml;rande under medeltida slag. Hans arm&eacute; bestod enbart av infanteri, av vilka de allra flesta var f&auml;rska rekryter, med bristande skicklighet och disciplin. Arm&eacute;n bestod &auml;ven av anglosaxiska husm&auml;n, professionella soldater i Godwinsons f&ouml;lje. Normanderna (bl&aring;) d&auml;remot, bestod av en blandning av infanteri, kavalleri, och b&aring;gskyttar, av vilka m&aring;nga tidigare tj&auml;nstgjort under Vilhelm. M&aring;nga utav de f&auml;rska anglosaxiska rekryterna var utrustade med provisoriska vapen, oftast omgjorda lantbruksverktyg. Man tog det man hade helt enkelt. Normanderna &aring; andra sidan var milit&auml;rt v&auml;lutrustade.&nbsp;</span></span></span></p><p class="paragraph"><span><span><span><img src=\"https://lh6.googleusercontent.com/mnx218OJS2eqLTMysRmy--tG06gnQ7A4QA08tnUycCv-z-CyuL0_u2QT8RrR7li8jNwlE1GsVGLI3rNNlcDjRZePFemSZQMZx_ZVzb_78-um5W7gihKQ3jjKFdHSbGFNbNFjbUfq\" style=\"height:185px; width:314px\" /></span></span></span></p><p class="paragraph"><span><span><span>Slaget b&ouml;rjade med normandiska b&aring;gskyttar som f&ouml;rs&ouml;kte f&aring; ett tidigt &ouml;vertag. Det gick inte v&auml;gen d&aring; de sk&ouml;t uppf&ouml;r med en ogynnsam vinkel. Vilhelm skickade d&auml;refter fram infanteriet i hopp att skapa h&aring;l i den anglosaxiske sk&ouml;ldmuren. De anglosaxiska husm&auml;nnen, positionerade l&auml;ngst fram, h&ouml;ll linjen best&auml;mt.&nbsp;</span></span></span></p><p class="paragraph"><span><span><span><img src=\"https://lh6.googleusercontent.com/7SCCzh5_anAubfeyW3PnNa-uh_2jsT0NBF7Pd5-d93xmPJFFthDA74fHzUFB6B7sU7RbZapO7X9-lYs1CjSfhil7cqZAMS6U3LR3VUeZo4cep7tesnwlxal1Bh6UHUA-QW-9Pi5f\" style=\"height:134px; width:301px\" /></span></span></span><span><span><span><img src=\"https://lh6.googleusercontent.com/Kk-qDNibD0KwfKW6A0oI0vCo1y8snGEYuCa0T7w22kqUNSdAtBldsaOdkmzzsGUUASR4MoxeQSQcUHRZl2cqvCBz8bR2zRQezUN02-cdNtLmhn2UzsuGZ67g0qb8tH7xSLEUE0Pf\" style=\"height:175px; width:287px\" /></span></span></span></p><p class="paragraph"><span><span><span>I n&auml;sta skede skickade Vilhelm fram kavalleriet mot mitten av slaget i f&ouml;rhoppningen att med hj&auml;lp av chockv&aring;gen som stormande kavalleri-enheter kan skapa kunna &aring;stadkomma ett h&aring;l i Godwinsons linje. Kavalleriladdningar kunde vara brutala och avg&ouml;rande i ett slag - om de utf&ouml;rdes korrekt och under gynnsamma geografiska villkor. Vilhelms kavalleriladdning tvingades rida uppf&ouml;r en kulle, vilket f&ouml;rsvagade &lsquo;trycket&rsquo; n&auml;r riddarna v&auml;l slog in i den anglosaxiska h&auml;ren.</span></span></span></p><p class="paragraph"><span><span><span><img src=\"https://lh5.googleusercontent.com/I4y_EbFfxK-QUzFfWYf_QlOk_30PoF_J4mvx33p5f-q7JHnACFF7t-BiRntDSnMTE46qeWQrThS9fRRfiCIg7Le2cAjOFsjutHr78zhp8AfPZNym1GrHYjdsP8a8z1kkQ9XFRC3J\" style=\"height:176px; width:300px\" /></span></span></span><span><span><span><img src=\"https://lh3.googleusercontent.com/PuvlWM3RZ8xlNSW6nsjklzhwsWn2MjvKs94OabLCIsTiu3fuQ7zBMnhomnBXlye9c12SanGCJCeZc0twV5HCu45OThH1CIOLD-aszzhdsloMaj2uNNVhufoZJH20OfgtKeUNaT8J\" style=\"height:184px; width:279px\" /></span></span></span></p><p class="paragraph"><span><span><span>Slaget hade p&aring;g&aring;tt i flera timmar med f&ouml;rluster p&aring; b&aring;da sidor n&auml;r normandernas v&auml;nstra flank l&aring;tsades fly och lyckades p&aring; s&aring; s&auml;tt lura in hela den anglosaxiska h&ouml;gra flanken f&ouml;r att sedan omringa och eliminera dem med normandiska reservenheter.&nbsp;</span></span></span></p><p class="paragraph"><span><span><span><img src=\"https://lh3.googleusercontent.com/2SlalaZ6ggS0I1iZLpbLDo17-lcUcR1RRWtXkkswgjkOoMVP4tQbAgSDcNO1TeZWTg7W8DhaFlr4QWqF_MAxGwNMM6uiyGh_OZN02gQA3iZxZtKCBDG1IExev59rNKX9F2m17WDQ\" style=\"height:146px; width:277px\" /></span></span></span></p><p class="paragraph"><span><span><span>Vilhelm fick ett enormt &ouml;vertag. Hans b&aring;gskyttar sk&ouml;t v&aring;g efter v&aring;g med pilar i den allt mindre anglosaxiske h&auml;ren, som f&ouml;rminskade deras redan l&aring;ga stridsmoral. Efter flera timmars strid och m&aring;nga fallna stupade den siste anglosaxiske engelska kungen genom en pil i &ouml;gat. V&auml;gen till den engelske tronen l&aring;g nu obehindrad f&ouml;r Vilhelm, som kr&ouml;ntes till kung av England tv&aring; m&aring;nader senare.&nbsp;</span></span></span></p><p class="paragraph"><span><span><span>Slaget vid Hastings 1066 var den sista framg&aring;ngsrika invasionen av England, och det kom att ha enorma konsekvenser f&ouml;r de brittiska &ouml;arna och &auml;ven f&ouml;r Europas kommande &ouml;den.</span></span></span></p>'       
        },
        {
          "id": 2,
          "title": "Det vi",
          "preview": "England, idag en del av Storbritannien, är ett land med imponerande historia som går tillbaka tusentals år...",
          "img": "https://i.imgur.com/fqyuZhN.jpg",
          "author_name": "Olle Nilsson",
          "author_img": "https://lh3.googleusercontent.com/a-/AOh14GioCtDjsD5KhAFfUuA5wnCgvIeJPpZIrK4guEKT=s400",
          "category": "Historia",
          "publish_date": "2021-03-16",
          "role": "Skribent"
        },
        {
          "id": 3,
          "title": "Det vik",
          "preview": "England, idag en del av Storbritannien, är ett land med imponerande historia som går tillbaka tusentals år...",
          "img": "https://i.imgur.com/fqyuZhN.jpg",
          "author_name": "Olle Nilsson",
          "author_img": "https://lh3.googleusercontent.com/a-/AOh14GioCtDjsD5KhAFfUuA5wnCgvIeJPpZIrK4guEKT=s400",
          "category": "Historia",
          "publish_date": "2021-03-16",
          "role": "Skribent"
        },
        {
          "id": 4,
          "title": "Det vikt",
          "preview": "England, idag en del av Storbritannien, är ett land med imponerande historia som går tillbaka tusentals år...",
          "img": "https://i.imgur.com/fqyuZhN.jpg",
          "author_name": "Olle Nilsson",
          "author_img": "https://lh3.googleusercontent.com/a-/AOh14GioCtDjsD5KhAFfUuA5wnCgvIeJPpZIrK4guEKT=s400",
          "category": "Historia",
          "publish_date": "2021-03-16",
          "role": "Skribent"
        },
        {
          "id": 5,
          "title": "Det vikti",
          "preview": "England, idag en del av Storbritannien, är ett land med imponerande historia som går tillbaka tusentals år...",
          "img": "https://i.imgur.com/fqyuZhN.jpg",
          "author_name": "Olle Nilsson",
          "author_img": "https://lh3.googleusercontent.com/a-/AOh14GioCtDjsD5KhAFfUuA5wnCgvIeJPpZIrK4guEKT=s400",
          "category": "Historia",
          "publish_date": "2021-03-16",
          "role": "Skribent"
        },
        {
          "id": 6,
          "title": "Det viktig",
          "preview": "England, idag en del av Storbritannien, är ett land med imponerande historia som går tillbaka tusentals år...",
          "img": "https://i.imgur.com/fqyuZhN.jpg",
          "author_name": "Olle Nilsson",
          "author_img": "https://lh3.googleusercontent.com/a-/AOh14GioCtDjsD5KhAFfUuA5wnCgvIeJPpZIrK4guEKT=s400",
          "category": "Historia",
          "publish_date": "2021-03-16",
          "role": "Skribent"
        },
        {
          "id": 7,
          "title": "Det viktiga",
          "preview": "England, idag en del av Storbritannien, är ett land med imponerande historia som går tillbaka tusentals år...",
          "img": "https://i.imgur.com/fqyuZhN.jpg",
          "author_name": "Olle Nilsson",
          "author_img": "https://lh3.googleusercontent.com/a-/AOh14GioCtDjsD5KhAFfUuA5wnCgvIeJPpZIrK4guEKT=s400",
          "category": "Historia",
          "publish_date": "2021-03-16",
          "role": "Skribent"
        },
        {
          "id": 8,
          "title": "Det viktigas",
          "preview": "England, idag en del av Storbritannien, är ett land med imponerande historia som går tillbaka tusentals år...",
          "img": "https://i.imgur.com/fqyuZhN.jpg",
          "author_name": "Olle Nilsson",
          "author_img": "https://lh3.googleusercontent.com/a-/AOh14GioCtDjsD5KhAFfUuA5wnCgvIeJPpZIrK4guEKT=s400",
          "category": "Historia",
          "publish_date": "2021-03-16",
          "role": "Skribent"
        }
      ],
    }
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'desc',
          name: 'desc',
          content: 'Home page desc'
        }
      ]
    }
  }
}
</script>

<style scoped>
p {
  font-weight: 500 !important;
}

.header-container {
  position: relative;
  display: block;
  text-align: center;
  padding: 20vw 0;
  background: var(--article-bg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
}

.header-container::before {
  content: '';
  position: absolute;
  z-index: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  background: #FA497D70;
}

  /* Article Title */
  .article-title {
    font-size: 4rem;
    margin: 1%;
  }

  @media screen and (max-width: 500px) {
    .article-title {
      font-size: 3rem;
    }
  }

  /* Article Info */
  .article-info {
    font-size: 1.5rem;
  }

  @media screen and (max-width: 500px) {
    .article-info {
      font-size: 1rem;
    }
  }

.article-wave {
  position: relative;
  margin-top: -50%;
  z-index: 5;
}

/* Article Text */
#article-text {
  padding: 0 30vw;
  font-weight: 400;
  font-size: 1.0625rem;
}

@media screen and (max-width: 1000px) {
  #article-text {
    padding: 0vw 15vw 10vw 15vw;
  }
}

@media screen and (max-width: 500px) {
  #article-text {
    padding: 25vw 10vw;
  }
}

/* Sources */
#sources {
  padding: 10vw 29vw 5vw 29vw;
}

@media screen and (max-width: 1000px) {
  #sources {
    padding: 5vw 10vw 10vw 10vw;
  }
}

/* Surface Duo */
@media screen and (max-width: 720px){
  #sources {
    padding: 15vw 15vw;
  } 
}

/* Author Profile Card */
#author-profile {
  padding: 0 29vw 10vw 29vw;
}

@media screen and (max-width: 1000px) {
  #author-profile {
    padding: 5vw 10vw 10vw 10vw;
  }
}

/* Surface Duo */
@media screen and (max-width: 720px){
  #author-profile {
    padding: 15vw 15vw;
  } 
}

.article_text >>> .paragraph {
  font-size: 5rem !important;
}
</style>