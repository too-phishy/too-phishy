# too-phishy

I created Too Phishy to improve my ability to detect cleverly made phishing
scams. I needed a tool — one that was easy and intuitive — to help when my
better judgement wasn't enough.

You can read more about Too Phishy at [toophishy.com](https://toophishy.com/).

You can download it on Google Workspace [here](https://workspace.google.com/marketplace/app/too_phishy/802749066565).

I've open sourced this repo so that anyone can contribute.

## To install dependencies:

```
nvm use 21
npm install
```

## To run the entire test suite:

```
cd onTriggerFunction
npm install
npm test
```

## Run linter:

```
npm run prettier
```

## Send pull requests

Issues are cool, but PRs are better.

If you add features, add tests. Don't break the tests.

## Citations

For top million domain list, we use the Tranco list (available at
https://tranco-list.eu/list/K2XYW) generated on December 3, 2023.

## License

Too Phishy is released under the [MIT License](https://opensource.org/licenses/MIT).
