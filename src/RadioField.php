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
     * @param mixed $default
     * @return RadioField
     */
    public function default($default)
    {
        $this->withMeta(['default' => $default]);

        return $this;
    }

    /**
     * @param mixed $options
     * @return RadioField
     */
    public function options(array $options)
    {
        $this->withMeta(['options' => $options]);

        return $this;
    }

    /**
     * @return RadioField
     */
    public function stack()
    {
        $this->withMeta(['stack' => true]);

        return $this;
    }
}
