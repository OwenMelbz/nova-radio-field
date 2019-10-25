<template>
    <default-field :field="field" ref="row">
        <template slot="field">

            <div :class="{'flex flex-wrap' : !field.stack, 'border-danger': hasError}">
                <div v-for="(option, val) in field.options" :class="{'mb-2' : field.stack || field.addPadding}"  class="mlbz-radio-container">
                    <label :for="`${field.attribute}_${val}`">
                        <input v-model="value" :value="val" :id="`${field.attribute}_${val}`" :name="field.attribute" type="radio">
                        <span class="mlbz-radio-label">{{ getOptionLabel(option) }}</span>
                        <span v-if="field.stack && hasOptionHint(option)" class="mlbz-radio-hint mt-1 block text-sm text-80 leading-normal">{{ getOptionHint(option) }}</span>
                    </label>
                </div>
            </div>

            <div v-if="hasError">
                <p class="my-2 text-danger">
                    {{ firstError }}
                </p>
            </div>

        </template>
    </default-field>
</template>

<script>
    import HasOptions from '../mixins/HasOptions';
    import CanToggle from '../mixins/CanToggle';
    import {FormField, HandlesValidationErrors} from 'laravel-nova';

    export default {
        mixins: [FormField, HandlesValidationErrors, HasOptions, CanToggle],

        props: ['resourceName', 'resourceId', 'field'],

        mounted() {
            !this.stacked && this.fixAlignment();
        },

        computed: {
            rawValue() {
                return this.value;
            }
        },

        methods: {
            /*
             * Set the initial, internal value for the field.
             */
            setInitialValue() {
                if (this.value) {
                    return;
                }

                if (this.field.value !== null) {
                    return this.value = this.field.value;
                }

                return this.value = this.field.default;
            },

            /**
             * Fill the given FormData object with the field's internal value.
             */
            fill(formData) {
                const value = this.value !== null ? this.value : this.field.default;
                formData.append(this.field.attribute, value);
            },

            /**
             * Nova doesn't currently allow for modification of the wrapper components
             * so we'll crudely use the vue api to add the classes to fix the alignment.
             */
            fixAlignment() {
                const container = this.$refs.row.$el.lastChild;

                container.classList.add('flex');
                container.classList.add('items-center');
            },

        }
    }
</script>

<style>
    .mlbz-radio-container:not(:last-child) {
        margin-right: 20px;
    }

    .mlbz-radio-label {
        padding-left: 5px;
    }

    .mlbz-radio-hint {
        padding-left: 24px;
    }

    .mlbz-hidden {
        display: none !important;
    }
</style>
