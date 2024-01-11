
const expect = require("chai").expect
const tencentcloud = require("../../tencentcloud-sdk-nodejs")
const client = new tencentcloud.tdid.v20210519.Client({
  credential: {
    secretId: process.env.secretId,
    secretKey: process.env.secretKey,
  },
  region: "ap-shanghai",
  profile: {
    signMethod: "TC3-HMAC-SHA256",
    httpProfile: {
      reqMethod: "POST",
      reqTimeout: 30,
      endpoint: "cvm.ap-shanghai.tencentcloudapi.com",
    },
  },
})
describe("tdid.v20210519.test.js", function () {

it("tdid.v20210519.VerifyCredentials", async function () {
    try {
       const data = await client.VerifyCredentials({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.CreateTDidByHost", async function () {
    try {
       const data = await client.CreateTDidByHost({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.CreateTDidByPubKey", async function () {
    try {
       const data = await client.CreateTDidByPubKey({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.GetTDidDocument", async function () {
    try {
       const data = await client.GetTDidDocument({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.UpdateCredentialState", async function () {
    try {
       const data = await client.UpdateCredentialState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.DeactivateTDid", async function () {
    try {
       const data = await client.DeactivateTDid({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.GetCredentialState", async function () {
    try {
       const data = await client.GetCredentialState({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.IssueCredential", async function () {
    try {
       const data = await client.IssueCredential({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

it("tdid.v20210519.CheckNewPurchase", async function () {
    try {
       const data = await client.CheckNewPurchase({})
       expect(data).to.be.ok
    } catch(error) {
      expect(error.requestId).to.be.ok
      expect(error.code).to.be.ok
    }
})

})
