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
                <span v-if="field.stack && hasOptionHint(value)" class="radio-hint mt-1 block text-sm text-80 leading-normal">{{ getOptionHint(value) }}</span>
            </slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            field: {
                type: Object,
                required: true,
            },
            fieldName: {
                type: String,
                default: '',
            },
        },
        computed: {
            label() {
                return this.fieldName || this.field.name
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
        methods: {
            /**
            * Just determins if the option could potentially have an option.
            */
            hasOptionHint(option) {
                return typeof option === 'object';
            },

            /**
            * Returns back an option if one is found, otherwise void.
            */
            getOptionHint(option) {
                if (this.hasOptionHint(option)) {
                    return option[
                        Object.keys(option).shift()
                    ];
                }
            },
            
            /**
            * Returns back the label of the option.
            */
            getOptionLabel(option) {
                if (this.hasOptionHint(option)) {
                    return Object.keys(option).shift();
                }
                return option;
            }
        },
    }
</script>
