<script setup lang="ts">
import type { Product } from '@/types/product';

const props = defineProps<{
    product: Product;
}>();

const halfPrice = computed(() => Math.ceil(props.product.price / 2));

const imageSrc = computed(
    () =>
        props.product.images?.[0] || props.product.image || '/placeholder.jpg',
);
</script>

<template>
    <a href="#" class="product-card">
        <div class="product-card__image-wrapper">
            <img
                :src="imageSrc"
                :alt="product.title"
                class="product-card__image"
            />
            <button class="product-card__favorite">♥</button>
        </div>

        <div class="product-card__info">
            <h3 class="product-card__title">
                {{ product.title }}
            </h3>

            <div class="product-card__prices">
                <span class="product-card__price"> {{ product.price }} ₽ </span>

                <span class="product-card__price-x2"> {{ halfPrice }} ₽ </span>
            </div>

            <div v-if="product.discount" class="product-card__discount">
                -{{ product.discount }}%
            </div>
        </div>
    </a>
</template>
