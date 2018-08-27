# Laravel Nova Radio Button Group Field Type

This is a simple nova field type to introduce a radio button.

## Form View

![index view](https://i.imgur.com/GbErvLG.png)

## Index View

![form view](https://i.imgur.com/RKSc4xj.png)

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
                1 => ['Yes' => 'This means that users will not have to watch adverts.'],
            ])
            ->default(0) // optional
            ->stack() // optional (required to show hints)
            ->marginBetween() // optional
            ->skipTransformation() // optional
    ];
}

```

## Configuration

### options()

This accepts basic string/integer key-pair values. The key of the array will be saved in the database, and the value will be displayed.

If you assign an array to the value, it will act as a key-pair for a label and a hint when using `stack()`

![hint view](https://i.imgur.com/N8ajaQE.jpg)

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

