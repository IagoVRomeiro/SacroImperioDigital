export type LiturgiaTexto = { referencia: string; texto: string; titulo?: string; refrao?: string };

export type LiturgiaDia = {
  primeiraLeitura?: LiturgiaTexto;
  salmo: LiturgiaTexto;
  segundaLeitura?: LiturgiaTexto;
  evangelho: LiturgiaTexto;
};

export const liturgia: Record<string, LiturgiaDia> = {
  "2026-11-02": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Jó 19,1.23-27a",
      "texto": "Leitura do Livro de Jó.\n\n1 Jó tomou a palavra e disse: 23 \"Gostaria que minhas palavras fossem escritas e gravadas numa inscrição 24 com ponteiro de ferro e com chumbo, cravadas na rocha para sempre! 25 Eu sei que o meu redentor está vivo e que, por último, se levantará sobre o pó; 26 e depois que tiverem destruído esta minha pele, na minha carne, verei a Deus. 27a Eu mesmo o verei, meus olhos o contemplarão, e não os olhos de outros\"."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 23(24),1-2.3-4ab.5-6 (R. cf. 6)",
      "refrao": "O Senhor é o pastor que me conduz, não me falta coisa alguma.",
      "texto": "O Senhor é o pastor que me conduz; não me falta coisa alguma. Pelos prados e campinas verdejantes ele me leva a descansar. *\nPara as águas repousantes me encaminha, e restaura as minhas forças. Ele me guia no caminho mais seguro, pela honra do seu nome. *\nMesmo que eu passe pelo vale tenebroso, nenhum mal eu temerei. Estais comigo com bastão e com cajado, eles me dão a segurança! *\nPreparais à minha frente uma mesa, bem à vista do inimigo; com óleo vós ungis minha cabeça, e o meu cálice transborda. *\nFelicidade e todo bem hão de seguir-me, por toda a minha vida; e, na casa do Senhor, habitarei pelos tempos infinitos. *"
    },
    "segundaLeitura": {
      "titulo": "SEGUNDA LEITURA",
      "referencia": "1Cor 15,20-24a.25-28",
      "texto": "Leitura da Primeira Carta de São Paulo aos Coríntios.\n\nIrmãos: 20 Cristo ressuscitou dos mortos como primícias dos que morreram. 21 Com efeito, por um homem veio a morte e é também por um homem que vem a ressurreição dos mortos. 22 Como em Adão todos morrem, assim também em Cristo todos reviverão. 23 Porém, cada qual segundo uma ordem determinada: Em primeiro lugar, Cristo, como primícias; depois, os que pertencem a Cristo, por ocasião da sua vinda. 24a A seguir, será o fim, quando ele entregar a realeza a Deus-Pai. 25 Pois é preciso que ele reine até que todos os seus inimigos estejam debaixo de seus pés. 26 O último inimigo a ser destruído é a morte. 27 Com efeito, \"Deus pôs tudo debaixo de seus pés\". Mas, quando ele disser: \"Tudo está submetido\", é claro que estará excluído dessa submissão aquele que submeteu tudo a Cristo. 28 E, quando todas as coisas estiverem submetidas a ele, então o próprio Filho se submeterá àquele que lhe submeteu todas as coisas, para que Deus seja tudo em todos."
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 12,35-40",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas.\n\nNaquele tempo, disse Jesus a seus discípulos: 35 Que vossos rins estejam cingidos e as lâmpadas acesas. 36 Sede como homens que estão esperando seu senhor voltar de uma festa de casamento, para lhe abrir, imediatamente, a porta, logo que ele chegar e bater. 37 Felizes os empregados que o senhor encontrar acordados quando chegar. Em verdade eu vos digo: Ele mesmo vai cingir-se, fazê-los sentar-se à mesa e, passando, os servirá. 38 E caso ele chegue à meia-noite ou às três da madrugada, felizes serão, se assim os encontrar! 39 Mas ficai certos: se o dono da casa soubesse a hora em que o ladrão iria chegar, não deixaria que arrombasse a sua casa. bVós também, ficai preparados! Porque o Filho do Homem vai chegar na hora em que menos o esperardes\"."
    }
  },
  "2026-11-03": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Fl 2,5-11",
      "texto": "Leitura da Carta de São Paulo aos Filipenses.\n\nIrmãos, 5 tende entre vós o mesmo sentimento que existe em Cristo Jesus. 6 Jesus Cristo, existindo em condição divina, não fez do ser igual a Deus uma usurpação, 7 mas ele esvaziou-se a si mesmo, assumindo a condição de escravo e tornando-se igual aos homens. Encontrado com aspecto humano, 8 humilhou-se a si mesmo, fazendo-se obediente até a morte, e morte de cruz. 9 Por isso, Deus o exaltou acima de tudo e lhe deu o Nome que está acima de todo nome. 10 Assim, ao nome de Jesus, todo o joelho se dobre no céu, na terra e abaixo da terra, 11 e toda língua proclame : \"Jesus Cristo é o Senhor\" - para a glória de Deus Pai."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 21(22),26b-27.28-30a.31-32 (R. 26a)",
      "refrao": "Ó Senhor, sois meu louvor em meio à grande assembleia!",
      "texto": "Cumpro meus votos ante aqueles que vos temem! Vossos pobres vão comer e saciar-se, e os que procuram o Senhor o louvarão: \"Seus corações tenham a vida para sempre!\" *\nLembrem-se disso os confins de toda a terra, para que voltem ao Senhor e se convertam, e se prostrem, adorando, diante dele todos os povos e as famílias das nações. Pois ao Senhor é que pertence a realeza; ele domina sobre todas as nações. Somente a ele adorarão os poderosos. *\nToda a minha descendência há de servi-lo; às futuras gerações anunciará, o poder e a justiça do Senhor; ao povo novo que há de vir, ela dirá: \"Eis a obra que o Senhor realizou!\" *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 14,15-24",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas.\n\nNaquele tempo, 15 um homem que estava à mesa, disse a Jesus: \"Feliz aquele que come o pão no Reino de Deus!\" 16 Jesus respondeu: \"Um homem deu um grande banquete e convidou muitas pessoas. 17 Na hora do banquete, mandou seu empregado dizer aos convidados: 'Vinde, pois tudo está pronto'. 18 Mas todos, um a um, começaram a dar desculpas. O primeiro disse: 'Comprei um campo, e preciso ir vê-lo. Peço-te que aceites minhas desculpas'. 19 Um outro disse: 'Comprei cinco juntas de bois, e vou experimentá-las. Peço-te que aceites minhas desculpas'. 20 Um terceiro disse: 'Acabo de me casar e, por isso, não posso ir'. 21 O empregado voltou e contou tudo ao patrão. Então o dono da casa ficou muito zangado e disse ao empregado: 'Sai depressa pelas praças e ruas da cidade. Traze para cá os pobres, os aleijados, os cegos e os coxos'. 22 O empregado disse: 'Senhor, o que tu mandaste fazer foi feito, e ainda há lugar'. 23 O patrão disse ao empregado: 'Sai pelas estradas e atalhos, e obriga as pessoas a virem aqui, para que minha casa fique cheia'. 24 Pois eu vos digo: nenhum daqueles que foram convidados provará do meu banquete'\"."
    }
  },
  "2026-11-04": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Fl 2,12-18",
      "texto": "Leitura da Carta de São Paulo aos Filipenses.\n\n12 Meus queridos, como sempre fostes obedientes, não só em minha presença, mas ainda mais agora na minha ausência, trabalhai para a vossa salvação, com temor e tremor. 13 Pois é Deus que realiza em vós tanto o querer como o fazer, conforme o seu desígnio benevolente. 14 Fazei tudo sem reclamar ou murmurar, 15 para que sejais livres de repreensão e ambiguidade, filhos de Deus sem defeito, no meio desta geração depravada e pervertida, na qual brilhais como os astros no universo. 16 Conservai com firmeza a palavra da vida. Assim, no dia de Cristo, terei a glória de não ter corrido em vão, nem trabalhado inutilmente. 17 E ainda que eu seja oferecido em libação, no sacrifício que é o sagrado serviço de vossa fé, fico feliz e alegro-me com todos vós. 18 Vós também, alegrai-vos pelo mesmo motivo e congratulai-vos comigo."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 26(27),1.4.13-14 (R. 1a)",
      "refrao": "O Senhor é minha luz e salvação!",
      "texto": "O Senhor é minha luz e salvação; de quem eu terei medo? O Senhor é a proteção da minha vida; perante quem eu tremerei? *\nAo Senhor eu peço apenas uma coisa, e é só isto que eu desejo: habitar no santuário do Senhor por toda a minha vida; saborear a suavidade do Senhor e contemplá-lo no seu templo. *\nSei que a bondade do Senhor eu hei de ver na terra dos viventes. Espera no Senhor e tem coragem, espera no Senhor! *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 14,25-33",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas.\n\nNaquele tempo, 25 grandes multidões acompanhavam Jesus. Voltando-se, ele lhes disse: 26 \"Se alguém vem a mim, mas não se desapega de seu pai e sua mãe, sua mulher e seus filhos, seus irmãos e suas irmãs e até da sua própria vida, não pode ser meu discípulo. 27 Quem não carrega sua cruz e não caminha atrás de mim, não pode ser meu discípulo. 28 Com efeito: qual de vós, querendo construir uma torre, não se senta primeiro e calcula os gastos, para ver se tem o suficiente para terminar? Caso contrário, 29 ele vai lançar o alicerce e não será capaz de acabar. E todos os que virem isso começarão a caçoar, dizendo: 30 'Este homem começou a construir e não foi capaz de acabar!' 31 Ou ainda: Qual o rei que ao sair para guerrear com outro, não se senta primeiro e examina bem se com dez mil homens poderá enfrentar o outro que marcha contra ele com vinte mil? 32 Se ele vê que não pode, enquanto o outro rei ainda está longe, envia mensageiros para negociar as condições de paz. 33 Do mesmo modo, portanto, qualquer um de vós, se não renunciar a tudo o que tem, não pode ser meu discípulo!\""
    }
  },
  "2026-11-05": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Fl 3,3-8a",
      "texto": "Leitura da Carta de São Paulo aos Filipenses.\n\nIrmãos, 3 os verdadeiros circuncidados somos nós, que prestamos culto pelo Espírito de Deus, colocamos a nossa glória em Cristo Jesus e não pomos confiança na carne. 4 Aliás, também eu poderia pôr minha confiança na carne. Pois, se algum outro pensa que pode confiar na carne, eu mais ainda. 5 Fui circuncidado no oitavo dia, sou da raça de Israel, da tribo de Benjamim, hebreu filho de hebreus. Em relação à Lei, fariseu, 6 pelo zelo, perseguidor da Igreja de Deus; quanto à justiça que vem da Lei, sempre irrepreensível. 7 Mas essas coisas, que eram vantagens para mim, considerei-as como perda, por causa de Cristo. 8a Na verdade, considero tudo como perda diante da vantagem suprema que consiste em conhecer a Cristo Jesus, meu Senhor."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 104(105),2-3.4-5.6-7 (R. 3b)",
      "refrao": "Exulte o coração dos que buscam o Senhor!",
      "texto": "Cantai, entoai salmos para ele, publicai todas as suas maravilhas! Gloriai-vos em seu nome que é santo, exulte o coração que busca a Deus! *\nProcurai o Senhor Deus e seu poder, buscai constantemente a sua face! Lembrai as maravilhas que ele fez, seus prodígios e as palavras de seus lábios! *\nDescendentes de Abraão, seu servidor, e filhos de Jacó, seu escolhido, ele mesmo, o Senhor, é nosso Deus, vigoram suas leis em toda a terra. *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 15,1-10",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas.\n\nNaquele tempo, 1 os publicanos e pecadores aproximavam-se de Jesus para o escutar. 2 Os fariseus, porém, e os mestres da Lei criticavam Jesus. \"Este homem acolhe os pecadores e faz refeição com eles\". 3 Então Jesus contou-lhes esta parábola: 4 \"Se um de vós tem cem ovelhas e perde uma, não deixa as noventa e nove no deserto, e vai atrás daquela que se perdeu, até encontrá-la? 5 Quando a encontra, coloca-a nos ombros com alegria, 6 e, chegando a casa, reúne os amigos e vizinhos, e diz: 'Alegrai-vos comigo! Encontrei a minha ovelha que estava perdida!' 7 Eu vos digo: Assim haverá no céu mais alegria por um só pecador que se converte, do que por noventa e nove justos que não precisam de conversão. 8 E se uma mulher tem dez moedas de prata e perde uma, não acende uma lâmpada, varre a casa e a procura cuidadosamente, até encontrá-la? 9 Quando a encontra, reúne as amigas e vizinhas, e diz: 'Alegrai-vos comigo! Encontrei a moeda que tinha perdido!' 10 Por isso, eu vos digo, haverá alegria entre os anjos de Deus por um só pecador que se converte\"."
    }
  },
  "2026-11-06": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Fl 3,17-4,1",
      "texto": "Leitura da Carta de São Paulo aos Filipenses.\n\n17 Sede meus imitadores, irmãos, e observai os que vivem de acordo com o exemplo que nós damos. 18 Já vos disse muitas vezes, e agora o repito, chorando: há muitos por aí que se comportam como inimigos da cruz de Cristo. 19 O fim deles é a perdição, o deus deles é o estômago, a glória deles está no que é vergonhoso e só pensam nas coisas terrenas. 20 Nós, porém, somos cidadãos do céu. De lá aguardamos o nosso Salvador, o Senhor, Jesus Cristo. 21 Ele transformará o nosso corpo humilhado e o tornará semelhante ao seu corpo glorioso, com o poder que tem de sujeitar a si todas as coisas. 4,1 Assim, meus irmãos, a quem quero bem e dos quais sinto saudade, minha alegria, minha coroa, meus amigos, continuai firmes no Senhor."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 121(122),1-2.3-4a.4b-5 (R. 1)",
      "refrao": "Que alegria, quando me disseram: Vamos à casa Senhor!",
      "texto": "Que alegria, quando ouvi que me disseram: \"Vamos à casa do Senhor!\" E agora nossos pés já se detêm, Jerusalém, em tuas portas. *\nJerusalém, cidade bem edificada num conjunto harmonioso; para lá sobem as tribos de Israel, as tribos do Senhor. *\nPara louvar, segundo a lei de Israel, o nome do Senhor. A sede da justiça lá está e o trono de Davi. *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 16,1-8",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas.\n\nNaquele tempo, 1 Jesus disse aos discípulos: \"Um homem rico tinha um administrador que foi acusado de esbanjar os seus bens. 2 Ele o chamou e lhe disse: 'Que é isto que ouço a teu respeito? Presta contas da tua administração, pois já não podes mais administrar meus bens'. 3 O administrador então começou a refletir: 'O senhor vai me tirar a administração. Que vou fazer? Para cavar, não tenho forças; de mendigar, tenho vergonha. 4 Ah! Já sei o que fazer, para que alguém me receba em sua casa quando eu for afastado da administração'. 5 Então ele chamou cada um dos que estavam devendo ao seu patrão. E perguntou ao primeiro: 'Quanto deves ao meu patrão?' 6 Ele respondeu: 'Cem barris de óleo!' O administrador disse: 'Pega a tua conta, senta-te, depressa, e escreve cinquenta!' 7 Depois ele perguntou a outro: 'E tu, quanto deves?' Ele respondeu: 'Cem medidas de trigo'. O administrador disse: 'Pega tua conta e escreve oitenta'. 8 E o senhor elogiou o administrador desonesto, porque ele agiu com esperteza. Com efeito, os filhos deste mundo são mais espertos em seus negócios do que os filhos da luz\"."
    }
  },
  "2026-11-07": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Fl 4,10-19",
      "texto": "Leitura da Carta de São Paulo aos Filipenses.\n\nIrmãos, 10 Grande foi minha alegria no Senhor, porque afinal vi florescer vosso afeto por mim. Na verdade estava sempre vivo mas faltava-lhe oportunidade de manifestar-se. 11 Não é por necessidade minha que vos digo, pois aprendi muito bem a contentar-me em qualquer situação. 12 Sei viver na miséria e sei viver na abundância. Eu aprendi o segredo de viver em toda e qualquer situação, estando farto ou passando fome, tendo de sobra ou sofrendo necessidade. 13 Tudo posso naquele que me dá força. 14 No entanto, fizestes bem em compartilhar as minhas dificuldades. 15 Filipenses, bem sabeis que, no início da pregação do evangelho, quando parti da Macedônia, nenhuma igreja, a não ser a vossa, se juntou a mim numa relação de crédito. 16 Já em Tessalônica, mais de uma vez, me enviastes o que eu precisava. 17 Não que eu procure presentes, porém, o que eu busco é o fruto que cresça no vosso crédito. 18 Agora, tenho tudo em abundância. Tenho até de sobra, desde que recebi de Epafrodito o vosso donativo, qual perfume suave, sacrifício aceito e agradável a Deus. 19 O meu Deus proverá esplendidamente com sua riqueza a todas as vossas necessidades, em Cristo Jesus."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 111(112),1-2.5-6.8a e 9 (R. 1a)",
      "refrao": "Feliz aquele que respeita o Senhor!",
      "texto": "Feliz o homem que respeita o Senhor e que ama com carinho a sua lei! Sua descendência será forte sobre a terra, abençoada a geração dos homens retos! *\nFeliz o homem caridoso e prestativo, que resolve seus negócios com justiça. Porque jamais vacilará o homem reto, sua lembrança permanece eternamente! *\nSeu coração está tranquilo e nada teme, e confusos há de ver seus inimigos. Ele reparte com os pobres os seus bens, permanece para sempre o bem que fez, e crescerão a sua glória e seu poder. *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 16,9-15",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas.\n\nNaquele tempo, disse Jesus aos seus discípulos: 9 \"Usai o dinheiro injusto para fazer amigos, pois, quando acabar, eles vos receberão nas moradas eternas. 10 Quem é fiel nas pequenas coisas também é fiel nas grandes, e quem é injusto nas pequenas também é injusto nas grandes. 11 Por isso, se vós não sois fiéis no uso do dinheiro injusto, quem vos confiará o verdadeiro bem? 12 E se não sois fiéis no que é dos outros, quem vos dará aquilo que é vosso? 13 Ninguém pode servir a dois senhores. porque ou odiará um e amará o outro, ou se apegará a um e desprezará o outro. Vós não podeis servir a Deus e ao dinheiro\". 14 Os fariseus, que eram amigos do dinheiro, ouviam tudo isso e riam de Jesus. 15 Então, Jesus lhes disse: \"Vós gostais de parecer justos diante dos homens, mas Deus conhece vossos corações. Com efeito, o que é importante para os homens, é detestável para Deus\"."
    }
  },
  "2026-11-08": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Sb 6,12-16",
      "texto": "Leitura do Livro da Sabedoria.\n\n12 A Sabedoria é resplandecente e sempre viçosa. Ela é facilmente contemplada por aqueles que a amam, e é encontrada por aqueles que a procuram. 13 Ela até se antecipa, dando-se a conhecer aos que a desejam. 14 Quem por ela madruga não se cansará, pois a encontrará sentada à sua porta. 15 Meditar sobre ela é a perfeição da prudência; e quem ficar acordado por causa dela em breve há de viver despreocupado. 16 Pois ela mesma sai à procura dos que a merecem, cheia de bondade, aparece-lhes nas estradas e vai ao seu encontro em todos os seus projetos."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 62(63),2.3-4.5-6.7-8 (R. 2b)",
      "refrao": "A minh'alma tem sede de vós, e vos deseja, ó Senhor.",
      "texto": "Sois vós, ó Senhor, o meu Deus! Desde a aurora ansioso vos busco! A minh'alma tem sede de vós, minha carne também vos deseja, como terra sedenta e sem água! *\nVenho, assim, contemplar-vos no templo, para ver vossa glória e poder. Vosso amor vale mais do que a vida: e por isso meus lábios vos louvam. *\nQuero, pois, vos louvar pela vida, e elevar para vós minhas mãos! A minh'alma será saciada, como em grande banquete de festa; cantará a alegria em meus lábios. *\nPenso em vós no meu leito, de noite, nas vigílias suspiro por vós! Para mim fostes sempre um socorro; de vossas asas à sombra eu exulto! *"
    },
    "segundaLeitura": {
      "titulo": "SEGUNDA LEITURA",
      "referencia": "1Ts 4,13-18",
      "texto": "Leitura da Primeira Carta de São Paulo aos Tessalonicenses.\n\n13 Irmãos: não queremos deixar-vos na incerteza a respeito dos mortos, para que não fiqueis tristes como os outros, que não têm esperança. 14 Se Jesus morreu e ressuscitou — e esta é nossa fé — de modo semelhante Deus trará de volta, com Cristo, os que através dele entraram no sono da morte. 15 Isto vos declaramos, segundo a palavra do Senhor: nós que formos deixados com vida para a vinda do Senhor não levaremos vantagem em relação aos que morreram. 16 Pois o Senhor mesmo, quando for dada a ordem, à voz do arcanjo e ao som da trombeta, descerá do céu, e os que morreram em Cristo ressuscitarão primeiro. 17 Em seguida, nós que formos deixados com vida seremos arrebatados com eles nas nuvens, para o encontro com o Senhor, nos ares. E assim estaremos sempre com o Senhor. 18 Exortai-vos, pois, uns aos outros, com essas palavras."
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Mt 25,1-13",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Mateus.\n\nNaquele tempo, disse Jesus a seus discípulos esta parábola: 1 \"O Reino dos Céus é como a história das dez jovens que pegaram suas lâmpadas de óleo e saíram ao encontro do noivo. 2 Cinco delas eram imprevidentes, e as outras cinco eram previdentes. 3 As imprevidentes pegaram as suas lâmpadas, mas não levaram óleo consigo. 4 As previdentes, porém, levaram vasilhas com óleo junto com as lâmpadas. 5 O noivo estava demorando, e todas elas acabaram cochilando e dormindo. 6 No meio da noite, ouviu-se um grito: 'O noivo está chegando. Ide ao seu encontro!' 7 Então as dez jovens se levantaram e prepararam as lâmpadas. 8 As imprevidentes disseram às previdentes: 'Dai-nos um pouco de óleo, porque nossas lâmpadas estão se apagando'. 9 As previdentes responderam: 'De modo nenhum, porque o óleo pode ser insuficiente para nós e para vós. É melhor irdes comprar dos vendedores'. 10 Enquanto elas foram comprar óleo, o noivo chegou, e as que estavam preparadas entraram com ele para a festa de casamento. E a porta se fechou. 11 Por fim, chegaram também as outras jovens e disseram: 'Senhor! Senhor! Abre-nos a porta!' 12 Ele, porém, respondeu: 'Em verdade eu vos digo: Não vos conheço!' 13 Portanto, ficai vigiando, pois não sabeis qual será o dia, nem a hora\"."
    }
  },
  "2026-11-09": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Ez 47,1-2.8-9.12",
      "texto": "Leitura da Profecia de Ezequiel.\n\nNaqueles dias, 1 o homem fez-me voltar até a entrada do Templo e eis que saía água da sua parte subterrânea na direção leste, porque o Templo estava voltado para o oriente; a água corria do lado direito do Templo, ao sul do altar. 2 Ele fez-me sair pela porta que dá para o norte, e fez-me dar uma volta por fora, até à porta que dá para o leste, onde eu vi a água jorrando do lado direito. 8 Então ele me disse: \"Estas águas correm para a região oriental, descem para o vale do Jordão, desembocam nas águas salgadas do mar, e elas se tornarão saudáveis. 9 Onde o rio chegar, todos os animais que ali se movem poderão viver. Haverá peixes em quantidade, pois ali desembocam as águas que trazem saúde; e haverá vida onde chegar o rio. 12 Nas margens junto ao rio, de ambos os lados, crescerá toda espécie de árvores frutíferas; suas folhas não murcharão e seus frutos jamais se acabarão: cada mês darão novos frutos, pois as águas que banham as árvores saem do santuário. Seus frutos servirão de alimento e suas folhas serão remédio\".\nOu (escolhe-se uma das leituras)\nPrimeira Leitura (1Cor 3,9c-11.16-17)Leitura da Primeira Carta de São Paulo aos Coríntios\nIrmãos, 9c vós sois lavoura de Deus, construção de Deus. 10 Segundo a graça que Deus me deu, eu coloquei — como experiente mestre de obra — o alicerce, sobre o qual outros se põem a construir. Mas cada qual veja bem como está construindo. 11 De fato, ninguém pode colocar outro alicerce diferente do que está aí, já colocado: Jesus Cristo. 16 Acaso não sabeis que sois santuário de Deus e que o Espírito de Deus mora em vós? 17 Se alguém destruir o santuário de Deus, Deus o destruirá, pois o santuário de Deus é santo, e vós sois esse santuário."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 45(46),2-3.5-6.8-9 (R. 5)",
      "refrao": "Os braços de um rio vêm trazer alegria à Cidade de Deus, à morada do Altíssimo.",
      "texto": "O Senhor para nós é refúgio e vigor, sempre pronto, mostrou-se um socorro na angústia; assim não tememos, se a terra estremece, se os montes desabam, caindo nos mares. *\nOs braços de um rio vêm trazer alegria à Cidade de Deus, à morada do Altíssimo. Quem a pode abalar? Deus está no seu meio! Já bem antes da aurora, ele vem ajudá-la. *\nConosco está o Senhor do universo! O nosso refúgio é o Deus de Jacó! Vinde ver, contemplai os prodígios de Deus e a obra estupenda que fez no universo: reprime as guerras na face da terra. *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Jo 2, 13-22",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo João.\n\n13 Estava próxima a Páscoa dos judeus e Jesus subiu a Jerusalém. 14 No Templo, encontrou os vendedores de bois, ovelhas e pombas e os cambistas que estavam aí sentados. 15 Fez então um chicote de cordas e expulsou todos do Templo, junto com as ovelhas e os bois; espalhou as moedas e derrubou as mesas dos cambistas. 16 E disse aos que vendiam pombas: \"Tirai isto daqui! Não façais da casa de meu Pai uma casa de comércio!\" 17 Seus discípulos lembraram-se, mais tarde, que a Escritura diz: \"O zelo por tua casa me consumirá\". 18 Então os judeus perguntaram a Jesus: \"Que sinal nos mostras para agir assim?\" 19 Ele respondeu: \"Destruí, este Templo, e em três dias o levantarei\". 20 Os judeus disseram: \"Quarenta e seis anos foram precisos para a construção deste santuário e tu o levantarás em três dias?\" 21 Mas Jesus estava falando do Templo do seu corpo. 22 Quando Jesus ressuscitou, os discípulos lembraram-se do que ele tinha dito e acreditaram na Escritura e na palavra dele."
    }
  },
  "2026-11-10": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Tt 2,1-8.11-14",
      "texto": "Leitura da Carta de São Paulo a Tito.\n\nCaríssimo, 1 o teu ensino seja conforme à sã doutrina. 2 Os mais velhos sejam sóbrios, ponderados, prudentes, fortes na fé, na caridade, na paciência. 3 Assim também as mulheres idosas observem uma conduta santa, não sejam caluniadoras nem escravas do vinho, mas mestras do bem. 4 Saibam ensinar as jovens a amarem seus maridos, a cuidarem dos filhos, 5 a serem prudentes, castas, boas donas-de-casa, dóceis para os maridos, bondosas, para que a palavra de Deus não seja difamada. 6 Exorta igualmente os jovens a serem moderados 7 e mostra-te em tudo exemplo de boas obras, de integridade na doutrina, de ponderação, 8 de palavra sã e irrepreensível, para que os adversários se confundam, não tendo nada de mal para dizer de nós. 11 Pois a graça de Deus se manifestou trazendo salvação para todos os homens. 12 Ela nos ensina a abandonar a impiedade e as paixões mundanas e a viver neste mundo com equilíbrio, justiça e piedade, 13 aguardando a feliz esperança e a manifestação da glória do nosso grande Deus e Salvador, Jesus Cristo. 14 Ele se entregou por nós, para nos resgatar de toda a maldade e purificar para si um povo que lhe pertença e que se dedique a praticar o bem."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 36(37),3-4.18-23.27 e 29 (R. 39a)",
      "refrao": "A salvação de quem é justo, vem de Deus!",
      "texto": "Confia no Senhor e faze o bem, e sobre a terra habitarás em segurança. Coloca no Senhor tua alegria, e ele dará o que pedir teu coração. *\nO Senhor cuida da vida dos honestos, e sua herança permanece eternamente. É o Senhor quem firma os passos dos mortais e dirige o caminhar dos que lhe agradam. *\nAfasta-te do mal e faze o bem, e terás tua morada para sempre. mas os justos herdarão a nova terra e nela habitarão eternamente. *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 17,7-10",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas.\n\nNaquele tempo, disse Jesus: 7 \"Se algum de vós tem um empregado que trabalha a terra ou cuida dos animais, por acaso vai dizer-lhe, quando ele volta do campo: 'Vem depressa para a mesa?' 8 Pelo contrário, não vai dizer ao empregado: 'Prepara-me o jantar, cinge-te e serve-me, enquanto eu como e bebo; depois disso tu poderás comer e beber?' 9 Será que vai agradecer ao empregado, porque fez o que lhe havia mandado? 10 Assim também vós: quando tiverdes feito tudo o que vos mandaram, dizei: 'Somos servos inúteis; fizemos o que devíamos fazer' \"."
    }
  },
  "2026-11-11": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Tt 3,1-7",
      "texto": "Leitura da Carta de São Paulo a Tito.\n\nCaríssimo, 1 admoesta a todos que vivam submissos aos príncipes e às autoridades, que lhes obedeçam e estejam prontos para qualquer boa obra. 2 Não injuriem a ninguém, sejam pacíficos, afáveis e deem provas de mansidão para com todos os homens. 3 Porque nós outrora éramos insensatos, rebeldes, extraviados, escravos de toda sorte de paixões e prazeres, vivendo na maldade e na inveja, dignos de ódio e odiando uns aos outros. 4 Mas um dia manifestou-se a bondade de Deus, nosso Salvador, e o seu amor pelos homens: 5 Ele salvou-nos não por causa dos atos de justiça que tivéssemos praticado, mas por sua misericórdia; quando renascemos e fomos renovados no batismo pelo Espírito Santo, 6 que ele derramou abundantemente sobre nós por meio de nosso Salvador Jesus Cristo. 7 Justificados, assim, pela sua graça, nos tornamos na esperança herdeiros da vida eterna."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 22(23),1-3a.3b-4.5.6 (R. 1)",
      "refrao": "O Senhor é o pastor que me conduz, não me falta coisa alguma.",
      "texto": "O Senhor é o pastor que me conduz; não me falta coisa alguma. Pelos prados e campinas verdejantes ele me leva a descansar. Para as águas repousantes me encaminha, e restaura as minhas forças. *\nEle me guia no caminho mais seguro, pela honra do seu nome. Mesmo que eu passe pelo vale tenebroso, nenhum mal eu temerei. Estais comigo com bastão e com cajado, eles me dão a segurança! *\nPreparais à minha frente uma mesa, bem à vista do inimigo; com óleo vós ungis minha cabeça, e o meu cálice transborda. *\nFelicidade e todo bem hão de seguir-me, por toda a minha vida; e, na casa do Senhor, habitarei pelos tempos infinitos. *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 17,11-19",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas.\n\n11 Aconteceu que, caminhando para Jerusalém, Jesus passava entre a Samaria e a Galileia. 12 Quando estava para entrar num povoado, dez leprosos vieram ao seu encontro. Pararam à distância, 13 e gritaram: \"Jesus, Mestre, tem compaixão de nós!\" 14 Ao vê-los, Jesus disse: \"Ide apresentar-vos aos sacerdotes\". Enquanto caminhavam, aconteceu que ficaram curados. 15 Um deles, ao perceber que estava curado, voltou glorificando a Deus em alta voz; 16 atirou-se aos pés de Jesus, com o rosto por terra, e lhe agradeceu. E este era um samaritano. 17 Então Jesus lhe perguntou: \"Não foram dez os curados? E os outro nove, onde estão? 18 Não houve quem voltasse para dar glória a Deus, a não ser este estrangeiro?\" 19 E disse-lhe: \"Levanta-te e vai! Tua fé te salvou\"."
    }
  },
  "2026-11-12": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Fm 1,7-20",
      "texto": "Leitura da Carta de São Paulo a Filêmon.\n\nCaríssimo, 7 grande alegria e consolo tive por causa de tua caridade. Os corações dos santos foram reanimados por ti, irmão. 8 Por este motivo, se bem que tenha plena autoridade em Cristo para prescrever-te tua obrigação, 9 prefiro fazer apenas um apelo à tua caridade. Eu, Paulo, velho como estou e agora também prisioneiro de Cristo Jesus, 10 faço-te um pedido em favor do meu filho que fiz nascer para Cristo na prisão, Onésimo. 11 Antes, ele era inútil para ti; agora, ele é valioso para ti e para mim. 12 Eu o estou mandando de volta para ti. Ele é como se fosse o meu próprio coração. 13 Gostaria de tê-lo comigo, a fim de que fosse teu representante para cuidar de mim nesta prisão, que eu devo ao evangelho. 14 Mas, eu não quis fazer nada sem o teu parecer, para que a tua bondade não seja forçada, mas espontânea. 15 Se ele te foi retirado por algum tempo, talvez seja para que o tenhas de volta para sempre, 16 já não como escravo, mas, muito mais do que isso, como um irmão querido, muitíssimo querido para mim quanto mais ele o for para ti, tanto como pessoa humana quanto como irmão no Senhor. 17 Assim, se estás em comunhão de fé comigo, recebe-o como se fosse a mim mesmo. 18 Se em alguma coisa te prejudicou ou se alguma coisa te deve, põe em minha conta. 19 Eu, Paulo, de meu punho o escrevo; eu o pagarei, para não dizer que tu mesmo me deves a própria vida. 20 Sim, irmão, deixa que eu te explore no Senhor. Conforta em Cristo meu coração."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 145(146),7.8-9a.9bc-10 (R. 5a)",
      "refrao": "Feliz quem se apoia no Deus de Jacó!",
      "texto": "O Senhor faz justiça aos que são oprimidos; ele dá alimento aos famintos, é o Senhor quem liberta os cativos. *\nO Senhor abre os olhos aos cegos, o Senhor faz erguer-se o caído, o Senhor ama aquele que é justo. É o Senhor quem protege o estrangeiro; *\nÉ ele quem ampara a viúva e o órfão, mas confunde os caminhos dos maus. O Senhor reinará para sempre! Ó Sião, o teu Deus reinará para sempre e por todos os séculos! *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 17,20-25",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas.\n\nNaquele tempo, 20 os fariseus perguntaram a Jesus sobre o momento em que chegaria o Reino de Deus. Jesus respondeu: \"O Reino de Deus não vem ostensivamente. 21 Nem se poderá dizer: 'Está aqui' ou 'Está ali', porque o Reino de Deus está entre vós\". 22 E Jesus disse aos discípulos: \"Dias virão em que desejareis ver um só dia do Filho do Homem e não podereis ver. 23 As pessoas vos dirão: 'Ele está ali' ou 'Ele está aqui'. Não deveis ir, nem correr atrás. 24 Pois, como o relâmpago brilha de um lado até ao outro do céu, assim também será o Filho do Homem, no seu dia. 25 Antes, porém, ele deverá sofrer muito e ser rejeitado por esta geração\"."
    }
  },
  "2026-11-13": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "2Jo 1,4-9",
      "texto": "Leitura da Segunda Carta de São João.\n\n4 Muito me alegrei, Senhora, por ter encontrado alguns dos teus filhos que caminham conforme a verdade, segundo o mandamento que recebemos do Pai. 5 E agora, Senhora, eu te peço - não que te esteja escrevendo a respeito de um novo mandamento, pois trata-se daquele que temos desde o princípio - : amemo-nos uns aos outros. 6 E amar consiste no seguinte: em viver conforme os seus mandamentos. Este é o mandamento que ouvistes desde o início para guiar o vosso proceder. 7 Acontece que se espalharam pelo mundo muitos sedutores, que não confessam a Jesus Cristo encarnado. Está aí o Sedutor, o Anticristo. 8 Tomai cuidado, se não quereis perder o fruto do vosso trabalho, mas sim, receber a plena recompensa. 9 Todo o que não permanece na doutrina de Cristo, mas passa além, não possui a Deus. Aquele que permanece na doutrina é o que possui o Pai e o Filho."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 118(119),1.2.10.11.17.18 (R. 1b)",
      "refrao": "Feliz é quem na lei do Senhor Deus vai progredindo!",
      "texto": "Feliz o homem sem pecado em seu caminho, que na lei do Senhor Deus vai progredindo! *\nFeliz o homem que observa seus preceitos, e de todo o coração procura a Deus! *\nDe todo o coração eu vos procuro, não deixeis que eu abandone a vossa lei! *\nConservei no coração vossas palavras, a fim de que eu não peque contra vós. *\nSede bom com vosso servo, e viverei, e guardarei vossa palavra, ó Senhor. *\nAbri meus olhos, e então contemplarei as maravilhas que encerra a vossa lei! *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 17,26-37",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas.\n\nNaquele tempo, disse Jesus aos seus discípulos: 26 \"Como aconteceu nos dias de Noé, assim também acontecerá nos dias do Filho do Homem. 27 Eles comiam, bebiam, casavam-se e se davam em casamento, até ao dia em que Noé entrou na arca. Então chegou o dilúvio e fez morrer todos eles. 28 Acontecerá como nos dias de Ló: comiam e bebiam, compravam e vendiam, plantavam e construíam. 29 Mas no dia em que Ló saiu de Sodoma, Deus fez chover fogo e enxofre do céu e fez morrer todos. 30 O mesmo acontecerá no dia em que o Filho do Homem for revelado. 31 Nesse dia, quem estiver no terraço, não desça para apanhar os bens que estão em sua casa. E quem estiver nos campos não volte para trás. 32 Lembrai-vos da mulher de Ló. 33 Quem procura ganhar a sua vida, vai perdê-la; e quem a perde, vai conservá-la. 34 Eu vos digo: nessa noite, dois estarão numa cama; um será tomado e o outro será deixado. 35 Duas mulheres estarão moendo juntas; uma será tomada e a outra será deixada. 36 Dois homens estarão no campo; um será levado e o outro será deixado\". 37 Os discípulos perguntaram: \"Senhor, onde acontecerá isso?\" Jesus respondeu: \"Onde estiver o cadáver, aí se reunirão os abutres\"."
    }
  },
  "2026-11-14": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "3Jo 1,5-8",
      "texto": "Leitura da Terceira Carta de São João.\n\n5 Caríssimo Gaio, é muito leal o teu proceder, agindo assim com teus irmãos, ainda que estrangeiros. 6 Eles deram testemunho da tua caridade diante da Igreja. Farás bem em provê-los para a viagem de um modo digno de Deus. 7 Pois, por amor do Nome, eles empreenderam a viagem, sem aceitar nada da parte dos pagãos. 8 A nós, portanto, cabe acolhê-los, para sermos cooperadores da Verdade."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 111(112),1-2.3-4.5-6 (R. 1)",
      "refrao": "Feliz aquele que respeita o Senhor!",
      "texto": "Feliz o homem que respeita o Senhor e que ama com carinho a sua lei! Sua descendência será forte sobre a terra, abençoada a geração dos homens retos! *\nHaverá glória e riqueza em sua casa, e permanece para sempre o bem que fez. Ele é correto, generoso e compassivo, como luz brilha nas trevas para os justos. *\nFeliz o homem caridoso e prestativo, que resolve seus negócios com justiça. Porque jamais vacilará o homem reto, sua lembrança permanece eternamente! *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 18,1-8",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas.\n\nNaquele tempo, 1 Jesus contou aos discípulos uma parábola, para mostrar-lhes a necessidade de rezar sempre, e nunca desistir, dizendo: 2 \"Numa cidade havia um juiz que não temia a Deus, e não respeitava homem algum. 3 Na mesma cidade havia uma viúva, que vinha à procura do juiz, pedindo: 'Faze-me justiça contra o meu adversário!' 4 Durante muito tempo, o juiz se recusou. Por fim, ele pensou: 'Eu não temo a Deus, e não respeito homem algum. 5 Mas esta viúva já me está aborrecendo. Vou fazer-lhe justiça, para que ela não venha a agredir-me!' '' 6 E o Senhor acrescentou: \"Escutai o que diz este juiz injusto. 7 E Deus, não fará justiça aos seus escolhidos, que dia e noite gritam por ele? Será que vai fazê-los esperar? 8 Eu vos digo que Deus lhes fará justiça bem depressa. Mas o Filho do homem, quando vier, será que ainda vai encontrar fé sobre a terra?\""
    }
  },
  "2026-11-15": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Pr 31,10-13.19-20.30-31",
      "texto": "Leitura do Livro dos Provérbios.\n\n10 Uma mulher forte, quem a encontrará? Ela vale muito mais do que as joias. 11 Seu marido confia nela plenamente, e não terá falta de recursos. 12 Ela lhe dá só alegria e nenhum desgosto, todos os dias de sua vida. 13 Procura lã e linho, e com habilidade trabalham as suas mãos. 19 Estende a mão para a roca, e seus dedos seguram o fuso. 20 Abre suas mãos ao necessitado e estende suas mãos ao pobre. 30 O encanto é enganador e a beleza é passageira; a mulher que teme ao Senhor, essa sim, merece louvor. 31 Proclamem o êxito de suas mãos, e na praça louvem-na as suas obras!"
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 127(128),1-2.3.4-5ab (R. cf. 1a)",
      "refrao": "Felizes os que temem o Senhor e trilham seus caminhos!",
      "texto": "Feliz és tu, se temes o Senhor e trilhas seus caminhos! Do trabalho de tuas mãos hás de viver, serás feliz, tudo irá bem! *\nA tua esposa é uma videira bem fecunda no coração da tua casa; os teus filhos são rebentos de oliveira ao redor de tua mesa. *\nSerá assim abençoado todo homem que teme o Senhor. O Senhor te abençoe de Sião, cada dia de tua vida. *"
    },
    "segundaLeitura": {
      "titulo": "SEGUNDA LEITURA",
      "referencia": "1Ts 5,1-6",
      "texto": "Leitura da Primeira Carta de São Paulo aos Tessalonicenses.\n\n1 Quanto ao tempo e à hora, meus irmãos, não há por que vos escrever. 2 Vós mesmos sabeis perfeitamente que o dia do Senhor virá como ladrão, de noite. 3 Quando as pessoas disserem: \"Paz e segurança!\", então de repente sobrevirá a destruição, como as dores de parto sobre a mulher grávida. E não poderão escapar. 4 Mas vós, meus irmãos, não estais nas trevas, de modo que esse dia vos surpreenda como um ladrão. 5 Todos vós sois filhos da luz e filhos do dia. Não somos da noite, nem das trevas. 6 Portanto, não durmamos, como os outros, mas sejamos vigilantes e sóbrios."
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Mt 25,14-30",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Mateus.\n\nNaquele tempo, Jesus contou esta parábola a seus discípulos: 14 \"Um homem ia viajar para o estrangeiro. Chamou seus empregados e lhes entregou seus bens. 15 A um deu cinco talentos, a outro deu dois e ao terceiro, um; a cada qual de acordo com a sua capacidade. Em seguida viajou. 16 O empregado que havia recebido cinco talentos saiu logo, trabalhou com eles, e lucrou outros cinco. 17 Do mesmo modo, o que havia recebido dois lucrou outros dois. 18 Mas aquele que havia recebido um só, saiu, cavou um buraco na terra, e escondeu o dinheiro do seu patrão. 19 Depois de muito tempo, o patrão voltou e foi acertar contas com os empregados. 20 O empregado que havia recebido cinco talentos entregou-lhe mais cinco, dizendo: 'Senhor, tu me entregaste cinco talentos. Aqui estão mais cinco que lucrei'. 21 O patrão lhe disse: 'Muito bem, servo bom e fiel! como foste fiel na administração de tão pouco, eu te confiarei muito mais. Vem participar da minha alegria!' 22 Chegou também o que havia recebido dois talentos, e disse: 'Senhor, tu me entregaste dois talentos. Aqui estão mais dois que lucrei'. 23 O patrão lhe disse: 'Muito bem, servo bom e fiel! Como foste fiel na administração de tão pouco, eu te confiarei muito mais. Vem participar da minha alegria!' 24 Por fim, chegou aquele que havia recebido um talento, e disse: 'Senhor, sei que és um homem severo, pois colhes onde não plantaste e ceifas onde não semeaste. 25 Por isso, fiquei com medo e escondi o teu talento no chão. Aqui tens o que te pertence'. 26 O patrão lhe respondeu: 'Servo mau e preguiçoso! Tu sabias que eu colho onde não plantei e que ceifo onde não semeei? 27 Então, devias ter depositado meu dinheiro no banco, para que, ao voltar, eu recebesse com juros o que me pertence'. 28 Em seguida, o patrão ordenou: 'Tirai dele o talento e dai-o àquele que tem dez! 29 Porque a todo aquele que tem será dado mais, e terá em abundância, mas daquele que não tem, até o que tem lhe será tirado. 30 Quanto a este servo inútil, jogai-o lá fora, na escuridão. Aí haverá choro e ranger de dentes!'\"."
    }
  },
  "2026-11-16": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Ap 1,1-4.2,1-5a",
      "texto": "Primeira Leitura (Ap 1,1-4.2,1-5a)\n\nInício do Livro do Apocalipse de São João.\n1 Revelação que Deus confiou a Jesus Cristo, para que mostre aos seus servos as coisas que devem acontecer em breve. Jesus as deu a conhecer, através do seu anjo, ao seu servo João. 2 Este dá testemunho que tudo quanto viu é palavra de Deus e testemunho de Jesus Cristo. 3 Feliz aquele que lê e aqueles que escutam as palavras desta profecia e também praticam o que nela está escrito. Pois o momento está chegando. 4 João às sete Igrejas que estão na região da Ásia: A vós, graça e paz, da parte daquele que é, que era e que vem; da parte dos sete espíritos que estão diante do trono de Deus. 2,1 Ouvi o Senhor que me dizia: Escreve ao anjo da Igreja que está em Éfeso: Assim fala aquele que tem na mão direita as sete estrelas, aquele que está andando no meio dos sete candelabros de ouro: 2 Conheço a tua conduta, o teu esforço e a tua perseverança. Sei que não suportas os maus. Colocaste à prova alguns que se diziam apóstolos e descobriste que não eram apóstolos, mas mentirosos. 3 És perseverante. Sofreste por causa do meu nome e não desanimaste. 4 Todavia, há uma coisa que eu reprovo: abandonaste o teu primeiro amor. 5a Lembra-te de onde caíste! Converte-te e volta à tua prática inicial. Se, pelo contrário, não te converteres, virei depressa e arrancarei o teu candelabro do seu lugar"
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 1,1-2.3.4 e 6 (R. Ap 2,7b)",
      "refrao": "Ao vencedor concederei, comer da Árvore da Vida!",
      "texto": "Feliz é todo aquele que não anda conforme os conselhos dos perversos; que não entra no caminho dos malvados, nem junto aos zombadores vai sentar-se; mas encontra seu prazer na lei de Deus e a medita, dia e noite, sem cessar. *\nEis que ele é semelhante a uma árvore, que à beira da torrente está plantada; ela sempre dá seus frutos a seu tempo, e jamais as suas folhas vão murchar. Eis que tudo o que ele faz vai prosperar. *\nMas bem outra é a sorte dos perversos. Ao contrário, são iguais à palha seca espalhada e dispersada pelo vento. Pois Deus vigia o caminho dos eleitos, mas a estrada dos malvados leva à morte. *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 18,35-43",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas.\n\n35 Quando Jesus se aproximava de Jericó, um cego estava sentado à beira do caminho, pedindo esmolas. 36 Ouvindo a multidão passar, ele perguntou o que estava acontecendo. 37 Disseram-lhe que Jesus Nazareno estava passando por ali. 38 Então o cego gritou: \"Jesus, filho de Davi, tem piedade de mim!\" 39 As pessoas que iam na frente mandavam que ele ficasse calado. Mas ele gritava mais ainda: \"Filho de Davi, tem piedade de mim!\" 40 Jesus parou e mandou que levassem o cego até ele. Quando o cego chegou perto, Jesus perguntou: 41 \"O que queres que eu faça por ti?\" O cego respondeu: \"Senhor, eu quero enxergar de novo\". 42 Jesus disse: \"Enxerga, pois, de novo. A tua fé te salvou.\" 43 No mesmo instante, o cego começou a ver de novo e seguia Jesus, glorificando a Deus. Vendo isso, todo o povo deu louvores a Deus."
    }
  },
  "2026-11-17": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Ap 3,1-6.14-22",
      "texto": "Leitura do Livro do Apocalipse de São João.\n\nEu, João, ouvi o Senhor que me dizia: 1 \"Escreve ao anjo da Igreja que está em Sardes: Assim fala aquele que tem os sete espíritos de Deus e as sete estrelas: - Conheço a tua conduta. Tens fama de estar vivo, mas estás morto. 2 Acorda! Reaviva o que te resta, e que estava para se apagar! Pois não acho suficiente aos olhos do meu Deus aquilo que estás fazendo. 3 Lembra-te daquilo que tens aprendido e ouvido. Observa-o! Converte-te! Se não estiveres vigilante, eu virei como um ladrão, sem que tu saibas em que hora te vou surpreender! 4 Todavia, aí em Sardes existem algumas pessoas que não sujaram a roupa. Estas vão andar comigo, vestidas de branco, pois merecem isso. 5 O vencedor vestirá a roupa branca, e não apagarei o seu nome do livro da vida, mas o apresentarei diante de meu Pai e de seus anjos. 6 Quem tem ouvidos, ouça o que o Espírito diz às Igrejas. 14 Escreve ao anjo da Igreja que está em Laodicéia: Assim fala o Amém, a testemunha fiel e verdadeira, o princípio da criação de Deus: 15 Conheço a tua conduta. nem és frio, nem quente. Oxalá fosses frio ou quente! 16 Mas, porque és morno, nem frio nem quente, estou para vomitar-te de minha boca. 17 Tu dizes: 'Sou rico e abastado e não careço de nada', em vez de reconhecer que tu és infeliz, miserável, pobre, cego e nu! 18 Dou-te um conselho: compra de mim ouro purificado no fogo, para ficares rico, e vestes brancas, para vestires e não aparecer a tua nudez vergonhosa; e compra também um colírio para curar os teus olhos, para que enxergues. 19 Eu repreendo e educo os que eu amo. Esforça-te, pois, e converte-te. 20 Eis que estou à porta, e bato; se alguém ouvir minha voz e abrir a porta, eu entrarei na sua casa e tomaremos a refeição, eu com ele e ele comigo. 21 Ao vencedor farei sentar-se comigo no meu trono, como também eu venci e estou sentado com meu Pai no seu trono. 22 Quem tem ouvidos, ouça o que o Espírito diz às Igrejas\"."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 14(15),1a e 2-3ab.3cd-4ab.5 (R. Ap 3,21)",
      "refrao": "Ao vencedor, dar-lhe-ei o direito de sentar-se comigo no meu trono.",
      "texto": "\"Senhor, quem morará em vossa casa?\" É aquele que caminha sem pecado e pratica a justiça fielmente; que pensa a verdade no seu íntimo e não solta em calúnias sua língua. *\nQue em nada prejudica o seu irmão, nem cobre de insultos seu vizinho; que não dá valor algum ao homem ímpio, mas honra os que respeitam o Senhor; *\nnão empresta o seu dinheiro com usura, nem se deixa subornar contra o inocente. Jamais vacilará quem vive assim! *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 19,1-10",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas.\n\nNaquele tempo, 1 Jesus tinha entrado em Jericó e estava atravessando a cidade. 2 Havia ali um homem chamado Zaqueu, que era chefe dos cobradores de impostos e muito rico. 3 Zaqueu procurava ver quem era Jesus, mas não conseguia, por causa da multidão, pois era muito baixo. 4 Então ele correu à frente e subiu numa figueira para ver Jesus, que devia passar por ali. 5 Quando Jesus chegou ao lugar, olhou para cima e disse: \"Zaqueu, desce depressa! Hoje eu devo ficar na tua casa\". 6 Ele desceu depressa, e recebeu Jesus com alegria. 7 Ao ver isso, todos começaram a murmurar, dizendo: \"Ele foi hospedar-se na casa de um pecador!\" 8 Zaqueu ficou de pé, e disse ao Senhor: \"Senhor, eu dou a metade dos meus bens aos pobres, e se defraudei alguém, vou devolver quatro vezes mais\". 9 Jesus lhe disse: \"Hoje a salvação entrou nesta casa, porque também este homem é um filho de Abraão. 10 Com efeito, o Filho do Homem veio procurar e salvar o que estava perdido\"."
    }
  },
  "2026-11-18": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Ap 4,1-11",
      "texto": "Leitura do Livro do Apocalipse de São João.\n\nEu, João, 1 vi uma porta aberta no céu, e a voz que antes eu tinha ouvido falar-me como trombeta, disse: \"Sobe até aqui, para que eu te mostre as coisas que devem acontecer depois destas\". 2 Imediatamente, o Espírito tomou conta de mim. Havia no céu um trono e, no trono, alguém sentado. 3 Aquele que estava sentado parecia uma pedra de jaspe e cornalina; um arco-íris envolvia o trono com reflexos de esmeralda. 4 Ao redor do trono havia outros vinte e quatro tronos; neles estavam sentados vinte e quatro anciãos, todos eles vestidos de branco e com coroas de ouro nas cabeças. 5 Do trono saíam relâmpagos, vozes e trovões. Diante do trono estavam acesas sete lâmpadas de fogo, que são os sete espíritos de Deus. 6 Na frente do trono havia como que um mar de vidro cristalino. No meio, em redor do trono, estavam quatro Seres vivos, cheios de olhos pela frente e por detrás. 7 O primeiro Ser vivo parecia um leão; o segundo parecia um touro; o terceiro tinha rosto de homem; o quarto parecia uma águia em pleno voo. 8 Cada um dos quatro Seres vivos tinha seis asas, cobertas de olhos ao redor e por dentro. Dia e noite, sem parar, eles proclamavam: \"Santo! Santo! Santo! Senhor Deus Todo-poderoso! Aquele que é, que era e que vem!\" 9 Os seres vivos davam glória, honra e ação de graças ao que estava no trono e que vive para sempre. 10 E cada vez que os Seres vivos faziam isto, os vinte e quatro anciãos se prostravam diante daquele que estava sentado no trono, para adorar o que vive para sempre. Colocavam suas coroas diante do trono de Deus, e diziam: 11 \"Senhor, nosso Deus, tu és digno de receber a glória, a honra e o poder, porque tu criaste todas as coisas. Pela tua vontade é que elas existem e foram criadas\"."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 150,1-2.3-4.5-6 (R. Ap 4,8b)",
      "refrao": "Santo, Santo, Santo Senhor Deus onipotente!",
      "texto": "Louvai o Senhor Deus no santuário, louvai-o no alto céu de seu poder! Louvai-o por seus feitos grandiosos, louvai-o em sua grandeza majestosa! *\nLouvai-o com o toque da trombeta, louvai-o com a harpa e com a cítara! Louvai-o com a dança e o tambor, louvai-o com as cordas e as flautas! *\nLouvai-o com os címbalos sonoros, louvai-o com os címbalos de júbilo! Louve a Deus tudo o que vive e que respira, tudo cante os louvores do Senhor! *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 19,11-28",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas.\n\nNaquele tempo, 11 Jesus acrescentou uma parábola, porque estava perto de Jerusalém e eles pensavam que o Reino de Deus ia chegar logo. 12 Então Jesus disse: \"Um homem nobre partiu para um país distante, a fim de ser coroado rei e depois voltar. 13 Chamou então dez dos seus empregados, entregou cem moedas de prata a cada um, e disse: 'Procurai negociar até que eu volte'. 14 Seus concidadãos, porém, o odiavam, e enviaram uma embaixada atrás dele, dizendo: 'Nós não queremos que esse homem reine sobre nós'. 15 Mas o homem foi coroado rei e voltou. Mandou chamar os empregados, aos quais havia dado o dinheiro, a fim de saber quanto cada um havia lucrado. 16 O primeiro chegou e disse: 'Senhor, as cem moedas renderam dez vezes mais.' 17 O homem disse: 'Muito bem, servo bom. Como foste fiel em coisas pequenas, recebe o governo de dez cidades'. 18 O segundo chegou e disse: 'Senhor, as cem moedas renderam cinco vezes mais'. 19 O homem disse também a este: 'Recebe tu também o governo de cinco cidades'. 20 Chegou o outro empregado e disse: 'Senhor, aqui estão as tuas cem moedas que guardei num lenço, 21 pois eu tinha medo de ti, porque és um homem severo. Recebes o que não deste e colhes o que não semeaste'. 22 O homem disse: 'Servo mau, eu te julgo pela tua própria boca. Tu sabias que eu sou um homem severo, que recebo o que não dei e colho o que não semeei. 23 Então, porque tu não depositaste meu dinheiro no banco? Ao chegar, eu o retiraria com juros'. 24 Depois disse aos que estavam aí presentes: 'Tirai dele as cem moedas e dai-as àquele que tem mil'. 25 Os presentes disseram: 'Senhor, esse já tem mil moedas!' 26 Ele respondeu: 'Eu vos digo: a todo aquele que já possui, será dado mais ainda; mas àquele que nada tem, será tirado até mesmo o que tem. 27 E quanto a esses inimigos, que não queriam que eu reinasse sobre eles, trazei-os aqui e matai-os na minha frente' \". 28 Jesus caminhava à frente dos discípulos, subindo para Jerusalém."
    }
  },
  "2026-11-19": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Ap 5,1-10",
      "texto": "Leitura do Livro do Apocalipse de São João.\n\nEu, João, 1 vi um livro na mão direita daquele que estava sentado no trono. Era um rolo escrito por dentro e por fora, e estava lacrado com sete selos. 2 Vi então um anjo forte, que proclamava em voz alta: \"Quem é digno de romper os selos e abrir o livro?\" 3 Ninguém no céu, nem na terra, nem debaixo da terra era digno de abrir o livro ou de ler o que nele estava escrito. 4 Eu chorava muito, porque ninguém foi considerado digno de abrir ou de ler o livro. 5 Um dos anciãos me consolou: \"Não chores! Eis que o Leão da tribo de Judá, o Rebento de Davi, saiu vencedor. Ele pode romper os selos e abrir o livro\". 6 De fato, vi um Cordeiro. Estava no centro do trono e dos quatro Seres vivos, no meio dos Anciãos. Estava de pé como que imolado. O Cordeiro tinha sete chifres e sete olhos, que são os sete Espíritos de Deus, enviados por toda a terra. 7 Então, o Cordeiro veio receber o livro da mão direita daquele que está sentado no trono. 8 Quando ele recebeu o livro, os quatro Seres vivos e os vinte e quatro Anciãos prostraram-se diante do Cordeiro. Todos tinham harpas e taças de ouro cheias de incenso, que são as orações dos santos. 9 E entoaram um cântico novo: \"Tu és digno de receber o livro e abrir seus selos, porque foste imolado, e com teu sangue adquiriste para Deus homens de toda a tribo, língua, povo e nação. 10 Deles fizeste para o nosso Deus um reino de sacerdotes. E eles reinarão sobre a terra.\""
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 149,1-2.3-4.5-6a e 9b (R. Ap 5,10)",
      "refrao": "Fizestes de nós, para Deus, sacerdotes e povo de reis.",
      "texto": "Cantai ao Senhor Deus um canto novo, e o seu louvor na assembleia dos fiéis! Alegre-se Israel em Quem o fez, e Sião se rejubile no seu Rei! *\nCom danças glorifiquem o seu nome, toquem harpa e tambor em sua honra! Porque, de fato, o Senhor ama seu povo e coroa com vitória os seus humildes. *\nExultem os fiéis por sua glória, e cantando se levantem de seus leitos, com louvores do Senhor em sua boca Eis a glória para todos os seus santos. *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 19,41-44",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas.\n\nNaquele tempo, 41 quando Jesus se aproximou de Jerusalém e viu a cidade, começou a chorar. E disse: 42 \"Se tu também compreendesses hoje o que te pode trazer a paz! Agora, porém, isso está escondido aos teus olhos! 43 Dias virão em que os inimigos farão trincheiras contra ti e te cercarão de todos os lados. 44 Eles esmagarão a ti e a teus filhos. E não deixarão em ti pedra sobre pedra. Porque tu não reconheceste o tempo em que foste visitada\"."
    }
  },
  "2026-11-20": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Ap 10,8-11",
      "texto": "Leitura do Livro do Apocalipse de São João.\n\n8 Aquela mesma voz do céu, que eu, João, já tinha ouvido, tornou a falar comigo: \"Vai. Pega o livrinho aberto da mão do anjo que está de pé sobre o mar e a terra\". 9 Eu fui até ao anjo e pedi que me entregasse o livrinho. Ele me falou: \"Pega e come. Será amargo no estômago, mas na tua boca, será doce como mel\". 10 Peguei da mão do anjo o livrinho e comi-o. Na boca era doce como mel, mas quando o engoli, meu estômago tornou-se amargo. 11 Então ele me disse: \"Deves profetizar ainda contra outros povos e nações, línguas e reis\"."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 118(119),14.24.72.103.111.131 (R. 103a)",
      "refrao": "Como é doce ao paladar vossa palavra, ó Senhor!",
      "texto": "Seguindo vossa lei me rejubilo muito mais do que em todas as riquezas. *\nMinha alegria é a vossa Aliança, meus conselheiros são os vossos mandamentos. *\nA lei de vossa boca, para mim, vale mais do que milhões em ouro e prata. *\nComo é doce ao paladar vossa palavra, muito mais doce do que o mel na minha boca! *\nVossa palavra é minha herança para sempre, porque ela é que me alegra o coração! *\nAbro a boca e aspiro largamente, pois estou ávido de vossos mandamentos. *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 19,45-48",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas.\n\nNaquele tempo, 45 Jesus entrou no Templo e começou a expulsar os vendedores. 46 E disse: \"Está escrito: 'Minha casa será casa de oração'. No entanto, vós fizestes dela um antro de ladrões\". 47 Jesus ensinava todos os dias no Templo. Os sumos sacerdotes, os mestres da Lei e os notáveis do povo procuravam modo de matá-lo. 48 Mas não sabiam o que fazer, porque o povo todo ficava fascinado quando ouvia Jesus falar."
    }
  },
  "2026-11-21": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Zc 2,14-17",
      "texto": "Leitura da Profecia de Zacarias.\n\n14 \"Rejubila, alegra-te, cidade de Sião, eis que venho para habitar no meio de ti, diz o Senhor. 15 Muitas nações se aproximarão do Senhor, naquele dia, e serão o seu povo. Habitarei no meio de ti, e saberás que o Senhor dos exércitos me enviou a ti. 16 O Senhor entrará em posse de Judá, como sua porção na terra santa, e escolherá de novo Jerusalém. 17 Emudeça todo mortal diante do Senhor, ele acaba de levantar-se de sua santa habitação\"."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Lc 1,46-47.48-49.50-51.52-53.54-55 (R. cf. 54b)",
      "refrao": "O Poderoso fez por mim maravilhas, e Santo é o seu nome.",
      "texto": "A minh'alma engrandece ao Senhor, e se alegrou o meu espírito em Deus, meu Salvador, *\npois, ele viu a pequenez de sua serva, eis que agora as gerações hão de chamar-me de bendita. O Poderoso fez por mim maravilhas e Santo é o seu nome! *\nSeu amor, de geração em geração, chega a todos que o respeitam. Demonstrou o poder de seu braço, dispersou os orgulhosos. *\nDerrubou os poderosos de seus tronos e os humildes exaltou. De bens saciou os famintos e despediu, sem nada, os ricos. *\nAcolheu Israel, seu servidor, fiel ao seu amor, como havia prometido aos nossos pais, em favor de Abraão e de seus filhos, para sempre. *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Mt 12,46-50",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Mateus.\n\nNaquele tempo, 46 enquanto Jesus estava falando às multidões, sua mãe e seus irmãos ficaram do lado de fora, procurando falar com ele. 47 Alguém disse a Jesus: \"Olha! Tua mãe e teus irmãos estão aí fora, e querem falar contigo\". 48 Jesus perguntou àquele que tinha falado: \"Quem é minha mãe, e quem são meus irmãos?\" 49 E, estendendo a mão para os discípulos, Jesus disse: \"Eis minha mãe e meus irmãos. 50 Pois todo aquele que faz a vontade do meu Pai, que está nos céus, esse é meu irmão, minha irmã e minha mãe\"."
    }
  },
  "2026-11-22": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Ez 34,11-12.15-17",
      "texto": "Leitura da Profecia de Ezequiel.\n\n11 Assim diz o Senhor Deus: \"Vede! Eu mesmo vou procurar minhas ovelhas e tomar conta delas. 12 Como o pastor toma conta do rebanho, de dia, quando se encontra no meio das ovelhas dispersas, assim vou cuidar de minhas ovelhas e vou resgatá-las de todos os lugares em que foram dispersadas num dia de nuvens e escuridão. 15 Eu mesmo vou apascentar as minhas ovelhas e fazê-las repousar — oráculo do Senhor Deus —. 16 Vou procurar a ovelha perdida, reconduzir a extraviada, enfaixar a da perna quebrada, fortalecer a doente, e vigiar a ovelha gorda e forte. Vou apascentá-las conforme o direito. 17 Quanto a vós, minhas ovelhas, — assim diz o Senhor Deus — eu farei justiça entre uma ovelha e outra, entre carneiros e bodes\"."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 22(23),1-2a.2b-3.5-6 (R. 1)",
      "refrao": "O Senhor é o pastor que me conduz; não me falta coisa alguma.",
      "texto": "Pelos prados e campinas verdejantes ele me leva a descansar. Para as águas repousantes me encaminha, e restaura as minhas forças. *\nPreparais à minha frente uma mesa, bem à vista do inimigo, e com óleo vós ungis minha cabeça; o meu cálice transborda. *\nFelicidade e todo bem hão de seguir-me por toda a minha vida; e, na casa do Senhor, habitarei pelos tempos infinitos. *"
    },
    "segundaLeitura": {
      "titulo": "SEGUNDA LEITURA",
      "referencia": "1Cor 15,20-26.28",
      "texto": "Leitura da Primeira Carta de São Paulo aos Coríntios.\n\nIrmãos: 20 Na realidade, Cristo ressuscitou dos mortos como primícias dos que morreram. 21 Com efeito, por um homem veio a morte, e é também por um homem que vem a ressurreição dos mortos. 22 Como em Adão todos morrem, assim também em Cristo todos reviverão. 23 Porém, cada qual segundo uma ordem determinada: Em primeiro lugar, Cristo, como primícias; depois, os que pertencem a Cristo, por ocasião da sua vinda. 24 A seguir, será o fim, quando ele entregar a realeza a Deus-Pai, depois de destruir todo principado e todo poder e força. 25 Pois é preciso que ele reine, até que todos os seus inimigos estejam debaixo de seus pés. 26 O último inimigo a ser destruído é a morte. 28 E, quando todas as coisas estiverem submetidas a ele, então o próprio Filho se submeterá àquele que lhe submeteu todas as coisas, para que Deus seja tudo em todos."
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Mt 25,31-46",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Mateus.\n\nNaquele tempo, disse Jesus a seus discípulos: 31 \"Quando o Filho do Homem vier em sua glória, acompanhado de todos os anjos, então se assentará em seu trono glorioso. 32 Todos os povos da terra serão reunidos diante dele, e ele separará uns dos outros, assim como o pastor separa as ovelhas dos cabritos. 33 E colocará as ovelhas à sua direita e os cabritos à sua esquerda. 34 Então o Rei dirá aos que estiverem à sua direita: 'Vinde, benditos de meu Pai! Recebei como herança o Reino que meu Pai vos preparou desde a criação do mundo! 35 Pois eu estava com fome e me destes de comer; eu estava com sede e me destes de beber; eu era estrangeiro e me recebestes em casa; 36 eu estava nu e me vestistes; eu estava doente e cuidastes de mim; eu estava na prisão e fostes me visitar'. 37 Então os justos lhe perguntarão: 'Senhor, quando foi que te vimos com fome e te demos de comer? com sede e te demos de beber? 38 Quando foi que te vimos como estrangeiro e te recebemos em casa, e sem roupa e te vestimos? 39 Quando foi que te vimos doente ou preso, e fomos te visitar?' 40 Então o Rei lhes responderá: 'Em verdade eu vos digo, que todas as vezes que fizestes isso a um dos menores de meus irmãos, foi a mim que o fizestes!' 41 Depois o Rei dirá aos que estiverem à sua esquerda: 'Afastai-vos de mim, malditos! Ide para o fogo eterno, preparado para o diabo e para os seus anjos. 42 Pois eu estava com fome e não me destes de comer; eu estava com sede e não me destes de beber; 43 eu era estrangeiro e não me recebestes em casa; eu estava nu e não me vestistes; eu estava doente e na prisão e não fostes me visitar'. 44 E responderão também eles: 'Senhor, quando foi que te vimos com fome, ou com sede, como estrangeiro, ou nu, doente ou preso, e não te servimos?' 45 Então o Rei lhes responderá: 'Em verdade eu vos digo, todas as vezes que não fizestes isso a um desses pequeninos, foi a mim que não o fizestes!' 46 Portanto, estes irão para o castigo eterno, enquanto os justos irão para a vida eterna\"."
    }
  },
  "2026-11-23": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Ap 14,1-3.4b-5",
      "texto": "Leitura do Livro do Apocalipse de São João.\n\nEu, João, 1 tive esta visão: o Cordeiro estava de pé sobre o monte Sião. Com ele, os cento e quarenta e quatro mil que tinham a fronte marcada com o nome dele e o nome do seu Pai. 2 Ouvi uma voz que vinha do céu; parecia o barulho de águas torrenciais e o estrondo de um forte trovão. O ruído que ouvi era como o som de músicos tocando harpa. 3 Estavam diante do trono, diante dos quatro Seres vivos e dos Anciãos, e cantavam um cântico novo. Era um cântico que ninguém podia aprender; só os cento e quarenta e quatro mil marcados, que foram resgatados da terra. 4b Eles seguem o Cordeiro aonde quer que vá. Foram resgatados do meio dos homens, como primeira oferta a Deus a ao Cordeiro. 5 Na sua boca nunca foi encontrada mentira. São íntegros!"
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 23(24),1-2.3-4ab.5-6 (R. cf. 6)",
      "refrao": "É assim a geração dos que buscam vossa face, ó Senhor, Deus de Israel.",
      "texto": "Ao Senhor pertence a terra e o que ela encerra, o mundo inteiro com os seres que o povoam; porque ele a tornou firme sobre os mares, e sobre as águas a mantém inabalável. *\n\"Quem subirá até o monte do Senhor, quem ficará em sua santa habitação?\" \"Quem tem mãos puras e inocente coração, quem não dirige sua mente para o crime. *\nSobre este desce a bênção do Senhor e a recompensa de seu Deus e Salvador\". \"É assim a geração dos que o procuram, e do Deus de Israel buscam a face\". *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 21,1-4",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas.\n\nNaquele tempo, 1 Jesus ergueu os olhos e viu pessoas ricas depositando ofertas no tesouro do Templo. 2 Viu também uma pobre viúva que depositou duas pequenas moedas. 3 Diante disto, ele disse: \"Em verdade vos digo que essa pobre viúva ofertou mais do que todos. 4 Pois todos eles depositaram, como oferta feita a Deus, aquilo que lhes sobrava. Mas a viúva, na sua pobreza, ofertou tudo quanto tinha para viver\"."
    }
  },
  "2026-11-24": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Ap 14,14-19",
      "texto": "Leitura do Livro do Apocalipse de São João.\n\nEu, João, 14 na minha visão, vi uma nuvem branca e sentado na nuvem alguém que parecia um \"filho de homem\". Tinha na cabeça uma coroa de ouro e, nas mãos, uma foice afiada. 15 Saiu do Templo um outro anjo, gritando em alta voz para aquele que estava sentado na nuvem: \"Lança tua foice, e ceifa. Chegou a hora da colheita. A seara da terra está madura!\" 16 E aquele que estava sentado na nuvem lançou a foice, e a terra foi ceifada. 17 Então saiu do templo que está no céu mais um anjo. Também ele tinha nas mãos uma foice afiada. 18 E saiu, de junto do altar, outro anjo ainda, aquele que tem o poder sobre o fogo. Ele gritou em alta voz para aquele que segurava a foice afiada: \"Lança a foice e colhe os cachos da videira da terra, porque as uvas já estão maduras\". 19 E o anjo lançou a foice afiada na terra, e colheu as uvas da videira da terra. Depois, despejou as uvas no grande lagar do furor de Deus."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 95(96),10.11-12.13 (R. 13b)",
      "refrao": "O Senhor vem julgar nossa terra.",
      "texto": "Publicai entre as nações: \"Reina o Senhor!\" Ele firmou o universo inabalável, e os povos ele julga com justiça. *\nO céu se rejubile e exulte a terra, aplauda o mar com o que vive em suas águas; os campos com seus frutos rejubilem e exultem as florestas e as matas. *\nna presença do Senhor, pois ele vem, porque vem para julgar a terra inteira. Governará o mundo todo com justiça, e os povos julgará com lealdade. *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 21,5-11",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas.\n\nNaquele tempo, 5 algumas pessoas comentavam a respeito do Templo que era enfeitado com belas pedras e com ofertas votivas. Jesus disse: 6 \"Vós admirais estas coisas? Dias virão em que não ficará pedra sobre pedra. Tudo será destruído\". 7 Mas eles perguntaram: \"Mestre, quando acontecerá isto? E qual vai ser o sinal de que estas coisas estão para acontecer?\" 8 Jesus respondeu: \"Cuidado para não serdes enganados, porque muitos virão em meu nome, dizendo: 'Sou eu!' E ainda: 'O tempo está próximo'. Não sigais essa gente! 9 Quando ouvirdes falar de guerras e revoluções, não fiqueis apavorados. É preciso que estas coisas aconteçam primeiro, mas não será logo o fim\". 10 E Jesus continuou: \"Um povo se levantará contra outro povo, um país atacará outro país. 11 Haverá grandes terremotos, fomes e pestes em muitos lugares; acontecerão coisas pavorosas e grandes sinais serão vistos no céu\"."
    }
  },
  "2026-11-25": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Ap 15,1-4",
      "texto": "Leitura do Livro do Apocalipse de São João.\n\nEu, João, 1 vi no céu outro sinal, grande e admirável: sete anjos, com as sete últimas pragas. Com elas o furor de Deus ia-se consumar. 2 Vi também como que um mar de vidro misturado com fogo. Sobre este mar estavam, de pé, todos aqueles que saíram vitoriosos do confronto com a besta, com a imagem dela e com o número do nome da besta. Seguravam as harpas de Deus. 3 Entoavam o cântico de Moisés, o servo de Deus, e o cântico do Cordeiro, dizendo: \"Grandes e admiráveis são as tuas obras, Senhor Deus, Todo-poderoso! Justos e verdadeiros são os teus caminhos, ó Rei das nações! 4 Quem não temeria, Senhor, e não glorificaria o teu nome? Só tu és santo! Todas as nações virão prostrar-se diante de Ti, porque tuas justas decisões se tornaram manifestas\"."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 97(98),1.2-3ab.7-8.9 (R. Ap 15,3b)",
      "refrao": "Como são grandes e admiráveis vossas obras, ó Senhor e nosso Deus onipotente!",
      "texto": "Cantai ao Senhor Deus um canto novo, porque ele fez prodígios! Sua mão e o seu braço forte e santo alcançaram-lhe a vitória. *\nO Senhor fez conhecer a salvação, e às nações, sua justiça; recordou o seu amor sempre fiel pela casa de Israel *\nAplauda o mar com todo ser que nele vive, o mundo inteiro e toda gente! As montanhas e os rios batam palmas e exultem de alegria. *\nna presença do Senhor, pois ele vem, vem julgar a terra inteira. Julgará o universo com justiça e as nações com equidade. *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 21,12-19",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas.\n\nNaquele tempo, disse Jesus aos seus discípulos: 12 \"Antes que estas coisas aconteçam, sereis presos e perseguidos; sereis entregues às sinagogas e postos na prisão; sereis levados diante de reis e governadores por causa do meu nome. 13 Esta será a ocasião em que testemunhareis a vossa fé. 14 Fazei o firme propósito de não planejar com antecedência a própria defesa; 15 porque eu vos darei palavras tão acertadas, que nenhum dos inimigos vos poderá resistir ou rebater. 16 Sereis entregues até mesmo pelos próprios pais, irmãos, parentes e amigos. E eles matarão alguns de vós. 17 Todos vos odiarão por causa do meu nome. 18 Mas vós não perdereis um só fio de cabelo da vossa cabeça. 19 É permanecendo firmes que ireis ganhar a vida!\""
    }
  },
  "2026-11-26": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Ap 18,1-2.21-23.19,1-3.9a",
      "texto": "Leitura do Livro do Apocalipse de São João.\n\nEu, João, 1 vi outro anjo descendo do céu. Tinha grande poder, e a terra ficou toda iluminada com a sua glória. 2 Ele gritou com voz poderosa: \"Caiu! Caiu Babilônia, a grande! Tornou-se morada de demônios, abrigo de todos os espíritos maus, abrigo de aves impuras e nojentas. 21 Nessa hora, um anjo poderoso levantou uma pedra do tamanho de uma grande pedra de moinho e atirou-a ao mar, dizendo: \"Com esta força será lançada Babilônia, a Grande Cidade, e nunca mais será encontrada. 22 E o canto de harpistas e músicos, de flautistas e tocadores de trombeta, em ti nunca mais se ouvirá; e nenhum artista de arte alguma em ti jamais se encontrará; e o canto do moinho em ti nunca mais se ouvirá; 23 e a luz da lâmpada em ti nunca mais brilhará; e a voz do esposo e da esposa em ti nunca mais se ouvirá, porque os teus comerciantes eram os grandes da terra, e com magia tu enfeitiçaste todas as nações\". 19,1 Depois disso, ouvi um forte rumor, de uma grande multidão no céu, que clamava: \"Aleluia! A salvação, a glória e o poder pertencem ao nosso Deus, 2 porque seus julgamentos são verdadeiros e justos. Sim, Deus julgou a grande prostituta que corrompeu a terra com sua prostituição, e vingou nela o sangue dos seus servos\". 3 E repetiram: \"Aleluia! A fumaça dela fica subindo para toda a eternidade!\" 9a E um anjo me disse: \"Escreve: Felizes são os convidados para o banquete das núpcias do Cordeiro\"."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 99(100),2.3.4.5 (R. Ap 19,9a)",
      "refrao": "São bem-aventurados os que foram convidados para a Ceia Nupcial das bodas do Cordeiro!",
      "texto": "Aclamai o Senhor, ó terra inteira, servi ao Senhor com alegria, ide a ele cantando jubilosos! *\nSabei que o Senhor, só ele, é Deus, Ele mesmo nos fez, e somos seus, nós somos seu povo e seu rebanho. *\nEntrai por suas portas dando graças, e em seus átrios com hinos de louvor; dai-lhe graças, seu nome bendizei! *\nSim, é bom o Senhor e nosso Deus, sua bondade perdura para sempre, seu amor é fiel eternamente! *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 21,20-28",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas.\n\nNaquele tempo, disse Jesus aos seus discípulos: 20 \"Quando virdes Jerusalém cercada de exércitos, ficai sabendo que a sua destruição está próxima. 21 Então, os que estiverem na Judeia, devem fugir para as montanhas; os que estiverem no meio da cidade, devem afastar-se; os que estiverem no campo, não entrem na cidade. 22 Pois esses dias são de vingança, para que se cumpra tudo o que dizem as Escrituras. 23 Infelizes das mulheres grávidas e daquelas que estiverem amamentando naqueles dias, pois haverá uma grande calamidade na terra e ira contra este povo. 24 Serão mortos pela espada e levados presos para todas as nações. e Jerusalém será pisada pelos infiéis, até que o tempo dos pagãos se complete. 25 Haverá sinais no sol, na lua e nas estrelas. Na terra, as nações ficarão angustiadas, com pavor do barulho do mar e das ondas. 26 Os homens vão desmaiar de medo, só em pensar no que vai acontecer ao mundo, porque as forças do céu serão abaladas. 27 Então eles verão o Filho do Homem, vindo numa nuvem com grande poder e glória. 28 Quando estas coisas começarem a acontecer, levantai-vos e erguei a cabeça, porque a vossa libertação está próxima\"."
    }
  },
  "2026-11-27": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Ap 20,1-4.11-21,2",
      "texto": "Leitura do Livro do Apocalipse de São João.\n\nEu, João, 1 vi um anjo descer do céu. Nas mãos tinha a chave do Abismo e uma grande corrente. 2 Ele agarrou o Dragão, a antiga Serpente, que é o Diabo, Satanás. Acorrentou-o por mil anos 3 e lançou-o dentro do Abismo. Depois, trancou e lacrou o Abismo, para que o Dragão não seduzisse mais as nações da terra, até que terminassem os mil anos. Depois dos mil anos, o Dragão deve ser solto, mas por pouco tempo. 4 Vi então tronos, e os seus ocupantes sentaram-se e receberam o poder de julgar. Vi também as almas daqueles que foram decapitados por causa do Testemunho de Jesus e da Palavra de Deus e aqueles que não tinham adorado a besta, nem a imagem dela, nem tinham recebido na fronte ou na mão a marca da besta. Eles voltaram a viver, para reinarem com Cristo durante mil anos. 11 Vi ainda um grande trono branco e aquele que estava sentado nele. O céu e a terra fugiram da sua presença e não se achou mais o lugar deles. 12 Vi também os mortos, os grandes e os pequenos, em pé diante do trono. Foram abertos livros, e mais um outro livro ainda: o livro da vida. Então foram julgados os mortos, de acordo com sua conduta, conforme está escrito nos livros. 13 O mar devolveu os mortos que se encontravam nele. A morte e a morada dos mortos entregaram de volta os seus mortos. E cada um foi julgado conforme sua conduta. 14 A morte e a morada dos mortos foram então lançados no lago de fogo. Esta é a segunda morte: o lago de fogo. 15 Quem não tinha o seu nome escrito no livro da vida, foi também lançado no lago de fogo. 21,1 Vi então um novo céu e uma nova terra. Pois o primeiro céu e a primeira terra passaram, e o mar já não existe. 2 Vi a cidade santa, a nova Jerusalém, que descia do céu, de junto de Deus, vestida qual esposa enfeitada para o seu marido."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 83(84),3.4.5-6a e 8a (R. Ap 21,3b)",
      "refrao": "Eis a tenda de Deus, no meio do povo!",
      "texto": "Minha alma desfalece de saudades e anseia pelos átrios do Senhor! Meu coração e minha carne rejubilam e exultam de alegria no Deus vivo! *\nMesmo o pardal encontra abrigo em vossa casa, e a andorinha ali prepara o seu ninho, para nele seus filhotes colocar: vossos altares, ó Senhor Deus do universo! vossos altares, ó meu Rei e meu Senhor! *\nFelizes os que habitam vossa casa; para sempre haverão de vos louvar! Felizes os que em vós têm sua força, Caminharão com um ardor sempre crescente. *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 21,29-33",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas.\n\nNaquele tempo, 29 Jesus contou-lhes uma parábola: \"Olhai a figueira e todas as árvores. 30 Quando vedes que elas estão dando brotos, logo sabeis que o verão está perto. 31 Vós também, quando virdes acontecer essas coisas, ficai sabendo que o Reino de Deus está perto. 32 Em verdade, eu vos digo: tudo isso vai acontecer antes que passe esta geração. 33 O céu e a terra passarão, mas as minhas palavras não hão de passar\"."
    }
  },
  "2026-11-28": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Ap 22,1-7",
      "texto": "Leitura do Livro do Apocalipse de São João.\n\nA mim, João, 1 o anjo do Senhor mostrou-me um rio de água viva, o qual brilhava como cristal. O rio brotava do trono de Deus e do Cordeiro. 2 No meio da praça, de cada lado do rio, estão plantadas árvores da vida; elas dão frutos doze vezes por ano; em cada mês elas dão fruto; suas folhas servem para curar as nações. 3 Já não haverá maldição alguma. Na cidade estará o trono de Deus e do Cordeiro e seus servos poderão prestar-lhe culto. 4 Verão a sua face e o seu nome estará sobre suas frontes. 5 Não haverá mais noite: não se precisará mais da luz da lâmpada, nem da luz do sol, porque o Senhor Deus vai brilhar sobre eles e eles reinarão para toda a eternidade. 6 Então o anjo disse-me: \"Estas palavras são dignas de fé e verdadeiras, pois o Senhor, o Deus que inspira os profetas, enviou o seu Anjo, para mostrar aos seus servos o que deve acontecer muito em breve. 7 Eis que eu venho em breve. Feliz aquele que observa as palavras da profecia deste livro\"."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 94(95),1-2.3-5.6-7 (R. 1Cor 16,22b e Ap 22,20c)",
      "refrao": "Amém! Vem, ó Senhor Jesus! Amém!",
      "texto": "Vinde, exultemos de alegria no Senhor, aclamemos o Rochedo que nos salva! Ao seu encontro caminhemos com louvores, e com cantos de alegria o celebremos! *\nNa verdade, o Senhor é o grande Deus, o grande Rei, muito maior que os deuses todos. Tem nas mãos as profundezas dos abismos, e as alturas das montanhas lhe pertencem; o mar é dele, pois foi ele quem o fez, e a terra firme suas mãos a modelaram. *\nVinde adoremos e prostremo-nos por terra, e ajoelhemos ante o Deus que nos criou! Porque ele é o nosso Deus, nosso Pastor, e nós somos o seu povo e seu rebanho, as ovelhas que conduz com sua mão. *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 21,34-36",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas.\n\nNaquele tempo, disse Jesus aos seus discípulos: 34 \"Tomai cuidado para que vossos corações não fiquem insensíveis por causa da gula, da embriaguez e das preocupações da vida, e esse dia não caia de repente sobre vós; 35 pois esse dia cairá como uma armadilha sobre todos os habitantes de toda a terra. 36 Portanto, ficai atentos e orai a todo momento, a fim de terdes força para escapar de tudo o que deve acontecer e para ficardes em pé diante do Filho do Homem\"."
    }
  },
  "2026-11-29": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Is 63,16b-17.19b;64,2b-7",
      "texto": "Leitura do Livro do Profeta Isaías.\n\n16b Senhor, tu és nosso Pai, nosso redentor; eterno é o teu nome. 17 Como nos deixaste andar longe de teus caminhos e endureceste nossos corações para não termos o teu temor? Por amor de teus servos, das tribos de tua herança, volta atrás. 19b Ah! se rompesses os céus e descesses! As montanhas se desmanchariam diante de ti. 64,2b Desceste, pois, e as montanhas se derreteram diante de ti. 3 Nunca se ouviu dizer nem chegou aos ouvidos de ninguém, jamais olhos viram que um Deus, exceto tu, tenha feito tanto pelos que nele esperam. 4 Vens ao encontro de quem pratica a justiça com alegria, de quem se lembra de ti em teus caminhos. Tu te irritaste, porque nós pecamos; é nos caminhos de outrora que seremos salvos. 5 Todos nós nos tornamos imundície, e todas as nossas boas obras são como um pano sujo; murchamos todos como folhas, e nossas maldades empurram-nos como o vento. 6 Não há quem invoque teu nome, quem se levante para encontrar-se contigo; escondeste de nós tua face e nos entregaste à mercê da nossa maldade. 7 Assim mesmo, Senhor, tu és nosso pai, nós somos barro; tu, nosso oleiro, e nós todos, obra de tuas mãos."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 79(80),2ac.3b.15-16.18-19 (R. 4)",
      "refrao": "Iluminai a vossa face sobre nós, convertei-nos, para que sejamos salvos!",
      "texto": "Ó Pastor de Israel, prestai ouvidos. Vós que sobre os querubins vos assentais, aparecei cheio de glória e esplendor! Despertai vosso poder, ó nosso Deus e vinde logo nos trazer a salvação! *\nVoltai-vos para nós, Deus do universo! Olhai dos altos céus e observai. Visitai a vossa vinha e protegei-a! Foi a vossa mão direita que a plantou; protegei-a, e ao rebento que firmastes! *\nPousai a mão por sobre o vosso protegido, o filho do homem que escolhestes para vós! E nunca mais vos deixaremos, Senhor Deus! Dai-nos vida, e louvaremos vosso nome! *"
    },
    "segundaLeitura": {
      "titulo": "SEGUNDA LEITURA",
      "referencia": "1Cor 1,3-9",
      "texto": "Leitura da Primeira Carta de São Paulo aos Coríntios.\n\nIrmãos: 3 Para vós, graça e paz, da parte de Deus, nosso Pai, e do Senhor Jesus Cristo. 4 Dou graças a Deus sempre a vosso respeito, por causa da graça que Deus vos concedeu em Cristo Jesus: 5 Nele fostes enriquecidos em tudo, em toda palavra e em todo conhecimento, 6 à medida que o testemunho sobre Cristo se confirmou entre vós. 7 Assim, não tendes falta de nenhum dom, vós que aguardais a revelação do Senhor nosso, Jesus Cristo. 8 É ele também que vos dará perseverança em vosso procedimento irrepreensível, até ao fim, até ao dia de nosso Senhor, Jesus Cristo. 9 Deus é fiel; por ele fostes chamados à comunhão com seu Filho, Jesus Cristo, Senhor nosso."
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Mc 13,33-37",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Marcos.\n\nNaquele tempo, disse Jesus aos seus discípulos: 33 \"Cuidado! Ficai atentos, porque não sabeis quando chegará o momento. 34 É como um homem que, ao partir para o estrangeiro, deixou sua casa sob a responsabilidade de seus empregados, distribuindo a cada um sua tarefa. E mandou o porteiro ficar vigiando. 35 Vigiai, portanto, porque não sabeis quando o dono da casa vem: à tarde, à meia-noite, de madrugada ou ao amanhecer. 36 Para que não suceda que, vindo de repente, ele vos encontre dormindo. 37 O que vos digo, digo a todos: Vigiai!\""
    }
  },
  "2026-11-30": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Rm 10,9-18",
      "texto": "Leitura da Carta de São Paulo aos Romanos.\n\nIrmãos, 9 se, com tua boca, confessares Jesus como Senhor e, no teu coração, creres que Deus o ressuscitou dos mortos, serás salvo. 10 É crendo no coração que se alcança a justiça e é confessando a fé com a boca que se consegue a salvação. 11 Pois a Escritura diz: \"Todo aquele que nele crer não ficará confundido\". 12 Portanto, não importa a diferença entre judeu e grego; todos têm o mesmo Senhor, que é generoso para com todos os que o invocam. 13 De fato, todo aquele que invocar o Nome do Senhor será salvo. 14 Mas, como invocá-lo, sem antes crer nele? E como crer, sem antes ter ouvido falar dele? E como ouvir, sem alguém que pregue? 15 E como pregar, sem ser enviado para isso? Assim é que está escrito: \"Quão belos são os pés dos que anunciam o bem\". 16 Mas nem todos obedeceram à Boa-nova. Pois Isaías diz: \"Senhor, quem acreditou em nossa pregação?\" 17 Logo, a fé vem da pregação e a pregação se faz pela palavra de Cristo. 18 Então, eu pergunto: Será que eles não ouviram? Certamente que ouviram, pois \"a voz deles se espalhou por toda a terra, e as suas palavras chegaram aos confins do mundo\"."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 18(19A),2-3.4-5 (R. 5a)",
      "refrao": "Seu som ressoa e se espalha em toda terra.",
      "texto": "Os céus proclamam a glória do Senhor, e o firmamento, a obra de suas mãos; o dia ao dia transmite esta mensagem, a noite à noite publica esta notícia. *\nNão são discursos nem frases ou palavras, nem são vozes que possam ser ouvidas; seu som ressoa e se espalha em toda a terra, chega aos confins do universo a sua voz. *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Mt 4,18-22",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Mateus.\n\nNaquele tempo, 18 quando Jesus andava à beira do mar da Galileia, viu dois irmãos: Simão, chamado Pedro, e seu irmão André. Estavam lançando a rede ao mar, pois eram pescadores. 19 Jesus disse a eles: \"Segui-me, e eu farei de vós pescadores de homens\". 20 Eles, imediatamente deixaram as redes e o seguiram. 21 Caminhando um pouco mais, Jesus viu outros dois irmãos: Tiago, filho de Zebedeu, e seu irmão João. Estavam na barca com seu pai Zebedeu consertando as redes. Jesus os chamou. 22 Eles, imediatamente deixaram a barca e o pai, e o seguiram."
    }
  },
  "2026-12-01": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Is 11,1-10",
      "texto": "Leitura do Livro do Profeta Isaías.\n\nNaqueles dias, 1 nascerá uma haste do tronco de Jessé e, a partir da raiz, surgirá o rebento de uma flor; 2 sobre ele repousará o espírito do Senhor: espírito de sabedoria e discernimento, espírito de conselho e fortaleza, espírito de ciência e temor de Deus; 3 no temor do Senhor encontra ele seu prazer. Ele não julgará pelas aparências que vê nem decidirá somente por ouvir dizer; 4 mas trará justiça para os humildes e uma ordem justa para os homens pacíficos; fustigará a terra com a força da sua palavra e destruirá o mau com o sopro dos lábios. 5 Cingirá a cintura com a correia da justiça e as costas com a faixa da fidelidade. 6 O lobo e o cordeiro viverão juntos e o leopardo deitar-se-á ao lado do cabrito; o bezerro e o leão comerão juntos e até mesmo uma criança poderá tangê-los. 7 A vaca e o urso pastarão lado a lado, enquanto suas crias descansam juntas; o leão comerá palha como o boi; 8 a criança de peito vai brincar em cima do buraco da cobra venenosa; e o menino desmamado não temerá pôr a mão na toca da serpente. 9 Não haverá danos nem mortes por todo o meu santo monte: a terra estará tão repleta do saber do Senhor quanto as águas que cobrem o mar. 10 Naquele dia, a raiz de Jessé se erguerá como um sinal entre os povos; hão de buscá-la as nações, e gloriosa será a sua morada."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 71(72),1-2.7-8.12-13.17 (R. cf. 7)",
      "refrao": "Nos seus dias a justiça florirá e paz em abundância, para sempre.",
      "texto": "Dai ao Rei vossos poderes, Senhor Deus, vossa justiça ao descendente da realeza! Com justiça ele governe o vosso povo, com equidade ele julgue os vossos pobres. *\nNos seus dias a justiça florirá e grande paz, até que a lua perca o brilho! De mar a mar estenderá o seu domínio, e desde o rio até os confins de toda a terra! *\nLibertará o indigente que suplica, e o pobre ao qual ninguém quer ajudar. Terá pena do indigente e do infeliz, e a vida dos humildes salvará. *\nSeja bendito o seu nome para sempre! E que dure como o sol sua memória! Todos os povos serão nele abençoados, todas as gentes cantarão o seu louvor! *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 10,21-24",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas.\n\n21 Naquele momento, Jesus exultou no Espírito Santo e disse: \"Eu te louvo, Pai, Senhor do céu e da terra, porque escondeste essas coisas aos sábios e inteligentes, e as revelaste aos pequeninos. Sim, Pai, porque assim foi do teu agrado. 22 Tudo me foi entregue pelo meu Pai. Ninguém conhece quem é o Filho, a não ser o Pai; e ninguém conhece quem é o Pai, a não ser o Filho e aquele a quem o Filho o quiser revelar\". 23 Jesus voltou-se para os discípulos e disse-lhes em particular: \"Felizes os olhos que veem o que vós vedes! 24 Pois eu vos digo que muitos profetas e reis quiseram ver o que estais vendo, e não puderam ver; quiseram ouvir o que estais ouvindo, e não puderam ouvir\"."
    }
  },
  "2026-12-02": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Is 25,6-10a",
      "texto": "Leitura do Livro do Profeta Isaías.\n\nNaquele dia, 6 o Senhor dos exércitos dará neste monte, para todos os povos, um banquete de ricas iguarias, regado com vinho puro, servido de pratos deliciosos e dos mais finos vinhos. 7 Ele removerá, neste monte, a ponta da cadeia que ligava todos os povos, a teia em que tinha envolvido todas as nações. 8 O Senhor Deus eliminará para sempre a morte e enxugará as lágrimas de todas as faces e acabará com a desonra do seu povo em toda a terra; o Senhor o disse. 9 Naquele dia, se dirá: \"Este é o nosso Deus, esperamos nele, até que nos salvou; este é o Senhor, nele temos confiado: vamos alegrar-nos e exultar por nos ter salvo\". 10a E a mão do Senhor repousará sobre este monte."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 22(23),1-3a.3b-4.5.6 (R. 6cd)",
      "refrao": "Na casa do Senhor habitarei pelos tempos infinitos.",
      "texto": "O Senhor é o pastor que me conduz; não me falta coisa alguma. Pelos prados e campinas verdejantes ele me leva a descansar. Para as águas repousantes me encaminha, e restaura as minhas forças. *\nEle me guia no caminho mais seguro, pela honra do seu nome. Mesmo que eu passe pelo vale tenebroso, nenhum mal eu temerei. Estais comigo com bastão e com cajado, eles me dão a segurança! *\nPreparais à minha frente uma mesa, bem à vista do inimigo; com óleo vós ungis minha cabeça, e o meu cálice transborda. *\nFelicidade e todo bem hão de seguir-me, por toda a minha vida; e, na casa do Senhor, habitarei pelos tempos infinitos. *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Mt 15,29-37",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Mateus.\n\nNaquele tempo, 29 Jesus foi para as margens do mar da Galileia, subiu a montanha, e sentou-se. 30 Numerosas multidões aproximaram-se dele, levando consigo coxos, aleijados, cegos, mudos, e muitos outros doentes. Então os colocaram aos pés de Jesus. E ele os curou. 31 O povo ficou admirado, quando viu os mudos falando, os aleijados sendo curados, os coxos andando e os cegos enxergando. E glorificaram o Deus de Israel. 32 Jesus chamou seus discípulos e disse: \"Tenho compaixão da multidão, porque já faz três dias que está comigo, e nada tem para comer. Não quero mandá-los embora com fome, para que não desmaiem pelo caminho\". 33 Os discípulos disseram: \"Onde vamos buscar, neste deserto, tantos pães para saciar tão grande multidão?\" 34 Jesus perguntou: \"Quantos pães tendes?\" Eles responderam: \"Sete, e alguns peixinhos\". 35 E Jesus mandou que a multidão se sentasse pelo chão. 36 Depois pegou os sete pães e os peixes, deu graças, partiu-os, e os dava aos discípulos, e os discípulos, às multidões. 37 Todos comeram, e ficaram satisfeitos; e encheram sete cestos com os pedaços que sobraram."
    }
  },
  "2026-12-03": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Is 26,1-6",
      "texto": "Leitura do Livro do Profeta Isaías.\n\n1 Naquele dia, cantarão este canto em Judá: \"Uma cidade fortificada é a nossa segurança; o Senhor cercou-a de muros e antemuro. 2 Abri as suas portas, para que entre um povo justo, cumpridor da palavra, 3 firme em seu propósito; e tu lhe conservarás a paz, porque confia em ti. 4 Esperai no Senhor por todos os tempos, o Senhor é a rocha eterna. 5 Ele derrubou os que habitam no alto, há de humilhar a cidade orgulhosa, deitando-a por terra, até fazê-la beijar o chão. 6 Hão de pisá-la os pés, os pés dos pobres, as passadas dos humildes\"."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 117(118),1.8-9.19-21.25-27a (R. 26a)",
      "refrao": "Bendito é aquele que vem vindo em nome do Senhor!",
      "texto": "Dai graças ao Senhor, porque ele é bom! \"Eterna é a sua misericórdia!\" É melhor buscar refúgio no Senhor, do que pôr no ser humano a esperança; é melhor buscar refúgio no Senhor, do que contar com os poderosos deste mundo!\" *\nAbri-me vós, abri-me as portas da justiça; quero entrar para dar graças ao Senhor! \"Sim, esta é a porta do Senhor, por ela só os justos entrarão!\" Dou-vos graças, ó Senhor, porque me ouvistes e vos tornastes para mim o Salvador! *\nÓ Senhor, dai-nos a vossa salvação, ó Senhor, dai-nos também prosperidade! Bendito seja, em nome do Senhor, aquele que em seus átrios vai entrando! Desta casa do Senhor vos bendizemos. Que o Senhor e nosso Deus nos ilumine! *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Mt 7,21.24-27",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Mateus.\n\nNaquele tempo, disse Jesus aos seus discípulos: 21 \"Nem todo aquele que me diz: 'Senhor, Senhor', entrará no Reino dos Céus, mas o que põe em prática a vontade de meu Pai que está nos céus. 24 Portanto, quem ouve estas minhas palavras e as põe em prática, é como um homem prudente, que construiu sua casa sobre a rocha. 25 Caiu a chuva, vieram as enchentes, os ventos deram contra a casa, mas a casa não caiu, porque estava construída sobre a rocha. 26 Por outro lado, quem ouve estas minhas palavras e não as põe em prática, é como um homem sem juízo, que construiu sua casa sobre a areia. 27 Caiu a chuva, vieram as enchentes, os ventos sopraram e deram contra a casa, e a casa caiu, e sua ruína foi completa!\""
    }
  },
  "2026-12-04": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Is 29,17-24",
      "texto": "Leitura do Livro do Profeta Isaías.\n\nAssim fala o Senhor Deus: 17 Dentro de pouco tempo, não se transformará o Líbano em jardim? E não poderá o jardim tornar-se floresta? 18 Naquele dia, os surdos ouvirão as palavras do livro e os olhos dos cegos verão, no meio das trevas e das sombras. 19 Os humildes aumentarão sua alegria no Senhor, e os mais pobres dos homens se rejubilarão no Santo de Israel; 20 fracassou o prepotente, desapareceu o trapaceiro, e sucumbiram todos os malfeitores precoces, 21 os que faziam os outros pecar por palavras, e armavam ciladas ao juiz à porta da cidade e atacavam o justo com palavras falsas. 22 Isto diz o Senhor à casa de Jacó, ele que libertou Abraão: \"Agora, Jacó não mais terá que envergonhar-se nem seu rosto terá que enrubescer; 23 quando contemplarem as obras de minhas mãos, hão de honrar meu nome no meio do povo, honrarão o Santo de Jacó, e temerão o Deus de Israel; 24 os homens de espírito inconstante conseguirão sabedoria e os maldizentes concordarão em aprender\"."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 26(27),1.4.13-14 (R. 1a)",
      "refrao": "O Senhor é minha luz e salvação.",
      "texto": "O Senhor é minha luz e salvação; de quem eu terei medo? O Senhor é a proteção da minha vida; perante quem eu tremerei? *\nAo Senhor eu peço apenas uma coisa, e é só isto que eu desejo: habitar no santuário do Senhor por toda a minha vida; saborear a suavidade do Senhor e contemplá-lo no seu templo. *\nSei que a bondade do Senhor eu hei de ver na terra dos viventes. Espera no Senhor e tem coragem, espera no Senhor! *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Mt 9,27-31",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Mateus.\n\nNaquele tempo, 27 partindo Jesus, dois cegos o seguiram, gritando: \"Tem piedade de nós, filho de Davi!\" 28 Quando Jesus entrou em casa, os cegos se aproximaram dele. Então Jesus perguntou-lhes: \"Vós acreditais que eu posso fazer isso?\" Eles responderam: \"Sim, Senhor\". 29 Então Jesus tocou nos olhos deles, dizendo: \"Faça-se conforme a vossa fé\". 30 E os olhos deles se abriram. Jesus os advertiu severamente: \"Tomai cuidado para que ninguém fique sabendo\". 31 Mas eles saíram, e espalharam sua fama por toda aquela região."
    }
  },
  "2026-12-05": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Is 30,19-21.23-26",
      "texto": "Leitura do Livro do Profeta Isaías.\n\nAssim fala o Senhor, o Santo de Israel: 19 \"Povo de Sião, que habitas em Jerusalém, não terás motivo algum para chorar: ele se comoverá à voz do teu clamor; logo que te ouvir, ele atenderá. 20 O Senhor decerto dará a todos o pão da angústia e a água da aflição, não se apartará mais de ti o teu mestre; teus olhos poderão vê-lo 21 e teus ouvidos poderão ouvir a palavra de aviso atrás de ti: 'O caminho é este para todos, segui por ele', sem desviar-vos à direita ou à esquerda. 23 Ele te dará chuva para a semente que tiveres semeado na terra, e o fruto da terra será abundante e rico; nesse dia, o teu rebanho pastará em vastas pastagens, 24 teus bois e os animais que lavram a terra comerão forragem salgada, limpa com pá e peneira. 25 Haverá em toda montanha alta e em toda colina elevada arroios de água corrente, num dia em que muitos serão mortos com o desabamento de seus torreões. 26 A lua brilhará como a luz do sol e o sol brilhará sete vezes mais, como a luz de sete dias, no dia em que o Senhor curar a ferida de seu povo e fizer sarar a lesão de sua chaga\"."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 146(147A),1-2.3-4.5-6 (R. Is 30,18)",
      "refrao": "Felizes são aqueles, que esperam no Senhor!",
      "texto": "Louvai o Senhor Deus, porque ele é bom, cantai ao nosso Deus, porque é suave: ele é digno de louvor, ele o merece! O Senhor reconstruiu Jerusalém, e os dispersos de Israel juntou de novo. *\nele conforta os corações despedaçados, ele enfaixa suas feridas e as cura; fixa o número de todas as estrelas e chama a cada uma por seu nome. *\nÉ grande e onipotente o nosso Deus, seu saber não tem medida nem limites. O Senhor Deus é o amparo dos humildes, mas dobra até o chão os que são ímpios. *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Mt 9,35-10,1.6-8",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Mateus.\n\nNaquele tempo, 35 Jesus percorria todas as cidades e povoados, ensinando em suas sinagogas, pregando o Evangelho do Reino, e curando todo tipo de doença e enfermidade. 36 Vendo Jesus as multidões, compadeceu-se delas, porque estavam cansadas e abatidas, como ovelhas que não têm pastor. Então disse a seus discípulos: 37 \"A Messe é grande, mas os trabalhadores são poucos. 38 Pedi pois ao dono da messe que envie trabalhadores para a sua colheita!\" 10,1 E, chamando os seus doze discípulos deu-lhes poder para expulsarem os espíritos maus e para curarem todo tipo de doença e enfermidade. Enviou-os com as seguintes recomendações: 6 \"Ide, antes, às ovelhas perdidas da casa de Israel! 7 Em vosso caminho, anunciai: 'O Reino dos Céus está próximo'. 8 Curai os doentes, ressuscitai os mortos, purificai os leprosos, expulsai os demônios. De graça recebestes, de graça deveis dar!\""
    }
  },
  "2026-12-06": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Is 40,1-5.9-11",
      "texto": "Leitura do Livro do Profeta Isaías.\n\n1 \"Consolai o meu povo, consolai-o! — diz o vosso Deus —. 2 Falai ao coração de Jerusalém e dizei em alta voz que sua servidão acabou e a expiação de suas culpas foi cumprida; ela recebeu das mãos do Senhor o dobro por todos os seus pecados\". 3 Grita uma voz: \"Preparai no deserto o caminho do Senhor, aplainai na solidão a estrada de nosso Deus. 4 Nivelem-se todos os vales, rebaixem-se todos os montes e colinas; endireite-se o que é torto e alisem-se as asperezas: 5 a glória do Senhor então se manifestará, e todos os homens verão juntamente o que a boca do Senhor falou. 9 Sobe a um alto monte, tu, que trazes a boa-nova a Sião; levanta com força a tua voz, tu, que trazes a boa-nova a Jerusalém, ergue a voz, não temas; dize às cidades de Judá: 'Eis o vosso Deus, 10 eis que o Senhor Deus vem com poder, seu braço tudo domina: eis, com ele, sua conquista, eis à sua frente a vitória. 11 Como um pastor, ele apascenta o rebanho, reúne, com a força dos braços, os cordeiros e carrega-os ao colo; ele mesmo tange as ovelhas-mães'\"."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 84(85),9ab-10.11-12.13-14 (R. 8)",
      "refrao": "Mostrai-nos, ó Senhor, vossa bondade, e a vossa salvação nos concedei!",
      "texto": "Quero ouvir o que o Senhor irá falar: é a paz que ele vai anunciar; a paz para o seu povo e seus amigos, para os que voltam ao Senhor seu coração. Está perto a salvação dos que o temem, e a glória habitará em nossa terra. *\nA verdade e o amor se encontrarão, a justiça e a paz se abraçarão; da terra brotará a fidelidade, e a justiça olhará dos altos céus. *\nO Senhor nos dará tudo o que é bom, e a nossa terra nos dará suas colheitas; a justiça andará na sua frente e a salvação há de seguir os passos seus. *"
    },
    "segundaLeitura": {
      "titulo": "SEGUNDA LEITURA",
      "referencia": "2Pd 3,8-14",
      "texto": "Leitura da Segunda Carta de São Pedro.\n\n8 Uma coisa vós não podeis desconhecer, caríssimos: para o Senhor, um dia é como mil anos e mil anos como um dia. 9 O Senhor não tarda a cumprir sua promessa, como pensam alguns, achando que demora. Ele está usando de paciência para convosco. Pois não deseja que alguém se perca. Ao contrário, quer que todos venham a converter-se. 10 O dia do Senhor chegará como um ladrão, e então os céus acabarão com barulho espantoso; os elementos, devorados pelas chamas, se dissolverão, e a terra será consumida com tudo o que nela se fez. 11 Se desse modo tudo se vai desintegrar, qual não deve ser o vosso empenho numa vida santa e piedosa, 12 enquanto esperais com anseio a vinda do Dia de Deus, quando os céus em chama se vão derreter, e os elementos, consumidos pelo fogo, se fundirão? 13 O que nós esperamos, de acordo com a sua promessa, são novos céus e uma nova terra, onde habitará a justiça. 14 Caríssimos, vivendo nesta esperança, esforçai-vos para que ele vos encontre numa vida pura e sem mancha e em paz."
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Mc 1,1-8",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Marcos.\n\n1 Início do Evangelho de Jesus Cristo, Filho de Deus. 2 Está escrito no livro do profeta Isaías: \"Eis que envio meu mensageiro à tua frente, para preparar o teu caminho. 3 Esta é a voz daquele que grita no deserto: 'Preparai o caminho do Senhor, endireitai suas estradas!'\" 4 Foi assim que João Batista apareceu no deserto, pregando um batismo de conversão para o perdão dos pecados. 5 Toda a região da Judeia e todos os moradores de Jerusalém iam ao seu encontro. Confessavam os seus pecados e João os batizava no rio Jordão. 6 João se vestia com uma pele de camelo e comia gafanhotos e mel do campo. 7 E pregava, dizendo: \"Depois de mim virá alguém mais forte do que eu. Eu nem sou digno de me abaixar para desamarrar suas sandálias. 8 Eu vos batizei com água, mas ele vos batizará com o Espírito Santo\"."
    }
  },
  "2026-12-07": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Is 35,1-10",
      "texto": "Leitura do Livro do Profeta Isaías.\n\n1 Alegre-se a terra que era deserta e intransitável, exulte a solidão e floresça como um lírio. 2 Germine e exulte de alegria e louvores. Foi-lhe dada a glória do Líbano, o esplendor do Carmelo e de Saron; seus habitantes verão a glória do Senhor, a majestade do nosso Deus. 3 Fortalecei as mãos enfraquecidas e firmai os joelhos debilitados. 4 Dizei às pessoas deprimidas: \"Criai ânimo, não tenhais medo! Vede, é vosso Deus, é a vingança que vem, é a recompensa de Deus; é ele que vem para vos salvar\". 5 Então se abrirão os olhos dos cegos e se descerrarão os ouvidos dos surdos. 6 O coxo saltará como um cervo e se desatará a língua dos mudos, assim como brotarão águas no deserto e jorrarão torrentes no ermo. 7 A terra árida se transformará em lago, e a região sedenta, em fontes d'água; nas cavernas onde viviam dragões crescerá o caniço e o junco. 8 Ali haverá uma vereda e um caminho; o caminho se chamará estrada santa: por ela não passará o impuro; mas será uma estrada reta em que até os débeis não se perderão. 9 Ali não existem leões, não andam por ela animais de predadores, nem mesmo aparecem lá; os que forem libertados, poderão percorrê-la, 10 os que o Senhor salvou, voltarão para casa. Eles virão a Sião cantando louvores, com infinita alegria brilhando em seus rostos: cheios de gozo e contentamento, não mais conhecerão a dor e o pranto\"."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 84(85),9ab-10.11-12.13-14 (R. Is 35,4d)",
      "refrao": "Eis que vem o nosso Deus! Ele vem para salvar.",
      "texto": "Quero ouvir o que o Senhor irá falar: é a paz que ele vai anunciar; a paz para o seu povo e seus amigos, para os que voltam ao Senhor seu coração. Está perto a salvação dos que o temem, e a glória habitará em nossa terra. *\nA verdade e o amor se encontrarão, a justiça e a paz se abraçarão; da terra brotará a fidelidade, e a justiça olhará dos altos céus. *\nO Senhor nos dará tudo o que é bom, e a nossa terra nos dará suas colheitas; a justiça andará na sua frente e a salvação há de seguir os passos seus. *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 5,17-26",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas.\n\n17 Um dia Jesus estava ensinando. E à sua volta estavam sentados fariseus e doutores da Lei, vindos de todas as aldeias da Galileia, da Judeia e de Jerusalém. E a virtude do Senhor o levava a curar. 18 Uns homens traziam um paralítico num leito e procuravam fazê-lo entrar para apresentá-lo. 19 Mas, não achando por onde introduzi-lo, devido à multidão, subiram ao telhado e por entre as telhas o desceram com o leito no meio da assembleia diante de Jesus. 20 Vendo-lhes a fé, ele disse: \"Homem, teus pecados estão perdoados\". 21 Os escribas e fariseus começaram a murmurar, dizendo: \"Quem é este que assim blasfema? Quem pode perdoar os pecados senão Deus? 22 Conhecendo-lhes os pensamentos, Jesus respondeu, dizendo: \"Por que murmurais em vossos corações? 23 O que é mais fácil dizer: 'teus pecados estão perdoados', ou dizer: 'levanta-te e anda'? 24 Pois, para que saibais que o Filho do homem tem na terra poder de perdoar os pecados - disse ao paralítico - eu te digo: levanta-te, pega o leito e vai para casa' \". 25 Imediatamente, diante deles, ele se levantou, tomou o leito e foi para casa, louvando a Deus. 26 Todos ficaram fora de si, glorificavam a Deus e cheios de temor diziam: \"Hoje vimos coisas maravilhosas!\""
    }
  },
  "2026-12-08": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Gn 3,9-15.20",
      "texto": "Leitura do Livro do Gênesis.\n\n9 O Senhor Deus chamou Adão, dizendo: \"Onde estás?\" 10 E ele respondeu: \"Ouvi tua voz no jardim, e fiquei com medo porque estava nu; e me escondi\". 11 Disse-lhe o Senhor Deus: \"E quem te disse que estavas nu? Então comeste da árvore, de cujo fruto te proibi comer?\" 12 Adão disse: \"A mulher que tu me deste por companheira, foi ela que me deu do fruto da árvore, e eu comi\". 13 Disse o Senhor Deus à mulher: \"Por que fizeste isso?\" E a mulher respondeu: \"A serpente enganou-me e eu comi\". 14 Então o Senhor Deus disse à serpente: \"Porque fizeste isso, serás maldita entre todos os animais domésticos e todos os animais selvagens! Rastejarás sobre o ventre e comerás pó todos os dias da tua vida! 15 Porei inimizade entre ti e a mulher, entre a tua descendência e a dela. Esta te ferirá a cabeça e tu lhe ferirás o calcanhar\". 20 E Adão chamou à sua mulher \"Eva\", porque ela é a mãe de todos os viventes."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 97(98),1.2-3ab.3cd-4 (R. 1a)",
      "refrao": "Cantai ao Senhor Deus um canto novo, porque ele fez prodígios!",
      "texto": "Cantai ao Senhor Deus um canto novo, porque ele fez prodígios! Sua mão e o seu braço forte e santo alcançaram-lhe a vitória. *\nO Senhor fez conhecer a salvação, e às nações, sua justiça; recordou o seu amor sempre fiel pela casa de Israel. *\nOs confins do universo contemplaram a salvação do nosso Deus. Aclamai o Senhor Deus, ó terra inteira, alegrai-vos e exultai! *"
    },
    "segundaLeitura": {
      "titulo": "SEGUNDA LEITURA",
      "referencia": "Ef 1,3-6.11-12",
      "texto": "Leitura da Carta de São Paulo aos Efésios.\n\n3 Bendito seja Deus, Pai de nosso Senhor Jesus Cristo. Ele nos abençoou com toda a bênção do seu Espírito em virtude de nossa união com Cristo, no céu. 4 Em Cristo, ele nos escolheu, antes da fundação do mundo, para que sejamos santos e irrepreensíveis sob o seu olhar, no amor. 5 Ele nos predestinou para sermos seus filhos adotivos por intermédio de Jesus Cristo, conforme a decisão da sua vontade, 6 para o louvor da sua glória e da graça com que ele nos cumulou no seu Bem-amado. 11 Nele também nós recebemos a nossa parte. Segundo o projeto daquele que conduz tudo conforme a decisão de sua vontade, nós fomos predestinados 12 a sermos, para o louvor de sua glória, os que de antemão colocaram a sua esperança em Cristo."
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 1,26-38 (Anunciação)",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas.\n\nNaquele tempo, 26 no sexto mês, o anjo Gabriel foi enviado por Deus a uma cidade da Galileia, chamada Nazaré, 27 a uma virgem, prometida em casamento a um homem chamado José. Ele era descendente de Davi e o nome da Virgem era Maria. 28 O anjo entrou onde ela estava e disse: \"Alegra-te, cheia de graça, o Senhor está contigo!\" 29 Maria ficou perturbada com estas palavras e começou a pensar qual seria o significado da saudação. 30 O anjo, então, disse-lhe: \"Não tenhas medo, Maria, porque encontraste graça diante de Deus. 31 Eis que conceberás e darás à luz um filho, a quem porás o nome de Jesus. 32 Ele será grande, será chamado Filho do Altíssimo, e o Senhor Deus lhe dará o trono de seu pai Davi. 33 Ele reinará para sempre sobre os descendentes de Jacó, e o seu reino não terá fim\". 34 Maria perguntou ao anjo: \"Como acontecerá isso, se eu não conheço homem algum?\" 35 O anjo respondeu: \"O Espírito virá sobre ti, e o poder do Altíssimo te cobrirá com sua sombra. Por isso, o menino que vai nascer será chamado Santo, Filho de Deus. 36 Também Isabel, tua parenta, concebeu um filho na velhice. Este já é o sexto mês daquela que era considerada estéril, 37 porque para Deus nada é impossível\". 38 Maria, então, disse: \"Eis aqui a serva do Senhor; faça-se em mim segundo a tua palavra!\" E o anjo retirou-se."
    }
  },
  "2026-12-09": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Is 40,25-31",
      "texto": "Leitura do Livro do Profeta Isaías.\n\n25 \"Com quem haveis de me comparar, e a quem seria eu igual?\" - fala o Santo. 26 Levantai os olhos para o alto e vede: Quem criou tudo isto? - Aquele que expressa em números o exército das estrelas e a cada uma chama pelo nome: tal é a grandeza e força e poder de Deus que nenhuma delas falta à chamada. 27 Então, por que dizes, Jacó, e por que falas, Israel: \"Minha vida ocultou-se da vista do Senhor e meu julgamento escapa ao do meu Deus?\" 28 Acaso ignoras, ou não ouviste? O Senhor é o Deus eterno que criou os confins da terra; ele não falha nem se cansa, insondável é sua sabedoria; 29 ele dá coragem ao desvalido e aumenta o vigor do mais fraco. 30 Cansam-se as crianças e param, os jovens tropeçam e caem, 31 mas os que esperam no Senhor renovam suas forças, criam asas como as águias, correm sem se cansar, caminham sem parar."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 102(103),1-2.3-4.8.10 (R. 1a)",
      "refrao": "Bendize, ó minha alma ao Senhor.",
      "texto": "Bendize, ó minha alma, ao Senhor, e todo o meu ser, seu santo nome! Bendize, ó minha alma, ao Senhor, não te esqueças de nenhum de seus favores! *\nPois ele te perdoa toda culpa, e cura toda a tua enfermidade; da sepultura ele salva a tua vida e te cerca de carinho e compaixão; *\nO Senhor é indulgente, é favorável, é paciente, é bondoso e compassivo. Não nos trata como exigem nossas faltas, nem nos pune em proporção às nossas culpas. *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Mt 11,28-30",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Mateus.\n\nNaquele tempo, tomou Jesus a palavra e disse: 28 \"Vinde a mim todos vós que estais cansados e fatigados sob o peso dos vossos fardos, e eu vos darei descanso. 29 Tomai sobre vós o meu jugo e aprendei de mim, porque sou manso e humilde de coração, e vós encontrareis descanso. 30 Pois o meu jugo é suave e o meu fardo é leve\"."
    }
  },
  "2026-12-10": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Is 41,13-20",
      "texto": "Leitura do Livro do Profeta Isaías.\n\n13 Eu sou o Senhor, teu Deus, que te tomo pela mão e te digo: \"Não temas; eu te ajudarei\". 14 Não tenhas medo, Jacó, pobre verme, não temais, homens de Israel. Eu vos ajudarei, diz o Senhor e Salvador, o Santo de Israel. 15 Eis que te transformei num carro novo de triturar, guarnecido de dentes de serra. Hás de triturar e despedaçar os montes, e reduzirás as colinas a poeira. 16 Ao expô-los ao vento, o vento os levará e o temporal os dispersará; exultarás no Senhor e te alegrarás no Santo de Israel. 17 Pobres e necessitados procuram água, mas não há, estão com a língua seca de sede. Eu, o Senhor, os atenderei, eu, Deus de Israel, não os abandonarei. 18 Farei nascer rios nas colinas escalvadas e fontes no meio dos vales; transformarei o deserto em lagos e a terra seca em nascentes d'água. 19 Plantarei no deserto o cedro, a acácia e a murta e a oliveira; crescerão no ermo o pinheiro, o olmo e o cipreste juntamente, 20 para que os homens vejam e saibam, considerem e compreendam que a mão do Senhor fez essas"
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 144(145),1.9.10-11.12-13ab (R. 8)",
      "refrao": "Misericórdia e piedade é o Senhor! Ele é amor, é paciência, é compaixão.",
      "texto": "Ó meu Deus, quero exaltar-os, ó meu Rei, e bendizer o vosso nome pelos séculos. O Senhor é muito bom para com todos, sua ternura abraça toda criatura. *\nQue vossas obras, ó Senhor, vos glorifiquem, e os vossos santos com louvores vos bendigam! Narrem a glória e o esplendor do vosso reino e saibam proclamar vosso poder! *\nPara espalhar vossos prodígios entre os homens e o fulgor de vosso reino esplendoroso. O vosso reino é um reino para sempre, vosso poder, de geração em geração. *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Mt 11,11-15",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Mateus.\n\nNaquele tempo, disse Jesus à multidão: 11 Em verdade eu vos digo, de todos os homens que já nasceram, nenhum é maior do que João Batista. No entanto, o menor no Reino dos Céus é maior do que ele. 12 Desde os dias de João Batista até agora, o Reino dos Céus sofre violência, e são os violentos que o conquistam. 13 Com efeito, todos os profetas e a Lei profetizaram até João. 14 E se quereis aceitar, ele é o Elias que há de vir. 15 Quem tem ouvidos, ouça\"."
    }
  },
  "2026-12-11": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Is 48,17-19",
      "texto": "Leitura do Livro do Profeta Isaías.\n\n17 Isto diz o Senhor, o teu libertador, o Santo de Israel: \"Eu, o Senhor teu Deus, te ensino coisas úteis, te conduzo pelo caminho em que andas. 18 Ah, se tivesses observado os meus mandamentos! Tua paz teria sido como um rio e tua justiça como as ondas do mar; 19 tua descendência seria como a areia do mar e os filhos do teu ventre como os grãos de areia; este nome não teria desaparecido nem teria sido cancelado de minha presença\"."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 1,1-2.3.4 e 6 (R. cf. Jo 8,12)",
      "refrao": "Senhor, quem vos seguir, terá a luz da vida.",
      "texto": "Feliz é todo aquele que não anda conforme os conselhos dos perversos; que não entra no caminho dos malvados, nem junto aos zombadores vai sentar-se; mas encontra seu prazer na lei de Deus a medita, dia e noite, sem cessar. *\nEis que ele é semelhante a uma árvore, que à beira da torrente está plantada; ela sempre dá seus frutos a seu tempo, e jamais as suas folhas vão murchar. Eis que tudo o que ele faz vai prosperar. *\nMas bem outra é a sorte dos perversos. Ao contrário, são iguais à palha seca espalhada e dispersada pelo vento. Pois Deus vigia o caminho dos eleitos, mas a estrada dos malvados leva à morte. *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Mt 11,16-19",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Mateus.\n\nNaquele tempo, disse Jesus às multidões: 16 \"Com quem vou comparar esta geração? São como crianças sentadas nas praças, que gritam para os colegas, dizendo: 17 'Tocamos flauta e vós não dançastes. Entoamos lamentações e vós não batestes no peito!' 18 Veio João, que não come nem bebe, e dizem: 'Ele está com um demônio'. 19 Veio o Filho do Homem, que come e bebe, e dizem: 'É um comilão e beberrão, amigo de cobradores de impostos e de pecadores'. Mas a sabedoria foi reconhecida com base em suas obras\"."
    }
  },
  "2026-12-12": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Gl 4,4-7",
      "texto": "Leitura da Carta de São Paulo aos Gálatas.\n\nIrmãos, 4 quando se completou o tempo previsto, Deus enviou o seu Filho, nascido de uma mulher, nascido sujeito à Lei, 5 a fim de resgatar os que eram sujeitos à Lei e para que todos recebêssemos a filiação adotiva. 6 E porque sois filhos, Deus enviou aos nossos corações o Espírito do seu Filho, que clama: Abá - ó Pai! 7 Assim já não és mais escravo, mas filho; e se és filho, és também herdeiro: tudo isso, por graça de Deus."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 95(96),1-2a.2b-3.10 (R. 3a)",
      "refrao": "Manifestai a sua glória entre as nações.",
      "texto": "Cantai ao Senhor Deus um canto novo, cantai ao Senhor Deus, ó terra inteira! Cantai e bendizei seu santo nome! *\nDia após dia anunciai sua salvação, manifestai a sua glória entre as nações, e entre os povos do universo seus prodígios! *\nPublicai entre as nações: \"Reina o Senhor! Ele firmou o universo inabalável, e os povos ele julga com justiça\". *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 1,39-47",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas.\n\n39 Naqueles dias, Maria partiu para a região montanhosa, dirigindo-se, apressadamente, a uma cidade da Judéia. 40 Entrou na casa de Zacarias e cumprimentou Isabel. 41 Quando Isabel ouviu a saudação de Maria, a criança pulou no seu ventre e Isabel ficou cheia do Espírito Santo. 42 Com um grande grito, exclamou: \"Bendita és tu entre as mulheres e bendito é o fruto do teu ventre! 43 Como posso merecer que a mãe do meu Senhor me venha visitar? 44 Logo que a tua saudação chegou aos meus ouvidos, a criança pulou de alegria no meu ventre. 45 Bem-aventurada aquela que acreditou, porque será cumprido, o que o Senhor lhe prometeu\". 46 Então Maria disse: \"A minha alma engrandece o Senhor, 47 e se alegrou o meu espírito em Deus, meu Salvador\"."
    }
  },
  "2026-12-13": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Is 61,1-2a.10-11",
      "texto": "Leitura do Livro do Profeta Isaías.\n\n1 O espírito do Senhor Deus está sobre mim, porque o Senhor me ungiu; enviou-me para dar a boa-nova aos humildes, curar as feridas da alma, pregar a redenção para os cativos e a liberdade para os que estão presos; 2a para proclamar o tempo da graça do Senhor. 10 Exulto de alegria no Senhor e minh'alma regozija-se em meu Deus; ele me vestiu com as vestes da salvação, envolveu-me com o manto da justiça e adornou-me como um noivo com sua coroa, ou uma noiva com suas joias. 11 Assim como a terra faz brotar a planta e o jardim faz germinar a semente, assim o Senhor Deus fará germinar a justiça e a sua glória diante de todas as nações."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Lc 1,46-48.49-50.53-54 (R. Is 61,10b)",
      "refrao": "A minh'alma se alegra no meu Deus.",
      "texto": "A minha alma engrandece ao Senhor, e se alegrou o meu espírito em Deus, meu Salvador, pois, ele viu a pequenez de sua serva, desde agora as gerações hão de chamar-me de bendita. *\nO Poderoso fez por mim maravilhas, e Santo é o seu nome! Seu amor, de geração em geração, chega a todos os que o respeitam. *\nDe bens saciou os famintos, e despediu, sem nada os ricos. Acolheu Israel, seu servidor, fiel ao seu amor. *"
    },
    "segundaLeitura": {
      "titulo": "SEGUNDA LEITURA",
      "referencia": "1Ts 5,16-24",
      "texto": "Leitura da Primeira Carta de São Paulo aos Tessalonicenses.\n\nIrmãos: 16 Estai sempre alegres! 17 Rezai sem cessar. 18 Dai graças em todas as circunstâncias, porque essa é a vosso respeito a vontade de Deus em Jesus Cristo. 19 Não apagueis o espírito! 20 Não desprezeis as profecias, 21 mas examinai tudo e guardai o que for bom. 22 Afastai-vos de toda espécie de maldade! 23 Que o próprio Deus da paz vos santifique totalmente, e que tudo aquilo que sois — espírito, alma, corpo — seja conservado sem mancha alguma para a vinda de nosso Senhor Jesus Cristo! 24 Aquele que vos chamou é fiel; ele mesmo realizará isso."
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Jo 1,6-8.19-28",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo João.\n\n6 Surgiu um homem enviado por Deus; Seu nome era João. 7 Ele veio como testemunha, para dar testemunho da luz, para que todos chegassem à fé por meio dele. 8 Ele não era a luz, mas veio para dar testemunho da luz. 19 Este foi o testemunho de João, quando os judeus enviaram de Jerusalém sacerdotes e levitas para perguntar: \"Quem és tu?\" 20 João confessou e não negou. Confessou: \"Eu não sou o Messias\". 21 Eles perguntaram: \"Quem és, então? És tu Elias?\" João respondeu: \"Não sou\". Eles perguntaram: \"És o Profeta?\" Ele respondeu: \"Não\". 22 Perguntaram então: \"Quem és, afinal? Temos que levar uma resposta para aqueles que nos enviaram. O que dizes de ti mesmo?\" 23 João declarou: \"Eu sou a voz que grita no deserto: 'Aplainai o caminho do Senhor'\" — conforme disse o profeta Isaías. 24 Ora, os que tinham sido enviados pertenciam aos fariseus 25 e perguntaram: \"Por que então andas batizando, se não és o Messias, nem Elias, nem o Profeta?\" 26 João respondeu: \"Eu batizo com água; mas no meio de vós está aquele que vós não conheceis, 27 e que vem depois de mim. Eu não mereço desamarrar a correia de suas sandálias\". 28 Isso aconteceu em Betânia além do Jordão, onde João estava batizando."
    }
  },
  "2026-12-14": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Nm 24,2-7.15-17a",
      "texto": "Leitura do Livro dos Números.\n\nNaqueles dias, 2 Balaão levantou os olhos e viu Israel acampado por tribos. O espírito de Deus veio sobre ele, 3 e Balaão pronunciou seu poema: \"Oráculo de Balaão, filho de Beor, oráculo do homem que tem os olhos abertos; 4 oráculo daquele que ouve as palavras de Deus, que vê o que o Poderoso lhe faz ver, que cai, e seus olhos se abrem. 5 Como são belas as tuas tendas, ó Jacó, e as tuas moradas, ó Israel! 6 Elas se estendem como vales, como jardins ao longo de um rio, como aloés que o Senhor plantou, como cedros junto das águas. 7 A água transborda de seus cântaros, e sua semente é ricamente regada. Seu rei é mais poderoso do que Agag, seu reino está em ascensão\". 15 E Balaão continuou pronunciando o seu poema: \"Oráculo de Balaão, filho de Beor, oráculo do homem que tem os olhos abertos, 16 oráculo daquele que ouve as palavras de Deus, e conhece os pensamentos do Altíssimo, que vê o que o Poderoso lhe faz ver, que cai, e seus olhos se abrem. 17a Eu o vejo, mas não agora; e o contemplo, mas não de perto. Uma estrela sai de Jacó, e um cetro se levanta de Israel\"."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 24(25),4bc-5ab.6-7bc.8-9 (R. 4b)",
      "refrao": "Fazei-me conhecer a vossa estrada, ó Senhor!",
      "texto": "Mostrai-me, ó Senhor, vossos caminhos, e fazei-me conhecer a vossa estrada! Vossa verdade me oriente e me conduza, porque sois o Deus da minha salvação. *\nRecordai, Senhor meu Deus, vossa ternura e a vossa compaixão que são eternas! De mim lembrai-vos, porque sois misericórdia e sois bondade sem limites, ó Senhor! *\nO Senhor é piedade e retidão, e reconduz ao bom caminho os pecadores. Ele dirige os humildes na justiça, e aos pobres ele ensina o seu caminho. *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Mt 21,23-27",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Mateus.\n\nNaquele tempo, 23 Jesus voltou ao Templo. Enquanto ensinava, os sumos sacerdotes e os anciãos do povo aproximaram-se dele e perguntaram: \"Com que autoridade fazes estas coisas? Quem te deu tal autoridade?\" 24 Jesus respondeu-lhes: \"Também eu vos farei uma pergunta. Se vós me responderdes, também eu vos direi com que autoridade faço estas coisas. 25 Donde vinha o batismo de João? Do céu ou dos homens?\" Eles refletiam entre si: \"Se dissermos: 'Do céu', ele nos dirá: 'Por que não acreditastes nele?' 26 Se dissermos: 'Dos homens', temos medo do povo, pois todos têm João Batista na conta de profeta\". 27 Eles então responderam a Jesus: \"Não sabemos\". Ao que Jesus também respondeu: \"Eu também não vos direi com que autoridade faço estas coisas\"."
    }
  },
  "2026-12-15": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Sf 3,1-2.9-13",
      "texto": "Leitura da Profecia de Sofonias.\n\nAssim fala o Senhor: 1 \"Ai de ti, rebelde e desonrada, cidade desumana. 2 Ela não prestou ouvidos ao apelo, não aceitou a correção; não teve confiança no Senhor, nem se aproximou de seu Deus. 9 Darei aos povos, nesse tempo, lábios purificados, para que todos invoquem o nome do Senhor e lhe prestem culto em união de esforços. 10 Desde além-rios da Etiópia, os que me adoram, os dispersos do meu povo, me trarão suas oferendas. 11 Naquele dia, não terás de envergonhar-te por causa de todas as tuas obras com que prevaricaste contra mim; pois eu afastarei do teu meio teus fanfarrões arrogantes, e não continuarás a fazer de meu santo monte motivo de tuas vanglórias. 12 E deixarei entre vós um punhado de homens humildes e pobres\". E no nome do Senhor porá sua esperança o resto de Israel. 13 Eles não cometerão iniquidades nem falarão mentiras; não se encontrará em sua boca uma língua enganadora; serão apascentados e repousarão, e ninguém os molestará."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 33(34),2-3.6-7.17-18.19 e 23 (R. 7a)",
      "refrao": "Este infeliz gritou a Deus e foi ouvido.",
      "texto": "Bendirei o Senhor Deus em todo o tempo, seu louvor estará sempre em minha boca. Minha alma se gloria no Senhor; que ouçam os humildes e se alegrem! *\nContemplai a sua face e alegrai-vos, e vosso rosto não se cubra de vergonha! Este infeliz gritou a Deus, e foi ouvido, e o Senhor o libertou de toda angústia. *\nMas ele volta a sua face contra os maus, para da terra apagar sua lembrança. Clamam os justos, e o Senhor bondoso escuta e de todas as angústias os liberta. *\n19 Do coração atribulado ele está perto e conforta os de espírito abatido. Mas o Senhor liberta a vida dos seus servos, e castigado não será quem nele espera. *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Mt 21,28-32",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Mateus.\n\nNaquele tempo, disse Jesus aos chefes dos sacerdotes e anciãos do povo: 28 \"Que vos parece? Um homem tinha dois filhos. Dirigindo-se ao primeiro, ele disse: 'Filho, vai trabalhar hoje na vinha!' 29 O filho respondeu: 'Não quero'. Mas depois mudou de opinião e foi. 30 O pai dirigiu-se ao outro filho e disse a mesma coisa. Este respondeu: `Sim, senhor, eu vou'. Mas não foi. 31 Qual dos dois fez a vontade do pai?' Os sumos sacerdotes e os anciãos do povo responderam: \"O primeiro\". Então Jesus lhes disse: \"Em verdade vos digo, que os publicanos e as prostitutas vos precedem no Reino de Deus. 32 Porque João veio até vós, num caminho de justiça, e vós não acreditastes nele. Ao contrário, os publicanos e as prostitutas creram nele. Vós, porém, mesmo vendo isso, não vos arrependestes para crer nele\"."
    }
  },
  "2026-12-16": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Is 45,6b-8.18.21b-25",
      "texto": "Leitura do Livro do Profeta Isaías.\n\n6b \"Eu sou o Senhor, não há outro, 7 eu formei a luz e criei as trevas, crio o bem-estar e as condições de mal-estar: sou o Senhor que faço todas estas coisas. 8 Céus, deixai cair orvalho das alturas, e que as nuvens façam chover justiça; abra-se a terra e germine a salvação; brote igualmente a justiça: eu, o Senhor, a criei.\" 18 Isto diz o Senhor que criou os céus, o próprio Deus que fez a terra, a conformou e consolidou; não a criou para ficar vazia, formou-a para ser habitada: \"Sou eu o Senhor, e não há outro. 21b Acaso não sou eu o Senhor? E não há deus além de mim. Não há um Deus justo, e que salve, a não ser eu. 22 Povos de todos os confins da terra, voltai-vos para mim e sereis salvos, eu sou Deus e não há outro. 23 Juro por mim mesmo: de minha boca sai o que é justo, a palavra que não volta atrás; todo joelho há de dobrar-se para mim, por mim há de jurar toda língua, 24 dizendo: Somente no Senhor residem justiça e força\". Comparecerão perante ele, envergonhados, todos os que lhe resistem; 25 no Senhor será justificada e glorificada toda a descendência de Israel."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 84(85),9ab-1O.11-12.13-14 (R. cf. Is 45,8)",
      "refrao": "Que os céus lá do alto derramem o orvalho, que chova das nuvens o Justo esperado!",
      "texto": "Quero ouvir o que o Senhor irá falar: é a paz que ele vai anunciar; a paz para o seu povo e seus amigos, para os que voltam ao Senhor seu coração. Está perto a salvação dos que o temem, e a glória habitará em nossa terra. *\nA verdade e o amor se encontrarão, a justiça e a paz se abraçarão; da terra brotará a fidelidade, e a justiça olhará dos altos céus. *\nO Senhor nos dará tudo o que é bom, e a nossa terra nos dará suas colheitas; a justiça andará na sua frente e a salvação há de seguir os passos seus. *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 7,19-23",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas.\n\nNaquele tempo, João convocou dois de seus discípulos, 19 e mandou-os perguntar ao Senhor: \"És tu aquele que há de vir, ou devemos esperar outro?\" 20 Eles foram ter com Jesus, e disseram: \"João Batista nos mandou a ti para perguntar: 'És tu aquele que há de vir, ou devemos esperar outro?' '' 21 Nessa mesma hora, Jesus curou de doenças, enfermidades e espíritos malignos a muitas pessoas, e fez muitos cegos recuperarem a vista. 22 Então, Jesus lhes respondeu: \"Ide contar a João o que vistes e ouvistes: os cegos recuperam a vista, os paralíticos andam, os leprosos são purificados, os surdos ouvem, os mortos ressuscitam, e a Boa Nova é anunciada aos pobres. 23 E feliz é aquele que não se escandaliza por causa de mim!\""
    }
  },
  "2026-12-17": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Gn 49,2.8-10",
      "texto": "Leitura do Livro do Gênesis.\n\nNaqueles dias, Jacó chamou seus filhos e disse: 2 \"Juntai-vos e ouvi, filhos de Jacó, ouvi Israel, vosso pai! 8 Judá, teus irmãos te louvarão; pesará tua mão sobre a nuca de teus inimigos, se prostrarão diante de ti os filhos de teu pai. 9 Judá, filhote de leão: subiste, meu filho, da pilhagem; ele se agacha e se deita como um leão, e como uma leoa; quem o despertará? 10 O cetro não será tirado de Judá, nem o bastão de comando dentre seus pés, até que venha Aquele a quem pertencem, e a quem obedecerão os povos\"."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 71(72),1-2.3-4ab.7-8.17 (R. cf. 7)",
      "refrao": "Nos seus dias a justiça florirá e paz em abundância, para sempre.",
      "texto": "Dai ao Rei vossos poderes, Senhor Deus, vossa justiça ao descendente da realeza! Com justiça ele governe o vosso povo, com equidade ele julgue os vossos pobres. *\nDas montanhas venha a paz a todo o povo, e desça das colinas a justiça! Este Rei defenderá os que são pobres, os filhos dos humildes salvará *\nNos seus dias a justiça florirá e grande paz, até que a lua perca o brilho! De mar a mar estenderá o seu domínio, e desde o rio até os confins de toda a terra! *\nSeja bendito o seu nome para sempre! E que dure como o sol sua memória! Todos os povos serão nele abençoados, todas as gentes cantarão o seu louvor! *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Mt 1,1-17",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Mateus.\n\n1 Livro da origem de Jesus Cristo, filho de Davi, filho de Abraão. 2 Abraão gerou Isaac; Isaac gerou Jacó; Jacó gerou Judá e seus irmãos. 3 Judá gerou Farés e Zara, cuja mãe era Tamar. Farés gerou Esrom; Esrom gerou Aram; 4 Aram gerou Aminadab; Aminadab gerou Naasson; Naasson gerou Salmon; 5 Salmon gerou Booz, cuja mãe era Raab. Booz gerou Obed, cuja mãe era Rute. Obed gerou Jessé. 6 Jessé gerou o rei Davi. Davi gerou Salomão, daquela que tinha sido a mulher de Urias. 7 Salomão gerou Roboão; Roboão gerou Abias; Abias gerou Asa; 8 Asa gerou Josafá; Josafá gerou Jorão; Jorão gerou Ozias; 9 Ozias gerou Joatão; Joatão gerou Acaz; Acaz gerou Ezequias; 10 Ezequias gerou Manassés; Manassés gerou Amon; Amon gerou Josias. 11 Josias gerou Jeconias e seus irmãos, no tempo do exílio na Babilônia. 12 Depois do exílio na Babilônia, Jeconias gerou Salatiel; Salatiel gerou Zorobabel; 13 Zorobabel gerou Abiud; Abiud gerou Eliaquim; Eliaquim gerou Azor; 14 Azor gerou Sadoc; Sadoc gerou Aquim; Aquim gerou Eliud; 15 Eliud gerou Eleazar; Eleazar gerou Matã; Matã gerou Jacó. 16 Jacó gerou José, o esposo de Maria, da qual nasceu Jesus, que é chamado o Cristo. 17 Assim, as gerações desde Abraão até Davi são quatorze; de Davi até o exílio na Babilônia, quatorze; e do exílio na Babilônia até Cristo, quatorze."
    }
  },
  "2026-12-18": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Jr 23,5-8",
      "texto": "Leitura do Livro do Profeta Jeremias.\n\n5 \"Eis que virão dias, diz o Senhor, em que farei nascer um descendente de Davi; reinará como rei e será sábio, fará valer a justiça e a retidão na terra. 6 Naqueles dias, Judá será salvo e Israel viverá tranquilo; este é o nome com que o chamarão: 'Senhor, nossa Justiça'. 7 Eis que virão dias, diz o Senhor, em que já não se usará jurar 'Pela vida do Senhor que tirou os filhos de Israel do Egito' 8 — mas sim: 'Pela vida do Senhor que tirou e reconduziu os descendentes da casa de Israel desde o país do norte e todos os outros países, para onde os expulsará; eles então irão habitar em sua terra'\""
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 71(72),1-2.12-13.18-19 (R. cf. 7)",
      "refrao": "Nos seus dias a justiça florirá e paz em abundância, para sempre.",
      "texto": "Dai ao Rei vossos poderes, Senhor Deus, vossa justiça ao descendente da realeza! Com justiça ele governe o vosso povo, com equidade ele julgue os vossos pobres. *\nLibertará o indigente que suplica, e o pobre ao qual ninguém quer ajudar. Terá pena do indigente e do infeliz, e a vida dos humildes salvará. *\nBendito seja o Senhor Deus de Israel, porque só ele realiza maravilhas! Bendito seja o seu nome glorioso! Bendito seja eternamente! Amém, amém! *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Mt 1,18-24",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Mateus.\n\n18 A origem de Jesus Cristo foi assim: Maria, sua mãe, estava prometida em casamento a José, e, antes de viverem juntos, ela ficou grávida pela ação do Espírito Santo. 19 José, seu marido, era justo e, não querendo denunciá-la, resolveu abandonar Maria, em segredo. 20 Enquanto José pensava nisso, eis que o anjo do Senhor apareceu-lhe, em sonho, e lhe disse: \"José, Filho de Davi, não tenhas medo de receber Maria como tua esposa, porque ela concebeu pela ação do Espírito Santo. 21 Ela dará à luz um filho, e tu lhe darás o nome de Jesus, pois ele vai salvar o seu povo dos seus pecados\". 22 Tudo isso aconteceu para se cumprir o que o Senhor havia dito pelo profeta: 23 \"Eis que a virgem conceberá e dará à luz um filho. Ele será chamado pelo nome de Emanuel, que significa: Deus está conosco\". 24 Quando acordou, José fez conforme o anjo do Senhor havia mandado, e aceitou sua esposa."
    }
  },
  "2026-12-19": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Jz 13,2-7.24-25a",
      "texto": "Leitura do Livro dos Juízes.\n\nNaqueles dias, 2 havia um homem de Saraá, da tribo de Dã, chamado Manué, cuja mulher era estéril. 3 O anjo do Senhor apareceu à mulher e disse-lhe: \"Tu és estéril e não tiveste filhos, mas conceberás e darás à luz um filho. 4 Toma cuidado de não beberes vinho nem licor, de não comeres coisa alguma impura, 5 pois conceberás e darás à luz um filho. Sua cabeça não será tocada por navalha, porque ele será consagrado ao Senhor desde o ventre materno, e começará a libertar Israel das mãos dos filisteus\". 6 A mulher foi dizer ao seu marido: \"Veio visitar-me um homem de Deus, cujo aspecto era terrível como o de um anjo do Senhor. Não lhe perguntei de onde vinha nem ele me revelou o seu nome. 7 Ele disse-me: 'Conceberás e darás à luz um filho. De hoje em diante, toma cuidado para não beberes vinho nem licor, e não comeres nada de impuro, pois o menino será consagrado a Deus, desde o ventre materno até ao dia da sua morte' \". 24 Ela deu à luz um filho e deu-lhe o nome de Sansão. O menino cresceu e o Senhor o abençoou. 25a O espírito do Senhor começou a agir nele no Campo de Dã."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 70(71),3-4a.5-6ab.16-17 (R. cf. 8a)",
      "refrao": "Minha boca se encha de louvor, para que eu cante vossa glória.",
      "texto": "Sede uma rocha protetora para mim, um abrigo bem seguro que me salve! Porque sois a minha força e meu amparo, o meu refúgio, proteção e segurança! Libertai-me, ó meu Deus, das mãos do ímpio *\nPorque sois, ó Senhor Deus, minha esperança, em vós confio desde a minha juventude! Sois meu apoio desde antes que eu nascesse, desde o seio maternal, o meu amparo *\nCantarei vossos portentos, ó Senhor, lembrarei vossa justiça sem igual! Vós me ensinastes desde a minha juventude, e até hoje canto as vossas maravilhas. *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 1,5-25",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas.\n\n5 Nos dias de Herodes, rei da Judeia, vivia um sacerdote chamado Zacarias, do grupo de Abia. Sua esposa era descendente de Aarão e chamava-se Isabel. 6 Ambos eram justos diante de Deus e obedeciam fielmente a todos os mandamentos e ordens do Senhor. 7 Não tinham filhos, porque Isabel era estéril, e os dois já eram de idade avançada. 8 Em certa ocasião, Zacarias estava exercendo as funções sacerdotais no Templo, pois era a vez do seu grupo. 9 Conforme o costume dos sacerdotes, ele foi sorteado para entrar no Santuário, e fazer a oferta do incenso. 10 Toda a assembleia do povo estava do lado de fora rezando, enquanto o incenso estava sendo oferecido. 11 Então apareceu-lhe o anjo do Senhor, de pé, à direita do altar do incenso. 12 Ao vê-lo, Zacarias ficou perturbado e o temor apoderou-se dele. 13 Mas o anjo disse: \"Não tenhas medo, Zacarias, porque Deus ouviu tua súplica. Tua esposa, Isabel, vai ter um filho, e tu lhe darás o nome de João. 14 Tu ficarás alegre e feliz, e muita gente se alegrará com o nascimento do menino, 15 porque ele vai ser grande diante do Senhor. Não beberá vinho nem bebida fermentada e, desde o ventre materno, ficará repleto do Espírito Santo. 16 Ele reconduzirá muitos do povo de Israel ao Senhor seu Deus. 17 E há de caminhar à frente deles, com o espírito e o poder de Elias, a fim de converter os corações dos pais aos filhos, e os rebeldes à sabedoria dos justos, preparando para o Senhor um povo bem disposto\". 18 Então Zacarias perguntou ao anjo: \"Como terei certeza disto? Sou velho e minha mulher é de idade avançada\". 19 O anjo respondeu-lhe: \"Eu sou Gabriel. Estou sempre na presença de Deus, e fui enviado para dar-te esta boa notícia. 20 Eis que ficarás mudo e não poderás falar, até ao dia em que essas coisas acontecerem, porque tu não acreditaste nas minhas palavras, que hão de se cumprir no tempo certo\". 21 O povo estava esperando Zacarias, e admirava-se com a sua demora no Santuário. 22 Quando saiu, não podia falar-lhes. E compreenderam que ele tinha tido uma visão no Santuário. Zacarias falava com sinais e continuava mudo. 23 Depois que terminou seus dias de serviço no Santuário, Zacarias voltou para casa. 24 Algum tempo depois, sua esposa Isabel ficou grávida, e escondeu-se durante cinco meses. 25 Ela dizia: \"Eis o que o Senhor fez por mim, nos dias em que ele se dignou tirar-me da humilhação pública!\""
    }
  },
  "2026-12-20": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "2Sm 7,1-5.8b-12.14a.16",
      "texto": "Leitura do Segundo Livro de Samuel.\n\n1 Tendo-se o rei Davi instalado já em sua casa e tendo-lhe o Senhor dado a paz, livrando-o de todos os seus inimigos, 2 ele disse ao profeta Natã: \"Vê: eu resido num palácio de cedro, e a arca de Deus está alojada numa tenda!\" 3 Natã respondeu ao rei: \"Vai e faze tudo o que diz o teu coração, pois o Senhor está contigo\". 4 Mas, nessa mesma noite, a palavra do Senhor foi dirigida a Natã nestes termos: 5 \"Vai dizer ao meu servo Davi: 'Assim fala o Senhor: Porventura és tu que me construirás uma casa para eu habitar? 8b Fui eu que te tirei do pastoreio, do meio das ovelhas, para que fosses o chefe do meu povo, Israel. 9 Estive contigo em toda a parte por onde andaste, e exterminei diante de ti todos os teus inimigos, fazendo o teu nome tão célebre como o dos homens mais famosos da terra. 10 Vou preparar um lugar para o meu povo, Israel: eu o implantarei, de modo que possa morar lá sem jamais ser inquietado. Os homens violentos não tornarão a oprimi-lo como outrora, 11 no tempo em que eu estabelecia juízes sobre o meu povo, Israel. Concedo-te uma vida tranquila, livrando-te de todos os teus inimigos. E o Senhor te anuncia que te fará uma casa. 12 Quando chegar o fim dos teus dias e repousares com teus pais, então, suscitarei, depois de ti, um filho teu, e confirmarei a sua realeza. 14a Eu serei para ele um pai e ele será para mim um filho. 16 Tua casa e teu reino serão estáveis para sempre diante de mim, e teu trono será firme para sempre\"."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 88(89),2-3.4-5.27.29 (R. 2a)",
      "refrao": "Ó Senhor, eu cantarei eternamente o vosso amor!",
      "texto": "Ó Senhor, eu cantarei eternamente o vosso amor, de geração em geração eu cantarei vossa verdade! Porque dissestes: \"O amor é garantido para sempre!\" E a vossa lealdade é tão firme como os céus. *\n\"Eu firmei uma Aliança com meu servo, meu eleito, e eu fiz um juramento a Davi, meu servidor. Para sempre, no teu trono, firmarei tua linhagem, de geração em geração garantirei o teu reinado! *\nEle, então, me invocará: 'Ó Senhor, vós sois meu Pai, sois meu Deus, sois meu Rochedo onde encontro a salvação!' Guardarei eternamente para ele a minha graça e com ele firmarei minha Aliança indissolúvel\". *"
    },
    "segundaLeitura": {
      "titulo": "SEGUNDA LEITURA",
      "referencia": "Rm 16,25-27",
      "texto": "Leitura da Carta de São Paulo aos Romanos.\n\nIrmãos: 25 Glória seja dada àquele que tem o poder de vos confirmar na fidelidade ao meu evangelho e à pregação de Jesus Cristo, de acordo com a revelação do mistério mantido em sigilo desde sempre. 26 Agora este mistério foi manifestado e, mediante as Escrituras proféticas, conforme determinação do Deus eterno, foi levado ao conhecimento de todas as nações, para trazê-las à obediência da fé. 27 A ele, o único Deus, o sábio, por meio de Jesus Cristo, a glória, pelos séculos dos séculos. Amém!"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 1,26-38",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas.\n\nNaquele tempo, 26 o anjo Gabriel foi enviado por Deus a uma cidade da Galileia, chamada Nazaré, 27 a uma virgem, prometida em casamento a um homem chamado José. Ele era descendente de Davi e o nome da virgem era Maria 28 O anjo entrou onde ela estava e disse: \"Alegra-te, cheia de graça, o Senhor está contigo!\" 29 Maria ficou perturbada com essas palavras e começou a pensar qual seria o significado da saudação. 30 O anjo, então, disse-lhe: \"Não tenhas medo, Maria, porque encontraste graça diante de Deus. 31 Eis que conceberás e darás à luz um filho, a quem porás o nome de Jesus. 32 Ele será grande, será chamado Filho do Altíssimo, e o Senhor Deus lhe dará o trono de seu pai Davi. 33 Ele reinará para sempre sobre os descendentes de Jacó, e o seu reino não terá fim\". 34 Maria perguntou ao anjo: \"Como acontecerá isso, se eu não conheço homem algum?\" 35 O anjo respondeu: \"O Espírito virá sobre ti, e o poder do Altíssimo te cobrirá com sua sombra. Por isso, o menino que vai nascer será chamado Santo, Filho de Deus. 36 Também Isabel, tua parenta, concebeu um filho na velhice. Este já é o sexto mês daquela que era considerada estéril, 37 porque para Deus nada é impossível\". 38 Maria, então, disse: \"Eis aqui a serva do Senhor; faça-se em mim segundo a tua palavra!\" E o anjo retirou-se."
    }
  },
  "2026-12-21": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Ct 2,8-14 ou Sf 3,14-18a",
      "texto": "Leitura do Cântico dos Cânticos.\n\n8 É a voz do meu amado! Eis que ele vem saltando pelos montes, pulando sobre as colinas. 9 O meu amado parece uma gazela, ou um cervo ainda novo. Eis que ele está de pé atrás de nossa parede, espiando pelas janelas, observando através das grades. 10 O meu amado me fala dizendo: \"Levanta-te, minha amada, minha rola, formosa minha, e vem! 11 O inverno já passou, as chuvas pararam e já se foram. 12 No campo aparecem as flores, chegou o tempo das canções, a rola já faz ouvir seu canto em nossa terra. 13 Da figueira brotam os primeiros frutos, soltam perfume as vinhas em flor. Levanta-te, minha amada, formosa minha, e vem! 14 Minha rola, que moras nas fendas da rocha, no esconderijo escarpado, mostra-me teu rosto, deixa-me ouvir tua voz! Pois a tua voz é tão doce, e gracioso o teu semblante\". Palavra do Senhor.\nOU\nPrimeira Leitura (Sf 3,14-18a)\nLeitura da Profecia de Sofonias.\n14 Canta de alegria, cidade de Sião; rejubila, povo de Israel! Alegra-te e exulta de todo o coração, cidade de Jerusalém! 15 O Senhor revogou a sentença contra ti, afastou teus inimigos; o rei de Israel é o Senhor, ele está no meio de ti, nunca mais temerás o mal. 16 Naquele dia, se dirá a Jerusalém: \"Não temas, Sião, não te deixes levar pelo desânimo! 17 O Senhor, teu Deus, está no meio de ti, o valente guerreiro que te salva; ele exultará de alegria por ti, movido por amor; exultará por ti, entre louvores 18a como nos dias de festa\"."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 32(33),2-3.11-12.20-21 (R. 1a e 3a)",
      "refrao": "Ó justos, alegrai-vos no Senhor! Cantai para o Senhor um canto novo!",
      "texto": "Dai graças ao Senhor ao som da harpa, na lira de dez cordas celebrai-o! Cantai para o Senhor um canto novo, com arte sustentai a louvação! *\nMas os desígnios do Senhor são para sempre, e os pensamentos que ele traz no coração, de geração em geração, vão perdurar. Feliz o povo cujo Deus é o Senhor, e a nação que escolheu por sua herança! *\nNo Senhor nós esperamos confiantes, porque ele é nosso auxílio e proteção! Por isso o nosso coração se alegra nele, seu santo nome é nossa única esperança. *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 1,39-45",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas.\n\n39 Naqueles dias, Maria partiu para a região montanhosa, dirigindo-se, apressadamente, a uma cidade da Judeia. 40 Entrou na casa de Zacarias e cumprimentou Isabel. 41 Quando Isabel ouviu a saudação de Maria, a criança pulou no seu ventre e Isabel ficou cheia do Espírito Santo. 42 Com um grande grito, exclamou: \"Bendita és tu entre as mulheres e bendito é o fruto do teu ventre! 43 Como posso merecer que a mãe do meu Senhor me venha visitar? 44 Logo que a tua saudação chegou aos meus ouvidos, a criança pulou de alegria no meu ventre. 45 Bem-aventurada aquela que acreditou, porque será cumprido, o que o Senhor lhe prometeu\"."
    }
  },
  "2026-12-22": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "1Sm 1,24-28",
      "texto": "Leitura do Primeiro Livro de Samuel.\n\nNaqueles dias, 24 Ana, logo que o desmamou, levou consigo Samuel à casa do Senhor em Silo, e mais um novilho de três anos, três arrobas de farinha e um odre de vinho. O menino, porém, era ainda uma criança. 25 Depois de sacrificarem o novilho, apresentaram o menino a Eli. 26 E Ana disse-lhe: \"Ouve, meu senhor, por tua vida, eu sou a mulher que esteve aqui orando ao Senhor, na tua presença. 27 Eis o menino por quem eu pedi, e o Senhor ouviu a minha súplica. 28 Portanto, eu também o ofereço ao Senhor, a fim de que só a ele sirva em todos os dias da sua vida\". E adoraram o Senhor."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Cânt.: 1Sm 2,1.4-5.6-7.8abcd (R. 1a)",
      "refrao": "Meu coração exultou no meu Senhor, Salvador.",
      "texto": "Exulta no Senhor meu coração, e se eleva a minha fronte no meu Deus; Minha boca desafia os meus rivais porque me alegro com a vossa salvação. *\nO arco dos fortes foi dobrado, foi quebrado, mas os fracos se vestiram de vigor. Os saciados se empregaram por um pão, mas os pobres e os famintos se fartaram. Muitas vezes deu à luz a que era estéril, mas a mãe de muitos filhos definhou. *\nÉ o Senhor quem dá a morte e dá a vida, faz descer à sepultura e faz voltar; é o Senhor quem faz o pobre e faz o rico, é o Senhor quem nos humilha e nos exalta. *\nO Senhor ergue do pó o homem fraco, e do lixo ele retira o indigente, para fazê-los assentar-se com os nobres num lugar de muita honra e distinção. *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 1,46-56",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas.\n\nNaquele tempo, 46 Maria disse: \"A minha alma engrandece o Senhor, 47 e o meu espírito se alegra em Deus, meu Salvador, 48 porque olhou para a humildade de sua serva. Doravante todas as gerações me chamarão bem-aventurada, 49 porque o Todo-poderoso fez grandes coisas em meu favor. O seu nome é santo, 50 e sua misericórdia se estende, de geração em geração, a todos os que o temem. 51 Ele mostrou a força de seu braço: dispersou os soberbos de coração. 52 Derrubou do trono os poderosos e elevou os humildes. 53 Encheu de bens os famintos, e despediu os ricos de mãos vazias. 54 Socorreu Israel, seu servo, lembrando-se de sua misericórdia, 55 conforme prometera aos nossos pais, em favor de Abraão e de sua descendência, para sempre\". 56 Maria ficou três meses com Isabel; depois voltou para casa."
    }
  },
  "2026-12-23": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Ml 3,1-4.23-24",
      "texto": "Leitura da Profecia de Malaquias.\n\nAssim fala o Senhor Deus: 1 \"Eis que envio meu anjo, e ele há de preparar o caminho para mim; logo chegará ao seu templo o Dominador, que tentais encontrar, e o anjo da aliança, que desejais. Ei-lo que vem, diz o Senhor dos exércitos; 2 e quem poderá fazer-lhe frente, no dia de sua chegada? E quem poderá resistir-lhe, quando ele aparecer? Ele é como o fogo da forja e como a barrela dos lavadeiros; 3 e estará a postos, como para fazer derreter e purificar a prata: assim ele purificará os filhos de Levi e os refinará como ouro e como prata, e eles poderão assim fazer oferendas justas ao Senhor. 4 Será então aceitável ao Senhor a oblação de Judá e de Jerusalém, como nos primeiros tempos e nos anos antigos. 23 Eis que eu vos enviarei o profeta Elias, antes que venha o dia do Senhor, dia grande e terrível; 24 o coração dos pais há de voltar-se para os filhos, e o coração dos filhos para seus pais, para que eu não intervenha, ferindo de maldição a vossa terra\"."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 24(25),4-5ab.8-9.10 e 14 (R. Lc 21,28)",
      "refrao": "Levantai vossa cabeça e olhai, pois, a vossa redenção se aproxima!",
      "texto": "Mostrai-me, ó Senhor, vossos caminhos, e fazei-me conhecer a vossa estrada! Vossa verdade me oriente e me conduza, porque sois o Deus da minha salvação! *\nO Senhor é piedade e retidão, e reconduz ao bom caminho os pecadores. Ele dirige os humildes na justiça, e aos pobres ele ensina o seu caminho. *\nVerdade e amor são os caminhos do Senhor para quem guarda sua Aliança e seus preceitos. O Senhor se torna íntimo aos que o temem e lhes dá a conhecer sua Aliança. *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 1,57-66",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas.\n\n57 Completou-se o tempo da gravidez de Isabel, e ela deu à luz um filho. 58 Os vizinhos e parentes ouviram dizer como o Senhor tinha sido misericordioso para com Isabel, e alegraram-se com ela. 59 No oitavo dia, foram circuncidar o menino, e queriam dar-lhe o nome de seu pai, Zacarias. 60 A mãe porém disse: \"Não! Ele vai chamar-se João.\" 61 Os outros disseram: \"Não existe nenhum parente teu com esse nome!\" 62 Então fizeram sinais ao pai, perguntando como ele queria que o menino se chamasse. 63 Zacarias pediu uma tabuinha, e escreveu: \"João é o seu nome.\" 64 No mesmo instante, a boca de Zacarias se abriu, sua língua se soltou, e ele começou a louvar a Deus. 65 Todos os vizinhos ficaram com medo, e a notícia espalhou-se por toda a região montanhosa da Judeia. 66 E todos os que ouviam a notícia, ficavam pensando: \"O que virá a ser este menino?\" De fato, a mão do Senhor estava com ele."
    }
  },
  "2026-12-24": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "2Sm 7,1-5.8b-12.14a.16 e Is 62,1-5",
      "texto": "Leitura do Segundo Livro de Samuel.\n\n1 Tendo-se o rei Davi instalado já em sua casa e tendo-lhe o Senhor dado a paz, livrando-o de todos os seus inimigos, 2 ele disse ao profeta Natã: \"Vê: eu resido num palácio de cedro, e a arca de Deus está alojada numa tenda!\" 3 Natã respondeu ao rei: \"Vai e faze tudo o que diz o teu coração, pois o Senhor está contigo\". 4 Mas, naquela mesma noite, a palavra do Senhor foi dirigida a Natã nestes termos: 5 \"Vai dizer ao meu servo Davi: Assim fala o Senhor: 'Porventura és tu que me construirás uma casa para eu habitar? 8b Fui eu que te tirei do pastoreio, do meio das ovelhas, para que fosses o chefe do meu povo, Israel. 9 Estive contigo em toda a parte por onde andaste, e exterminei diante de ti todos os teus inimigos, fazendo o teu nome tão célebre como o dos homens mais famosos da terra. 10 Vou preparar um lugar para o meu povo, Israel: eu o implantarei, de modo que possa morar lá sem jamais ser inquietado. Os homens violentos não tornarão a oprimi-lo como outrora, 11 no tempo em que eu estabelecia juízes sobre o meu povo, Israel. Concedo-te uma vida tranquila, livrando-te de todos os teus inimigos. E o Senhor te anuncia que te fará uma casa. 12 Quando chegar o fim dos teus dias e repousares com teus pais, então, suscitarei, depois de ti, um filho teu, e confirmarei a sua realeza. 14a Eu serei para ele um pai e ele será para mim um filho. 16 Tua casa e teu reino serão estáveis para sempre diante de mim, e teu trono será firme para sempre' \".\nMissa da Vigília\nPrimeira Leitura (Is 62,1-5)\nLeitura do Livro do Profeta Isaías\nPor amor de Sião não me calarei, por amor de Jerusalém não descansarei, enquanto não surgir nela, como um luzeiro, a justiça e não se acender nela, como uma tacha, a salvação. 2 As nações verão a tua justiça, todos os reis verão a tua glória; serás chamada com um nome novo, que a boca do Senhor há de designar. 3 E serás uma coroa de glória na mão do Senhor, um diadema real nas mãos de teu Deus. 4 Não mais te chamarão Abandonada, e tua terra não mais será chamada Deserta; teu nome será Minha Predileta e tua terra será a Bem-Casada, pois o Senhor agradou-se de ti e tua terra será desposada. 5 Assim como o jovem desposa a donzela, assim teus filhos te desposam; e como a noiva é a alegria do noivo, assim também tu és a alegria de teu Deus."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "(Sl 88(89),2-3.4-5.27 e 29 (R. 2a)) e SI 88(89),4-5.16-17.27.29",
      "refrao": "Missa da manhã",
      "texto": "Ó Senhor, eu cantarei eternamente o vosso amor! *\nÓ Senhor, eu cantarei eternamente o vosso amor! *\nÓ Senhor, eu cantarei eternamente o vosso amor, de geração em geração eu cantarei vossa verdade! Porque dissestes: \"O amor é garantido para sempre!\" E a vossa lealdade é tão firme como os céus. *\n\"Eu firmei uma Aliança com meu servo, meu eleito, e eu fiz um juramento a Davi, meu servidor. Para sempre, no teu trono, firmarei tua linhagem, de geração em geração garantirei o teu reinado!\" *\nEle, então, me invocará: 'Ó Senhor, vós sois meu Pai, sois meu Deus, sois meu Rochedo onde encontro a salvação!' Guardarei eternamente para ele a minha graça e com ele firmarei minha Aliança indissolúvel. *\nMissa da Vigília *\nSenhor, eu cantarei eternamente o vosso amor! *\nSenhor, eu cantarei eternamente o vosso amor! *\n\"Eu firmei uma Aliança com meu servo, meu eleito, e eu fiz um juramento a Davi, meu servidor: Para sempre, no teu trono, firmarei tua linhagem, de geração em geração garantirei o teu reinado!\" *\nQuão feliz é aquele povo que conhece a alegria: seguirá pelo caminho, sempre à luz de vossa face! Exultará de alegria em vosso nome dia a dia, e com grande entusiasmo exaltará vossa justiça. *\nEle, então me invocará: 'Ó Senhor, vós sois meu Pai, sois meu Deus, sois meu Rochedo onde encontro a salvação!' Guardarei eternamente para ele a minha graça e com ele firmarei minha Aliança indissolúvel. *"
    },
    "segundaLeitura": {
      "titulo": "SEGUNDA LEITURA",
      "referencia": "At 13,16-17.22-25",
      "texto": "Leitura dos Atos dos Apóstolos\n\nTendo chegado a Antioquia da Pisídia, 16 Paulo levantou-se, na sinagoga, fez um sinal com a mão e disse: \"Israelitas e vós que temeis a Deus, escutai! 17 O Deus deste povo de Israel escolheu os nossos antepassados e fez deles um grande povo quando moravam como estrangeiros no Egito; e de lá os tirou com braço poderoso. 22 Em seguida, Deus fez surgir Davi como rei e assim testemunhou a seu respeito: 'Encontrei Davi, filho de Jessé, homem segundo o meu coração, que vai fazer em tudo a minha vontade'. 23 Conforme prometera, da descendência de Davi Deus fez surgir para Israel um Salvador, que é Jesus. 24 Antes que ele chegasse, João pregou um batismo de conversão para todo o povo de Israel. 25 Estando para terminar sua missão, João declarou: 'Eu não sou aquele que pensais que eu seja! Mas vede: depois de mim vem aquele, do qual nem mereço desamarrar as sandálias'\"."
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 1,67-79 e Mt 1,1-25",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas\n\nNaquele tempo, 67 Zacarias, o pai de João, repleto do Espírito Santo, profetizou, dizendo: 68 \"Bendito seja o Senhor, Deus de Israel, porque a seu povo visitou e libertou. 69 Fez aparecer para nós uma força de salvação na casa de seu servo Davi, 70 como tinha prometido desde outrora, pela boca de seus santos profetas, 71 para nos salvar dos nossos inimigos e da mão de todos os que nos odeiam. 72 Ele usou de misericórdia para com nossos pais, recordando-se de sua santa aliança 73 e do juramento que fez a nosso pai Abraão, para conceder-nos, 74 que, sem temor e libertos das mãos dos inimigos, nós o sirvamos, 75 com santidade e justiça, em sua presença, todos os nossos dias. 76 E tu, Menino, serás chamado profeta do Altíssimo, pois irás adiante do Senhor para preparar-lhe os caminhos, 77 anunciando ao seu povo a salvação, pelo perdão dos seus pecados. 78 Graças à misericordiosa compaixão do nosso Deus, o sol que nasce do alto nos visitará, 79 para iluminar os que jazem nas trevas e nas sombras da morte, e dirigir nossos passos no caminho da paz.\"\nMissa da Vigília\nEvangelho (Mt 1,1-25)\nAmanhã será varrida da terra a iniquidade e sobre nós há de reinar o Salvador do mundo.\nProclamação do Evangelho de Jesus Cristo + segundo Mateus\nLivro da origem de Jesus Cristo, filho de Davi, filho de Abraão. 2 Abraão gerou Isaac; Isaac gerou Jacó; Jacó gerou Judá e seus irmãos. 3 Judá gerou Farés e Zara, cuja mãe era Tamar. Farés gerou Esrom; Esrom gerou Aram; 4 Aram gerou Aminadab; Aminadab gerou Naasson; Naasson Gerou Salmon; 5 Salmon gerou Booz, cuja mãe era Raab. Booz gerou Jobed, cuja mãe era Rute. Jobed gerou Jessé. 6 Jessé gerou o rei Davi. Davi gerou Salomão, daquela que tinha sido a mulher de Urias. 7 Salomão gerou Roboão; Roboão gerou Abias; Abias gerou Asa; 8 Asa gerou Josafá; Josafá gerou Jorão; Jorão gerou Ozias; 9 Ozias gerou Joatão; Joatão gerou Acaz; Acaz gerou Ezequias; 10 Ezequias gerou Manassés; Manassés gerou Amon; Amon gerou Josias. 11 Josias gerou Jeconias e seus irmãos, no tempo do exílio na Babilônia. 12 Depois do exílio na Babilônia, Jeconias gerou Salatiel; Salatiel gerou Zorobabel; 13 Zorobabel gerou Abiud; Abiud gerou Eliaquim; Eliaquim gerou Azor; 14 Azor gerou Sadoc; Sadoc gerou Aquim; Aquim gerou Eliud; 15 Eliud gerou Eleazar; Eleazar gerou Matã; Matã gerou Jacó. 16 Jacó gerou José, o esposo de Maria, da qual nasceu Jesus, que é chamado o Cristo. 17 Assim, as gerações desde Abraão até Davi são quatorze; de Davi até o exílio na Babilônia, quatorze; e do exílio na Babilônia até Cristo, quatorze. 18 A origem de Jesus Cristo foi assim: Maria, sua mãe, estava prometida em casamento a José, e, antes de viverem juntos, ela ficou grávida pela ação do Espírito Santo. 19 José, seu marido, era justo e, não querendo denunciá-Ia, resolveu abandonar Maria, em segredo. 20 Enquanto José pensava nisso, eis que o anjo do Senhor apareceu-lhe, em sonho, e lhe disse: \"José, filho de Davi, não tenhas medo de receber Maria como tua esposa, porque ela concebeu pela ação do Espírito Santo. 21 Ela dará à luz um filho e tu lhe darás o nome de Jesus, pois ele vai salvar o seu povo dos seus pecados\". 22 Tudo isso aconteceu para se cumprir o que o Senhor havia dito pelo profeta: 23 \"Eis que a virgem conceberá e dará à luz um filho. Ele será chamado pelo nome de Emanuel, que significa: Deus está conosco\", 24 Quando acordou, José fez conforme o anjo do Senhor havia mandado: e aceitou sua esposa. 25 E sem ter relações com ela, Maria deu à luz um filho. E José deu ao Menino o nome de Jesus."
    }
  },
  "2026-12-25": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Is 62,11-12 e Is 52,7-10",
      "texto": "Leitura do Livro do Profeta Isaías\n\nEis que o Senhor fez-se ouvir até as extremidades da terra: \"Dizei à cidade de Sião: Eis que está chegando o teu salvador, com a recompensa já em suas mãos e o prêmio à sua disposição. 12 O povo será chamado Povo santo, os Resgatados do Senhor; e tu terás por nome Desejada, Cidade-não-abandonada\".\nMissa do dia\nPrimeira Leitura (Is 52,7-10)\nLeitura do Livro do Profeta Isaías\nComo são belos, andando sobre os montes, os pés de quem anuncia e prega a paz, de quem anuncia o bem e prega a salvação, e diz a Sião: \"Reina teu Deus!\" 8 Ouve-se a voz de teus vigias, eles levantam a voz, estão exultantes de alegria, sabem que verão com os próprios olhos o Senhor voltar a Sião. 9 Alegrai-vos e exultai ao mesmo tempo, ó ruínas de Jerusalém, o Senhor consolou seu povo e resgatou Jerusalém. 10 O Senhor desnudou seu santo braço aos olhos de todas as nações; todos os confins da terra hão de ver a salvação que vem do nosso Deus."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "SI 96(97),1.6.11-12 e Sl 97(98),1.2-3ab.3cd-4.5-6 (R. 3cd)",
      "refrao": "Missa da aurora",
      "texto": "Brilha hoje uma luz sobre nós, pois nasceu para nós o Senhor. *\nBrilha hoje uma luz sobre nós, pois nasceu para nós o Senhor. *\nDeus é Rei! Exulte a terra de alegria, e as ilhas numerosas rejubilem! E proclama o céu sua justiça, todos os povos podem ver a sua glória. *\nUma luz já se levanta para os justos, e a alegria para os retos corações. Homens justos, alegrai-vos no Senhor, celebrai e bendizei seu santo nome! *\nMissa do dia *\nOs confins do universo contemplaram a salvação do nosso Deus. *\nOs confins do universo contemplaram a salvação do nosso Deus. *\nCantai ao Senhor Deus um canto novo, porque ele fez prodígios! Sua mão e o seu braço forte e santo alcançaram-lhe a vitória. *\nO Senhor fez conhecer a salvação, e às nações, sua justiça; recordou o seu amor sempre fiel pela casa de Israel. *\nOs confins do universo contemplaram a salvação do nosso Deus. Aclamai o Senhor Deus, ó terra inteira, alegrai-vos e exultai! *\nCantai salmos ao Senhor ao som da harpa e da cítara suave! Aclamai, com os clarins e as trombetas, ao Senhor, o nosso Rei! *"
    },
    "segundaLeitura": {
      "titulo": "SEGUNDA LEITURA",
      "referencia": "Tt 3,4-7 e Hb 1,1-6",
      "texto": "Leitura da Carta de São Paulo a Tito\n\nCaríssimo: 4 Manifestou-se a bondade de Deus, nosso Salvador, e o seu amor pelos homens: 5 Ele salvou-nos, não por causa dos atos de justiça que tivéssemos praticado, mas por sua misericórdia, quando renascemos e fomos renovados no batismo pelo Espírito Santo, 6 que ele derramou abundantemente sobre nós por meio de nosso Salvador Jesus Cristo. 7 Justificados assim pela sua graça, nos tornamos na esperança herdeiros da vida eterna.\nMissa do dia\nSegunda Leitura (Hb 1,1-6)\nLeitura da Carta aos Hebreus\nMuitas vezes e de muitos modos falou Deus outrora aos nossos pais, pelos profetas; nestes dias, que são os últimos, ele nos falou por meio do Filho, a quem ele constituiu herdeiro de todas as coisas e pelo qual também ele criou o universo. Este é o esplendor da glória do Pai, 3 a expressão do seu ser. Ele sustenta o universo com o poder de sua palavra. Tendo feito a purificação dos pecados, ele sentou-se à direita da majestade divina, nas alturas. 4 Ele foi colocado tanto acima dos anjos quanto o nome que ele herdou supera o nome deles. 5 De fato, a qual dos anjos Deus disse alguma vez: \"Tu és o meu Filho, eu hoje te gerei?\" Ou ainda: \"Eu serei para ele um Pai e ele será para mim um filho?\" 6 Mas, quando faz entrar o Primogênito no mundo, Deus diz: \"Todos os anjos devem adorá-lo!\""
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 2,15-20 e Jo 1, 1-18",
      "texto": "Proclamação do Evangelho de Jesus Cristo + segundo Lucas\n\nQuando os anjos se afastaram, voltando para o céu, os pastores disseram entre si: \"Vamos a Belém ver este acontecimento que o Senhor nos revelou\". 16 Os pastores foram às pressas a Belém e encontraram Maria e José, e o recém-nascido deitado na manjedoura. 17 Tendo-o visto, contaram o que lhes fora dito sobre o menino. 18 E todos os que ouviram os pastores ficaram maravilhados com aquilo que contavam. 19 Quanto a Maria, guardava todos esses fatos e meditava sobre eles em seu coração. 20 Os pastores voltaram, glorificando e louvando a Deus por tudo o que tinham visto e ouvido, conforme lhes tinha sido dito.\nPalavra da Salvação.\nMissa do dia\nEvangelho (Jo 1, 1-18)\nDespontou o santo dia para nós: Ó nações, vinde adorar o Senhor Deus, porque hoje grande luz brilhou na terra!\nProclamação do Evangelho de Jesus Cristo + segundo João\nNo princípio era a Palavra, e a Palavra estava com Deus; e a Palavra era Deus. 2 No princípio estava ela com Deus. 3 Tudo foi feito por ela, e sem ela nada se fez de tudo que foi feito. 4 Nela estava a vida, e a vida era a luz dos homens. 5 E a luz brilha nas trevas, e as trevas não conseguiram dominá-la. 6 Surgiu um homem enviado por Deus; seu nome era João. 7 Ele veio como testemunha, para dar testemunho da luz, para que todos chegassem à fé por meio dele. 8 Ele não era a luz, mas veio para dar testemunho da luz: 9 daquele que era a luz de verdade, que, vindo ao mundo, ilumina todo ser humano. 10 A Palavra estava no mundo - e o mundo foi feito por meio dela - mas o mundo não quis conhecê-la. 11 Veio para o que era seu, e os seus não a acolheram. 12 Mas, a todos que a receberam, deu-lhes capacidade de se tornarem filhos de Deus isto é, aos que acreditam em seu nome, 13 pois estes não nasceram do sangue nem da vontade da carne nem da vontade do varão, mas de Deus mesmo. 14 E a Palavra se fez carne e habitou entre nós. E nós contemplamos a sua glória, glória que recebe do Pai como filho unigênito, cheio de graça e de verdade. 15 Dele, João dá testemunho, clamando: \"Este é aquele de quem eu disse: O que vem depois de mim passou à minha frente, porque ele existia antes de mim\". 16 De sua plenitude todos nós recebemos graça por graça. 17 Pois por meio de Moisés foi dada a Lei, mas a graça e a verdade nos chegaram através de Jesus Cristo. 18 A Deus, ninguém jamais viu. Mas o Unigênito de Deus, que está na intimidade do Pai, ele no-lo deu a conhecer."
    }
  },
  "2026-12-26": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "At 6,8-10.7,54-59",
      "texto": "Leitura dos Atos dos Apóstolos.\n\nNaqueles dias, 8 Estêvão, cheio de graça e poder, fazia prodígios e grandes sinais entre o povo. 9 Mas alguns membros da chamada Sinagoga dos Libertos, junto com cirenenses e alexandrinos, e alguns da Cilícia e da Âsia, começaram a discutir com Estêvão. 10 Porém, não conseguiam resistir à sabedoria e ao Espírito com que ele falava. 7,54 Ao ouvir essas palavras, eles ficaram enfurecidos e rangeram os dentes contra Estêvão. 55 Estêvão, cheio do Espírito Santo, olhou para o céu e viu a glória de Deus e Jesus, de pé, à direita de Deus. 56 E disse: \"Estou vendo o céu aberto, e o Filho do Homem, de pé, à direita de Deus\". 57 Mas eles, dando grandes gritos e, tapando os ouvidos, avançaram todos juntos contra Estêvão; 58 arrastaram-no para fora da cidade e começaram a apedrejá-lo. As testemunhas deixaram suas vestes aos pés de um jovem, chamado Saulo. 59 Enquanto o apedrejavam, Estêvão clamou dizendo: \"Senhor Jesus, acolhe o meu espírito\"."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 30(31),3cd-4.6 e 8ab.16bc e 17 (R. 6a)",
      "refrao": "Em vossas mãos, Senhor, entrego o meu espírito.",
      "texto": "Sede uma rocha protetora para mim, um abrigo bem seguro que me salve! Sim, sois vós a minha rocha e fortaleza; por vossa honra orientai-me e conduzi-me! *\nEm vossas mãos, Senhor, entrego o meu espírito, porque vós me salvareis, ó Deus fiel! Vosso amor me faz saltar de alegria, pois olhastes para as minhas aflições. *\nEu entrego em vossas mãos o meu destino; libertai-me do inimigo e do opressor! Mostrai serena a vossa face ao vosso servo, e salvai-me pela vossa compaixão! *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Mt 10,17-22",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Mateus.\n\nNaquele tempo, disse Jesus aos seus apóstolos: 17 \"Cuidado com os homens, porque eles vos entregarão aos tribunais e vos açoitarão nas suas sinagogas. 18 Vós sereis levados diante de governadores e reis, por minha causa, para dar testemunho diante deles e das nações. 19 Quando vos entregarem, não fiqueis preocupados como falar ou o que dizer. Então naquele momento vos será indicado o que deveis dizer. 20 Com efeito, não sereis vós que havereis de falar, mas sim o Espírito do vosso Pai é que falará através de vós. 21 O irmão entregará à morte o próprio irmão; o pai entregará o filho; os filhos se levantarão contra seus pais, e os matarão. 22 Vós sereis odiados por todos, por causa do meu nome. Mas quem perseverar até o fim, esse será salvo\"."
    }
  },
  "2026-12-27": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "Eclo 3,3-7.14-17a",
      "texto": "Leitura do Livro do Eclesiástico\n\nDeus honra o pai nos filhos e confirma, sobre eles, a autoridade da mãe. 4 Quem honra o seu pai, alcança o perdão dos pecados; evita cometê-los e será ouvido na oração quotidiana. 5 Quem respeita a sua mãe é como alguém que ajunta tesouros. 6 Quem honra o seu pai, terá alegria com seus próprios filhos; e, no dia em que orar, será atendido. 7 Quem respeita o seu pai, terá vida longa, e quem obedece ao pai é o consolo da sua mãe. 14 Meu filho, ampara o teu pai na velhice e não lhe causes desgosto enquanto ele vive. 15 Mesmo que ele esteja perdendo a lucidez, procura ser compreensivo para com ele; não o humilhes, em nenhum dos dias de sua vida, a caridade feita a teu pai não será esquecida, 16 mas servirá para reparar os teus pecados 17a e, na justiça, será para tua edificação. Palavra do Senhor.\nou\nPrimeira Leitura (Gn 15,1-6;21,1-3)\nLeitura do Livro do Gênesis.\nNaqueles dias, 15,1 o Senhor falou a Abrão, dizendo: \"Não temas, Abrão! Eu sou o teu protetor e tua recompensa será muito grande\". 2 Abrão respondeu: \"Senhor Deus, que me darás? Eu me vou desta vida sem filhos e o herdeiro de minha casa será Eliezer de Damasco\". 3 E acrescentou: \"Como não me deste descendência, um servo nascido em minha casa será meu herdeiro\". 4 Então o Senhor falou-lhe nestes termos: \"O teu herdeiro não será esse, mas um dos teus descendentes é que será o herdeiro\". 5 E, conduzindo-o para fora, disse-lhe: \"Olha para o céu e conta as estrelas, se fores capaz!\" E acrescentou: \"Assim será a tua descendência\". 6 Abrão teve fé no Senhor, que considerou isso como justiça. 21,1 O Senhor visitou Sara, como tinha prometido, e cumpriu o que lhe dissera. 2 Ela concebeu e deu a Abraão um filho na velhice, no tempo que Deus lhe havia predito. 3 Abraão deu o nome de Isaac ao filho que lhe nascera de Sara."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 127(128),1-2.3.4-5 (R. cf. 1)",
      "refrao": "Felizes os que temem o Senhor e trilham seus caminhos!",
      "texto": "Feliz és tu se temes o Senhor e trilhas seus caminhos! Do trabalho de tuas mãos hás de viver, serás feliz, tudo irá bem! *\nA tua esposa é uma videira bem fecunda no coração da tua casa; os teus filhos são rebentos de oliveira ao redor de tua mesa. *\nSerá assim abençoado todo homem que teme o Senhor. O Senhor te abençoe de Sião, cada dia de tua vida. *\nou *\nO Senhor, ele mesmo é nosso Deus, ele sempre se lembra da Aliança. *\nO Senhor, ele mesmo é nosso Deus, ele sempre se lembra da Aliança. *\nDai graças ao Senhor, gritai seu nome, anunciai entre as nações seus grandes feitos! Cantai, entoai salmos para ele, publicai todas as suas maravilhas! *\nGloriai-vos em seu nome que é santo, exulte o coração que busca a Deus! Procurai o Senhor Deus e seu poder, buscai constantemente a sua face! *\nLembrai as maravilhas que ele fez, seus prodígios e as palavras de seus lábios! Descendentes de Abraão, seu servidor, e filhos de Jacó, seu escolhido, *\nEle sempre se recorda da Aliança, promulgada a incontáveis gerações; da Aliança que ele fez com Abraão, e do seu santo juramento a Isaac. *"
    },
    "segundaLeitura": {
      "titulo": "SEGUNDA LEITURA",
      "referencia": "Cl 3,12-21",
      "texto": "Leitura da Carta de São Paulo aos Colossenses\n\nIrmãos: 12 Vós sois amados por Deus, sois os seus santos eleitos. Por isso, revesti-vos de sincera misericórdia, bondade, humildade, mansidão e paciência, 13 suportando-vos uns aos outros e perdoando-vos mutuamente, se um tiver queixa contra o outro. Como o Senhor vos perdoou, assim perdoai vós também. 14 Mas, sobretudo, amai-vos uns aos outros, pois o amor é o vínculo da perfeição. 15 Que a paz de Cristo reine em vossos corações, à qual fostes chamados como membros de um só corpo. E sede agradecidos. 16 Que a palavra de Cristo, com toda a sua riqueza, habite em vós. Ensinai e admoestai-vos uns aos outros com toda a sabedoria. Do fundo dos vossos corações, cantai a Deus salmos, hinos e cânticos espirituais, em ação de graças. 17 Tudo o que fizerdes, em palavras ou obras, seja feito em nome do Senhor Jesus Cristo. Por meio dele dai graças a Deus, o Pai. 18 Esposas, sede solícitas para com vossos maridos, como convém, no Senhor. 19 Maridos, amai vossas esposas e não sejais grosseiros com elas. 20 Filhos, obedecei em tudo aos vossos pais, pois isso é bom e correto no Senhor. 21 Pais, não intimideis os vossos filhos, para que eles não desanimem.\nou\nSegunda Leitura (Hb 11,8.11-12.17-19)\nLeitura da Carta aos Hebreus.\nIrmãos: 8 Foi pela fé que Abraão obedeceu à ordem de partir para uma terra que devia receber como herança, e partiu, sem saber para onde ia. 11 Foi pela fé também que Sara, embora estéril e já de idade avançada, se tornou capaz de ter filhos, porque considerou fidedigno o autor da promessa. 12 É por isso também que de um só homem, já marcado pela morte, nasceu a multidão \"comparável às estrelas do céu e inumerável como a areia das praias do mar\". 17 Foi pela fé que Abraão, posto à prova, ofereceu Isaac; ele, o depositário da promessa, sacrificava o seu filho único, 18 do qual havia sido dito: \"É em Isaac que uma descendência levará o teu nome\". 19 Ele estava convencido de que Deus tem poder até de ressuscitar os mortos, e assim recuperou o filho — o que é também um símbolo."
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 2,22-40",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas.\n\n22 Quando se completaram os dias para a purificação da mãe e do filho, conforme a Lei de Moisés, Maria e José levaram Jesus a Jerusalém, a fim de apresentá-lo ao Senhor. 23 Conforme está escrito na Lei do Senhor: \"Todo primogênito do sexo masculino deve ser consagrado ao Senhor\". 24 Foram também oferecer o sacrifício — um par de rolas ou dois pombinhos — como está ordenado na Lei do Senhor. 25 Em Jerusalém, havia um homem chamado Simeão, o qual era justo e piedoso, e esperava a consolação do povo de Israel. O Espírito Santo estava com ele 26 e lhe havia anunciado que não morreria antes de ver o Messias que vem do Senhor. 27 Movido pelo Espírito, Simeão veio ao Templo. Quando os pais trouxeram o menino Jesus para cumprir o que a Lei ordenava, 28 Simeão tomou o menino nos braços e bendisse a Deus: 29 \"Agora, Senhor, conforme a tua promessa, podes deixar teu servo partir em paz; 30 porque meus olhos viram a tua salvação, 31 que preparaste diante de todos os povos: 32 luz para iluminar as nações e glória do teu povo Israel\". 33 O pai e a mãe de Jesus estavam admirados com o que diziam a respeito dele. 34 Simeão os abençoou e disse a Maria, a mãe de Jesus: \"Este menino vai ser causa tanto de queda como de reerguimento para muitos em Israel. Ele será um sinal de contradição. 35 Assim serão revelados os pensamentos de muitos corações. Quanto a ti, uma espada te traspassará a alma\". 36 Havia também uma profetisa, chamada Ana, filha de Fanuel, da tribo de Aser. Era de idade muito avançada; quando jovem, tinha sido casada e vivera sete anos com o marido. 37 Depois ficara viúva, e agora já estava com oitenta e quatro anos. Não saía do Templo, dia e noite servindo a Deus com jejuns e orações. 38 Ana chegou nesse momento e pôs-se a louvar a Deus e a falar do menino a todos os que esperavam a libertação de Jerusalém. 39 Depois de cumprirem tudo, conforme a Lei do Senhor, voltaram à Galileia, para Nazaré, sua cidade. 40 O menino crescia e tornava-se forte, cheio de sabedoria; e a graça de Deus estava com ele."
    }
  },
  "2026-12-28": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "1Jo 1,5-2,2",
      "texto": "Leitura da Primeira Carta de São João.\n\nCaríssimos, 5 a mensagem, que ouvimos de Jesus Cristo e vos anunciamos, é esta: Deus é luz e nele não há trevas. 6 Se dissermos que estamos em comunhão com ele, mas andamos nas trevas, estamos mentindo e não nos guiamos pela verdade. 7 Mas, se andamos na luz, como ele está na luz, então estamos em comunhão uns com os outros, e o sangue de seu Filho Jesus nos purifica de todo pecado. 8 Se dissermos que não temos pecado, estamo-nos enganando a nós mesmos, e a verdade não está dentro de nós. 9 Se reconhecermos nossos pecados, então Deus se mostra fiel e justo, para nos perdoar os pecados e nos purificar de toda culpa. 10 Se dissermos que nunca pecamos, fazemos dele um mentiroso e sua palavra não está dentro de nós. 2,1 Meus filhinhos, escrevo isto para que não pequeis. No entanto, se alguém pecar, temos junto do Pai um Defensor: Jesus Cristo, o Justo. 2 Ele é a vítima de expiação pelos nossos pecados, e não só pelos nossos, mas também pelos pecados do mundo inteiro."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 123(124),2-3.4-5.7b-8 (R. 7a)",
      "refrao": "Nossa alma como um pássaro escapou do laço que lhe armara o caçador.",
      "texto": "Se o Senhor não estivesse ao nosso lado, quando os homens investiram contra nós, com certeza nos teriam devorado no furor de sua ira contra nós. *\nEntão as águas nos teriam submergido, a correnteza nos teria arrastado, e então, por sobre nós teriam passado essas águas sempre mais impetuosas. *\nO laço arrebentou-se de repente, e assim nós conseguimos libertar-nos. O nosso auxílio está no nome do Senhor, do Senhor que fez o céu e fez a terra! *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Mt 2,13-18",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Mateus.\n\n13 Depois que os magos partiram, o Anjo do Senhor apareceu em sonho a José e lhe disse: \"Levanta-te, pega o menino e sua mãe e foge para o Egito! Fica lá até que eu te avise! Porque Herodes vai procurar o menino para matá-lo\". 14 José levantou-se de noite, pegou o menino e sua mãe, e partiu para o Egito. 15 Ali ficou até à morte de Herodes, para se cumprir o que o Senhor havia dito pelo profeta: \"Do Egito chamei o meu Filho\". 16 Quando Herodes percebeu que os magos o haviam enganado, ficou muito furioso. Mandou matar todos os meninos de Belém e de todo o território vizinho, de dois anos para baixo, exatamente conforme o tempo indicado pelos magos. 17 Então se cumpriu o que foi dito pelo profeta Jeremias: 18 \"Ouviu-se um grito em Ramá, choro e grande lamento: é Raquel que chora seus filhos, e não quer ser consolada, porque eles não existem mais\"."
    }
  },
  "2026-12-29": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "1Jo 2,3-11",
      "texto": "Leitura da Primeira Carta de São João.\n\nCaríssimos, 3 para saber que conhecemos Jesus, vejamos se guardamos os seus mandamentos. 4 Quem diz: \"Eu conheço a Deus\", mas não guarda os seus mandamentos, é mentiroso, e a verdade não está nele. 5 Naquele, porém, que guarda a sua palavra, o amor de Deus é plenamente realizado. O critério para saber se estamos com Jesus é este: 6 quem diz que permanece nele, deve também proceder como ele procedeu. 7 Caríssimos, não vos comunico um mandamento novo, mas um mandamento antigo, que recebestes desde o início; este mandamento antigo é a palavra que ouvistes. 8 No entanto, o que vos escrevo é um mandamento novo - que é verdadeiro nele e em vós -, pois que as trevas passam e já brilha a luz verdadeira. 9 Aquele que diz estar na luz, mas odeia o seu irmão, ainda está nas trevas. 10 O que ama o seu irmão permanece na luz e não corre perigo de tropeçar. 11 Mas o que odeia o seu irmão está nas trevas, caminha nas trevas, e não sabe aonde vai, porque as trevas ofuscaram os seus olhos."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 95(96),1-2a.2b-3.5b-6 (R. 11a)",
      "refrao": "O céu se rejubile e exulte a terra!",
      "texto": "Cantai ao Senhor Deus um canto novo, cantai ao Senhor Deus, ó terra inteira! Cantai e bendizei seu santo nome! *\nDia após dia anunciai sua salvação, manifestai a sua glória entre as nações, e entre os povos do universo seus prodígios! *\nFoi o Senhor e nosso Deus quem fez os céus: diante dele vão a glória e a majestade, e o seu templo, que beleza e esplendor! *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 2,22-35",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas.\n\n22 Quando se completaram os dias para a purificação da mãe e do filho, conforme a Lei de Moisés, Maria e José levaram Jesus a Jerusalém, a fim de apresentá-lo ao Senhor. 23 Conforme está escrito na Lei do Senhor: \"Todo primogênito do sexo masculino deve ser consagrado ao Senhor\". 24 Foram também oferecer o sacrifício - um par de rolas ou dois pombinhos - como está ordenado na Lei do Senhor. 25 Em Jerusalém, havia um homem chamado Simeão, o qual era justo e piedoso, e esperava a consolação do povo de Israel. O Espírito Santo estava com ele 26 e lhe havia anunciado que não morreria antes de ver o Messias que vem do Senhor. 27 Movido pelo Espírito, Simeão veio ao Templo. Quando os pais trouxeram o menino Jesus para cumprir o que a Lei ordenava, 28 Simeão tomou o menino nos braços e bendisse a Deus: 29 \"Agora, Senhor, conforme a tua promessa, podes deixar teu servo partir em paz; 30 porque meus olhos viram a tua salvação, 31 que preparaste diante de todos os povos: 32 luz para iluminar as nações e glória do teu povo Israel\". 33 O pai e a mãe de Jesus estavam admirados com o que diziam a respeito dele. 34 Simeão os abençoou e disse a Maria, a mãe de Jesus: \"Este menino vai ser causa tanto de queda como de reerguimento para muitos em Israel. Ele será um sinal de contradição. 35 Assim serão revelados os pensamentos de muitos corações. Quanto a ti, uma espada te traspassará a alma\"."
    }
  },
  "2026-12-30": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "1Jo 2,12-17",
      "texto": "Leitura da Primeira Carta de São João.\n\n12 Eu vos escrevo, filhinhos: os vossos pecados foram perdoados por meio do seu nome. 13 Eu vos escrevo, pais: vós conheceis aquele que é desde o princípio. Eu vos escrevo, jovens: vós vencestes o Maligno. 14 Já vos escrevi, filhinhos: vós conheceis o Pai. Já vos escrevi, jovens: vós sois fortes, a Palavra de Deus permanece em vós, e vencestes o Maligno. 15 Não ameis o mundo, nem o que há no mundo. Se alguém ama o mundo, não está nele o amor do Pai. 16 Porque tudo o que há no mundo — as paixões da natureza, a concupiscência dos olhos e a ostentação da riqueza — não vem do Pai, mas do mundo. 17 Ora, o mundo passa, e também a sua concupiscência; mas aquele que faz a vontade de Deus permanece para sempre."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 95(96),7-8a.8b-9.10 (R. 11a)",
      "refrao": "O céu se rejubile e exulte a terra!",
      "texto": "Ó família das nações, dai ao Senhor, ó nações, dai ao Senhor poder e glória, dai-lhe a glória que é devida ao seu nome! *\nOferecei um sacrifício nos seus átrios, adorai-o no esplendor da santidade, terra inteira, estremecei diante dele! *\nPublicai entre as nações: \"Reina o Senhor!\" Ele firmou o universo inabalável, e os povos ele julga com justiça. *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Lc 2,36-40",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo Lucas.\n\nNaquele tempo, 36 havia também uma profetisa, chamada Ana, filha de Fanuel, da tribo de Aser. Era de idade muito avançada; quando jovem, tinha sido casada e vivera sete anos com o marido. 37 Depois ficara viúva, e agora já estava com oitenta e quatro anos. Não saía do Templo, dia e noite servindo a Deus com jejuns e orações. 38 Ana chegou nesse momento e pôs-se a louvar a Deus e a falar do menino a todos os que esperavam a libertação de Jerusalém. 39 Depois de cumprirem tudo, conforme a Lei do Senhor, voltaram à Galileia, para Nazaré, sua cidade. 40 O menino crescia e tornava-se forte, cheio de sabedoria; e a graça de Deus estava com ele."
    }
  },
  "2026-12-31": {
    "primeiraLeitura": {
      "titulo": "PRIMEIRA LEITURA",
      "referencia": "1Jo 2,18-21",
      "texto": "Leitura da Primeira Carta de São João.\n\n18 Filhinhos, esta é a última hora. Ouvistes dizer que o Anticristo virá. Com efeito, muitos anticristos já apareceram. Por isso, sabemos que chegou a última hora. 19 Eles saíram do nosso meio, mas não eram dos nossos, pois se fossem realmente dos nossos, teriam permanecido conosco. Mas era necessário ficar claro que nem todos são dos nossos. 20 Vós já recebestes a unção do Santo, e todos tendes conhecimento. 21 Se eu vos escrevi, não é porque ignorais a verdade, mas porque a conheceis, e porque nenhuma mentira provém da verdade."
    },
    "salmo": {
      "titulo": "SALMO RESPONSORIAL",
      "referencia": "Sl 95(96),1-2.11-12.13 (R. 11a)",
      "refrao": "O céu se rejubile e exulte a terra!",
      "texto": "Cantai ao Senhor Deus um canto novo, cantai ao Senhor Deus, ó terra inteira! Cantai e bendizei seu santo nome! Dia após dia anunciai sua salvação. *\nO céu se rejubile e exulte a terra, aplauda o mar com o que vive em suas águas; os campos com seus frutos rejubilem e exultem as florestas e as matas *\nna presença do Senhor, pois ele vem, porque vem para julgar a terra inteira. Governará o mundo todo com justiça, e os povos julgará com lealdade. *"
    },
    "evangelho": {
      "titulo": "EVANGELHO",
      "referencia": "Jo 1,1-18",
      "texto": "Proclamação do Evangelho de Jesus Cristo segundo João.\n\n1 No princípio era a Palavra, e a Palavra estava com Deus; e a Palavra era Deus. 2 No princípio estava ela com Deus. 3 Tudo foi feito por ela e sem ela nada se fez de tudo que foi feito. 4 Nela estava a vida, e a vida era a luz dos homens. 5 E a luz brilha nas trevas, e as trevas não conseguiram dominá-la. 6 Surgiu um homem enviado por Deus; Seu nome era João. 7 Ele veio como testemunha, para dar testemunho da luz, para que todos chegassem à fé por meio dele. 8 Ele não era a luz, mas veio para dar testemunho da luz: 9 daquele que era a luz de verdade, que, vindo ao mundo, ilumina todo ser humano. 10 A Palavra estava no mundo - e o mundo foi feito por meio dela - mas o mundo não quis conhecê-la. 11 Veio para o que era seu, e os seus não a acolheram. 12 Mas, a todos que a receberam, deu-lhes capacidade de se tornarem filhos de Deus isto é, aos que acreditam em seu nome, 13 pois estes não nasceram do sangue nem da vontade da carne nem da vontade do varão, mas de Deus mesmo. 14 E a Palavra se fez carne e habitou entre nós. E nós contemplamos a sua glória, glória que recebe do Pai como filho unigênito, cheio de graça e de verdade. 15 Dele, João dá testemunho, clamando: \"Este é aquele de quem eu disse: 'O que vem depois de mim passou à minha frente, porque ele existia antes de mim' \". 16 De sua plenitude todos nós recebemos graça por graça. 17 Pois por meio de Moisés foi dada a Lei, mas a graça e a verdade nos chegaram através de Jesus Cristo. 18 A Deus, ninguém jamais viu. Mas o Unigênito de Deus, que está na intimidade do Pai, ele no-lo deu a conhecer."
    }
  }
};
