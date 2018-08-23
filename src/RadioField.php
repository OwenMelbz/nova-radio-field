<?php

namespace OwenMelbz\RadioField;

use Laravel\Nova\Fields\Field;

class RadioField extends Field
{
    /**
     * The field's component.
     *
     * @var string
     */
    public $component = 'radio-field';

    /**
     * Which value should be the default?
     *
     * @param mixed $default
     * @return RadioField
     */
    public function default($default)
    {
        $this->withMeta(['default' => $default]);

        return $this;
    }

    /**
     * This is a key => value pair of the value => label for the radios.
     *
     * @param mixed $options
     * @return RadioField
     */
    public function options(array $options)
    {
        $this->withMeta(['options' => $options]);

        return $this;
    }

    /**
     * Should we stack the radios rather than side by side?
     *
     * @return RadioField
     */
    public function stack()
    {
        $this->withMeta(['stack' => true]);

        return $this;
    }

    /**
     * Sometimes when you have many radios, you need extra margin between them.
     *
     * @return RadioField
     */
    public function marginBetween()
    {
        $this->withMeta(['marginBetween' => true]);

        return $this;
    }
}
