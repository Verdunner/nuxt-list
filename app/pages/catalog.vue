<script setup lang="ts">
import type { Product } from '@/types/product';

const { data, pending, error } = await useProducts(1, 12);

const products = computed<Product[]>(() => data.value?.products ?? []);
</script>

<template>
    <section class="catalog">
        <div class="catalog__container">
            <h1 class="catalog__title">Каталог</h1>

            <div v-if="pending" class="catalog__loading">Загрузка...</div>

            <div v-else-if="error" class="catalog__error">Ошибка загрузки</div>

            <div v-else class="catalog__list">
                <ProductCard
                    v-for="product in products"
                    :key="product.id"
                    :product="product"
                    class="catalog__item"
                />
            </div>
        </div>
    </section>
</template>
