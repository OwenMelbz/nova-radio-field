<template>
    <div :title="this.field.value" :aria-label="this.field.value">{{ getOptionLabel(value) }}</div>
</template>

<script>
export default {
    props: ['resourceName', 'field'],
    computed: {
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
        getOptionLabel(option) {
            if (this.hasOptionHint(option)) {
                return Object.keys(option).shift();
            }
            return option;
        }
    }
}
</script>
