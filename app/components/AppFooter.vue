<template>
    <footer class="footer">
        <div
            v-for="(block, index) in footerBlocks"
            :key="index"
            class="footer__block"
        >
            <div class="footer__block-title">{{ block.title }}</div>
            <a
                v-for="(link, linkIndex) in block.links"
                :key="linkIndex"
                :href="link.href"
                class="footer__link"
            >
                {{ link.label }}
            </a>
        </div>
    </footer>
</template>

<script setup>
const footerBlocks = [
    {
        title: 'Каталог',
        links: [
            { label: 'Все бренды', href: '#' },
            { label: 'Nike', href: '#' },
            { label: 'Adidas', href: '#' },
            { label: 'Puma', href: '#' },
            { label: 'New Balance', href: '#' },
        ],
    },
    {
        title: 'Помощь',
        links: [
            { label: 'Доставка', href: '#' },
            { label: 'Заказ и оплата', href: '#' },
            { label: 'Обмен и Возврат', href: '#' },
            { label: 'F. A. Q.', href: '#' },
        ],
    },
    {
        title: 'Информация',
        links: [
            { label: 'Преимущества', href: '#' },
            { label: 'Гарантия и безопасность', href: '#' },
            { label: 'Индивидуальный заказ', href: '#' },
            { label: 'Акции', href: '#' },
        ],
    },
    {
        title: 'Компания',
        links: [
            { label: 'О нас', href: '#' },
            { label: 'Блог', href: '#' },
            { label: 'Отзывы', href: '#' },
            { label: 'Контакты', href: '#' },
        ],
    },
];
</script>
