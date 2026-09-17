// lessons/player-detect/lessons-player-detect.js
// PlayerDetect — תרגולים שנבנו מהשגיאות החוזרות ב-practice/code_memory.txt
// (שבעה נסיונות מהזיכרון, 5/12/2025 – 11/12/2025, בריפו claude-hub).
//
// כל שיעור כאן מכוון לשגיאה אחת שחזרה על עצמה שוב ושוב.
// ids מתחילים ב-201 כדי לא להתנגש ב-api (1-20) וב-shell-bound (101+).

const LESSONS_PLAYER_DETECT = [

    {
        id: 201,
        category: "PlayerDetect",
        title: "PlayerDetect — הגרסה הנכונה",
        description: "הסקריפט המלא כמו שהוא צריך להיראות. זה היעד — כל שאר השיעורים בחבילה מפרקים אותו לשגיאות שחזרו.",
        difficulty: 2,
        type: "example",
        code: `using UnityEngine;

public class PlayerDetect : MonoBehaviour
{
    public int countApple = 0;

    public GameObject tree;
    public GameObject player;
    public Transform startPoint;

    public AudioSource collectSound;
    public AudioSource trophySound;

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (collision.CompareTag("apple"))
        {
            collision.gameObject.SetActive(false);
            collectSound.Play();
            countApple += 1;
        }

        if (collision.CompareTag("trophy"))
        {
            collision.gameObject.SetActive(false);
            trophySound.Play();
            countApple += 5;
        }

        if (countApple >= 8)
        {
            tree.transform.position = startPoint.position;
        }

        if (collision.CompareTag("bush"))
        {
            player.transform.position = startPoint.position;
        }
    }
}`
    },

    {
        id: 202,
        category: "PlayerDetect",
        title: "טיפוסים מתחילים באות גדולה",
        description: "בכל נסיון כתבת gameObject, transform, collider2d, vector3 באות קטנה. השם של הטיפוס והשם של השדה נראים דומה — אבל רק אחד מהם מתקמפל.",
        difficulty: 1,
        type: "api",
        code: `using UnityEngine;

// כלל: שם טיפוס = PascalCase. שם משתנה או property = camelCase.
public class TypeCasing : MonoBehaviour
{
    // הטיפוס באות גדולה
    public GameObject tree;
    public Transform startPoint;
    public Rigidbody2D body;
    public AudioSource collectSound;

    private void OnTriggerEnter2D(Collider2D collision)
    {
        // .gameObject ו-.transform הם properties — אלה באות קטנה
        collision.gameObject.SetActive(false);
        collision.transform.position = startPoint.position;

        // Vector3 הוא טיפוס — באות גדולה, ועם new
        tree.transform.position = new Vector3(20, 1, 0);
    }
}`
    },

    {
        id: 203,
        category: "PlayerDetect",
        title: "AudioSource ו-Play — האיות והאות הגדולה",
        description: "כתבת AudioSorce, AudioSurce ו-AudioSourc. שים לב ל-source: s-o-u-r-c-e. ו-Play עם P גדולה — .play() לא קיים.",
        difficulty: 1,
        type: "api",
        code: `using UnityEngine;

public class SoundDrill : MonoBehaviour
{
    // A-u-d-i-o-S-o-u-r-c-e
    public AudioSource collectSound;
    public AudioSource trophySound;
    public AudioSource jumpSound;

    private void PlayThem()
    {
        // Play — P גדולה. ב-C# כל שם שיטה ציבורית מתחיל באות גדולה.
        collectSound.Play();
        trophySound.Play();
        jumpSound.Play();

        collectSound.Stop();
        collectSound.Pause();

        collectSound.volume = 0.5f;
        collectSound.loop = false;
        collectSound.PlayOneShot(collectSound.clip);
    }
}`
    },

    {
        id: 204,
        category: "PlayerDetect",
        title: "MonoBehaviour — ו-U שנשכחת",
        description: "חמש פעמים כתבת MonoBehavior או MonoBehvior. הסיומת היא behaviour בכתיב בריטי: o-u-r. ועוד משהו — אין נקודה-פסיק אחרי שורת המחלקה.",
        difficulty: 1,
        type: "api",
        code: `using UnityEngine;

// M-o-n-o-B-e-h-a-v-i-o-u-r
// אחרי שורת המחלקה בא { ישר — בלי ; לפניו
public class PlayerDetect : MonoBehaviour
{
    private void Start()
    {
        // גם כאן אין ; אחרי ) של הכותרת, רק אחרי הוראה
        Debug.Log("ready");
    }
}

public class EnemyPatrol : MonoBehaviour
{
    private void Update()
    {
        transform.Translate(Vector3.right * Time.deltaTime);
    }
}

public class CameraFollow : MonoBehaviour
{
    private void LateUpdate()
    {
    }
}`
    },

    {
        id: 205,
        category: "PlayerDetect",
        title: "OnTriggerEnter2D — החתימה המדויקת",
        description: "כתבת OnTriggerEnter2d עם d קטנה, ופעם אחת OnTriggerEnterTag שלא קיים בכלל. גם privat בלי e. אם החתימה לא מדויקת — Unity פשוט לא קוראת לשיטה, בלי שגיאה.",
        difficulty: 2,
        type: "api",
        code: `using UnityEngine;

public class TriggerSignatures : MonoBehaviour
{
    // private — עם e בסוף. 2D — שתי האותיות גדולות.
    private void OnTriggerEnter2D(Collider2D collision)
    {
        Debug.Log("entered");
    }

    private void OnTriggerStay2D(Collider2D collision)
    {
    }

    private void OnTriggerExit2D(Collider2D collision)
    {
    }

    // התנגשות עם פיזיקה — Collision2D, לא Collider2D
    private void OnCollisionEnter2D(Collision2D collision)
    {
    }

    // גרסת התלת-ממד — בלי 2D בכלל, ועם Collider
    private void OnTriggerEnter(Collider other)
    {
    }
}`
    },

    {
        id: 206,
        category: "PlayerDetect",
        title: "קידום מונה — בלי לערבב שתי צורות",
        description: "כתבת countApple = countApple += 1. זו השמה כפולה: += כבר עושה את ההשמה בעצמו. בחר צורה אחת.",
        difficulty: 2,
        type: "api",
        code: `using UnityEngine;

public class CounterDrill : MonoBehaviour
{
    public int countApple = 0;

    private void Collect()
    {
        // הצורה המלאה
        countApple = countApple + 1;

        // הצורה המקוצרת — אותה משמעות בדיוק
        countApple += 1;

        // לקידום באחד אפשר גם
        countApple++;

        // בחמש
        countApple += 5;

        // countApple = countApple += 1;  <- לא לכתוב. השמה בתוך השמה.
    }

    private void Check()
    {
        // >= כולל את 8 עצמו. > מתחיל מ-9.
        if (countApple >= 8)
        {
            Debug.Log("done");
        }
    }
}`
    },

    {
        id: 207,
        category: "PlayerDetect",
        title: "שדות עקביים וסוגריים סגורים",
        description: "בכל נסיון קראת לאותו שדה בשם אחר — startPoint, startObject, StartPosition — והשתמשת ב-player בלי להצהיר עליו. בנסיון של 11/12 גם נשאר בלוק if לא סגור.",
        difficulty: 3,
        type: "example",
        code: `using UnityEngine;

public class FieldsAndBraces : MonoBehaviour
{
    public int countApple = 0;

    // כל מה שהקוד מזכיר חייב להיות מוצהר כאן למעלה
    public GameObject tree;
    public GameObject player;
    public Transform startPoint;

    private void OnTriggerEnter2D(Collider2D collision)
    {
        if (countApple >= 8)
        {
            // אותו שם בדיוק כמו בהצהרה — startPoint
            tree.transform.position = startPoint.position;
        }

        if (collision.CompareTag("bush"))
        {
            player.transform.position = startPoint.position;
        }
    }
}`
    },

];
