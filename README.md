# hass-bha-icons

Custom icon pack designed for Home-assistant.

![Preview](https://raw.githubusercontent.com/hulkhaugen/hass-bha-icons/master/content.png)

## Install

Copy the html file into `<config>/www/` where `<config>` is your home-assistant config directory (the directory where your `configuration.yaml` resides).

Add the folowing to the `frontend` section of your `configuration.yaml`

```yaml
frontend:
  extra_html_url:
    - /local/hass-bha-icons.html
```

Restart home-assistant.

## Using

The icons uses the prefix `bha:`.

Example:

```
entities:
  - entity: light.floor_lamp
    icon: 'bha:floor-lamp'
    name: floor-lamp
  - entity: light.floor_lamp_dual
    icon: 'bha:floor-lamp-dual'
    name: floor-lamp-dual
  - entity: light.led_strip
    icon: 'bha:led-strip'
    name: led-strip
  - entity: light.outdoor_lamp_north
    icon: 'bha:outdoor-lamp'
    name: outdoor-lamp
  - entity: light.outdoor_lamp_west
    icon: 'bha:outdoor-lamp-variant'
    name: outdoor-lamp-variant
show_header_toggle: false
title: hass-bha-icons
type: entities
```

## FAQ

Q: The icon isn't showing, it's just white space where it should be. Why is that?
A: Probably related to cache. Try opening your instance in incognito/private mode and see if your icon shows then. If yes, it's cache related. If not, spellcheck.

Thanks to @thomasloven, as I used his hass-fontawesome as a template for this pack 
