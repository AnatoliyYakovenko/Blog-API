Завдання.

Розробити додаток – блог користувачів.

Я, як користувач хочу мати додаток, у якому зможу слідкувати за постами моїх “віртуальних” друзів. Я хочу мати наступні можливості:

1. Бачити список усіх користувачів;

2. Перейшовши на користувача зі списку хочу бачити список його постів з заголовком і коротким текстом;

3. При переході на пост користувача я хочу бачити заголовок, текст поста та коментарі, якщо такі присутні.

Сценарій 1. Користувачі присутні

Дано: я на головній сторінці

Коли: завантажився список користувачів

Тоді: відобразити список користувачів, де імʼя має бути посиланням на пости обраного користувача

Сценарій 2. Користувачі відсутні

Дано: я на головній сторінці

Коли: список користувачів не завантажився

Тоді: відобразити повідомлення “Користувачі незнайдені”

Сценарій 3. У користувача є пости

Дано: я на сторінці постів користувача

Коли: завантажився список постів

Тоді: відобразити список постів, де заголовок має бути посиланням на пост, під заголовком має бути короткий опис поста

Сценарій 4. У користувача відсутні пости

Дано: я на сторінці постів користувача

Коли: список постів не завантажився

Тоді: відобразити повідомлення “У даного користувача відсутні пости”

Та: відобразити посилання “Назад” під повідомленням, яке має вести до списку всіх користувачів

Сценарій 5. Сторінка посту

Дано: я на сторінці окремого посту користувача

Коли: завантажився пост

Тоді: відобразити пост користувача з заголовком і основним текстом

Та: відобразити посилання “Назад” під постом, яке має вести до списку всіх постів обраного користувача

Сценарій 5. Сторінка посту “коментарі”

Дано: я на сторінці окремого посту користувача

Коли: завантажився пост

Та: завантажились коментарі до посту

Тоді: додати під пост заголовок “Коментарі”

Та: відобразити список коментарів під заголовком. Коментар має мати імʼя користувача та текст

Сценарій 5. Сторінка посту “коментарі” відсутні

Дано: я на сторінці окремого посту користувача

Коли: завантажився пост

Та: коментарі до посту не завантажились

Тоді: додати під пост заголовок “Коментарі”

Та: відобразити текст “Коментарі відсутні”

Додаткові деталі

Використовувати API https://gorest.co.in/

Додаток повинен мати оформлення. Ви можете обрати будь-який дизайн, наприклад, знайшовши безкоштовний шаблон у figma, або створити його самому, використовуючи готові бібліотеки css елементів такі як bootstrap або tailwind.
