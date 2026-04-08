# Spanish Verbs - Mobile Practice App

A mobile-first web application for practicing Spanish verb conjugations.

## Features

- 📱 Mobile-optimized interface
- 🇪🇸 8 Common Spanish verbs with conjugations (regular & irregular)
- ⏱️ Multiple tenses (Present, Future, Preterite, Imperfect)
- 🎨 Clean, modern design with highlighted verb endings
- 🔊 Native Spanish pronunciation for examples
- 💡 Click-to-reveal example sentences with translations
- ⚡ No build tools required - pure HTML/CSS/JavaScript

## Getting Started

### Option 1: Open Directly
Open `index.html` in a web browser

### Option 2: Use a Local Server
```bash
# Using Python
python -m http.server 8000

# Using Node.js (if installed)
npx serve
```

Then visit `http://localhost:8000/index.html`

## How to Use

1. Open `index.html`
2. Select a tense (Present, Preterite, Imperfect, or Future)
3. Click on any conjugation row to show/hide the example sentence
4. Click the 🔊 speaker icon to hear native Spanish pronunciation
5. Click "Next Verb" to practice with a different verb

**Perfect for**:
- Learning common Spanish verbs
- Practicing different tenses
- Building conversation skills
- Contextual learning

**How it works**:
- Select a topic relevant to your learning goals
- Practice verb conjugations with example sentences
- Click on pronouns to show/hide examples
- Listen to native pronunciation

## Verbs Included

The app currently includes 8 common Spanish verbs:
- **hablar** (to speak) - Regular
- **comer** (to eat) - Regular
- **vivir** (to live) - Regular
- **ser** (to be) - Irregular
- **estar** (to be) - Irregular
- **tener** (to have) - Irregular
- **hacer** (to do/make) - Irregular
- **ir** (to go) - Irregular

## Adding More Verbs

Edit `app.js` and add new verb objects to the `verbs` array:

```javascript
{
    infinitive: 'verb',
    translation: 'translation',
    type: 'regular', // or 'irregular', 'boot', 'reflexive'
    present: ['yo', 'tú', 'él/ella', 'nosotros', 'vosotros', 'ellos'],
    preterite: ['forms...'],
    imperfect: ['forms...'],
    future: ['forms...'],
    examples: {
        present: [{es: '...', en: '...'}, ...],
        // ... other tenses
    }
}
```

## Future Enhancements

- [ ] More verbs and verb types
- [ ] Topic-specific example sentences
- [ ] Quiz mode with practice exercises
- [ ] Progress tracking and statistics
- [ ] More tenses (conditional, subjunctive)
- [ ] Flashcard mode
- [ ] Verb search and filtering

## License

Free to use and modify!
