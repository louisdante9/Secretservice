import faker from 'faker';

export const validUser = {
  username: faker.name.findName(),
  email: faker.internet.email(),
  password: "test1234",
};
export const invalidUser = {
  username: faker.name.findName(),
  password: "test1234",
};


export const invalidToken =
  'eyJhbWciOiJIUzI1KiIsInR5cCI9IkpXVCJ9.eyJpZCI6MywiZmlyc3ROYW1lIjoiSGVucnkiLCJsYXN0TmFtZSI6Ik90aWdoZSIsImVtYWlsIjoib3RpNG1lMTJAZ21haWwuY29tIiwidXNlcm5hbWUiOiJvdGk0bWUiLCJwaG9uZSI6IjA3MDY3MTQzMTYxIiwiaWF0IjoxNTk1ODE0OTc4fQ.eVGZpmFbWpD4e5gAsKi5Vtsj2BrluIih1kJqhd8OoYo';

export const token =
    "eyJhbGciOiJSUzI1NiIsImtpZCI6IjA4MGU0NWJlNGIzMTE4MzA5M2RhNzUyYmIyZGU5Y2RjYTNlNmU4ZTciLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vY29uc3RydXlvLWNvZGluZy1jaGFsbGVuZ2UiLCJhdWQiOiJjb25zdHJ1eW8tY29kaW5nLWNoYWxsZW5nZSIsImF1dGhfdGltZSI6MTYwOTA5ODc2NiwidXNlcl9pZCI6IjVpRW0xSHZJeHViTGFpS080eWowTnBtdnEwRjIiLCJzdWIiOiI1aUVtMUh2SXh1YkxhaUtPNHlqME5wbXZxMEYyIiwiaWF0IjoxNjA5MDk4NzY2LCJleHAiOjE2MDkxMDIzNjYsImVtYWlsIjoiY29kaW5nLWNoYWxsZW5nZUBjb25zdHJ1eW8uZGUiLCJlbWFpbF92ZXJpZmllZCI6ZmFsc2UsImZpcmViYXNlIjp7ImlkZW50aXRpZXMiOnsiZW1haWwiOlsiY29kaW5nLWNoYWxsZW5nZUBjb25zdHJ1eW8uZGUiXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.g0oMFOlxAB9etyr8NnJosL7PIt9oTU1zZwRg9Icn6AceUSy444Tbg1sC-hSnPT09e0qjxjMz3DMOWSanKM1xE3wHSW65XE_k1au5LWT4WD8VA01WpUQh006sqggVFJv25B9ggcNgSCNLxBDrD2cD8gjdWFHVLw1vwrc7-Ss3KUmcMCmsAnLDZ6QqlUydrVmg_eBAS3ojeBWJiwKATlhNuJOuS6Dogi-trmXxTwl_-7IiMXK_UEV-BgKX2QV9ZdF1WlYyKmnqMghr1TLE7YTMcJL-T_H3arfIE9IIt5Mc7BYfQ54PzmQS1S6xvmCv7f0Zjb4kHaKArsHkJf-MGj0ujQ";
