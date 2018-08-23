Nova.booting((Vue, router) => {
    Vue.component('index-radio-field', require('./components/IndexField'));
    Vue.component('detail-radio-field', require('./components/DetailField'));
    Vue.component('form-radio-field', require('./components/FormField'));
})
