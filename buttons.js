window.button_id = 0;
window.active_old = 0;

// Замените должность и ник на свои. ВАЖНО! Должность вы должны указать в творительном падеже: КураторОМ, ЗаместителЕМ ГА, ГлавнЫМ АдминистраторОМ и тд
window.doljnost = "Куратором сервера";
window.nick = "Elya Plugg";

var button_shavar = 'value="Выбрать ответ" onclick="buttonsh_shabs()" style="margin-right: 3px;"';
var button_shabs = '<input type="button" class="button shabs" ' + button_shavar + '>';
$('.button--icon--reply').after(button_shabs);

function buttonsh_shabs() {
    let shabsContent = `<div id="shabscontent"></div>`;
    XF.alert(shabsContent, "Выбрать ответ");
    addbtnscript();
}

function buttonsh_add(title, text) {
    var e = document.getElementById("js-XFUniqueId1");
    if (e) {
        var user = e.textContent;
        var userid = e.getAttribute("data-user-id");

        var h = new Date().getHours();
        var bstyle = 'margin-top: 3px;margin-left: 3px;';
        var button_addv = `value="${title}" id="shabs_${window.button_id}" style="${bstyle}"`;
        var button_add = `<input type="button" class="button shabs_button" ${button_addv}>`;

        $('#shabscontent').append(button_add);

        $(`input#shabs_${window.button_id}.shabs_button`).click(() => {
            let text_rw = text.replace(/\{times_of_day\}/g,
                h >= 4 && h <= 11 ? "Доброе утро" :
                h > 11 && h <= 15 ? "Добрый день" :
                h > 15 && h <= 21 ? "Добрый вечер" : "Доброй ночи"
            );
            text_rw = text_rw.replace(/\{user\}/g, '[USER=' + userid + ']@' + user + '[/USER]');
            text_rw = text_rw.replace(/\{doljnost\}/g, window.doljnost);
            text_rw = text_rw.replace(/\{nick\}/g, window.nick);

            $('div.fr-element.fr-view').append(text_rw);
            $('span.fr-placeholder').empty();
            $('div.overlay-container').remove();
            $('body').attr('class', '');
            $("a.overlay-titleCloser").trigger('click');
        });
        window.button_id++;
    }
}
function addbtnscript() {
buttonsh_add('[--------------------------------------------[Жалобы на администрацию.]--------------------------------------------]', '  []]');
buttonsh_add('[Жалобы на администрацию] - Передать жалобу (основному администратору)', '[CENTER][FONT=Courier New][B][SIZE=15px]{times_of_day}, {user}!<br>Я являюсь [/SIZE][COLOR=rgb(26, 188, 156)][SIZE=15px]Должность[/SIZE][/COLOR][SIZE=15px] - [/SIZE][COLOR=rgb(26, 188, 156)][SIZE=15px]Nick_Name[/SIZE][/COLOR][SIZE=15px].[/SIZE]<br>[SIZE=15px]Передал жалобу [COLOR=rgb(26, 188, 156)]администратору[/COLOR].[/SIZE][/B][/FONT]<br>[SIZE=15px][FONT=Courier New][B]Ожидайте ответ в течении [COLOR=rgb(251, 160, 38)]24-х[/COLOR] часов.[/B][/FONT][/SIZE][/CENTER]');
buttonsh_add('[Жалобы на администрацию] - Передать жалобу (покупному администратору)', '[CENTER][FONT=Courier New][B][SIZE=15px]{times_of_day}, {user}!<br>Я являюсь [/SIZE][COLOR=rgb(26, 188, 156)][SIZE=15px]Должность[/SIZE][/COLOR][SIZE=15px] - [/SIZE][COLOR=rgb(26, 188, 156)][SIZE=15px]Nick_Name[/SIZE][/COLOR][SIZE=15px].[/SIZE]<br>[SIZE=15px]Передал жалобу  [COLOR=rgb(26, 188, 156)]покупному администратору[/COLOR].[/SIZE][/B][/FONT]<br>[SIZE=15px][FONT=Courier New][B]Ожидайте ответ в течении [COLOR=rgb(251, 160, 38)]12-И[/COLOR] часов.[/B][/FONT][/SIZE][/CENTER]');
buttonsh_add('[Жалобы на администрацию] - Администратор будет наказан, сниму наказание', '[CENTER][FONT=Courier New][B][SIZE=15px]{times_of_day}, {user}!<br>Я являюсь [COLOR=rgb(26, 188, 156)]Должность[/COLOR] - [COLOR=rgb(26, 188, 156)]Nick_Name[/COLOR].<br>Выношу вердикт по данной [COLOR=rgb(26, 188, 156)]жалобе[/COLOR]:<br>Администратор будет [COLOR=rgb(26, 188, 156)]наказан[/COLOR], наказание вам [COLOR=rgb(26, 188, 156)]сниму[/COLOR].<br>[COLOR=rgb(209, 72, 65)]Закрыто.[/SIZE][/COLOR][/B][/FONT][/CENTER]');
buttonsh_add('[Жалобы на администрацию] - Администратор будет снят', '[CENTER][FONT=Courier New][B][SIZE=15px]{times_of_day}, {user}!<br>Я являюсь [/SIZE][COLOR=rgb(26, 188, 156)][SIZE=15px]Должность[/SIZE][/COLOR][SIZE=15px] - [/SIZE][COLOR=rgb(26, 188, 156)][SIZE=15px]Nick_Name[/SIZE][/COLOR][SIZE=15px].[/SIZE]<br>[SIZE=15px]Выношу вердикт по данной [/SIZE][COLOR=rgb(26, 188, 156)][SIZE=15px]жалобе[/SIZE][/COLOR][SIZE=15px]:[/SIZE]<br>[SIZE=15px]Администратор будет [/SIZE][COLOR=rgb(26, 188, 156)][SIZE=15px]снят со своего поста[/SIZE][COLOR=rgb(255, 255, 255)][SIZE=15px].[/SIZE][/COLOR][/COLOR]<br>[COLOR=rgb(209, 72, 65)][SIZE=15px]Закрыто.[/SIZE][/COLOR][/B][/FONT][/CENTER]');
buttonsh_add('[Жалобы на администрацию] - Наказание выдано верно', '[CENTER][FONT=Courier New][B][SIZE=15px]{times_of_day}, {user}!<br>Я являюсь [/SIZE][COLOR=rgb(26, 188, 156)][SIZE=15px]Должность[/SIZE][/COLOR][SIZE=15px] - [/SIZE][COLOR=rgb(26, 188, 156)][SIZE=15px]Nick_Name[/SIZE][/COLOR][SIZE=15px].[/SIZE]<br>[SIZE=15px]Выношу вердикт по данной [/SIZE][COLOR=rgb(26, 188, 156)][SIZE=15px]жалобе[/SIZE][/COLOR][SIZE=15px]:[/SIZE]<br>[SIZE=15px]Наказание выдано [/SIZE][COLOR=rgb(26, 188, 156)][SIZE=15px]верно[/SIZE][COLOR=rgb(255, 255, 255)][SIZE=15px],[/SIZE][/COLOR][/COLOR]<br>[COLOR=rgb(26, 188, 156)][COLOR=rgb(255, 255, 255)][SIZE=15px]Не заметил нарушений со стороны [/SIZE][COLOR=rgb(26, 188, 156)][SIZE=15px]администратора[/SIZE][/COLOR][SIZE=15px].[/SIZE][/COLOR][/COLOR]<br>[COLOR=rgb(209, 72, 65)]Закрыто.[/COLOR][/B][/FONT][/CENTER]')
buttonsh_add('[Жалобы на администрацию] - Не заметил нарушений', '[CENTER][FONT=Courier New][B][SIZE=15px]{times_of_day}, {user}!<br>Я являюсь [/SIZE][COLOR=rgb(26, 188, 156)][SIZE=15px]Должность[/SIZE][/COLOR][SIZE=15px] - [/SIZE][COLOR=rgb(26, 188, 156)][SIZE=15px]Nick_Name[/SIZE][/COLOR][SIZE=15px].[/SIZE]<br>[SIZE=15px]Выношу вердикт по данной [/SIZE][COLOR=rgb(26, 188, 156)][SIZE=15px]жалобе[/SIZE][/COLOR][SIZE=15px]:[/SIZE]<br>[SIZE=15px]Не заметил нарушений от [/SIZE][COLOR=rgb(26, 188, 156)][SIZE=15px]администратора[/SIZE][COLOR=rgb(255, 255, 255)][SIZE=15px].[/SIZE][/COLOR][/COLOR]<br>[COLOR=rgb(209, 72, 65)]Закрыто.[/COLOR]');
buttonsh_add('[Жалобы на администрацию] - Администратор уже снят, сниму наказание.', '[CENTER][FONT=Courier New][B][SIZE=15px]{times_of_day}, {user}!<br>Я являюсь [/FONT][COLOR=rgb(26, 188, 156)][FONT=courier new]Должность[/FONT][/COLOR][FONT=courier new] - [/FONT][COLOR=rgb(26, 188, 156)][FONT=courier new]Nick_Name[/FONT][/COLOR][FONT=courier new].[/FONT]<br>[FONT=courier new]Выношу вердикт по данной [/FONT][COLOR=rgb(26, 188, 156)][FONT=courier new]жалобе[/FONT][/COLOR][FONT=courier new]:[/FONT]<br>[FONT=courier new]Администратор уже [/FONT][COLOR=rgb(26, 188, 156)][FONT=courier new]снят[/FONT][/COLOR][FONT=courier new], аннулирую вам [/FONT][COLOR=rgb(26, 188, 156)][FONT=courier new]наказание[/FONT][/COLOR][FONT=courier new].[/FONT][/B][/SIZE]<br>[FONT=courier new][B][COLOR=rgb(209, 72, 65)][SIZE=4]Закрыто[/SIZE][/COLOR][SIZE=4].[/SIZE][/B][/FONT][/CENTER]');
buttonsh_add('[Жалобы на администрацию] - Ответ от адм выше.', '[CENTER][B][SIZE=15px][FONT=Courier New]{times_of_day}, {user}!<br>Я являюсь [COLOR=rgb(26, 188, 156)]Должность[/COLOR] - [COLOR=rgb(26, 188, 156)]Nick Name[/COLOR].[/FONT][/SIZE][/B]<br>[SIZE=15px][FONT=Courier New][B]Выношу вердикт по данной [/B][/FONT][COLOR=rgb(26, 188, 156)][FONT=Courier New][B]жалобе[/B][/FONT][/COLOR][FONT=Courier New][B]:<br>Ответ от [/B][/FONT][COLOR=rgb(26, 188, 156)][FONT=Courier New][B]администратора выше[/B][/FONT][/COLOR][FONT=Courier New][B].<br>[/B][/FONT][/SIZE][B][SIZE=15px][FONT=Courier New][COLOR=rgb(209, 72, 65)]Закрыто[/COLOR].[/FONT][/SIZE][/B][/CENTER]');
buttonsh_add('[Жалобы на администрацию] - Ответ был дан в прошлой жб.', '[CENTER][B][SIZE=15px][FONT=Courier New]{times_of_day}, {user}!<br>Я являюсь [COLOR=rgb(26, 188, 156)]Должность[/COLOR] - [COLOR=rgb(26, 188, 156)]Nick Name[/COLOR].[/FONT][/SIZE][/B]<br>[SIZE=15px][FONT=Courier New][B]Выношу вердикт по данной [/B][/FONT][COLOR=rgb(26, 188, 156)][FONT=Courier New][B]жалобе[/B][/FONT][/COLOR][FONT=Courier New][B]:<br>Ответ был дан в [/B][/FONT][COLOR=rgb(26, 188, 156)][FONT=Courier New][B]прошлой жалобе[/B][/FONT][/COLOR][FONT=Courier New][B].<br>[/B][/FONT][/SIZE][B][SIZE=15px][FONT=Courier New][COLOR=rgb(209, 72, 65)]Закрыто[/COLOR].[/FONT][/SIZE][/B][/CENTER]');
buttonsh_add('[Жалобы на администрацию] - Жалоба на вас.', '[CENTER][FONT=Courier New][B][IMG]https://i.imgur.com/J106bwn.png[/IMG]<br>{times_of_day}, {user}!<br>[B][SIZE=15px]Я являюсь [COLOR=rgb(217, 102, 235)]Должность[/COLOR] - [COLOR=rgb(217, 102, 235)]Nick Name.[/COLOR][/SIZE][/B]<br>[SIZE=15px][B][B]Вы получили наказание за []<br>[COLOR=rgb(217, 102, 235)]Доказательства вашего нарушения[/COLOR]:<br><br>[COLOR=rgb(217, 102, 235)]Давайте разберемся в ситуации[/COLOR]: <br><br>[IMG]https://i.imgur.com/RiUPZqT.png[/IMG]<br>[COLOR=rgb(217, 102, 235)]В случае необходимости прокомментировать доказательства, вы можете сделать это одним сообщением без флуда в теме.[/COLOR][/B]<br>[COLOR=rgb(217, 102, 235)][B]Убедительная просьба - ожидайте ответ от старшей администрации.[/B][/COLOR][/B][/SIZE][/FONT][B][FONT=Courier New][B][SIZE=15px] [/SIZE][/B][/FONT][/B][/CENTER]');
buttonsh_add('[--------------------------------------------[Жалобы на игроков]--------------------------------------------]', '  []]');
buttonsh_add('[Жалобы на игроков] - Недостаточно доказательств. ', '[CENTER][B][FONT=Courier New][SIZE=15px]{times_of_day}, {user}!<br>Я являюсь [COLOR=rgb(26, 188, 156)]Должность[/COLOR] - [COLOR=rgb(26, 188, 156)]Nick_Name[/COLOR].[/FONT][/SIZE][/B]<br>[SIZE=15px][FONT=Courier New][B]Выношу вердикт по данной [/B][/FONT][COLOR=rgb(26, 188, 156)][FONT=Courier New][B]жалобе[/B][/FONT][/COLOR][FONT=Courier New][B]:<br>Недостаточно [/B][/FONT][COLOR=rgb(26, 188, 156)][FONT=Courier New][B]доказательств[/B][/FONT][/COLOR][FONT=Courier New][B].[/B][/FONT][/SIZE]<br>[B][SIZE=15px][FONT=Courier New][COLOR=rgb(209, 72, 65)]Закрыто[/COLOR].[/FONT][/SIZE][/B][/CENTER]');
buttonsh_add('[Жалобы на игроков] - Одобрено ', '[CENTER][B][FONT=Courier New][SIZE=15px]{times_of_day}, {user}!<br>Я являюсь [COLOR=rgb(26, 188, 156)]Должность[/COLOR] - [COLOR=rgb(26, 188, 156)]Nick_Name[/COLOR].[/SIZE][/FONT][/B]<br>[SIZE=15px][FONT=Courier New][B]Выношу вердикт по данной [/B][/FONT][COLOR=rgb(26, 188, 156)][FONT=Courier New][B]жалобе[/B][/FONT][/COLOR][FONT=Courier New][B]:<br>Игрок [/B][/FONT][COLOR=rgb(26, 188, 156)][FONT=Courier New][B]Nick_Name[/B][/FONT][/COLOR][FONT=Courier New][B] получит [/B][/FONT][COLOR=rgb(26, 188, 156)][FONT=Courier New][B]/наказание[/B][/FONT][/COLOR][FONT=Courier New][B] на [/B][/FONT][COLOR=rgb(26, 188, 156)][FONT=Courier New][B]N[/B][/FONT][/COLOR][FONT=Courier New][B] [/B][/FONT][COLOR=rgb(26, 188, 156)][FONT=Courier New][B]минут[/B][/FONT][/COLOR][FONT=Courier New][B]/[/B][/FONT][COLOR=rgb(26, 188, 156)][FONT=Courier New][B]дней[/B][/FONT][/COLOR][FONT=Courier New][B] за [/B][/FONT][COLOR=rgb(26, 188, 156)][FONT=Courier New][B]нарушение[/B][/FONT][/COLOR][FONT=Courier New][B].[/B][/FONT][/SIZE]<br>[B][SIZE=15px][FONT=Courier New][COLOR=rgb(209, 72, 65)]Закрыто[/COLOR].[/FONT][/SIZE][/B][/CENTER]');
buttonsh_add('[--------------------------------------------[Блокировка ФА]--------------------------------------------]', '  []]');
buttonsh_add('[Прочее] - Заблокировать ФА  ', '[CENTER][B][FONT=Courier New][SIZE=15px]{times_of_day}, {user}!<br>Я являюсь [COLOR=rgb(26, 188, 156)]Должность[/COLOR] - [COLOR=rgb(26, 188, 156)]Nick_Name[/COLOR].[/SIZE][/FONT][/B]<br>[SIZE=15px][FONT=Courier New][B]Ваш [/B][/FONT][COLOR=rgb(26, 188, 156)][FONT=Courier New][B]ФА[/B][/FONT][/COLOR][FONT=Courier New][B] будет [/B][/FONT][COLOR=rgb(26, 188, 156)][FONT=Courier New][B]заблокирован[/B][/FONT][/COLOR][FONT=Courier New][B] за [/B][/FONT][COLOR=rgb(26, 188, 156)][FONT=Courier New][B]причина[/B][/FONT][/COLOR][FONT=Courier New][B].[/B][/FONT][/SIZE]<br>[B][SIZE=15px][FONT=Courier New][COLOR=rgb(209, 72, 65)]Закрыто[/COLOR].[/FONT][/SIZE][/B][/CENTER]');
}
