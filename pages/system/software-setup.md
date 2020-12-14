---
layout: page
title:  "General software setup guide"
summary: "Describes configurations of some software"
tags: [system]
permalink: "software-setup.html"
---

## Visual Studio Code
* [Python support](https://marketplace.visualstudio.com/items?itemName=ms-python.python)
* [Matlab support](https://marketplace.visualstudio.com/items?itemName=Gimly81.matlab)

## Atom
* Core: uncheck "Auto hide menu bar"
* Editor: Setup tabs as soft tabs

### Packages
* PDF files preview: `pdf-view`
* Intel x86 assembly: `language-x86-64-assembly` or maybe `language-assembly`
* Latex support: `language-latex`
* Highlight all occurences of a word: `highlight-selected`
* Jekyll support: `jekyll-syntax-highlighting`
* ARM assembly: `language-arm` or `language-armasm`
* Arduino/AVR support ?
* `language-archlinux`
* `markdown-writer`
* `markdown-preview-plus`
* `js-refractor`


## Jetbrains softwares  
* Zoom with mouse wheel
* Default settings for UML diagrams: settings, Tools, Diagrams. Fields, Constructors, Methods, Dependencies
* Setup keyboard shortcut for single line/block comment
* Setup keyboard shortcut to close current editor tab
* Setup keyboard shortcut to close all tabs except focused editor tab
* Setup keyboard shortcut to move a line up/down
* Setup keyboard shortcut to duplicate a line

## KeePass
* Lock workspace after KeePass inactivity
* Lock workspace after global user inactivity
* Do not remember master password of a database while it is open
* Lock workspace when locking computer or switching the user
* Lock workspace when the computer is about to be suspended 
* Do not automatically search for keyfiles
* Do not remember key sources
* Do not remember working directories

## Thunderbird
* Install language dictionnaries

## Web browsers
### Firefox
* Disable offering to remember passwords and logins
* Disable Flash and other extension: ELABORATE.
* Enable DNS-over-https in settings
* In `Options`, search for `tab`, and uncheck `Crtl+Tab cycles through tabs in recently used order`
* Interesting add-ons:
    * [HTTPS everywhere](https://addons.mozilla.org/en-US/firefox/addon/https-everywhere/)
    * [Decentraleyes](https://addons.mozilla.org/en-US/firefox/addon/decentraleyes/)
    * [Foxy Proxy](https://addons.mozilla.org/en-US/firefox/addon/foxyproxy-standard/) to easily change proxy settings
    * [uBlock Origin](https://addons.mozilla.org/en-US/firefox/addon/ublock-origin/)
    * [Temporary containers](https://addons.mozilla.org/en-US/firefox/addon/temporary-containers/) with the wiki [here](https://github.com/stoically/temporary-containers/wiki) and an article [here](https://medium.com/@stoically/enhance-your-privacy-in-firefox-with-temporary-containers-33925cd6cd21). Enable Automatic mode, and reuse available numbers in configuration.
    * [ClearURLs](https://addons.mozilla.org/en-US/firefox/addon/clearurls/) to remove tracking elements from URLs
    * [I don't care about cookies](https://addons.mozilla.org/en-US/firefox/addon/i-dont-care-about-cookies/) to automatically get rid of cookie warnings from almost all websites 
    * Noscript module
    * Cookies manipulation module
    * [Simple Modify Headers](https://addons.mozilla.org/en-US/firefox/addon/simple-modify-header/) to modify HTTP headers
    * [uMatrix](https://addons.mozilla.org/en-US/firefox/addon/umatrix/): see [this video tutorial](https://www.youtube.com/watch?v=TVozpo3zUBk)
    * [PrivacyBadger](https://addons.mozilla.org/en-US/firefox/addon/privacy-badger17/)
* [Profiles vs containers](https://discourse.mozilla.org/t/containers-vs-profiles/23568/3)
* [Tip for using containers and configuring them](https://superuser.com/questions/1396464/firefox-shortcut-to-open-a-particular-account-container)
* [A hack to have different profiles on Android](https://discourse.mozilla.org/t/multiple-profiles-for-mobile-firefox/31660)
* [First-party isolation](https://www.ghacks.net/2017/11/22/how-to-enable-first-party-isolation-in-firefox/)
* A [guide](https://github.com/arkenfox/user.js/wiki/1.1-Overview) on Firefox configuration/hardening
* [Another article](https://medium.com/free-code-camp/the-beginners-guide-to-online-privacy-7149b33c4a3e) about configurating Firefox fro privacy and explaining the risks.

### Chrome
* Disable Flash and other extension: ELABORATE
* Use MSI intaller for system wide installation: reduces the risk of a malware modifying the binaries
* Ublock Origin
* Keyboard security (keypresses frequency)

## Other
* [Hack font](https://sourcefoundry.org/hack/)
* [Latex It thunderbird extensions](https://addons.thunderbird.net/en-US/thunderbird/addon/latex-it/)
* [Set Matlab default folder](https://au.mathworks.com/matlabcentral/answers/40319-matlab-default-directory): `userpath('/path/to/default/matlab/files/)`
* [Set Matlab initial working folder](https://au.mathworks.com/matlabcentral/answers/350696-how-do-i-set-the-default-initial-working-folder-for-matlab)

## List of software of interest
* Linux: [okteta](https://apps.kde.org/en/okteta), [GHex](https://wiki.gnome.org/Apps/Ghex) and [fhex (GUI hex editor)](https://github.com/echo-devim/fhex)
* [A non-free but great hex editor in Windows](http://www.hexworkshop.com/overview.html)
* [A good enough hex editor for Windows](https://mh-nexus.de/en/hxd/)

## Resources and references
* [Example setup](http://jasonwryan.com/blog/2010/10/04/the-setup/)
* [MySQL installation on Ubuntu](https://www.digitalocean.com/community/tutorials/how-to-install-mysql-on-ubuntu-18-04)
* [Move line up/down in Visual studio](https://www.jflh.ca/2016-07-10-move-lines-up-and-down-in-visual-studio-code)