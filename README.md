Html код для построения дерева файлов находится в папке SidebarCourse

В папке Main находятся компоненты страниц. В каждом компоненте может быть множество других.
Архитектура построена по принципу от большего к меньшему:
1. Открываешь страницу
2. Видишь большой компонент
3. Спускаясь ниже находишь меньший с узконаправленным функционалом

Для каждой страницы создан отдельный sidebar, так как они могут сильно отличаться друг от друга
В sidebar всегда остается изображение пользователя, его имя и возможность вернуться на стартовую страницу
Стартовая панель управления (sidebar) называется Sidebar, внутри которого компонент меню (Menu) с выбором вкладки


Нужно сделать: 
1. Определиться с тем, в каких компонентах будет производиться получение данных и их передача детям
2. Написать моковые состояний (redux-store)
3. Сделать рефакторинг