console.log('=== Spanish Verbs App.js loaded - Version 20260408d ===');

// Spanish verb conjugation data
// Updated: 2026-04-08 - Added speech recognition with scoring & mobile optimizations
const verbs = [
    {
        infinitive: 'hablar',
        translation: 'to speak',
        type: 'regular',
        present: ['hablo', 'hablas', 'habla', 'hablamos', 'habláis', 'hablan'],
        preterite: ['hablé', 'hablaste', 'habló', 'hablamos', 'hablasteis', 'hablaron'],
        imperfect: ['hablaba', 'hablabas', 'hablaba', 'hablábamos', 'hablabais', 'hablaban'],
        future: ['hablaré', 'hablarás', 'hablará', 'hablaremos', 'hablaréis', 'hablarán'],
        examples: {
            present: [
                {es: 'Yo hablo español', en: 'I speak Spanish'},
                {es: 'Tú hablas inglés', en: 'You speak English'},
                {es: 'Ella habla francés', en: 'She speaks French'},
                {es: 'Nosotros hablamos mucho', en: 'We speak a lot'},
                {es: 'Vosotros habláis rápido', en: 'You all speak fast'},
                {es: 'Ellos hablan despacio', en: 'They speak slowly'}
            ],
            preterite: [
                {es: 'Yo hablé con María', en: 'I spoke with María'},
                {es: 'Tú hablaste ayer', en: 'You spoke yesterday'},
                {es: 'Él habló conmigo', en: 'He spoke with me'},
                {es: 'Nosotros hablamos anoche', en: 'We spoke last night'},
                {es: 'Vosotros hablasteis bien', en: 'You all spoke well'},
                {es: 'Ellos hablaron mucho', en: 'They spoke a lot'}
            ],
            imperfect: [
                {es: 'Yo hablaba todos los días', en: 'I used to speak every day'},
                {es: 'Tú hablabas mucho', en: 'You used to speak a lot'},
                {es: 'Ella hablaba español', en: 'She used to speak Spanish'},
                {es: 'Nosotros hablábamos siempre', en: 'We used to speak always'},
                {es: 'Vosotros hablabais poco', en: 'You all used to speak little'},
                {es: 'Ellos hablaban rápido', en: 'They used to speak fast'}
            ],
            future: [
                {es: 'Yo hablaré mañana', en: 'I will speak tomorrow'},
                {es: 'Tú hablarás con él', en: 'You will speak with him'},
                {es: 'Ella hablará español', en: 'She will speak Spanish'},
                {es: 'Nosotros hablaremos después', en: 'We will speak later'},
                {es: 'Vosotros hablaréis bien', en: 'You all will speak well'},
                {es: 'Ellos hablarán rápido', en: 'They will speak fast'}
            ]
        }
    },
    {
        infinitive: 'comer',
        translation: 'to eat',
        type: 'regular',
        present: ['como', 'comes', 'come', 'comemos', 'coméis', 'comen'],
        preterite: ['comí', 'comiste', 'comió', 'comimos', 'comisteis', 'comieron'],
        imperfect: ['comía', 'comías', 'comía', 'comíamos', 'comíais', 'comían'],
        future: ['comeré', 'comerás', 'comerá', 'comeremos', 'comeréis', 'comerán'],
        examples: {
            present: [
                {es: 'Yo como frutas', en: 'I eat fruits'},
                {es: 'Tú comes pan', en: 'You eat bread'},
                {es: 'Él come pizza', en: 'He eats pizza'},
                {es: 'Nosotros comemos juntos', en: 'We eat together'},
                {es: 'Vosotros coméis mucho', en: 'You all eat a lot'},
                {es: 'Ellos comen tarde', en: 'They eat late'}
            ],
            preterite: [
                {es: 'Yo comí en casa', en: 'I ate at home'},
                {es: 'Tú comiste pollo', en: 'You ate chicken'},
                {es: 'Ella comió temprano', en: 'She ate early'},
                {es: 'Nosotros comimos bien', en: 'We ate well'},
                {es: 'Vosotros comisteis rápido', en: 'You all ate quickly'},
                {es: 'Ellos comieron todo', en: 'They ate everything'}
            ],
            imperfect: [
                {es: 'Yo comía verduras', en: 'I used to eat vegetables'},
                {es: 'Tú comías poco', en: 'You used to eat little'},
                {es: 'Él comía mucho', en: 'He used to eat a lot'},
                {es: 'Nosotros comíamos juntos', en: 'We used to eat together'},
                {es: 'Vosotros comíais mal', en: 'You all used to eat poorly'},
                {es: 'Ellos comían tarde', en: 'They used to eat late'}
            ],
            future: [
                {es: 'Yo comeré pizza', en: 'I will eat pizza'},
                {es: 'Tú comerás más tarde', en: 'You will eat later'},
                {es: 'Él comerá temprano', en: 'He will eat early'},
                {es: 'Nosotros comeremos juntos', en: 'We will eat together'},
                {es: 'Vosotros comeréis bien', en: 'You all will eat well'},
                {es: 'Ellos comerán todo', en: 'They will eat everything'}
            ]
        }
    },
    {
        infinitive: 'vivir',
        translation: 'to live',
        type: 'regular',
        present: ['vivo', 'vives', 'vive', 'vivimos', 'vivís', 'viven'],
        preterite: ['viví', 'viviste', 'vivió', 'vivimos', 'vivisteis', 'vivieron'],
        imperfect: ['vivía', 'vivías', 'vivía', 'vivíamos', 'vivíais', 'vivían'],
        future: ['viviré', 'vivirás', 'vivirá', 'viviremos', 'viviréis', 'vivirán'],
        examples: {
            present: [
                {es: 'Yo vivo en Madrid', en: 'I live in Madrid'},
                {es: 'Tú vives aquí', en: 'You live here'},
                {es: 'Ella vive lejos', en: 'She lives far away'},
                {es: 'Nosotros vivimos cerca', en: 'We live nearby'},
                {es: 'Vosotros vivís bien', en: 'You all live well'},
                {es: 'Ellos viven juntos', en: 'They live together'}
            ],
            preterite: [
                {es: 'Yo viví en México', en: 'I lived in Mexico'},
                {es: 'Tú viviste allí', en: 'You lived there'},
                {es: 'Él vivió solo', en: 'He lived alone'},
                {es: 'Nosotros vivimos cinco años', en: 'We lived five years'},
                {es: 'Vosotros vivisteis en Roma', en: 'You all lived in Rome'},
                {es: 'Ellos vivieron bien', en: 'They lived well'}
            ],
            imperfect: [
                {es: 'Yo vivía en Barcelona', en: 'I used to live in Barcelona'},
                {es: 'Tú vivías solo', en: 'You used to live alone'},
                {es: 'Ella vivía feliz', en: 'She used to live happily'},
                {es: 'Nosotros vivíamos allí', en: 'We used to live there'},
                {es: 'Vosotros vivíais lejos', en: 'You all used to live far'},
                {es: 'Ellos vivían cerca', en: 'They used to live nearby'}
            ],
            future: [
                {es: 'Yo viviré en París', en: 'I will live in Paris'},
                {es: 'Tú vivirás aquí', en: 'You will live here'},
                {es: 'Ella vivirá sola', en: 'She will live alone'},
                {es: 'Nosotros viviremos juntos', en: 'We will live together'},
                {es: 'Vosotros viviréis lejos', en: 'You all will live far'},
                {es: 'Ellos vivirán felices', en: 'They will live happily'}
            ]
        }
    },
    {
        infinitive: 'ser',
        translation: 'to be',
        type: 'irregular',
        present: ['soy', 'eres', 'es', 'somos', 'sois', 'son'],
        preterite: ['fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron'],
        imperfect: ['era', 'eras', 'era', 'éramos', 'erais', 'eran'],
        future: ['seré', 'serás', 'será', 'seremos', 'seréis', 'serán'],
        examples: {
            present: [
                {es: 'Yo soy estudiante', en: 'I am a student'},
                {es: 'Tú eres inteligente', en: 'You are intelligent'},
                {es: 'Él es profesor', en: 'He is a teacher'},
                {es: 'Nosotros somos amigos', en: 'We are friends'},
                {es: 'Vosotros sois españoles', en: 'You all are Spanish'},
                {es: 'Ellos son felices', en: 'They are happy'}
            ],
            preterite: [
                {es: 'Yo fui el primero', en: 'I was the first'},
                {es: 'Tú fuiste rápido', en: 'You were fast'},
                {es: 'Ella fue médica', en: 'She was a doctor'},
                {es: 'Nosotros fuimos ganadores', en: 'We were winners'},
                {es: 'Vosotros fuisteis amables', en: 'You all were kind'},
                {es: 'Ellos fueron campeones', en: 'They were champions'}
            ],
            imperfect: [
                {es: 'Yo era joven', en: 'I was young'},
                {es: 'Tú eras estudiante', en: 'You were a student'},
                {es: 'Él era doctor', en: 'He was a doctor'},
                {es: 'Nosotros éramos niños', en: 'We were children'},
                {es: 'Vosotros erais buenos', en: 'You all were good'},
                {es: 'Ellos eran amigos', en: 'They were friends'}
            ],
            future: [
                {es: 'Yo seré doctor', en: 'I will be a doctor'},
                {es: 'Tú serás feliz', en: 'You will be happy'},
                {es: 'Ella será famosa', en: 'She will be famous'},
                {es: 'Nosotros seremos amigos', en: 'We will be friends'},
                {es: 'Vosotros seréis campeones', en: 'You all will be champions'},
                {es: 'Ellos serán exitosos', en: 'They will be successful'}
            ]
        }
    },
    {
        infinitive: 'estar',
        translation: 'to be',
        type: 'irregular',
        present: ['estoy', 'estás', 'está', 'estamos', 'estáis', 'están'],
        preterite: ['estuve', 'estuviste', 'estuvo', 'estuvimos', 'estuvisteis', 'estuvieron'],
        imperfect: ['estaba', 'estabas', 'estaba', 'estábamos', 'estabais', 'estaban'],
        future: ['estaré', 'estarás', 'estará', 'estaremos', 'estaréis', 'estarán'],
        examples: {
            present: [
                {es: 'Yo estoy cansado', en: 'I am tired'},
                {es: 'Tú estás bien', en: 'You are well'},
                {es: 'Ella está aquí', en: 'She is here'},
                {es: 'Nosotros estamos contentos', en: 'We are happy'},
                {es: 'Vosotros estáis listos', en: 'You all are ready'},
                {es: 'Ellos están tristes', en: 'They are sad'}
            ],
            preterite: [
                {es: 'Yo estuve enfermo', en: 'I was sick'},
                {es: 'Tú estuviste allí', en: 'You were there'},
                {es: 'Él estuvo ocupado', en: 'He was busy'},
                {es: 'Nosotros estuvimos juntos', en: 'We were together'},
                {es: 'Vosotros estuvisteis fuera', en: 'You all were outside'},
                {es: 'Ellos estuvieron bien', en: 'They were well'}
            ],
            imperfect: [
                {es: 'Yo estaba feliz', en: 'I was happy'},
                {es: 'Tú estabas cansado', en: 'You were tired'},
                {es: 'Ella estaba triste', en: 'She was sad'},
                {es: 'Nosotros estábamos listos', en: 'We were ready'},
                {es: 'Vosotros estabais ocupados', en: 'You all were busy'},
                {es: 'Ellos estaban lejos', en: 'They were far'}
            ],
            future: [
                {es: 'Yo estaré listo', en: 'I will be ready'},
                {es: 'Tú estarás bien', en: 'You will be well'},
                {es: 'Ella estará allí', en: 'She will be there'},
                {es: 'Nosotros estaremos juntos', en: 'We will be together'},
                {es: 'Vosotros estaréis ocupados', en: 'You all will be busy'},
                {es: 'Ellos estarán contentos', en: 'They will be happy'}
            ]
        }
    },
    {
        infinitive: 'tener',
        translation: 'to have',
        type: 'irregular',
        present: ['tengo', 'tienes', 'tiene', 'tenemos', 'tenéis', 'tienen'],
        preterite: ['tuve', 'tuviste', 'tuvo', 'tuvimos', 'tuvisteis', 'tuvieron'],
        imperfect: ['tenía', 'tenías', 'tenía', 'teníamos', 'teníais', 'tenían'],
        future: ['tendré', 'tendrás', 'tendrá', 'tendremos', 'tendréis', 'tendrán'],
        examples: {
            present: [
                {es: 'Yo tengo hambre', en: 'I am hungry'},
                {es: 'Tú tienes sed', en: 'You are thirsty'},
                {es: 'Él tiene frío', en: 'He is cold'},
                {es: 'Nosotros tenemos tiempo', en: 'We have time'},
                {es: 'Vosotros tenéis razón', en: 'You all are right'},
                {es: 'Ellos tienen sueño', en: 'They are sleepy'}
            ],
            preterite: [
                {es: 'Yo tuve suerte', en: 'I was lucky'},
                {es: 'Tú tuviste tiempo', en: 'You had time'},
                {es: 'Ella tuvo miedo', en: 'She was afraid'},
                {es: 'Nosotros tuvimos éxito', en: 'We were successful'},
                {es: 'Vosotros tuvisteis calor', en: 'You all were hot'},
                {es: 'Ellos tuvieron problemas', en: 'They had problems'}
            ],
            imperfect: [
                {es: 'Yo tenía un perro', en: 'I used to have a dog'},
                {es: 'Tú tenías dinero', en: 'You used to have money'},
                {es: 'Él tenía coche', en: 'He used to have a car'},
                {es: 'Nosotros teníamos casa', en: 'We used to have a house'},
                {es: 'Vosotros teníais tiempo', en: 'You all used to have time'},
                {es: 'Ellos tenían razón', en: 'They were right'}
            ],
            future: [
                {es: 'Yo tendré tiempo', en: 'I will have time'},
                {es: 'Tú tendrás suerte', en: 'You will have luck'},
                {es: 'Él tendrá éxito', en: 'He will have success'},
                {es: 'Nosotros tendremos coche', en: 'We will have a car'},
                {es: 'Vosotros tendréis razón', en: 'You all will be right'},
                {es: 'Ellos tendrán dinero', en: 'They will have money'}
            ]
        }
    },
    {
        infinitive: 'hacer',
        translation: 'to do/make',
        type: 'irregular',
        present: ['hago', 'haces', 'hace', 'hacemos', 'hacéis', 'hacen'],
        preterite: ['hice', 'hiciste', 'hizo', 'hicimos', 'hicisteis', 'hicieron'],
        imperfect: ['hacía', 'hacías', 'hacía', 'hacíamos', 'hacíais', 'hacían'],
        future: ['haré', 'harás', 'hará', 'haremos', 'haréis', 'harán'],
        examples: {
            present: [
                {es: 'Yo hago ejercicio', en: 'I exercise'},
                {es: 'Tú haces la tarea', en: 'You do homework'},
                {es: 'Ella hace café', en: 'She makes coffee'},
                {es: 'Nosotros hacemos planes', en: 'We make plans'},
                {es: 'Vosotros hacéis ruido', en: 'You all make noise'},
                {es: 'Ellos hacen deporte', en: 'They do sports'}
            ],
            preterite: [
                {es: 'Yo hice la cama', en: 'I made the bed'},
                {es: 'Tú hiciste todo', en: 'You did everything'},
                {es: 'Él hizo un pastel', en: 'He made a cake'},
                {es: 'Nosotros hicimos bien', en: 'We did well'},
                {es: 'Vosotros hicisteis mal', en: 'You all did poorly'},
                {es: 'Ellos hicieron amigos', en: 'They made friends'}
            ],
            imperfect: [
                {es: 'Yo hacía deporte', en: 'I used to do sports'},
                {es: 'Tú hacías yoga', en: 'You used to do yoga'},
                {es: 'Ella hacía preguntas', en: 'She used to ask questions'},
                {es: 'Nosotros hacíamos fiestas', en: 'We used to throw parties'},
                {es: 'Vosotros hacíais planes', en: 'You all used to make plans'},
                {es: 'Ellos hacían mucho', en: 'They used to do a lot'}
            ],
            future: [
                {es: 'Yo haré la tarea', en: 'I will do the homework'},
                {es: 'Tú harás ejercicio', en: 'You will exercise'},
                {es: 'Ella hará café', en: 'She will make coffee'},
                {es: 'Nosotros haremos planes', en: 'We will make plans'},
                {es: 'Vosotros haréis lo mejor', en: 'You all will do your best'},
                {es: 'Ellos harán una fiesta', en: 'They will throw a party'}
            ]
        }
    },
    {
        infinitive: 'ir',
        translation: 'to go',
        type: 'irregular',
        present: ['voy', 'vas', 'va', 'vamos', 'vais', 'van'],
        preterite: ['fui', 'fuiste', 'fue', 'fuimos', 'fuisteis', 'fueron'],
        imperfect: ['iba', 'ibas', 'iba', 'íbamos', 'ibais', 'iban'],
        future: ['iré', 'irás', 'irá', 'iremos', 'iréis', 'irán'],
        examples: {
            present: [
                {es: 'Yo voy al cine', en: 'I go to the cinema'},
                {es: 'Tú vas a casa', en: 'You go home'},
                {es: 'Él va al trabajo', en: 'He goes to work'},
                {es: 'Nosotros vamos al parque', en: 'We go to the park'},
                {es: 'Vosotros vais al mall', en: 'You all go to the mall'},
                {es: 'Ellos van a la playa', en: 'They go to the beach'}
            ],
            preterite: [
                {es: 'Yo fui al médico', en: 'I went to the doctor'},
                {es: 'Tú fuiste ayer', en: 'You went yesterday'},
                {es: 'Ella fue sola', en: 'She went alone'},
                {es: 'Nosotros fuimos juntos', en: 'We went together'},
                {es: 'Vosotros fuisteis tarde', en: 'You all went late'},
                {es: 'Ellos fueron temprano', en: 'They went early'}
            ],
            imperfect: [
                {es: 'Yo iba al colegio', en: 'I used to go to school'},
                {es: 'Tú ibas siempre', en: 'You used to go always'},
                {es: 'Él iba solo', en: 'He used to go alone'},
                {es: 'Nosotros íbamos mucho', en: 'We used to go often'},
                {es: 'Vosotros ibais poco', en: 'You all used to go little'},
                {es: 'Ellos iban a menudo', en: 'They used to go frequently'}
            ],
            future: [
                {es: 'Yo iré al cine', en: 'I will go to the cinema'},
                {es: 'Tú irás mañana', en: 'You will go tomorrow'},
                {es: 'Ella irá sola', en: 'She will go alone'},
                {es: 'Nosotros iremos juntos', en: 'We will go together'},
                {es: 'Vosotros iréis tarde', en: 'You all will go late'},
                {es: 'Ellos irán temprano', en: 'They will go early'}
            ]
        }
    }
];

