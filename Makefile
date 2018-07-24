VERSION := patch
GITHUB_API_TOKEN := ""

release:
	echo "Releasing version: $(VERSION)"
	git checkout master
	git pull origin master
	npm run lint
	npm test
	npm run build
	npm version $(VERSION)
	npm publish
	git add package.json package-lock.json
	git commit -v

changelog:
	git checkout master
	git pull origin master
	github_changelog_generator -t $(GITHUB_API_TOKEN) -u Travix-International -p ui

push-changelog:
	git checkout master
	git pull origin master
	git add CHANGELOG.md
	git commit -m 'changelog updated.'
	git push origin master

prepare-site:
	rm -rf ./styleguide
	npm run styleguide:build
	# copy directly from the library
	cp ../css-themes-polyfill/src/index.js ./styleguide/css-themes-polyfill.js
