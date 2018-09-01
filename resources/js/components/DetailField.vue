<template>
    <div class="flex border-b border-40">
        <div class="w-1/4 py-4">
            <slot>
                <h4 class="font-normal text-80">
                    {{ label }}
                </h4>
            </slot>
        </div>
        <div class="w-3/4 py-4">
            <slot name="value">
                <p class="text-90" :title="this.field.value" :aria-label="this.field.value">{{ getOptionLabel(value) }}</p>
                <span v-if="hasOptionHint(value)" class="radio-hint mt-1 block text-sm text-80 leading-normal">{{ getOptionHint(value) }}</span>
            </slot>
        </div>
    </div>
</template>

<script>
    import HasOptions from '../mixins/HasOptions';
    import CanToggle from '../mixins/CanToggle';

    export default {
        mixins: [HasOptions, CanToggle],

        props: ['field', 'fieldName'],

        computed: {
            label() {
                return this.fieldName || this.field.name
            },
            rawValue() {
                return this.field.value;
            },
            value() {
                if (this.field.skipTransformation) {
                    return this.field.value;
                }

                const displayValue = this.field.options[this.field.value];

                if (displayValue) {
                    return displayValue
                }

                return this.field.default;
            }
        },
    }
</script>

<style>
    .mlbz-hidden {
        display: none !important;
    }
</style>