// Verb type icons and labels
const verbTypes = {
    regular: { icon: '✓', label: 'Regular', color: '#27ae60' },
    irregular: { icon: '⚠', label: 'Irregular', color: '#e74c3c' },
    boot: { icon: '🡢', label: 'Boot/Stem-changing', color: '#f39c12' },
    reflexive: { icon: '↻', label: 'Reflexive', color: '#9b59b6' }
};
// Text-to-speech setup
let speech = null;
if ('speechSynthesis' in window) {
    speech = window.speechSynthesis;
}

function speak(text) {
    if (!speech) {
        console.log('Text-to-speech not supported in this browser');
        return;
    }
    
    // Cancel any ongoing speech
    speech.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'es-ES'; // Spanish (Spain) - you can also use 'es-MX' for Mexican Spanish
    utterance.rate = 0.9; // Slightly slower for learning
    
    speech.speak(utterance);
}

// Speech recognition setup
let recognition = null;
if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    recognition = new SpeechRecognition();
    recognition.lang = 'es-ES';
    recognition.continuous = false;
    recognition.interimResults = false;
}

// Levenshtein distance for fuzzy matching
function levenshteinDistance(str1, str2) {
    const matrix = [];
    for (let i = 0; i <= str2.length; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= str1.length; j++) {
        matrix[0][j] = j;
    }
    for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
            if (str2.charAt(i - 1) === str1.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }
    return matrix[str2.length][str1.length];
}

