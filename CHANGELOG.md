# Changelog

## v1.3.0

### Features
- 'Omni Page' introduced, user can call one function and have all available indexes in one page dependent on what data has been supplied.

## v1.2.2

### Fixes
- Page Options working for Flows with and without stage information (previously only with stage data)

## v1.2.1

### Features
- User can switch between flows and lists on the 'Page Flows' view
- Added (embedded v3.17.0) UKIC (UK Intelligence Community) Components to allow for some rich UI elements to use exclusively with the plugin i.e. these are not exposed or intended to be used as part of designs for end users.

## v1.2.0

### Features
- Visual user flows added

## v1.1.1

### Fixes
- Flow page fix - duplicate flows removed

## v1.1.0

### Features
- Basic support for User/Page Flows

## v1.0.1

### Fixes
- AJV is promoted to a dependency from a dev dependency. This was causing devDependency pruning actions on Heroku to cause prototypes to fall over

## v1.0.0

### Notes
- Initial release. Validates page and stage data and returns very simple views for page indexes so that users can easily navigate to selected pages.