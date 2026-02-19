<template>
    <header class="header">
        <div class="header__logo"></div>

        <nav class="header__menu">
            <a
                v-for="(link, index) in links"
                :key="index"
                href="#"
                class="header__link"
            >
                {{ link }}
            </a>
        </nav>

        <button class="header__burger">☰</button>
    </header>
</template>

<script setup>
const links = ['Мужчинам', 'Женщинам', 'Каталог', 'Доставка', 'Блог', 'О нас'];
</script>
