# Secret Field

This project showcases an example of how to build a *Reusable Secret Field
Component* using *Kony Visualizer*.

## Use Cases

Add it to a login form, forms requesting secret PIN's, secret values from
coordinate cards or tokeniser devices, or use it in transaction authorisation
scenarios —i.e.: where the user receives an authorisation code via SMS, Push
Notification or e-mail which they then have to type into the application.

![Secret Field](/pics/SecretField_pic1.png "Secret Field")

## Implementation Details

### Visualizer Version
This project was built using Kony Visualizer Quantum 8.4.22.

### Look & Feel Customisations

This component exposes several skin properties for you to customise its look & feel. If you believe any properties are missing, please open an issue [here](https://github.com/mig82/SecretField/issues) and I'll consider exposing it. Forks and pull requests are also very welcome if you'd like to contribute.

For the icons, this component relies on FontAwesome [4.7](https://fontawesome.com/v4.7.0/) and uses its unicodes as label text —e.g. \uf023 is the [closed lock icon](https://fontawesome.com/v4.7.0/icon/lock). I've exposed these properties so you can change the icon to whatever you like. If you'd like to use another icon font, use the the `iconSkin`, `buttonSkin` and `buttonFocusSkin` properties to pick that as a font, provided you've imported that other icon font into Visualizer.

![Customisations](/pics/skin_customisations.png "Customisations")

### Naming Conventions

I favour suffixes in lieu of prefixes. All widgets and skins in this component bear names with suffixes indicating what they are —e.g.: `iconLabel`, `showButton`.

Skins bear the suffix of the widget type they apply to, followed by the `Skin` suffix —e.g.: `SecretFieldButtonSkin`.

In order to make it easier for you to manage project skins, all skins in this component bear a `SecretField` prefix —e.g.: `SecretFieldButtonSkin`, `SecretFieldIconLabelSkin`.

### Development Dependencies

This project uses [Krōnin](https://www.npmjs.com/package/kronin)'s `kony.ui.getComponents` extension for testing but Krōnin is not a dependency of the `com.mig82.SecretField` component.

### About Authoring Components

This component showcases several **standard properties** and a **custom method** called `toggle` which is meant for external code to be able to switch the visibility of the secret text programmatically.

### Fake Custom Property

This project also showcases a **fake custom property**, which is a way to (ab)use the standard properties of a dummy widget which will never be shown to provide additional configuration parameters for a component. Such is the case of the `hideIcon` property, which is nothing but the `text` property of tha `hideButton` widget which is never made visible.

### Curating Components in Isolation

I'm a big proponent of **Component-first Applications** and **curating components in isolation** as I explained [in this webinar](https://basecamp.kony.com/s/article-detail/a042K000016N9XQQA0/tech-talk-componentfirst-applications). This Visualizer project is just a wrapper to develop, test, and demo the `com.mig82.SecretField` component in isolation. The sole purpose of both `Form1` (the only form in this project) and its controller is to create and test several instances of the `SecretField` component in order to showcase how each can have its own configuration.

![Secret Field](/pics/SecretField.gif "Secret Field")
