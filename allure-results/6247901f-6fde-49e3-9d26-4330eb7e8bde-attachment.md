# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: apiTesting\bookingAPItst.spec.ts >> API Testing - CRUD Methods >> Fetch all bookingd
- Location: PWSample\tests\apiTesting\bookingAPItst.spec.ts:4:9

# Error details

```
Error: apiRequestContext.get: getaddrinfo ENOTFOUND restful=booker.herokuapp.com
Call log:
  - → GET https://restful=booker.herokuapp.com/booking
    - user-agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/147.0.7727.15 Safari/537.36
    - accept: */*
    - accept-encoding: gzip,deflate,br

```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'
  2  | test.describe('API Testing - CRUD Methods', () => {
  3  |    // let baseURL = 'https://restful=booker.herokuapp.com'
  4  |     test('Fetch all bookingd', async ({ request }) => {
> 5  |         const response = await request.get('/booking')
     |                                        ^ Error: apiRequestContext.get: getaddrinfo ENOTFOUND restful=booker.herokuapp.com
  6  |         const resStatus = response.status()
  7  |         console.log(resStatus)
  8  |         expect(response.status()).toBe(200)
  9  |         expect(response.ok()).toBeTruthy()
  10 |         const headers = response.headers()
  11 |         console.log('Headers....', headers['content-type'])
  12 |         expect(headers['content-type']).toEqual('application/json; charset=utf-8')
  13 |         const jsonData = await response.json()
  14 |         console.log('Json data list ...', jsonData)
  15 |     })
  16 | })
  17 | 
```