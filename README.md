# hass-bha-icons

Custom icon pack designed for Home-assistant.

## Install

Copy the html file for the set into `<config>/www/` where `<config>` is your home-assistant config directory (the directory where your `configuration.yaml` resides).

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
