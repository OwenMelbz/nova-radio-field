<template>
    <default-field :field="field" :errors="errors">
        <template slot="field">

            <div :class="{'flex flex-wrap' : !field.stack, 'border-danger': hasError}">
                <div v-for="(option, val) in field.options" :class="{'mb-2' : field.stack || field.addPadding}"  class="mlbz-radio-container">
                    <label :for="`${field.attribute}_${val}`">
                        <input class="checkbox" v-model="value" :value="val" :id="`${field.attribute}_${val}`" :name="field.attribute" type="radio" :disabled="field.disabled">
                        <span class="mlbz-radio-label">{{ getOptionLabel(option) }}</span>
                        <span v-if="field.stack && hasOptionHint(option)" class="mlbz-radio-hint mt-1 block text-sm text-80 leading-normal">{{ getOptionHint(option) }}</span>
                    </label>
                </div>
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

				if (this.field.hasOwnProperty('default')) {
					return this.value = this.field.default;
				}

				return this.value = ''
            },

            /**
             * Fill the given FormData object with the field's internal value.
             */
            fill(formData) {
                const value = this.value !== null ? this.value : this.field.default;
                formData.append(this.field.attribute, value);
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
