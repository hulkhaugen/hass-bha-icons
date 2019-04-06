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

Example: `icon: bha:outdoor-lamp`



Thanks to @thomasloven, as I used his hass-fontawesome as a template for this pack 
