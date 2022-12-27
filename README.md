**Read in [Egnlish](README.en.md).**

# Картки твітів персонажів із трилогії 'Бетмен. Темний Лицар'

Цей проєкт було створено на базі
[React-шаблону](https://github.com/facebook/create-react-app). Там же можна
ознайомитись із командами для встановлення/запуску цього проєкту.

## Вихідні дані

1. Технічне завдання -
   [за посиланням](https://bootcampitgeneration.slack.com/files/U0418LD7WBW/F04GDAKGHHQ/________________________________goit__1_.pdf)
2. Дизайн проєкту представлено в
   [Figma](https://www.figma.com/file/zun1oP6NmS2Lmgbcj6e1IG/Test?node-id=0%3A1&t=MdaCSZsMd1g1SvZ9-0).

## Коротко про застосунок

На сторінці представлені картки із персонажами фільмів трилогії 'Бетмен. Темний
Лицар', а також із інформацією щодо кількості їх твітів та підписників.
Представлена інтерактивність на сторінці: якщо бажаєте слідкувати за
Жінкою-Кішкою чи Робіном, можете клікнути по кнопці Follow. Хочете згадати на
кого з персонажів ви підписані, а на кого ні - просто ще відкрийте цю сторінку в
своєму браузері. Усі дані по Ваших особистих підписках зберігаються та будуть
одразу ж відображені на сторінці.

### Функціонал

По кліку на кнопку FOLLOW користувач підписується на персонажа. При цьому
лічильник кількості підписників (FOLLOWERS) збільшується на 1, а сама кнопка
змінює свій колір та напис на FOLLOWING.

Дані по усіх персонажах зберігаються в localStorage, тому завжди доступні при
наступних сеансах в браузері.

Якщо користувач хоче відписатись від персонажа, то при кліку на кнопку
FOLLOWING, вона поверне свій початковий колір та напис FOLLOW. При цьому
кількість підписників також зменшиться на 1.

### Реалізація застосунку

Початково дані по персонажах зчитуються із user.json-файлу та потрапляють в
state. State реалізований на батьківському для усіх карток компоненті - ul. При
клікові по кнопках, спершу змінюєється state, а одразу ж після цього з допомогою
методу життєвого циклу componentDidUpdate інформація записується/оновлюється в
Local Storage. Усі компоненти виконані класовим підходом. Стилізація - через css
modules з допомогою Flex. Додаткові біліотеки відсутні.
