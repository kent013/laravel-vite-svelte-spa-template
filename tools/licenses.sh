#!/bin/bash
DEST_FILE=./resources/markdown/licenses.md
./vendor/bin/php-legal-licenses generate -q -n
EXTENSION_LICENSES_FILE=./tmp/extension-licenses.md
if [  ! -f "$EXTENSION_LICENSES_FILE" ]; then
    echo "$EXTENSION_LICENSES_FILE is not found, please go fofi-extension dir and run pnpm generate:licenses and copy generated file into path."
    exit
fi
MARKDOWN=./licenses.md
if [  ! -f "$MARKDOWN" ]; then
    echo "$MARKDOWN is not saved"
    exit
fi

sed -i "s/# Project Licenses/# Project Licences \n## Fofi Backend PHP Project Licenses/" $MARKDOWN
sed -i "s/## Dependencies//" $MARKDOWN
sed -i "s/========//g" $MARKDOWN
sed -i "s/# The MIT License (MIT)/The MIT License (MIT)/" $MARKDOWN
NPM_LICENSES=`./node_modules/.bin/license-checker-rseidelsohn --markdown`
NPM_LICENSES=`echo "$NPM_LICENSES" | sed "s/- \[\(.\+\?\)\](\(.\+\?\)) - \(.\+\?\)/### \1\nHomepage: \2\nLicensesUsed: \3\n/g"`
echo -e "\n## Fofi Backend NPM Package Licenses \n$NPM_LICENSES" >> $MARKDOWN
EXTENSION_LICENSES=`cat $EXTENSION_LICENSES_FILE | sed "s/- \[\(.\+\?\)\](\(.\+\?\)) - \(.\+\?\)/### \1\nHomepage: \2\nLicensesUsed: \3\n/g"`
echo -e "\n## Fofi Extension NPM Package Licenses \n$EXTENSION_LICENSES" >> $MARKDOWN
sed -i "s/^Homepage: *\(.\+\)/Homepage: [\1](\1)/g" $MARKDOWN
mv $MARKDOWN $DEST_FILE