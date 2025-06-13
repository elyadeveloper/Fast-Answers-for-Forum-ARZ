# GUIDE

# Гайд для русскоязычных пользователей.
1. Скачиваем расширение "User JavaScript and CSS"(поддерживается только браузерах на базе Chromium)
2. В настройках расширения нажимаем на кнопку "Добавить новое правило"
3. Сверху в первой колонке вводим название(по желанию), а во второй домен форума, либо прямую ссылку на определенную тему/раздел
4. Во вкладке JavaScript вставляем код, сурс ниже.

Создание кастомных кнопок(Creating custom buttons):

Добавляем в массив buttons вот такую конструкцию:
{
title: "НАЗВАНИЕ",
content: "ТЕКСТ",
},

Меняете название/текст так как вам необходимо.
{{ user.mention }} - Упомянуть пользователя
{{ user.name }} - Никнейм пользователя
{{ user.id }} - ID пользователя

# A guide for English-speaking users.
1. Download the "User JavaScript and CSS" extension (supported only in Chromium-based browsers)
2. In the extension settings, click on the "Add new rule" button
3. At the top, in the first column, enter the name (optional), and in the second, the forum domain, or a direct link to a specific topic / section.
4. In the JavaScript tab, insert the code provided below.

Creating custom buttons:

Adding the following structure to the buttons array:
{
title: "TITLE",
content: "TEXT",
},

Change the title/text as needed.
{{user.mention }} - Mention the user
{{ user.name }} - User's nickname
{{ user.id }} - User ID
