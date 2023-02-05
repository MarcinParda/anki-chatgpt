# Anki Generator

A web application for creating Anki flashcards directly from the answers provided by ChatGPT.

![Project preview](https://cdn.discordapp.com/attachments/886777507364347946/1071792583862386749/sDQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAgcgVIACO3LVlZvME6PvLdkAAAQQQQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEIgGAQLgaFjlKJj1fc3RrT9jfKNwPQRQAABBBBAAAEEEEAAAQQQQAABBBBAAAEEEEAAgSgQBYXawHZ8aTmQAAAABJRU5ErkJggg.png)
**_Built using Next.js, Typescript, TailwindCSS, OpenAI API, AnkiConnect, tanstack-query, react-hook-form, zod_**

## Benefits

This project provides a convenient solution for users who want to create Anki flashcards without having to manually type in questions and answers. By leveraging the power of ChatGPT and Anki, this app makes it easy for users to study and retain information.

## Stage of work

Things to do are listed under Issues tab (PRs are welcome)

#### POC (Done)

- [x] User can get response from requests after setting up AnkiConnect
- [x] User can generate answer using a form
- [x] User can choose from a list of his decks and tags
- [x] User can add a card to Anki using AnkiConnect with deck and tags selection

#### MVP (WIP)

- [x] Features from POC
- [ ] User can change the parameters of the genarated answer
- [ ] App will suggest a deck and tags based on the question
- [ ] User can set default deck, tags, generation parameters, etc.
- [ ] Seperate page with explanation and youtuble video with explanation how setup and use the app
- [ ] Dark mode and explenation how it can be unhealthy

#### Later releases (TODO)

- [ ] CRUD of decks
- [ ] CRUD of tags
- [ ] Update and Delete for cards
- [ ] Searching for cards
- [ ] User can practise cards in the app

## License

This project is licensed under the MIT license.
