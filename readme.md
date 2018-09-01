# Laravel Nova Radio Button Group Field Type

This is a simple nova field type to introduce a radio button with the ability to toggle other field visibility.

## Form View

![index view](https://i.imgur.com/GbErvLG.png)

## Index View

![form view](https://i.imgur.com/RKSc4xj.png)

## Toggle Mode

![toggle mode](https://i.imgur.com/5Xwit3c.gif)

## Installation

`composer require owenmelbz/nova-radio-field`

## Usage

```php

use OwenMelbz\RadioField\RadioButton;

public function fields(Request $request)
{
    return [
        RadioButton::make('Can view skip adverts?')
            ->options([
                0 => 'No',
                1 => ['Yes' => 'This means that users will not have to watch adverts.'],
            ])
            ->default(0) // optional
            ->stack() // optional (required to show hints)
            ->marginBetween() // optional
            ->skipTransformation() // optional
            ->toggle([  // optional
                1 => ['max_skips', 'skip_sponsored'] // will hide max_skips and skip_sponsored when the value is 1
            ])
    ];
}

```

## Configuration

### options()

This accepts basic string/integer key-pair values. The key of the array will be saved in the database, and the value will be displayed.

If you assign an array to the value, it will act as a key-pair for a label and a hint when using `stack()`

![hint view](https://i.imgur.com/N8ajaQE.jpg)

### toggle()

This accepts an array, the key of the array represents the value of the field. The value of the item must always be an array of the fields you wish to hide, when this value is picked.

e.g. if this array was passed in, when the value is `1` the `email` field will be hidden, any other value will show everything.

```
toggle([
    1 => ['email']
])
```

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

