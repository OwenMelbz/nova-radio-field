# Laravel Nova Radio Button Group Field Type

This is a simple nova field type to introduce a radio button.

## Form View

![index view](https://i.imgur.com/XORtlDE.png)

## Index View

![form view](https://i.imgur.com/F9Dof4z.png)

## Installation

`composer require owenmelbz/nova-radio-field`

## Usage

```php

use OwenMelbz\RadioField\RadioButton;

public function fields(Request $request)
{
    return [
        RadioButton::make('Can view skip adverts')
            ->options([
                0 => 'No',
                1 => 'Yes',
            ])
            ->default(0) // optional
            ->stack() // optional
            ->marginBetween() // optional
            ->skipTransformation() // optional
    ];
}

```

## Configuration

### options()

This accepts basic string/integer key-pair values. The key of the array will be saved in the database, and the value will be displayed.

### default()

This lets you set the default radio button, otherwise none will be selected - You just pass in the value of the key, e.g 0

### stack()

By default the radios will sit next to each other, if you want them underneath in a longer list call the `stack()` method

### marginBetween()

If you happen to have lots of options that fold onto 2 lines, you might want to give them some spacing.

### skipTransformation()

By default on the index and detail page we display the labelled value to the user, if you want to show the raw value instead, then call `skipTransformation()`


## License

Go crazy, do what you like :)

