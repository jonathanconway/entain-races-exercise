# Folder: `client`

Queries, fetching functions and associated types for calling web APIs.

- Queries are re-usable composables for data-fetching from JSON APIs
- Queries call fetcher functions to fetch data from JSON APIs
- Fetching functions call `fetch` and handle a JSON-formatted response

## Folder structure

The folder structure is as follows:

- 📁 `client` (folder)
  - 📁 `{api}` (folder)
    - 📄 `{api}-fetch.ts` (file)
    - 📄 `{api}-query.ts` (file)
    - 📄 `{api}-json.ts` (file)
    - 📄 `{api}-json-response.ts` (file)
    - 📄 `{api}-{subtype}-json.ts` (file)

### Notes

- {api} is the name of the API
- {api}-fetch.ts has the fetch function for making the HTTP request to {api}
- {api}-query.ts has the query composable for controlling how/when the fetch function is called and how its data is cached
- {subtype} is a type that is referenced within the json
- {api}-json-response.ts has the definition of the response
- {api}-json.ts has definitions for the json data in {api}-json-response.ts
- {api}-{subtype}-json.ts has definitions for {subtype} defined in {api}-json.ts
- To minimise the amount of code, we only define fields that are actually used in the application