// Calculate similarity percentage
function calculateSimilarity(str1, str2) {
    const distance = levenshteinDistance(str1.toLowerCase(), str2.toLowerCase());
    const maxLength = Math.max(str1.length, str2.length);
    return maxLength === 0 ? 100 : ((maxLength - distance) / maxLength) * 100;
}

// Normalize Spanish text for comparison
function normalizeSpanish(text) {
    return text.toLowerCase()
        .replace(/[áàäâ]/g, 'a')
        .replace(/[éèëê]/g, 'e')
        .replace(/[íìïî]/g, 'i')
        .replace(/[óòöô]/g, 'o')
        .replace(/[úùüû]/g, 'u')
        .replace(/ñ/g, 'n')
        .replace(/[¿?¡!,.'"]/g, '')
        .trim();
}

// Score user's speech
function scoreRecording(userText, targetText) {
    const normalizedUser = normalizeSpanish(userText);
    const normalizedTarget = normalizeSpanish(targetText);
    
    // Overall similarity
    const overallScore = calculateSimilarity(normalizedUser, normalizedTarget);
    
    // Word-by-word comparison
    const userWords = normalizedUser.split(/\s+/);
    const targetWords = normalizedTarget.split(/\s+/);
    
    const wordMatches = [];
    targetWords.forEach((targetWord, i) => {
        let bestMatch = { word: targetWord, score: 0, userWord: '' };
        
        // Find best matching word from user input
        userWords.forEach(userWord => {
            const score = calculateSimilarity(userWord, targetWord);
            if (score > bestMatch.score) {
                bestMatch = { word: targetWord, score, userWord };
            }
        });
        
        wordMatches.push(bestMatch);
    });
    
    return {
        score: Math.round(overallScore),
        wordMatches,
        userText,
        targetText
    };
}

// Start recording
function startRecording(targetText, buttonElement, resultContainer) {
    if (!recognition) {
        alert('Speech recognition is not supported in your browser. Please use Chrome or Edge.');
        return;
    }
    
    buttonElement.disabled = true;
    buttonElement.textContent = '🎤 Listening...';
    buttonElement.classList.add('recording');
    
    recognition.onresult = (event) => {
        const userText = event.results[0][0].transcript;
        const result = scoreRecording(userText, targetText);
        const currentVerb = verbs[currentVerbIndex].infinitive;
        displayScore(result, resultContainer, currentVerb);
        buttonElement.disabled = false;
        buttonElement.textContent = '🎤 Record';
        buttonElement.classList.remove('recording');
    };
    
    recognition.onerror = (event) => {
        console.error('Speech recognition error:', event.error);
        buttonElement.disabled = false;
        buttonElement.textContent = '🎤 Record';
        buttonElement.classList.remove('recording');
        
        if (event.error === 'no-speech') {
            alert('No speech detected. Please try again.');
        } else {
            alert('Error: ' + event.error);
        }
    };
    
    recognition.start();
}

// Display score result
function displayScore(result, container, verbName) {
    const scoreClass = result.score >= 90 ? 'excellent' : result.score >= 70 ? 'good' : result.score >= 50 ? 'fair' : 'needs-work';
    
    const wordHTML = result.wordMatches.map(match => {
        const matchClass = match.score >= 90 ? 'word-excellent' : match.score >= 70 ? 'word-good' : match.score >= 50 ? 'word-fair' : 'word-wrong';
        return `<span class="${matchClass}" title="${match.userWord} (${Math.round(match.score)}%)">${match.word}</span>`;
    }).join(' ');
    
    // Save score to verb history
    addVerbScore(verbName, result.score);
    
    container.innerHTML = `
        <div class="score-result ${scoreClass}">
            <div class="score-header">
                <span class="score-label">Your Score:</span>
                <span class="score-value">${result.score}%</span>
            </div>
            <div class="score-details">
                <div class="you-said">
                    <strong>You said:</strong> "${result.userText}"
                </div>
                <div class="target-text">
                    <strong>Target:</strong> ${wordHTML}
                </div>
                <div class="score-legend">
                    <span class="word-excellent">▪</span> Excellent (90%+)
                    <span class="word-good">▪</span> Good (70%+)
                    <span class="word-fair">▪</span> Fair (50%+)
                    <span class="word-wrong">▪</span> Needs work
                </div>
            </div>
        </div>
    `;
}
const pronouns = ['yo', 'tú', 'él/ella/usted', 'nosotros', 'vosotros', 'ellos/ellas/ustedes'];
const englishPronouns = ['I', 'you', 'he/she/it', 'we', 'you all', 'they'];

// Find the common stem for conjugations
function findStem(conjugations) {
    if (conjugations.length === 0) return '';
    
    let stem = conjugations[0];
    for (let i = 1; i < conjugations.length; i++) {
        let j = 0;
        while (j < stem.length && j < conjugations[i].length && stem[j] === conjugations[i][j]) {
            j++;
        }
        stem = stem.substring(0, j);
    }
    
    // Only use stem if it's at least 2 characters
    return stem.length >= 2 ? stem : '';
}

// Highlight the ending of a conjugation
function highlightConjugation(form, stem) {
    if (stem && form.startsWith(stem)) {
        const ending = form.substring(stem.length);
        return ending ? `${stem}<span class="ending">${ending}</span>` : form;
    }
    // If no stem, highlight last 1-2 chars as ending
    if (form.length > 1) {
        const splitPoint = Math.max(1, form.length - 2);
        return `${form.substring(0, splitPoint)}<span class="ending">${form.substring(splitPoint)}</span>`;
    }
    return form;
}

let currentVerbIndex = 0;
let currentTense = 'present';
let showExamplesByTense = {
    present: [false, false, false, false, false, false],
    preterite: [false, false, false, false, false, false],
    imperfect: [false, false, false, false, false, false],
    future: [false, false, false, false, false, false]
};

// Load verb scores from localStorage
let verbScores = {};
try {
    const saved = localStorage.getItem('spanishVerbScores');
    if (saved) {
        verbScores = JSON.parse(saved);
    }
} catch (e) {
    console.error('Error loading scores:', e);
}

// Save verb scores to localStorage
function saveScores() {
    try {
        localStorage.setItem('spanishVerbScores', JSON.stringify(verbScores));
    } catch (e) {
        console.error('Error saving scores:', e);
    }
}

// Add score for a verb
function addVerbScore(verbName, score) {
    if (!verbScores[verbName]) {
        verbScores[verbName] = [];
    }
    verbScores[verbName].push(score);
    saveScores();
    updateVerbScoreDisplay(verbName);
}

// Calculate average score for a verb
function getAverageScore(verbName) {
    if (!verbScores[verbName] || verbScores[verbName].length === 0) {
        return null;
    }
    const sum = verbScores[verbName].reduce((a, b) => a + b, 0);
    return Math.round(sum / verbScores[verbName].length);
}

// Update the verb score display
function updateVerbScoreDisplay(verbName) {
    const avg = getAverageScore(verbName);
    const scoreDisplay = document.getElementById('verb-score-display');
    
    if (!scoreDisplay) return;
    
    if (avg === null) {
        scoreDisplay.innerHTML = '<span class="no-score">No recordings yet</span>';
        return;
    }
    
    const scoreClass = avg >= 90 ? 'excellent' : avg >= 70 ? 'good' : avg >= 50 ? 'fair' : 'needs-work';
    const attempts = verbScores[verbName].length;
    
    scoreDisplay.innerHTML = `
        <div class="verb-score ${scoreClass}">
            <span class="score-label">Your Average:</span>
            <span class="score-value">${avg}%</span>
            <span class="attempts-count">(${attempts} recording${attempts !== 1 ? 's' : ''})</span>
        </div>
    `;
}

// DOM elements
const verbDisplay = document.getElementById('verb-display');
const translation = document.getElementById('translation');
const conjugationsDiv = document.getElementById('conjugations');
const nextVerbBtn = document.getElementById('nextVerb');
const tenseBtns = document.querySelectorAll('.tense-btn');

console.log('DOM Elements loaded:', {
    verbDisplay: !!verbDisplay,
    translation: !!translation,
    conjugationsDiv: !!conjugationsDiv,
    nextVerbBtn: !!nextVerbBtn,
    tenseBtnsCount: tenseBtns.length
});

// Display verb conjugations
function displayVerb(index) {
    const verb = verbs[index];
    const infinitive = verb.infinitive;
    
    // Highlight infinitive ending (-ar, -er, -ir)
    let displayedVerb = infinitive;
    if (infinitive.endsWith('ar') || infinitive.endsWith('er') || infinitive.endsWith('ir')) {
        const stem = infinitive.substring(0, infinitive.length - 2);
        const ending = infinitive.substring(infinitive.length - 2);
        displayedVerb = `${stem}<span class="infinitive-ending">${ending}</span>`;
    }
    
    // Add verb type badge
    const verbType = verbTypes[verb.type] || verbTypes.regular;
    const typeBadge = `<span class="verb-type-badge" style="background-color: ${verbType.color}" title="${verbType.label}">${verbType.icon} ${verbType.label}</span>`;
    
    verbDisplay.innerHTML = `${displayedVerb} ${typeBadge}`;
    translation.textContent = verb.translation;
    updateVerbScoreDisplay(infinitive);
    updateConjugations(verb);
}

// Update conjugations based on current tense
function updateConjugations(verb) {
    console.log('updateConjugations called - version 2.0');
    const forms = verb[currentTense];
    const examples = verb.examples[currentTense];
    const stem = findStem(forms);
    
    // Create table with header
    conjugationsDiv.innerHTML = `
        <div class="conjugation-header">
            <span>Subject</span>
            <span>Spanish</span>
            <span>Conjugation</span>
        </div>
    `;
    
    console.log('Header created, adding rows...');
    
    pronouns.forEach((pronoun, i) => {
        const item = document.createElement('div');
        item.className = 'conjugation-item';
        
        const row = document.createElement('div');
        row.className = 'conjugation-row';
        row.innerHTML = `
            <span class="pronoun-english">${englishPronouns[i]}</span>
            <span class="pronoun">${pronoun}</span>
            <span class="form">${highlightConjugation(forms[i], stem)}</span>
        `;
        
        const exampleDiv = document.createElement('div');
        exampleDiv.className = `example ${showExamplesByTense[currentTense][i] ? 'visible' : ''}`;
        
        const exampleContent = document.createElement('div');
        exampleContent.className = 'example-content';
        exampleContent.innerHTML = `
            <div class="example-buttons">
                <button class="speaker-btn" onclick="event.stopPropagation(); speak('${examples[i].es.replace(/'/g, "\\'")}')">🔊</button>
                <button class="record-btn" onclick="event.stopPropagation();">🎤 Record</button>
            </div>
            <span class="example-text">${examples[i].es} — ${examples[i].en}</span>
        `;
        
        const scoreContainer = document.createElement('div');
        scoreContainer.className = 'score-container';
        
        // Add click handler for record button
        const recordBtn = exampleContent.querySelector('.record-btn');
        const targetText = examples[i].es;
        recordBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            startRecording(targetText, recordBtn, scoreContainer);
        });
        
        exampleDiv.appendChild(exampleContent);
        exampleDiv.appendChild(scoreContainer);
        
        // Add click handler to toggle example
        const rowIndex = i;
        row.addEventListener('click', () => {
            showExamplesByTense[currentTense][rowIndex] = !showExamplesByTense[currentTense][rowIndex];
            displayVerb(currentVerbIndex);
        });
        
        item.appendChild(row);
        item.appendChild(exampleDiv);
        conjugationsDiv.appendChild(item);
    });
    
    console.log('Rows added, total children:', conjugationsDiv.children.length);
}

// Next verb button
nextVerbBtn.addEventListener('click', () => {
    currentVerbIndex = (currentVerbIndex + 1) % verbs.length;
    displayVerb(currentVerbIndex);
});

// Tense selection
tenseBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tenseBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentTense = btn.dataset.tense;
        displayVerb(currentVerbIndex);
    });
});

// Initialize
displayVerb(currentVerbIndex);
