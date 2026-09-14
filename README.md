# Unity C# Typing Practice

אפליקציית תרגול להקלדה עיוורת של קוד C# ליוניטי. מקלידים שיעור, והאפליקציה
מודדת WPM, דיוק וזמן — כדי שהקוד ייכנס לאצבעות ולא רק לעיניים.

האפליקציה היא HTML/CSS/JS סטטי בלבד. אין בנייה, אין תלויות, אין שרת.

## הפעלה

מקומית — פותחים את `index.html` בדפדפן. זהו.

מהטלפון או מכל מכשיר אחר:
**https://zionbabila.github.io/csharp-typing-practice/**

## מבנה

| קובץ | תפקיד |
|---|---|
| `index.html` | שלד הדף וטעינת חבילות השיעורים |
| `app.js` | מנוע ההקלדה: מעקב תווים, WPM, דיוק, התקדמות |
| `style.css` | עיצוב |
| `lessons-loader.js` | מאחד את כל חבילות השיעורים למערך `LESSONS` אחד |
| `lessons/` | חבילות השיעורים עצמן |

### חבילות שיעורים

| חבילה | תוכן |
|---|---|
| `lessons/api/` | API של יוניטי — Rigidbody, Raycast, Vector3, Quaternion, קורוטינות, ScriptableObject, מצלמה, אירועים, Invoke, Instantiate |
| `lessons/shell-bound/` | קטעי קוד מ-ShellBound |
| `lessons/examples/` | דוגמאות כלליות |

## הוספת חבילת שיעורים

1. צור קובץ חדש תחת `lessons/<שם>/lessons-<שם>.js` שמגדיר `const LESSONS_<שם> = [...]`.
2. הוסף לו תג `<script>` ב-`index.html`, לפני `lessons-loader.js`.
3. הוסף אותו ל-spread ב-`lessons-loader.js`.

מבנה שיעור בודד — ראה כל קובץ קיים תחת `lessons/`.

## מקור

הקוד חולץ מהענף `claude/csharp-typing-practice-unity-ayxbkq` בריפו
`zion-3slots-bot`, שם הוא פותח ומעולם לא מוזג ל-main. הריפו ההוא הוא בוט
תזכורות ולא קשור לאפליקציה הזו.

`lessons.js` שבשורש הוא שריד מהגרסה שלפני הפיצול לחבילות — הוא לא נטען
מ-`index.html` ואפשר למחוק אותו.
