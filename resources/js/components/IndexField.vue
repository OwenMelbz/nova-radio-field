<template>
    <div :title="this.field.value" :aria-label="this.field.value">{{ value }}</div>
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
}
</script>
