const fs = require("fs");
const path = require("path");

const seedData = [
    {
        title: "EL NUEVO AMORES DE MERCADO",
        description: "El Nuevo Amores de Mercado relata el encuentro de dos hombres desconocidos, con vidas diametralmente opuestas, pero que físicamente son idénticos. Ambos intercambiarán roles en un confuso incidente, dejando a Pelluco Solís como CEO de una poderosa empresa familiar, y a Rodolfo Ruttemeyer como garzón el Mercado\n" +
            "Central.",
        image: 'uploads/image1.jpg',
        url:'https://www.youtube.com/watch?v=WxQ-gfKYYf4&list=PLuUOQ9D9oCVho_TxX4kbUJ-TYvjxcmYzF&index=1&ab_channel=SoundMachineChannel',
        author: 'Andreu Cardenas',
    },
    {
        title: "PRIMER AÑO DE “ALERTA ROMÁNTICA”",
        description: "“Alerta Romántica”, programa que conduce el periodista de Megamedia Rodrigo Sepúlveda en Radio Romántica, cumple un año al aire.",
        image: 'uploads/image2.jpg',
        url:'https://www.youtube.com/watch?v=96w1vUV0zcM&list=PLuUOQ9D9oCVho_TxX4kbUJ-TYvjxcmYzF&index=2&ab_channel=SoundMachineChannel',
        author: 'Maria Manuela Cobos',
    },
    {
        title: "EL EXITOSO PRIMER AÑO DE “ALERTA ROMÁNTICA” DE SEPU",
        description: "“Alerta Romántica”, programa que conduce el periodista de Megamedia Rodrigo Sepúlveda en Radio Romántica, cumple un año al aire. El programa, que abarca temas de contingencia, misceláneos, entrevistas y buena música, ha logrado generar una cercanía y conexión con la audiencia que llena de satisfacción al equipo que da vida a este espacio radial. \n" +
            "\n" +
            "Según la última encuesta Ipsos, “Alerta Romántica”, en solo un año de vida, tiene un promedio diario de audiencia de 158.000 personas, de los cuales 106.000 son exclusivamente mujeres. \n" +
            "\n" +
            "Rodrigo señaló que “el agradecimiento del aniversario de ‘Alerta Romántica’ es hacia la gente, porque este programa nació como una posibilidad de expresarse, de la gente que está acá en Chile, la gente que está en el extranjero también, son muchos los que nos escriben respecto a diferentes temas que hablamos durante el programa. Es extraordinario, recibimos 300 o 400 mensajes diarios, también que disfruten con la música que ponemos al aire, entonces es una maravilla, de verdad que yo estoy supercontento por la lealtad”. \n" +
            "\n" +
            "Además, “Sepu” resaltó estar “muy agradecido de haber logrado un año con el tremendo equipo de ‘Alerta Romántica’, Cristóbal Alarcón, Patricio Morales, Ángel Aravena y Claudio Zapata, con los cuales terminé siendo muy amigos. En la tele y en la radio me pasa lo mismo, hay mucho humor, mucha pasión en lo que hacemos”. \n" +
            "\n" +
            "El programa, que va de lunes a viernes desde las 15:00 a 18:00, fue una de las propuestas innovadoras que realizó Radio Romántica. Con el sello de entregarle a su audiencia nuevos contenidos cercanos y de calidad, con buena música y contingencia, ha sido todo un éxito para los auditores de la radio.",
        image: 'uploads/image3.jpg',
        url:'https://www.youtube.com/watch?v=6bdV-mmDH9o&list=PLuUOQ9D9oCVho_TxX4kbUJ-TYvjxcmYzF&index=3&ab_channel=SoundMachineChannel',
        author: 'Raimundo Puerto',
    },
    {
        title: "Final de temporada de Seyrán y Ferit es un éxito en sintonía",
        description: "Ayer lunes 30 de septiembre se emitió el último capítulo de la segunda temporada del fenómeno turco “Seyrán y Ferit”, el cual se llevó el primer lugar en sintonía en su horario con 10,4 puntos y peak de 11,4. Además, logró ser primero en tendencias en X con el hashtag #SeyFerGranFinal.\n" +
            "\n" +
            "En el horario de Seyrán y Ferit, entre las 23:40 y las 00:36, los resultados del lunes 30 de septiembre:\n" +
            "\n" +
            " \n" +
            "\n" +
            "Mega: 10,4\n" +
            "\n" +
            "C13: 8,4\n" +
            "\n" +
            "TVN: 6,1\n" +
            "\n" +
            "CHV: 5,9\n" +
            "\n" +
            " \n" +
            "\n" +
            "La teleserie turca, que se estrenó el 16 de octubre de 2023, terminó con una de las escenas más memorables de la segunda temporada, donde la familia Korhan, liderados por el patriarca de familia, Halis, se reúne en el puerto de Estambul para tener un enfrentamiento final contra de sus enemigos y deshacerse de ellos. \n" +
            "\n" +
            "Pasado el peligro, el poderoso clan se reunió como en los viejos tiempos alrededor de la mesa, pues Halis tenía una última sorpresa preparada con la reaparición de Orhan, alegrando a toda la familia, pero por sobre todo a Ferit, quien lo creía muerto. A pesar de esto, la felicidad terminó de golpe para los Korhan luego de que Seyrán no resistiera más desplomándose frente a su familia, lo que hizo que todos se enteren de su enfermedad mortal. \n" +
            "\n" +
            "La teleserie turca que reemplazará Seyrán y Ferit a partir de hoy 1 de octubre será el exitoso fenómeno “Vida de Mentiras”. Su primer capítulo se emitirá inmediatamente después de “Al Sur del Corazón”. Debido a este estreno, la programación quedará de la siguiente manera: \n" +
            "\n" +
            " \n" +
            "\n" +
            "Al Sur del Corazón \n" +
            "Vida de Mentiras \n" +
            "El Señor de la Querencia\n" +
            "Meganoticias Prime\n" +
            "Hora 0\n",
        image: 'uploads/image4.jpg',
        url:'https://www.youtube.com/watch?v=FQLSrgiDyUg&list=PLuUOQ9D9oCVho_TxX4kbUJ-TYvjxcmYzF&index=4&ab_channel=SoundMachineChannel',
        author: 'Juan Vicente Pinilla',
    },
    {
        title: "MEGA EL CANAL LÍDER Enero-Septiembre 2024",
        description: "Terminado el tercer trimestre de 2024, Mega se mantiene como el canal líder en Chile de acuerdo con los datos oficiales Kantar Ibope Media, entre el 01 de enero y el 30 de septiembre.  \n" +
            "\n" +
            " \n" +
            "\n" +
            "Rating enero-septiembre 2024 \n" +
            "\n" +
            "Mega:    6.6 \n" +
            "\n" +
            "CHV:     6.2 \n" +
            "\n" +
            "Canal 13: 5.6 \n" +
            "\n" +
            "TVN:     3.8 \n" +
            "\n" +
            " \n" +
            "\n" +
            "*Durante este 2024, Mega ha ganado 157 de los 274 días del año. \n" +
            "\n" +
            "*Cada mes del 2024 Mega ha sido visto por 12.294.594 personas  \n" +
            "\n" +
            "*Cada mes del 2024 Mega ha tenido un alcance del 75.7% de la población.  \n" +
            "\n" +
            " \n" +
            "\n" +
            "En el rating comercial acumulado entre enero y septiembre 2024, Mega también lidera con 2,3 puntos, seguido de 2,2 de CHV, 1,9 de Canal 13 y 1,1 de Televisión Nacional \n" +
            "\n" +
            " \n" +
            "\n" +
            "Asimismo, durante septiembre 2024, Mega promedió 5,6 puntos en un empate en el primer lugar. \n" +
            "\n" +
            " \n" +
            "\n" +
            "Rating Septiembre 2024 \n" +
            "\n" +
            "Mega:   5.6 \n" +
            "\n" +
            "CHV:    5.6 \n" +
            "\n" +
            "Canal13: 5.1 \n" +
            "\n" +
            "TVN:    3.5  \n" +
            "\n" +
            " \n" +
            "\n" +
            "En cuanto a los programas más vistos de Mega durante el mes de septiembre 2024, se ubica en primer lugar “Al Sur del Corazón”, luego “El Señor de la Querencia” ocupa el segundo puesto. Posteriormente, “Hasta Cuándo”, “Juego de Ilusiones” y “Seyran y Ferit” completan el top 5 de los espacios de Mega preferidos por las audiencias.  ",
        image: 'uploads/image5.jpg',
        url:'https://www.youtube.com/watch?v=MTzpG-VR1to&list=PLuUOQ9D9oCVho_TxX4kbUJ-TYvjxcmYzF&index=5&ab_channel=SoundMachineChannel',
        author: 'Maria Asuncion Caballero',
    },
    {
        title: "Mallplaza y Megamedia sellan inédita alianza que busca talentos nacionales cuyo premio es ser parte del grupo de bailarines que estarán en el Festival de Viña del Mar 2025",
        description: "Por primera vez en la historia del certamen, bailarines y bailarinas de todo el país mostrarán sus talentos y competirán para ser parte de las oberturas en la Quinta Vergara.\n" +
            "Con esta alianza, Mallplaza ratifica su histórico compromiso con la cultura, transformando sus centros urbanos en una gran plataforma de co-creación y de expresión artística que permitirá que aquellos talentos que merecen cumplir su sueño lleguen al escenario del festival más importante de América Latina.\n" +
            "Megamedia valora esta alianza, ya que Mallplaza es uno de los auspiciadores oficiales confirmados para Viña 2025 y este proyecto es parte de los derechos que pueden desarrollar las marcas para asociarse al Festival de Canción, más allá de la semana en que se desarrolla el certamen musical.\n" +
            "Santiago, 30 de septiembre 2024.- Con el regreso de Angélica Castro como conductora en un programa de televisión abierta, Mallplaza y Megamedia dieron a conocer esta mañana una alianza para buscar talentos nacionales que sueñan con llegar al escenario del Festival de Viña 2025.\n" +
            "\n" +
            "“Talento Mallplaza” es el nombre del inédito programa de detección y preparación de talentos que hoy fue presentado en Mallplaza Oeste y que llegará a todo el país a través de la transmisión de Mega y sus diferentes plataformas. El programa tiene como objetivo descubrir a seis bailarines o bailarinas que se incorporarán al cuerpo de baile oficial que cada noche se presentará en las oberturas del festival de la canción.\n" +
            "\n" +
            "“Nuestros centros urbanos son plazas que a diario reciben a millones de personas y ellas se vinculan directamente con el compromiso histórico que como Mallplaza tenemos con la cultura. La cultura que se plasma en grandes espectáculos, pero también se expresa en el talento de cada persona, en lo cotidiano, en lo que enriquece nuestro día a día. Creemos entonces que esta alianza con Megamedia nos permite llevar este talento local al escenario más importante de América Latina y esperamos que cada uno de los castings que realizaremos puedan recibir a todos quienes buscan y merecen la oportunidad de cumplir su sueño: llegar al escenario más importante del continente que es el Festival de Viña”, explicó María Irene Soto, gerente de Asuntos Corporativos de Mallplaza.\n" +
            "\n" +
            "Para Rodrigo Norambuena, Director de Desarrollo de Negocios de Megamedia, Talento Mallplaza “permitirá que, como nos propusimos, el Festival de Viña del Mar se viva y disfrute durante todo el año y en diferentes ciudades del país, haciendo participe a miles de jóvenes que, por su talento y esfuerzo, tienen la posibilidad de llegar a este soñado escenario”. \n" +
            "\n" +
            "El Director Comercial de Megamedia, Luis Sepúlveda, agregó que “en esta innovadora alianza, Megamedia ha integrado sus diferentes áreas de desarrollo, en una fórmula que puede ser replicada también para otros diversos proyectos. Así, hoy Mallplaza, como auspiciador oficial de Viña 2025, puede trabajar en conjunto con Megamedia en la comunicación de contenidos relacionados a un evento tan relevante y significativo para el público, como es el festival de la canción”.\n" +
            "\n" +
            "De esta manera, por primera vez en la historia del Festival de Viña, a través de tres audiciones masivas, Megamedia y Mallplaza buscarán descubrir a los mejores bailarines para el Festival Latino Más Grande del Mundo. Los castings se realizarán en Mallplaza Oeste, en Santiago, el 13 de octubre; en Mallplaza Trébol Talcahuano el 20 de octubre y en Mallplaza Antofagasta el 3 de noviembre. Posteriormente, las semifinales y la gran final del 8 de diciembre se podrán disfrutar a través de una transmisión especial de Mega y todas sus plataformas.\n" +
            "\n" +
            "César Carreño, Productor Ejecutivo de Megamedia y del programa “Talento Mallplaza”, señala que “para este programa queremos proyectar y transmitir toda aquella emoción que significa descubrir nuevos talentos para un evento tan importante. Tras el llamado masivo y la evaluación de un jurado muy competente y exigente, se realizarán dos semifinales y luego una gran final. Estas tres instancias contarán con público asistente, lo que generará un ambiente aún más emotivo y de expectación”.\n" +
            "\n" +
            "Para ser parte de “Talento Mallplaza”, las personas mayores de 18 años que quieran mostrar sus dotes con la danza solo deben concurrir a los centros urbanos de Mallplaza el día de la convocatoria y ser parte de esta experiencia que promete llevar a los mejores talentos del país al escenario que se merecen. Para más información invitamos a revisar las plataformas de Mallplaza a partir del próximo jueves 3 de octubre, fecha en la que comenzarán las convocatorias para los tres casting masivos.",
        image: 'uploads/image6.jpg',
        url:'https://www.youtube.com/watch?v=nD9uaV8tRQc&list=PLuUOQ9D9oCVho_TxX4kbUJ-TYvjxcmYzF&index=6&ab_channel=SoundMachineChannel',
        author: 'Chloe Torre',
    },
    {
        title: "Karen Doggenweiler y José Antonio Neme dejan un “Caos Total” con su llegada a Radio Romántica",
        description: "Desde este lunes 30 de septiembre Karen Doggenweiler y José Antonio Neme llegan a armar un “Caos Total” en Radio Romántica. Desde las 13:00 horas hasta las 15:00 los conductores y periodistas nos invitan a pasar un tiempo entre amigos. \n" +
            "\n" +
            "“Caos Total” será un programa de entretenimiento que abarcará temas que le importan a la sociedad, donde podremos escuchar a Karen y José Antonio compartiendo de una forma más relajada y haciéndonos parte de la complicidad que ya hemos visto en pantalla. \n" +
            "\n" +
            "El programa también contará con diferentes secciones y panelistas que hablarán temas sobre belleza, mascotas, tarot, tendencias y temas de interés para la dupla y la audiencia de Radio Romántica. \n" +
            "\n" +
            "Según Gloria San Martín, directora de Radio Romántica, “para nosotros es muy importante incorporar a nuestro equipo de Radio Romántica a dos figuras potentes de la televisión chilena como lo son José Antonio Neme y Karen Doggenweiler. Tendremos todo el humor, la ironía, esa irreverencia, ese lenguaje directo de José Antonio y la simpatía y versatilidad que tiene nuestra gran animadora del Festival de Viña”. ",
        image: 'uploads/image7.jpg',
        url:'https://www.youtube.com/watch?v=evLn0rX4888&list=PLuUOQ9D9oCVho_TxX4kbUJ-TYvjxcmYzF&index=7&ab_channel=SoundMachineChannel',
        author: 'Bernabe Gabarri',
    },
    {
        title: "El mundial de rally se toma las pantallas de Megamedia",
        description: "Este jueves comenzará la fecha 11 del Campeonato Mundial de Rally que se correrá en Chile y Megadeportes, en las distintas plataformas de Megamedia, prepara una amplia transmisión y cobertura para que los fanáticos no se pierdan detalle alguno de sus mejores momentos. La competencia reúne a los mejores pilotos y los mejores autos del planeta, en un escenario de alta complejidad como son los cerrados e irregulares caminos de la región del Biobío.\n" +
            "\n",
        image: 'uploads/image8.jpg',
        url:'https://www.youtube.com/watch?v=xBh1ZcCI4Z4&list=PLuUOQ9D9oCVho_TxX4kbUJ-TYvjxcmYzF&index=8&ab_channel=SoundMachineChannel',
        author: 'Melchor Paredes',
    },
    {
        title: "¡Ya es oficial! Karen Doggenweiler será la animadora de Viña 2025",
        description: "El anuncio fue realizado por el Presidente de Megamedia, Carlos Heller y el Director Ejecutivo de Megamedia, Javier Villanueva, durante la emisión del programa Mucho Gusto. La noticia llenó de alegría a sus compañeros y al público, generándose positivas reacciones en las redes del espacio matinal.\n" +
            "\n" +
            "Santiago, lunes 2 de septiembre de 2024.- Esta mañana durante la emisión del matinal “Mucho Gusto” y en medio del entusiasmo de sus compañeros y compañeras de labor, la conductora del espacio Karen Doggenweiler fue presentada oficialmente como la animadora del próximo Festival Internacional de la Canción de Viña del Mar. Una mujer con una destacada trayectoria, carisma y quien además encarna todos los valores y la esencia de este importante evento del verano en nuestro país.",
        image: 'uploads/image9.jpg',
        url:'https://www.youtube.com/watch?v=xatxVcRg__k&list=PLuUOQ9D9oCVho_TxX4kbUJ-TYvjxcmYzF&index=9&ab_channel=SoundMachineChannel',
        author: 'Raquel Montiel',
    },
    {
        title: "\"AL SUR DEL CORAZÓN SE INSTALA ENTRE LAS SERIES MÁS POPULARES DE NETFLIX\"",
        description: "A un día de su estreno, Al Sur del Corazón logró posicionarse entre las 10 series más populares de la plataforma de streaming Netflix. La ficción protagonizada por Paola Volpato, Mario Horton, Mariana di Girolamo y Francisco Melo, consiguió en menos de 24 horas quedarse con el séptimo puesto de la lista.\n" +
            "\n" +
            "Al Sur del Corazón centra su trama en la familia de las Bravo, conocidas en el pueblo como “las Bravas” quienes a punta de esfuerzo y valentía luchan por sus tierras y enfrentan los desafíos de los tiempos con su negocio de lechería. Además, arrastran con la maldición que los hombres sólo traen desgracias a sus vidas, por lo que estas mujeres aguerridas no permiten que ni se les acerquen.",
        image: 'uploads/image10.jpg',
        url:'https://www.youtube.com/watch?v=WxLvJ6R-gu4&list=PLuUOQ9D9oCVho_TxX4kbUJ-TYvjxcmYzF&index=10&ab_channel=SoundMachineChannel',
        author: 'Raquel Montiel',
    },
    {
        title: "HORA 0, EL NUEVO ESPACIO INFORMATIVO DE MEGANOTICIAS",
        description: "Este lunes 2 de septiembre a las 00:30 horas se estrenará \"Hora 0”, un nuevo programa informativo del Departamento de Prensa de Megamedia.  \n" +
            "\n" +
            "El noticiero abordará las noticias más importantes de la jornada y anticipará la pauta informativa del día que comienza. La conducción estará a cargo del periodista Carlos Jara, quien también complementará la información con los periodistas Lucas Quinn en estudio digital y Fernando Fabres tomando el pulso en vivo desde las calles. De este modo, \"Hora 0\" proyectará el día informativo, en un espacio que estará ampliamente conectado con la actualidad y la audiencia a través de las redes sociales.  ",
        image: 'uploads/image11.jpg',
        url:'https://www.youtube.com/watch?v=0zbBXaA2FUQ&list=PLuUOQ9D9oCVho_TxX4kbUJ-TYvjxcmYzF&index=11&ab_channel=SoundMachineChannel',
        author: 'Raquel Montiel',
    },
    {
        title: "“Viaje a lo insólito” debuta este sábado en Mega cargado de impactantes historias",
        description: "Este sábado 28 de septiembre, después de Meganoticias Prime, se estrenará el nuevo programa de docuficción de Mega, “Viaje a lo insólito”. El espacio contará con la conducción del periodista y escritor Sergio Paz, quien a lo largo de la temporada nos mostrará cerca de 50 historias diferentes ocurridas en Chile, las que dejarán a los espectadores asombrados por lo extrañas e insólitas que son. ",
        image: 'uploads/image12.jpg',
        url:'https://www.youtube.com/watch?v=0QlzvGU255g&list=PLuUOQ9D9oCVho_TxX4kbUJ-TYvjxcmYzF&index=12&ab_channel=SoundMachineChannel',
        author: 'Martin Santos',
    },
];

module.exports = seedData;