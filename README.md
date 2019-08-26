# Secret Field

This project showcases an example of how to build a *Reusable Secret Field
Component* using *Kony Visualizer*. The Visualizer project just serves as a
wrapper to demo the component. The component -called
`com.mig82.SecretField` is the real focus of this exercise.

This component showcases several **standard properties** and a **custom method** called `toggle` which is meant for external code to be able to switch the visibility of the secret text programmatically.

## Implementation Notes

This project was built using Kony Visualizer Quantum 8.4.22.

## Use Cases

Add it to a login form, forms requesting secret PIN's, secret values from
coordinate cards or tokeniser devices, or use it in transaction authorisation
scenarios —i.e.: where the user receives an authorisation code via SMS, Push
Notification or e-mail which they then have to type into the application.

![Secret Field][logo]

## Naming Conventions

I favour suffixes in lieu of prefixes. All widgets and skins in this component bear names with suffixes indicating what they are —e.g.: `iconLabel`, `showButton`.

Skins bear the suffix of the widget type they apply to, followed by the `Skin` suffix —e.g.: `SecretFieldButtonSkin`.

## Implementation Details

In order to make it easier for you to manage project skins, all skins in this component bear a `SecretField` prefix —e.g.: `SecretFieldButtonSkin`, `SecretFieldIconLabelSkin`.

This project uses [Krōnin](https://www.npmjs.com/package/kronin)'s `kony.ui.getComponents` extension for testing but Krōnin is not a dependency of the `com.mig82.SecretField` component.

[logo]: /pics/SecretField_pic1.png "Secret Field"
