import Detail from './components/DetailField'
import Index from './components/IndexField'
import Form from './components/FormField'

Nova.booting((app, store) => {
    app.component('index-radio-field', Index);
    app.component('detail-radio-field', Detail);
    app.component('form-radio-field', Form);
})
