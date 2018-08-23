<old-template>
    <default-field :field="field">
        <template slot="field">
            <input :id="field.name" type="text"
                class="w-full form-control form-input form-input-bordered"
                :class="errorClasses"
                :placeholder="field.name"
                v-model="value"
            />

            <p v-if="hasError" class="my-2 text-danger">
                {{ firstError }}
            </p>
        </template>
    </default-field>
</old-template>

<template>
    <default-field :field="field">
        <template slot="field">

            <div class="flex flex-wrap">
                <div class="radio-container mb-2" v-for="(option, value) in field.options">
                    <label :for="`${fieldAttribute}_${value}`">
                        <input v-model="value" :value="value" :id="`${fieldAttribute}_${value}`" :name="fieldAttribute" type="radio">
                        <span class="radio-label">{{ option }}</span>
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
import { FormField, HandlesValidationErrors } from 'laravel-nova'

export default {
    mixins: [FormField, HandlesValidationErrors],

    props: ['resourceName', 'resourceId', 'field'],

    data() {
        return {
            value: this.field.default
        }
    },

    methods: {
        /*
         * Set the initial, internal value for the field.
         */
        setInitialValue() {
          this.value = this.field.value || ''
        },

        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill(formData) {
          formData.append(this.field.attribute, this.value || '')
        },

        /**
         * Update the field's internal value.
         */
        handleChange(value) {
          this.value = value
        }
    }
}
</script>

<style scoped>
    .radio-container:not(:last-child) {
        margin-right: 20px;
    }

    .radio-label {
        padding-left: 5px;
    }
</style>
