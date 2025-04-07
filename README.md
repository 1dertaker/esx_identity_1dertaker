# 🥤| esx_identity from 1dertaker.

# 🖼️| images

https://imgur.com/gallery/esx-identity-by-1dertaker-dev-JexYSht

## Requirements
* Dependencies For Full Functionality
  * [esx_skin](https://github.com/ESX-Org/esx_skin)
  * [esx_policejob](https://github.com/ESX-Org/esx_policejob)
  * [esx_society](https://github.com/ESX-Org/esx_society)

## Download & Installation

### Using [fvm](https://github.com/qlaffont/fvm-installer)
```
fvm install --save --folder=esx esx-org/esx_identity
```

### Using Git
```
cd resources
git clone https://github.com/ESX-Org/esx_identity [esx]/esx_identity
```

### Manually
- Download https://github.com/ESX-Org/esx_identity/archive/master.zip
- Put it in the `[esx]` directory

## Installation
- Import `esx_identity.sql` in your database
- Add this to your `server.cfg`:

```
start esx_identity
```

- If you are using esx_policejob or esx_society, you need to enable the following in the scripts' `config.lua`:
```Config.EnableESXIdentity          = true```

### Commands
```
/char
/chardel
```

# Legal
### License
esx_identity - rp characters


