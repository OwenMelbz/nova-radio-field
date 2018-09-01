import _ from 'lodash';

export default {
    mounted() {
        if (this.field.toggle && _.toArray(this.field.toggle).length) {
            this.mapFields();
            this.calculateFieldVisibility();
        }
    },
    computed: {

    },
    data() {
        return {
            toggleFields: {},
        }
    },
    methods: {
        findFieldsWhichCanBeToggled() {
            const fieldsToToggle = _.uniq(
                _.flatten(
                    _.toArray(this.field.toggle)
                )
            );

            this.$parent.$children.filter(c => c.field).forEach(component => {
                if (fieldsToToggle.indexOf(component.field.attribute) !== -1) {
                    this.toggleFields[component.field.attribute] = component;
                }
            });
        },
        generateFieldMap() {

        },
        mapFields() {
            this.findFieldsWhichCanBeToggled();
            this.generateFieldMap();
        },
        resetVisibility() {
            return _.each(this.toggleFields, field => {
                field.$el.classList.remove('mlbz-hidden');
            });
        },
        calculateFieldVisibility() {
            this.resetVisibility();
            console.log(this.rawValue)
            const fields = this.field.toggle[this.rawValue];

            (fields || []).forEach(field => {
                if (this.toggleFields[field]) {
                    this.toggleFields[field].$el.classList.add('mlbz-hidden')
                }
            })
        }
    },
    watch: {
        value() {
            return this.calculateFieldVisibility();
        }
    }
}
